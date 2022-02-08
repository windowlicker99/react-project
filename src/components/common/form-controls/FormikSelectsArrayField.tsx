import React, { FC, useEffect, useState } from 'react';
import { FieldArray, FieldArrayRenderProps, FormikValues, getIn, useFormikContext } from 'formik';
import { IField, IOption } from '@interfaces/interfaces';
import { TSetFieldValue } from '@interfaces/types';
import { SelectComponent } from './SelectComponent';
import { Btn } from './Btn';

interface ISwitchProps {
  field: IField;
  selects: IField[];
  asyncOptions: IOption[];
  handleSelectChange: TSetFieldValue;
  btnText: string;
}

export const FormikSelectsArrayField: FC<ISwitchProps> = ({
  field,
  selects: [selectWithAsyncOptions, selectWithRegularOptions],
  asyncOptions,
  handleSelectChange,
  btnText,
}) => {
  const { values, errors, touched } = useFormikContext<FormikValues>();
  const [availableOptions, setAvailableOptions] = useState<IOption[]>([]);

  const selectFields = [{ ...selectWithAsyncOptions, options: availableOptions }, selectWithRegularOptions];

  useEffect(() => {
    setAvailableOptions(asyncOptions);
  }, [asyncOptions]);

  useEffect(() => {
    const newAvailableECUsOptions = asyncOptions.map((option: IOption) => {
      const selectedOption =
        values[field.name] &&
        values[field.name].find((value: FormikValues) => value[selectWithAsyncOptions.name]?.value === option.value);
      return { ...option, isDisabled: Boolean(selectedOption) };
    });
    setAvailableOptions(newAvailableECUsOptions);
  }, [values[field.name]]);

  return (
    <FieldArray name={field.name}>
      {({ remove, push }: FieldArrayRenderProps) => (
        <div key={field.name}>
          {values[field.name]?.length > 0 &&
            values[field.name].map((value: IOption, index: number) => {
              const arrayFieldName = `${field.name}.${index}`;
              return (
                <div className="grid-box-columns-btn" key={arrayFieldName}>
                  {selectFields.map((select) => {
                    const fieldName = `${arrayFieldName}.${select.name}`;
                    return (
                      <SelectComponent
                        key={fieldName}
                        {...select}
                        value={values[field.name][index][select.name]}
                        name={fieldName}
                        onChange={handleSelectChange}
                        error={getIn(touched, `${fieldName}`) && getIn(errors, `${fieldName}.value`)}
                      />
                    );
                  })}
                  {Boolean(index) && (
                    <Btn btnStatus="btn-xs-danger" btnIcon="icon-delete" onClick={() => remove(index)} />
                  )}
                </div>
              );
            })}
          <div>
            <Btn
              btnStatus="btn-lg-outline upload"
              btnIcon=""
              btnText={btnText}
              onClick={() => push(field.defaultValue)}
            />
          </div>
        </div>
      )}
    </FieldArray>
  );
};
