import React, { FC } from 'react';

interface IValidationErrorMessageProps {
  error: string;
}

export const ValidationErrorMessage: FC<IValidationErrorMessageProps> = ({ error }) => {
  if (!error) {
    return null;
  }
  return <span className="form-validation">{error}</span>;
};
