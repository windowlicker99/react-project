import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { ModalCenter } from '@components/modules/ModalCenter';
import { AssignTicketModalContent } from '@components/modal-content/AssignTicketModalContent';
import { selectCurrentVehicle } from '@store/selectors/vehicle';
import { getUsers } from '@utils/getUsers';
import { convertUsersToOptions } from '@utils/converters';
import { getElement } from '@utils/getElement';
import { createTicket } from '@utils/createTicket';
import { ICurrentElement, IOption } from '@interfaces/interfaces';
import { TElement } from '@interfaces/types';
import { EAsideActualElement, ETicketsTypes } from '@interfaces/enums';

interface IAssignRA {
  element: ICurrentElement;
  isOpen: boolean;
  onClose: () => void;
}

export const AssignRA: FC<IAssignRA> = ({ element, isOpen, onClose }) => {
  const defaultOption = { label: 'Not Assigned', value: 'NaN' };
  const [currentElement, setCurrentElement] = useState<TElement>(null);
  const [usersOptions, setUsersOptions] = useState<IOption[]>([defaultOption]);

  const vehicleId = useSelector(selectCurrentVehicle);

  const getUsersOptions = async () => {
    const users = await getUsers();
    const options = convertUsersToOptions(users);
    setUsersOptions([defaultOption, ...options]);
  };

  const getCurrentElement = async () => {
    const newElement = await getElement(element);
    setCurrentElement(newElement);
  };

  useEffect(() => {
    if (element) {
      getCurrentElement();
    }
  }, [element]);

  useEffect(() => {
    getUsersOptions();
  }, []);

  const formik = useFormik({
    initialValues: { user: defaultOption, message: '' },
    onSubmit: async ({ user: { value: userId }, message }, { resetForm }) => {
      try {
        await createTicket({
          name: `Risk Assessment for ${currentElement?.name}`,
          type: ETicketsTypes.riskAssessment,
          elementName: currentElement.name,
          elementType: EAsideActualElement[element.type],
          elementId: element.id,
          userId,
          vehicleId,
          message,
        });
      } catch (error) {
        console.log(error);
      } finally {
        resetForm();
        onClose();
      }
    },
  });

  const handleSelectChange = (name: string, value: IOption) => formik.setFieldValue(name, value);

  const onApplyRAModal = () => {
    formik.submitForm();
  };

  const onCloseRAModal = () => {
    formik.resetForm();
    onClose();
  };

  return (
    <ModalCenter
      title="Assign Ticket"
      subtitle={`Risk Assessment for ${currentElement?.name}`}
      isOpen={isOpen}
      disabledApplyBtn={!formik.values.user || formik.values.user.value === defaultOption.value}
      onApply={onApplyRAModal}
      onClose={onCloseRAModal}
    >
      <AssignTicketModalContent
        values={formik.values}
        options={usersOptions}
        onChange={formik.handleChange}
        onSelectChange={handleSelectChange}
      />
    </ModalCenter>
  );
};
