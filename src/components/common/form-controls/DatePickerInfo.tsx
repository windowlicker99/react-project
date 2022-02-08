import React, { FC } from 'react';
import { DatePickerComponent } from './DatePicker';

interface IDatePickerInfo {
  label: string;
  datePickerLabel?: string;
  value: Date;
  name: string;
  error: string;
  readOnly: boolean;
  minDate?: string;
  onChange?: (name: string, value: Date) => void;
}

export const DatePickerInfo: FC<IDatePickerInfo> = ({ label, error, datePickerLabel, ...datePicker }) => (
  <div className="controller-info">
    <span className="controller-info-title">{label}</span>
    <DatePickerComponent formLabel={datePickerLabel} error={error} {...datePicker} />
  </div>
);
