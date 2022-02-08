import React, { FC, useEffect, useState } from 'react';
import { Field, FormikValues, getIn, useFormikContext } from 'formik';
import { CardSwitch } from '@components/common/CardDropdownSwitch';
import { Upload } from '@components/common/form-controls/Upload';
import { IField, IOption } from '@interfaces/interfaces';
import { gatewayInfo, vehicleCreationElements } from '@constants/formsElements';
import { deleteInitialValues } from '@utils/deleteInitialValues';
import { getBrands } from '@utils/getBrands';
import { convertResponseDataToOptions } from '@utils/converters';

export const VehicleCreateInfoContent: FC = () => {
  const { values, initialValues, errors, touched, handleChange, setFieldValue } = useFormikContext<FormikValues>();

  const [brands, setBrands] = useState<IOption[]>();

  const { photo, brand, model, platform, phase, regulation, haveGateway } =
    deleteInitialValues(vehicleCreationElements);
  const { name, safetyCriticalityLevel, operationSystem, firmwareVersion, connectivity } =
    deleteInitialValues(gatewayInfo);

  const basicInfoFields = [{ options: brands, ...brand }, model, platform, phase, regulation];
  const gatewayFields = [name, safetyCriticalityLevel, operationSystem, firmwareVersion, connectivity];

  const handleSelectChange = (name: string, value: IOption) => setFieldValue(name, value);

  const onHaveGatewayChange = () => gatewayFields.forEach(({ name }) => setFieldValue(name, initialValues[name]));

  const getBrandsOptions = async () => {
    const data = await getBrands();
    const options = convertResponseDataToOptions(data);
    setBrands(options);
  };

  useEffect(() => {
    getBrandsOptions();
  }, []);

  useEffect(() => {
    if (!values[haveGateway.name]) {
      onHaveGatewayChange();
    }
  }, [values[haveGateway.name]]);
  return (
    <div className="vehicle-create">
      <Upload name={photo.name} value={values[photo.name]} setFieldValue={setFieldValue} />
      <div className="grid-box-columns">
        {basicInfoFields.map(({ isSelect, ...field }: IField) => (
          <Field
            key={field.name}
            {...field}
            error={touched[field.name] && errors[field.name]}
            onChange={isSelect ? handleSelectChange : handleChange}
          />
        ))}
      </div>
      <CardSwitch showOn {...haveGateway} value={values[haveGateway.name]} onChange={handleChange}>
        {gatewayFields.map(({ isSelect, ...field }: IField) => {
          const name = `gateway.${field.name}`;
          return (
            <Field
              key={field.name}
              {...field}
              name={name}
              error={getIn(touched, name) && getIn(errors, name)}
              onChange={isSelect ? handleSelectChange : handleChange}
            />
          );
        })}
      </CardSwitch>
    </div>
  );
};
