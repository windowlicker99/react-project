import React, { ChangeEventHandler, FC } from 'react';

interface ISwitchProps {
  label?: string;
  name?: string;
  onChange?: ChangeEventHandler;
  checked?: boolean;
}

export const Switch: FC<ISwitchProps> = ({ label, name, onChange, ...props }) => (
  <div className="switch">
    <input name={name} className="switch-input" type="checkbox" id={name} onChange={onChange} {...props} />
    <label className="switch-label" htmlFor={name}>
      <span className="switch-text">{label}</span>
      <span className="switch-trigger" />
    </label>
  </div>
);
