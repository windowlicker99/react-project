import React, { ChangeEventHandler, FC } from 'react';

interface IRadioButtonProps {
  label: string;
  value?: string;
  name?: string;
  onChange?: ChangeEventHandler;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const RadioButton: FC<IRadioButtonProps> = ({ label, value, name = 'radio', onChange = () => {} }) => (
  <div className="radio-button">
    <label className="radio-label">
      <input
        type="radio"
        className="radio-input"
        value={label}
        name={name}
        checked={value === label}
        onChange={onChange}
      />
      <span className="radio-mark" />
      <span className="radio-title">{label}</span>
    </label>
  </div>
);
