import React, { FC, useEffect, useState } from 'react';
import { Property } from '@components/common/Property';
import { Disabled } from '@components/common/Disabled';
import { domainProperties } from '@constants/AsideProperties';
import { RiskLevel } from '@components/common/RiskLevel';
import { AsideHeading } from '@components/common/aside-content/AsideHeading';
import { convertDomainToProperties } from '@utils/converters';
import { IDomain, IPropertiesData } from '@interfaces/interfaces';

interface IDomainContent {
  domain: Partial<IDomain>;
}

export const DomainContent: FC<IDomainContent> = ({ domain }) => {
  const [domainData, setDomainData] = useState<IPropertiesData>(null);

  useEffect(() => {
    if (domain) {
      setDomainData(convertDomainToProperties(domain));
    }
  }, [domain]);

  return (
    <>
      <div className="aside-item">
        <div className="property-column">
          {domainProperties.map(({ value, name, accessor }) => {
            const propertyValue = (domainData && domainData[accessor]) || value;
            return <Property value={propertyValue} name={name} key={name} />;
          })}
        </div>
      </div>

      <div className="aside-item">
        {domain?.riskLevel ? (
          <>
            <AsideHeading />
            <RiskLevel ECU={domain} />
          </>
        ) : (
          <Disabled>
            <AsideHeading />
            <RiskLevel ECU={domain} />
          </Disabled>
        )}

        <div className="details-more">
          <div className="details-item">
            <span />
          </div>
          <div className="details-item" />
        </div>
      </div>
    </>
  );
};
