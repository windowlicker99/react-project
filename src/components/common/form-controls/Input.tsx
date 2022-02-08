import React, { ChangeEventHandler, FocusEventHandler, FC } from 'react';
import { FieldInputProps } from 'formik';
import classNames from 'classnames';
import { ValidationErrorMessage } from './ValidationErrorMessage';

interface IInputProps {
  label?: string;
  className?: string;
  name: string;
  field?: FieldInputProps<string>;
  value?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler;
  onBlur?: FocusEventHandler;
  disabled?: boolean;
  isSelected?: boolean;
  error?: string;
  maxLength?: number;
}

export const Input: FC<IInputProps> = ({
  field = {},
  name,
  label,
  className = 'form-control',
  placeholder,
  disabled = false,
  isSelected = false,
  error = '',
  ...props
}) => (
  <div className={classNames('form-group', { error: Boolean(error) })}>
    <label htmlFor={name} className="form-label">
      {label}
    </label>
    <input
      className={classNames(className, { selected: isSelected })}
      name={name}
      {...props}
      {...field}
      placeholder={placeholder}
      disabled={disabled}
    />
    <ValidationErrorMessage error={error} />
  </div>
);
