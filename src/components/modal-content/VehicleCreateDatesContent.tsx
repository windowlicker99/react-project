import React, { FC } from 'react';
import { FormikValues, useFormikContext } from 'formik';
import { DatePickerInfo } from '@components/common/form-controls/DatePickerInfo';
import { deleteInitialValues } from '@utils/deleteInitialValues';
import { vehicleCreationDates } from '@constants/formsElements';
import { IDateField } from '@/interfaces/interfaces';

export const VehicleCreateDatesContent: FC = () => {
  const { values, errors, touched, setFieldValue } = useFormikContext<FormikValues>();
  const fields: IDateField[] = Object.values(deleteInitialValues(vehicleCreationDates));

  return (
    <div className="vehicle-create-dates">
      {fields.map(({ minDate, ...field }) => (
        <div className="controller-info-item" key={field.name}>
          <DatePickerInfo
            {...field}
            minDate={values[minDate]}
            error={touched[field.name] && (errors[field.name] as string)}
            datePickerLabel={field.formLabel}
            readOnly={minDate && !values[minDate]}
            value={values[field.name]}
            onChange={setFieldValue}
          />
        </div>
      ))}
    </div>
  );
};
