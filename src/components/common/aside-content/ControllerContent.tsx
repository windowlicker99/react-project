import React, { FC } from 'react';
import { IGateway } from '@interfaces/interfaces';
import { Property } from '../Property';
import { controllerProperties } from '@/constants/AsideProperties';

interface IControllerContent {
  controller: Partial<IGateway>;
}

export const ControllerContent: FC<IControllerContent> = ({ controller }) => (
  <div className="aside-item">
    <div className="property-column">
      {controllerProperties.map(({ name, accessor, value }) => {
        const propertyValue = (controller && controller[accessor]) || value;
        return <Property value={propertyValue} name={name} key={name} />;
      })}
    </div>
  </div>
);
