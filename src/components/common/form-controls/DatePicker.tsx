import { getMonth, getYear } from 'date-fns';
import classNames from 'classnames';
import React, { FC } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { months } from '@constants/date';
import { rangeOfYears } from '@utils/formatDate';
import { convertListToOptions } from '@utils/converters';
import { IOption } from '@interfaces/interfaces';
import { getOptionIndex } from '@utils/getOptionIndex';
import { SelectComponent } from './SelectComponent';
import { ValidationErrorMessage } from './ValidationErrorMessage';

interface DatePickerProps {
  formLabel?: string;
  readOnly?: boolean;
  name?: string;
  value?: Date;
  error?: string;
  minDate?: string;
  onChange?: (name: string, value: Date) => void;
}

export const DatePickerComponent: FC<DatePickerProps> = ({
  formLabel = '',
  readOnly = false,
  name,
  value = null,
  error = '',
  minDate,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = () => {},
}) => {
  const yearsOptions = convertListToOptions(rangeOfYears(1900, 2100));
  const monthOptions = convertListToOptions(months);
  return (
    <div className={classNames('form-group', { error: Boolean(error) })}>
      <label htmlFor="exampleFormControlInput1" className="form-label">
        {formLabel}
      </label>
      <DatePicker
        placeholderText="Not Selected"
        autoComplete="off"
        readOnly={readOnly}
        dateFormat="dd/MM/yyyy"
        selected={value}
        name={name}
        minDate={minDate && new Date(minDate)}
        onChange={(date: Date) => onChange(name, date)}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="datepicker-control">
            <button
              className="datepicker-btn "
              type="button"
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
            >
              <span className="icon-arrow-border-left" />
            </button>
            <SelectComponent
              defaultOption={getOptionIndex(yearsOptions, getYear(date))}
              options={yearsOptions}
              onChange={(_, { value }: IOption) => changeYear(Number(value))}
            />
            <SelectComponent
              options={monthOptions}
              defaultOption={getMonth(date)}
              onChange={(_, { value }: IOption) => changeMonth(months.indexOf(value))}
            />

            <button className="datepicker-btn" type="button" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              <span className="icon-arrow-border-right" />
            </button>
          </div>
        )}
      />
      <ValidationErrorMessage error={error} />
    </div>
  );
};
