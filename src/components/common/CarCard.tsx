import React, { FC } from 'react';
import { EPhase } from '@interfaces/enums';

interface ICarCardProps {
  name: string;
  logo: string;
  photo: string;
  model: string;
  platform: string;
  currentPhase: EPhase;
}

export const CarCard: FC<ICarCardProps> = ({ logo, photo, model, name, currentPhase, platform }) => (
  <div className="car-card">
    <div className="car-info-img">
      <img alt="car-img" className="car-img" src={photo} />
      <img className="car-logo" alt="" src={logo} />
    </div>
    <div className="car-info">
      <span className="car-name">{name}</span>
      <div className="car-info-item">
        <span className="car-property">Model: </span>
        <span className="car-value">{model}</span>
      </div>
      <div className="car-info-item">
        <span className="car-property">Platform: </span>
        <span className="car-value">{platform}</span>
      </div>
      <div className="car-info-item">
        <span className="car-property">Сurrent Phase: </span>
        <span className="car-value">{currentPhase}</span>
      </div>
    </div>
  </div>
);
