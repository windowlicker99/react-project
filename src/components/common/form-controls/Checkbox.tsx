import React, { ChangeEventHandler, FC } from 'react';

interface ICheckboxProps {
  name: string;
  checked?: boolean;
  label?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  id?: string;
}

export const Checkbox: FC<ICheckboxProps> = ({ name, checked = false, label = '', onChange, id }) => (
  <div className="checkbox">
    <label className="checkbox-label" htmlFor={id || name}>
      <input
        name={name}
        className="checkbox-input"
        type="checkbox"
        checked={checked}
        id={id || name}
        onChange={onChange}
      />
      <span className="checkbox-mark" />
      <span className="checkbox-title">{label}</span>
    </label>
  </div>
);
