import { FieldProps } from 'formik';
import React, { FC } from 'react';

interface IFormikRadiobuttonProps {
  label: string;
}

export const FormikRadiobutton: FC<IFormikRadiobuttonProps & Partial<FieldProps>> = ({
  label,
  field: { value, ...field },
}) => (
  <div className="radio-button">
    <label className="radio-label">
      <input type="radio" name="radio" className="radio-input" value={label} checked={value === label} {...field} />
      <span className="radio-mark" />

      <span className="radio-title">{label}</span>
    </label>
  </div>
);
