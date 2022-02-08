import React, { FC } from 'react';
import { ISelectProps, SelectComponent } from './SelectComponent';

interface ISelectInfo {
  label?: string;
}

export const SelectInfo: FC<ISelectInfo & ISelectProps> = ({ label, ...selectProps }) => (
  <div className="controller-info">
    <span className="controller-info-title">{label}</span>
    <SelectComponent {...selectProps} />
  </div>
);
