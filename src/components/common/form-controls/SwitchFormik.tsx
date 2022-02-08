import React, { FC } from 'react';
import { FieldProps } from 'formik';

interface ISwitchProps {
  label?: string;
  setIsSelected?: (param: boolean) => void;
}

export const SwitchFormik: FC<ISwitchProps & Partial<FieldProps>> = ({
  field: { name, value, ...field },
  label,
  setIsSelected = () => null,
}) => {
  setIsSelected(value);
  return (
    <div className="switch">
      <input className="switch-input" type="checkbox" checked={value} id={name} {...field} />
      <label className="switch-label" htmlFor={name}>
        <span className="switch-text">{label}</span>
        <span className="switch-trigger" />
      </label>
    </div>
  );
};
