import React, { FC, useState, useEffect } from 'react';
import { Field, FormikValues, useFormikContext } from 'formik';
import { SelectComponent } from '@components/common/form-controls/SelectComponent';
import { SelectInfo } from '@components/common/form-controls/SelectInfo';
import { FormikSelectsArrayField } from '@components/common/form-controls/FormikSelectsArrayField';
import { deleteInitialValues } from '@utils/deleteInitialValues';
import { getSuppliers } from '@utils/getSuppliers';
import { convertsResponseDataToOptions } from '@utils/converters';
import { getDomains, getECUs } from '@utils/getElements';
import { ECUCreation } from '@constants/formsElements';
import { IOption } from '@interfaces/interfaces';

interface IECUCreateNewStep1 {
  vehicleId: string;
  updateContent: boolean;
}

export const ECUCreateNewStep1: FC<IECUCreateNewStep1> = ({ vehicleId, updateContent }) => {
  const [supplierOptions, setSupplierOptions] = useState<IOption[]>([]);
  const [ECUsOptions, setECUsOptions] = useState<IOption[]>([]);
  const [hostedDomainsOptions, setHostedDomainsOptions] = useState<IOption[]>([]);

  const { values, initialValues, errors, touched, setFieldValue } = useFormikContext<FormikValues>();

  const handleSelectChange = (name: string, value: IOption) => setFieldValue(name, value);

  const {
    name,
    operationSystem,
    connectivity,
    firmwareVersion,
    supplier,
    isRegular,
    isGateway,
    isSwitch,
    hostVMorDocker,
    runVMorDocker,
    hostECU,
    domains,
  } = deleteInitialValues(ECUCreation);

  const baseECUInfoFields = [name, operationSystem, connectivity, firmwareVersion];

  const switches = [isRegular, isGateway, isSwitch];

  const switchesForIrregularECU = [hostVMorDocker, runVMorDocker];

  const getSuppliersOptions = async () => {
    const data = await getSuppliers();
    const options = convertsResponseDataToOptions(data);
    setSupplierOptions(options);
  };

  const getDomainsOptions = async () => {
    if (!vehicleId) {
      setHostedDomainsOptions([]);
      return;
    }
    const data = await getDomains(vehicleId);
    const options = convertsResponseDataToOptions(data);
    setHostedDomainsOptions(options);
  };

  const getECUsOptions = async () => {
    if (!vehicleId) {
      setECUsOptions([]);
      return;
    }
    const data = await getECUs(vehicleId);
    const options = convertsResponseDataToOptions(data);
    setECUsOptions(options);
  };

  const onIsECURegularChange = () =>
    switchesForIrregularECU.forEach(({ name }) => setFieldValue(name, initialValues[name]));

  useEffect(() => {
    getSuppliersOptions();
  }, []);

  useEffect(() => {
    getDomainsOptions();
    getECUsOptions();
  }, [vehicleId, updateContent]);

  useEffect(() => {
    if (values[isRegular.name]) {
      onIsECURegularChange();
    }
  }, [values[isRegular.name]]);

  return (
    <div className="ecu-details-content">
      <div className="grid-box-columns">
        {baseECUInfoFields.map(({ name, ...field }) => (
          <Field key={name} error={touched[name] && errors[name]} name={name} {...field} />
        ))}
        <div>
          <SelectComponent
            value={values[supplier.name]}
            options={supplierOptions}
            {...supplier}
            onChange={handleSelectChange}
          />
          <div style={{ color: 'red', fontSize: '14px' }}>{errors[supplier.name]}</div>
        </div>
      </div>
      <div className="card-dropdown">
        {switches.map(({ name, ...field }) => (
          <Field name={name} {...field} key={name} />
        ))}
        {!values[isRegular.name] && (
          <>
            {switchesForIrregularECU.map(({ name, ...field }) => (
              <Field name={name} {...field} key={name} />
            ))}
            <SelectInfo {...hostECU} value={values[hostECU.name]} options={ECUsOptions} onChange={handleSelectChange} />
          </>
        )}
      </div>
      <FormikSelectsArrayField
        field={domains}
        selects={Object.values(domains.subFields)}
        asyncOptions={hostedDomainsOptions}
        handleSelectChange={handleSelectChange}
        btnText="Add Hosted Domain"
      />
    </div>
  );
};
