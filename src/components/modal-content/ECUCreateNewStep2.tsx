import React, { FC, useState, useEffect } from 'react';
import { Field, FormikValues, useFormikContext } from 'formik';
import { SelectComponent } from '@components/common/form-controls/SelectComponent';
import { FormikSelectsArrayField } from '@components/common/form-controls/FormikSelectsArrayField';
import { deleteInitialValues } from '@utils/deleteInitialValues';
import { convertsResponseDataToOptions } from '@utils/converters';
import { getECUs } from '@utils/getElements';
import { ECUCreation } from '@constants/formsElements';
import { IOption } from '@interfaces/interfaces';

interface IECUCreateNewStep2 {
  vehicleId: string;
  updateContent: boolean;
}

export const ECUCreateNewStep2: FC<IECUCreateNewStep2> = ({ vehicleId, updateContent }) => {
  const [ECUsOptions, setECUsOptions] = useState<IOption[]>([]);

  const { values, initialValues, setFieldValue } = useFormikContext<FormikValues>();

  const handleSelectChange = (name: string, value: IOption | IOption[]) => {
    setFieldValue(name, value);
  };

  const {
    haveDirectCommunication,
    directCommunication,
    updateProcess,
    managingOrUsing,
    storeConfidentialData,
    useCryptographicTechnologies,
    indirectCommunicationChannel,
    connectedECUs,
  } = deleteInitialValues(ECUCreation);

  const resetField = (name: string) => {
    setFieldValue(name, initialValues[name]);
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

  useEffect(() => {
    getECUsOptions();
  }, [vehicleId, updateContent]);

  useEffect(() => {
    if (!values[haveDirectCommunication.name]) {
      resetField(directCommunication.name);
    }
  }, [values[haveDirectCommunication.name]]);

  useEffect(() => {
    if (!values[indirectCommunicationChannel.name]) {
      resetField(connectedECUs.name);
    }
  }, [values[indirectCommunicationChannel.name]]);

  useEffect(() => {
    if (!values[updateProcess.name]) {
      resetField(managingOrUsing.name);
    }
  }, [values[updateProcess.name]]);

  return (
    <div className="ecu-details-content">
      <div className="card-dropdown">
        <div className="card-dropdown-item">
          <Field {...haveDirectCommunication} />
          {values[haveDirectCommunication.name] && (
            <SelectComponent
              {...directCommunication}
              value={values[directCommunication.name]}
              onChange={handleSelectChange}
            />
          )}
        </div>
        <div className="card-dropdown-item">
          <Field {...updateProcess} />
          {values[updateProcess.name] &&
            managingOrUsing.values.map((value) => (
              <Field key={value} name={managingOrUsing.name} label={value} component={managingOrUsing.component} />
            ))}
        </div>

        <Field {...storeConfidentialData} />
        <Field {...useCryptographicTechnologies} />
        <Field {...indirectCommunicationChannel} />
      </div>

      {values[indirectCommunicationChannel.name] && (
        <FormikSelectsArrayField
          field={connectedECUs}
          selects={Object.values(connectedECUs.subFields)}
          asyncOptions={ECUsOptions}
          handleSelectChange={handleSelectChange}
          btnText="Add ECU"
        />
      )}
    </div>
  );
};
