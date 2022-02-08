import React, { FC, useState } from 'react';
import { FieldProps } from 'formik';
import { Input } from './Input';
import { SwitchFormik } from './SwitchFormik';

interface IFormikInputSwitch {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const FormikInputSwitch: FC<IFormikInputSwitch & FieldProps> = ({
  field,
  label = '',
  placeholder = 'placeholder',
  disabled = false,
}) => {
  const [isSelected, setIsSelected] = useState(true);
  return (
    <div className="form-input-switch">
      <Input name="test" label={label} placeholder={placeholder} disabled={disabled} isSelected={isSelected} />
      <SwitchFormik field={field} setIsSelected={setIsSelected} />
    </div>
  );
};
