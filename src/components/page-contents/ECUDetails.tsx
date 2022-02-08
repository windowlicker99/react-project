import React, { useState, FC } from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { ModalAside } from '@components/modules/ModalAside';
import { ModalFooter } from '@components/modal-content/modal-aside/ModalFooter';
import { ModalHeader } from '@components/modal-content/modal-aside/ModalHeader';
import { ECUCreateNewStep1 } from '@components/modal-content/ECUCreateNewStep1';
import { ECUCreateNewStep2 } from '@components/modal-content/ECUCreateNewStep2';
import { ResultContent } from '@components/modal-content/ResultContent';
import { DomainChooseContent } from '@components/modal-content/DomainChooseCollection';
import { getFieldsValues } from '@utils/getFieldsValues';
import { addNewECU } from '@utils/addNewECU';
import { convertArrayToString, convertECUFormValuesToPostData } from '@utils/converters';
import { ECUCreation } from '@constants/formsElements';
import { elementDetailsTabs } from '@constants/tabsLists';
import { IECUFormValues, IOptionsList, IVehicle } from '@interfaces/interfaces';
import { EElementCreationTabs } from '@interfaces/enums';
import { ECUDetailsValidationScheme, ECUQuestionnaireValidationScheme } from '@utils/validations';

interface IECUDetails {
  vehicle: IVehicle;
  isOpen: boolean;
  onClose: () => void;
}

type TPages = 1 | 2;

export const ECUDetails: FC<IECUDetails> = ({ vehicle, isOpen, onClose }) => {
  const numberOfSteps = 2;
  const initialValues = {
    ...getFieldsValues(Object.values(ECUCreation)),
  };
  const [step, setStep] = useState<TPages>(1);
  const [successfullyAdded, setSuccessfullyAdded] = useState<string>('');
  const [detailsForm, setDomainDetailsForm] = useState<string>(EElementCreationTabs.create);

  const onPrevPageClick = () => setStep(1);
  const onNextPageClick = () => setStep(2);

  const onSubmit = async (values: IECUFormValues) => {
    try {
      const formData = convertECUFormValuesToPostData(values);
      const data = { ...formData, vehicleId: vehicle?.id };

      await addNewECU(data);
      const domainsOptions = values.domains.map(({ id }: IOptionsList) => ({ name: id?.label }));
      const domains = convertArrayToString(domainsOptions);

      setSuccessfullyAdded(
        `${data.name} was successfully added to ${domains} within ${vehicle.brand.name} | ${vehicle.model} | ${vehicle.platform} architecture scheme!`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const pages = {
    1: {
      component: <ECUCreateNewStep1 vehicleId={vehicle?.id} updateContent={isOpen} />,
      header: {
        title: 'ECU Details',
      },
      footer: {
        applyBtn: 'Next',
      },
      validationScheme: ECUDetailsValidationScheme,
      onSubmit: onNextPageClick,
    },
    2: {
      component: <ECUCreateNewStep2 vehicleId={vehicle?.id} updateContent={isOpen} />,
      header: {
        title: 'ECU Risk Level Questionnaire',
      },
      footer: {
        applyBtn: 'Complete Creation',
        onBack: onPrevPageClick,
      },
      validationScheme: ECUQuestionnaireValidationScheme,
      onSubmit,
    },
  };

  const onCloseModal = ({ resetForm }: Partial<FormikProps<IECUFormValues>>) => {
    onClose();
    setStep(1);
    resetForm();
  };

  const onConfirmClick = () => {
    setStep(1);
    setSuccessfullyAdded('');
    onClose();
  };

  return successfullyAdded ? (
    <ModalAside isOpen={isOpen}>
      <ResultContent title="Success" content={successfullyAdded} onConfirm={onConfirmClick} />
    </ModalAside>
  ) : (
    <Formik
      initialValues={initialValues}
      onSubmit={pages[step].onSubmit}
      validationSchema={pages[step].validationScheme}
    >
      {({ submitForm, isValid, setTouched, ...props }: FormikProps<IECUFormValues>) => (
        <ModalAside
          isOpen={isOpen}
          header={
            <ModalHeader
              {...pages[step].header}
              step={step}
              maxStep={numberOfSteps}
              activeTab={detailsForm}
              tabsList={elementDetailsTabs}
              onClose={() => onCloseModal(props)}
              onChooseTabClick={setDomainDetailsForm}
            />
          }
          footer={
            <ModalFooter
              onApply={() => {
                submitForm();
                if (isValid) {
                  setTouched({});
                }
              }}
              {...pages[step].footer}
              showDuplicateSwitch={detailsForm === EElementCreationTabs.choose}
            />
          }
        >
          <Form>{detailsForm === EElementCreationTabs.create ? pages[step].component : <DomainChooseContent />}</Form>
        </ModalAside>
      )}
    </Formik>
  );
};
