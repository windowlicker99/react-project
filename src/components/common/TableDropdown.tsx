import React, { FC, useEffect, useState } from 'react';
import { EPhase, EPhaseStatus, EComponentStatuses } from '@interfaces/enums';

import { CircleChart } from './CircleChart';
import { CarCard } from './CarCard';
import { EcuRisk } from './EcuRisk';
import { Heading } from './Heading';
import { ImplementTimeline } from './ImplementTimeline';
import { ProgressbarPoints } from './ProgressbarPoints';
import { RiskGraphics } from './RiskGraphics';
import { TicketsPreview } from './TicketsPreview';

import { getCurrentVehicle } from '@/utils/getCurrentVehicle';
import { IVehicle } from '@/interfaces/interfaces';
import { getEcusForVehicle } from '@/utils/getEcusForVehicle';

interface ITableDropdownProps {
  id: string;
  name: string;
  logo: string;
  photo: string;
  model: string;
  percentage: number;
  currentPhase: EPhase;
}

const mockedPhases = [
  {
    title: EPhase.development,
    startDate: '09/10/2020',
    status: EPhaseStatus.active,
  },
  {
    title: EPhase.testing,
    startDate: '07/11/2021',
    status: EPhaseStatus.active,
  },
  {
    title: EPhase.compliancy,
    startDate: '02/01/2022',
  },
  {
    title: EPhase.production,
    startDate: '01/12/2023',
  },
];

export const TableDropdown: FC<ITableDropdownProps> = ({ name, logo, photo, model, percentage, id, currentPhase }) => {
  const [currentElement, setCurrentElement] = useState<IVehicle>(null);
  const [ecusForVehicle, setEcus] = useState(null);

  const getCurrentElement = async () => {
    const newElement = await getCurrentVehicle(id);

    setCurrentElement(newElement);
  };
  const getEcus = async () => {
    const newElement = await getEcusForVehicle(id);

    setEcus(newElement);
  };

  useEffect(() => {
    if (id) {
      getCurrentElement();
      getEcus();
    }
  }, [id]);

  return (
    <div className="table-dropdown">
      <div className="table-dropdown-inner">
        <div className="table-dropdown-row">
          <div className="table-box">
            <CarCard
              platform={currentElement?.platform}
              currentPhase={currentPhase}
              name={name}
              logo={logo}
              photo={photo}
              model={model}
            />
          </div>
          <div className="table-box">
            <TicketsPreview vehicleId={id} />
          </div>
        </div>
        <div className="table-dropdown-row">
          <div className="table-box">
            <Heading headingText="Controls Implementation Timeline" />
            <ImplementTimeline currentElement={currentElement} />
          </div>
        </div>
      </div>
      <div className="table-dropdown-inner">
        <div className="table-dropdown-row">
          <div className="table-box">
            <Heading headingText="Top High-Risk Components" />
            <RiskGraphics id={id} ecusForVehicle={ecusForVehicle} />
          </div>
        </div>
        <div className="table-dropdown-row">
          <div className="table-box">
            <Heading headingText="ECUs Risk Rating" />
            {currentElement?.riskLevel === 'noData' ? (
              <CircleChart percentage={percentage} status={EComponentStatuses.large} />
            ) : (
              <EcuRisk id={id} />
            )}
          </div>
          <div className="table-box">
            <Heading center headingText="Compliance Level" />
            <CircleChart percentage={percentage} status={EComponentStatuses.large} />
          </div>
        </div>
        <div className="table-dropdown-row">
          <div className="table-box">
            <Heading headingText="Phase" />
            <ProgressbarPoints progressList={mockedPhases} />
          </div>
        </div>
      </div>
    </div>
  );
};
