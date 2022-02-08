import React, { ChangeEventHandler, FC } from 'react';
import { SwitchInfo } from './form-controls/SwitchInfo';

interface ICardSwitch {
  label: string;
  value: boolean;
  onChange: ChangeEventHandler;
  name: string;
  showOn: boolean;
}
export const CardSwitch: FC<ICardSwitch> = ({ showOn, children, ...switchField }) => (
  <div className="card-dropdown open">
    <div className="card-dropdown-header">
      <SwitchInfo {...switchField} />
    </div>
    {showOn === switchField.value && (
      <div className="card-dropdown-content">
        <div className="grid-box-columns">{children}</div>
      </div>
    )}
  </div>
);
