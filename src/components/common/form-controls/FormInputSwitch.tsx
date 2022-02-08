import React, { ChangeEventHandler, FC } from 'react';
import { Input } from './Input';
import { Switch } from './Switch';

interface IFormInputSwitch {
  name?: string;
  label?: string;
  placeholder?: string;
  value?: boolean;
  onChange?: ChangeEventHandler;
}

export const FormInputSwitch: FC<IFormInputSwitch> = ({
  value,
  name = '',
  label = '',
  placeholder = 'placeholder',
  onChange,
}) => (
  <div className="form-input-switch">
    <Input name="onlineConnectivity" label={label} placeholder={placeholder} disabled isSelected={value} />
    <Switch name={name} onChange={onChange} checked={value} />
  </div>
);
