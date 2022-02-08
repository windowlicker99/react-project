import React, { ChangeEventHandler, FC } from 'react';
import { FieldProps } from 'formik';
import { Switch } from './Switch';

interface ISwitchInfo {
  label?: string;
  value?: boolean;
  onChange?: ChangeEventHandler;
}

export const SwitchInfo: FC<ISwitchInfo & Partial<FieldProps>> = ({ label, value, ...field }) => (
  <div className="controller-info">
    <span className="controller-info-title">{label}</span>
    <Switch {...field} checked={value} />
  </div>
);
