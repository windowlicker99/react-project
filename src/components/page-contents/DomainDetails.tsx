import React, { useState, FC } from 'react';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { ModalAside } from '@components/modules/ModalAside';
import { DomainDetailsContent } from '@components/modal-content/DomainDetailsContent';
import { ModalFooter } from '@components/modal-content/modal-aside/ModalFooter';
import { ModalHeader } from '@components/modal-content/modal-aside/ModalHeader';
import { selectUser } from '@store/selectors/auth';
import { getFieldsValues } from '@utils/getFieldsValues';
import { domainValidationSchema } from '@utils/validations';
import { addNewDomain } from '@utils/addNewDomain';
import { domainCreationElements } from '@constants/formsElements';
import { IOption, IVehicle } from '@interfaces/interfaces';
import { EElementCreationTabs } from '@/interfaces/enums';
import { DomainChooseContent } from '../modal-content/DomainChooseCollection';
import { elementDetailsTabs } from '@/constants/tabsLists';
import { ResultContent } from '../modal-content/ResultContent';
import { backgroundColors } from '@/constants/color';

interface IDomainDetails {
  vehicle: IVehicle;
  isOpenDomainModal: boolean;
  onCloseDomainModalClick: () => void;
}

export const DomainDetails: FC<IDomainDetails> = ({ vehicle, isOpenDomainModal, onCloseDomainModalClick }) => {
  const initialValues = getFieldsValues(Object.values(domainCreationElements));
  const [successfullyAdded, setSuccessfullyAdded] = useState<string>('');
  const [detailsForm, setDomainDetailsForm] = useState<string>(EElementCreationTabs.create);

  const user = useSelector(selectUser);

  const formik = useFormik({
    initialValues,
    validationSchema: domainValidationSchema,
    onSubmit: async ({ name, domainUsage, connectivity, color, communication: selectedCommunication }) => {
      try {
        const communication: string[] = selectedCommunication.map(({ label }: IOption) => label);
        const onlineConnectivity = connectivity ? 'Online' : 'Offline';
        await addNewDomain({
          name,
          domainUsage,
          onlineConnectivity,
          communication,
          color,
          background: backgroundColors[color as keyof typeof backgroundColors],
          authorId: user.id,
          vehicleId: vehicle.id,
        });
        setSuccessfullyAdded(
          `${name} was successfully added to ${vehicle.brand?.name} | ${vehicle.model} | ${vehicle.platform} architecture scheme!`
        );
      } catch (error) {
        console.log(error);
        onCloseDomainModalClick();
        setSuccessfullyAdded('');
      }
    },
  });

  const handleSelectChange = (name: string, value: IOption) => formik.setFieldValue(name, value);

  const onApplyModal = () => {
    formik.validateForm();
    formik.submitForm();
  };

  const onCloseModal = () => {
    formik.resetForm();
    onCloseDomainModalClick();
  };

  const onConfirmClick = () => {
    setSuccessfullyAdded('');
    onCloseModal();
  };

  return successfullyAdded ? (
    <ModalAside isOpen={isOpenDomainModal}>
      <ResultContent title="Success" content={successfullyAdded} onConfirm={onConfirmClick} />
    </ModalAside>
  ) : (
    <ModalAside
      isOpen={isOpenDomainModal}
      header={
        <ModalHeader
          title="Domain Details"
          activeTab={detailsForm}
          tabsList={elementDetailsTabs}
          onClose={onCloseModal}
          onChooseTabClick={setDomainDetailsForm}
        />
      }
      footer={
        <ModalFooter
          applyBtn="Create"
          onApply={onApplyModal}
          showDuplicateSwitch={detailsForm === EElementCreationTabs.choose}
        />
      }
    >
      {detailsForm === EElementCreationTabs.create ? (
        <DomainDetailsContent {...formik} handleSelectChange={handleSelectChange} />
      ) : (
        <DomainChooseContent />
      )}
    </ModalAside>
  );
};
