import React, { FC } from 'react';
import { FieldProps } from 'formik';
import { SwitchFormik } from './SwitchFormik';

interface IFormikSwitchInfo {
  label?: string;
}

export const FormikSwitchInfo: FC<IFormikSwitchInfo & Partial<FieldProps>> = ({ label, field }) => (
  <div className="controller-info">
    <span className="controller-info-title">{label}</span>
    <SwitchFormik field={field} />
  </div>
);
