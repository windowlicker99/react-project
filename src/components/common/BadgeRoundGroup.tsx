import React, { ChangeEventHandler, FC } from 'react';
import { BadgeRound } from './BadgeRound';

interface IBadgeRoundGroup {
  label?: string;
  name: string;
  values?: string[];
  value?: string;
  onChange: ChangeEventHandler;
}

export const BadgeRoundGroup: FC<IBadgeRoundGroup> = ({ label, name, value, values = [], onChange }) => (
  <div className="badge-round-group">
    <span className="badge-round-title">{label}</span>
    <div className="badge-round-content">
      {values.map((color) => (
        <BadgeRound key={color} status={value === color ? 'select' : ''} color={color}>
          <>
            <input
              className="badge-round-input"
              type="radio"
              id={`${name}-${color}`}
              checked={value === color}
              name={name}
              value={color}
              onChange={onChange}
            />
            <label className="badge-round-label" htmlFor={`${name}-${color}`} />
          </>
        </BadgeRound>
      ))}
    </div>
  </div>
);
