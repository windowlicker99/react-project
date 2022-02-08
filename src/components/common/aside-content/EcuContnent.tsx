import React, { FC, useEffect, useState } from 'react';
import { Property } from '@components/common/Property';
import { RiskLevel } from '@components/common/RiskLevel';
import { Btn } from '@components/common/form-controls/Btn';
import { AsideHeading } from '@components/common/aside-content/AsideHeading';
import { ECUProperties } from '@constants/AsideProperties';
import { convertECUToProperties } from '@utils/converters';
import { BtnDetails } from '@components/common/form-controls/BtnDetails';
import { CLIENT_PATHS } from '@constants/paths';
import { IAuthor, IECU, IPropertiesData } from '@interfaces/interfaces';
import { EAside } from '@/interfaces/enums';

interface IEcuContentProps {
  ECU: Partial<IECU>;
  onAssign: () => void;
  onOpenInitiateView: () => void;
  type: EAside.ecu | EAside.subEcu | EAside.ECUasGateway;
}

const data = [
  { name: 'Threats and controls', path: '' },
  { name: 'Functions', path: '' },
  { name: 'Security Development', path: CLIENT_PATHS.security },
];

export const EcuContent: FC<IEcuContentProps> = ({ ECU, type, onAssign, onOpenInitiateView }) => {
  const [assignee, setAssignee] = useState<IAuthor>(null);
  const [ECUData, setECUData] = useState<IPropertiesData>(null);

  useEffect(() => {
    if (ECU) {
      setECUData(convertECUToProperties(ECU));
    }
    if (ECU?.ticket) {
      setAssignee(ECU.ticket.user);
    }
  }, [ECU]);

  return (
    <>
      <div className="aside-item">
        <div className="property-column">
          {ECUProperties[type].map(({ name, value, accessor }) => {
            const propertyValue = (ECUData && ECUData[accessor]) || value;
            return propertyValue && <Property value={propertyValue} name={name} key={name} />;
          })}
        </div>
      </div>
      <div className="aside-item">
        <AsideHeading assignee={assignee} onAssign={onAssign} />
        <RiskLevel ECU={ECUData} />
        <div className="details-graph">
          <Btn
            onClick={onOpenInitiateView}
            btnStatus="btn-lg-primary full"
            btnText={ECUData?.riskLevel ? 'Update Risk Assessment' : 'Initiate Risk Assessment'}
          />
        </div>
        <div className="details-more">
          <div className="details-item">
            <span />
          </div>
          <div className="details-item" />
        </div>
      </div>
      {data.map((btn) => (
        <BtnDetails BtnDetailsText={btn.name} path={btn.path} key={btn.name} />
      ))}
    </>
  );
};
