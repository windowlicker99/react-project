import React, { FC } from 'react';
import Select, { components, IndicatorProps, OptionTypeBase } from 'react-select';
import { FieldProps } from 'formik';
import classNames from 'classnames';
import { IOption } from '@interfaces/interfaces';
import { TSetFieldValue } from '@interfaces/types';
import { ValidationErrorMessage } from './ValidationErrorMessage';

export interface ISelectProps {
  label?: string;
  placeholder?: string;
  value?: IOption<string | number> | IOption<string | number>[];
  defaultOption?: number;
  options?: IOption<string | number>[];
  name?: string;
  isMulti?: boolean;
  error?: string;
  onChange?: TSetFieldValue;
}

const defaultOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const getCustomStyles = (isValid: boolean) => ({
  control: (styles: OptionTypeBase) => ({
    ...styles,
    border: `solid 1px ${isValid ? '#bec8e7' : '#f26563'}`,
    borderRadius: '6px',
    backgroundColor: isValid ? 'rgba(79, 152, 255, 0.15)' : 'rgba(242, 101, 99, 0.15)',
    minHeight: '42px',
    transition: ' 0.2s',
    fontSize: '12px',
    color: '#100c2a',
    boxShadow: 'none',
    '&:hover': {
      border: isValid ? 'solid 1px #4f98ff' : 'solid 1px #f26563',
    },
    '&:not(:disabled)': {
      border: isValid ? 'solid 1px #4f98ff' : 'solid 1px #f26563',
    },
  }),
  option: (styles: OptionTypeBase) => ({
    ...styles,
    padding: '15px',
    margin: '5px 10px',
    width: 'auto',
    borderRadius: '5px',
    fontSize: '14px',
  }),
  input: (styles: OptionTypeBase) => ({ ...styles }),
  placeholder: (styles: OptionTypeBase) => ({
    ...styles,
    color: isValid ? '#bec8e7' : '#f26563',
    fontSize: '12px',
  }),
  singleValue: (styles: OptionTypeBase) => ({ ...styles }),
  dropdownIndicator: (styles: OptionTypeBase) => ({
    ...styles,
  }),

  multiValue: (styles: OptionTypeBase) => ({
    ...styles,
    backgroundColor: '#fff',
  }),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  multiValueLabel: (styles: OptionTypeBase, { data }: any) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles: OptionTypeBase) => ({
    ...styles,
    color: '#606d95',
    ':hover': {
      backgroundColor: '#f26563',
      color: '#fff',
    },
  }),
  clearIndicator: (styles: OptionTypeBase) => ({
    ...styles,
    color: '#4f98ff',
  }),
});

const DropdownIndicator = (props: IndicatorProps<unknown, boolean>) => (
  <components.DropdownIndicator {...props}>
    <div className="form-arrow icon-arrow-border-down" />
  </components.DropdownIndicator>
);

export const SelectComponent: FC<ISelectProps> = ({
  label,
  placeholder,
  options = defaultOptions,
  name = '',
  error = '',
  isMulti = false,
  onChange = (): null => null,
  defaultOption = -1,
  ...props
}) => (
  <div className={classNames('form-group', { error: Boolean(error) })}>
    <label htmlFor="exampleFormControlInput1" className="form-label">
      {label}
    </label>
    <Select
      className="select-component"
      classNamePrefix="react-select"
      onChange={(value: IOption) => onChange(name, value)}
      name={name}
      options={options}
      styles={getCustomStyles(!error)}
      placeholder={placeholder}
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator,
      }}
      isMulti={isMulti}
      defaultValue={options[defaultOption]}
      {...props}
    />
    <ValidationErrorMessage error={error} />
  </div>
);

export const FormikSelectComponent: FC<ISelectProps & Partial<FieldProps>> = ({
  label,
  placeholder,
  options = defaultOptions,
  isMulti = false,
  onChange,
  field: { value, name },
  error = '',
}) => (
  <div className={classNames('form-group', { error: Boolean(error) })}>
    <label htmlFor="exampleFormControlInput1" className="form-label">
      {label}
    </label>
    <Select
      onChange={(value: IOption) => onChange(name, value)}
      name={name}
      options={options}
      styles={getCustomStyles(Boolean(!error))}
      placeholder={placeholder}
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator,
      }}
      isMulti={isMulti}
      value={value}
    />
    <ValidationErrorMessage error={error} />
  </div>
);
