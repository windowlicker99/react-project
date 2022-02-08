import React, { FC } from 'react';
import { FormikProps, FormikValues } from 'formik';
import { Input } from '@components/common/form-controls/Input';
import { BadgeRoundGroup } from '@components/common/BadgeRoundGroup';
import { SelectComponent } from '@components/common/form-controls/SelectComponent';
import { FormInputSwitch } from '@components/common/form-controls/FormInputSwitch';
import { IOption } from '@interfaces/interfaces';
import { domainCreationElements } from '@constants/formsElements';
import { deleteInitialValues } from '@utils/deleteInitialValues';

interface IDomainDetailsContent {
  handleSelectChange: (name: string, value: IOption) => void;
}

export const DomainDetailsContent: FC<IDomainDetailsContent & Partial<FormikProps<FormikValues>>> = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSelectChange,
}) => {
  const { name, usage, connectivity, communication, color } = deleteInitialValues(domainCreationElements);

  return (
    <div className="domains-aside-item">
      <div className="modal-box">
        <Input
          {...name}
          error={touched[name.name] && (errors[name.name] as string)}
          onChange={handleChange}
          value={values[name.name]}
          onBlur={handleBlur}
        />
        <Input
          {...usage}
          error={touched[usage.name] && (errors[usage.name] as string)}
          onChange={handleChange}
          value={values[usage.name]}
          onBlur={handleBlur}
        />
        <FormInputSwitch value={values[connectivity.name]} {...connectivity} onChange={handleChange} />
        <SelectComponent
          error={touched[communication.name] && (errors[communication.name] as string)}
          value={values[communication.name]}
          {...communication}
          onChange={handleSelectChange}
        />
      </div>
      <BadgeRoundGroup value={values[color.name]} {...color} onChange={handleChange} />
    </div>
  );
};
