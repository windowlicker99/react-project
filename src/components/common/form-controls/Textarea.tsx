import React, { ChangeEventHandler, FC } from 'react';
import classNames from 'classnames';
import { ValidationErrorMessage } from './ValidationErrorMessage';

interface ITextareaProps {
  label?: string;
  name: string;
  placeholder?: string;
  onChange?: ChangeEventHandler;
  value: string;
  className?: string;
  error?: string;
}

export const Textarea: FC<ITextareaProps> = ({
  name,
  label,
  value,
  error,
  placeholder = 'Add a comment',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = () => {},
  className = '',
}) => (
  <div className={classNames('form-group', { error: Boolean(error) })}>
    <label className="form-label" htmlFor="textarea">
      {label}
    </label>
    <textarea
      className={classNames('form-control textarea', className)}
      placeholder={placeholder}
      id="textarea"
      name={name}
      rows={10}
      onChange={onChange}
      value={value}
    />
    <ValidationErrorMessage error={error} />
  </div>
);
