import React, { useState, FC } from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { ModalAside } from '@components/modules/ModalAside';
import { ModalFooter } from '@components/modal-content/modal-aside/ModalFooter';
import { ModalHeader } from '@components/modal-content/modal-aside/ModalHeader';
import { ResultContent } from '@components/modal-content/ResultContent';
import { VehicleCreateInfoContent } from '@components/modal-content/VehicleCreateInfoContent';
import { VehicleCreateDatesContent } from '@components/modal-content/VehicleCreateDatesContent';
import { getFieldsValues } from '@utils/getFieldsValues';
import { gatewayInfo, vehicleCreationDates, vehicleCreationElements } from '@constants/formsElements';
import { createVehicle } from '@utils/createVehicle';
import { convertVehicleFormValuesToPostData } from '@utils/converters';

import { vehicleBasicInfoValidationScheme, vehicleMilestoneDatesValidationScheme } from '@utils/validations';
import { IGatewayFormValues, IVehicleFormValues } from '@/interfaces/interfaces';

interface ICreateVehicle {
  isOpen: boolean;
  onClose: () => void;
}

type TPages = 1 | 2;

export const CreateVehicle: FC<ICreateVehicle> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<TPages>(1);
  const initialValues = {
    ...getFieldsValues(Object.values(vehicleCreationElements)),
    gateway: getFieldsValues(Object.values(gatewayInfo)) as IGatewayFormValues,
    ...getFieldsValues(Object.values(vehicleCreationDates)),
  };

  const [successfullyAdded, setSuccessfullyAdded] = useState<string>('');

  const onSubmit = async (values: IVehicleFormValues) => {
    try {
      const vehicle = convertVehicleFormValuesToPostData(values);
      await createVehicle(vehicle);
      setSuccessfullyAdded(`${values.brand?.label} | ${values.model} | ${values.platform} was created successfully!`);
    } catch (error) {
      console.log(error);
    }
  };

  const onConfirmClick = () => {
    setSuccessfullyAdded('');
    setStep(1);
    onClose();
  };

  const onPrevPageClick = () => setStep(1);
  const onNextPageClick = () => setStep(2);

  const onCloseModal = () => {
    setStep(1);
    onClose();
  };

  const pages = {
    1: {
      component: <VehicleCreateInfoContent />,
      header: {
        title: 'Create Vehicle',
        subtitle: 'Basic Information',
      },
      footer: {
        applyBtn: 'Next',
      },
      validationScheme: vehicleBasicInfoValidationScheme,
      onSubmit: onNextPageClick,
    },
    2: {
      component: <VehicleCreateDatesContent />,
      header: {
        title: 'Create Vehicle',
        subtitle: 'Milestone Dates',
      },
      footer: {
        applyBtn: 'Complete Creation',
        onBack: onPrevPageClick,
      },
      validationScheme: vehicleMilestoneDatesValidationScheme,
      onSubmit,
    },
  };

  return successfullyAdded ? (
    <ModalAside isOpen={isOpen}>
      <ResultContent title="Success" content={successfullyAdded} onConfirm={onConfirmClick} />
    </ModalAside>
  ) : (
    <Formik
      initialValues={initialValues}
      validationSchema={pages[step].validationScheme}
      onSubmit={pages[step].onSubmit}
    >
      {({ submitForm, resetForm, isValid, setTouched }: FormikProps<Partial<IVehicleFormValues>>) => (
        <ModalAside
          isOpen={isOpen}
          header={
            <ModalHeader
              step={step}
              maxStep={2}
              {...pages[step].header}
              onClose={() => {
                resetForm();
                onCloseModal();
              }}
            />
          }
          footer={
            <ModalFooter
              {...pages[step].footer}
              onApply={() => {
                submitForm();
                if (isValid) {
                  setTouched({});
                }
              }}
            />
          }
        >
          <Form> {pages[step].component}</Form>
        </ModalAside>
      )}
    </Formik>
  );
};
