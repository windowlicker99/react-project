import React, { FC } from 'react';
import { useFormik } from 'formik';
import { SwitchInfo } from '@components/common/form-controls/SwitchInfo';
import { ModalCenter } from '@components/modules/ModalCenter';
import { feedFormElements } from '@constants/formsElements';
import { getFieldsValues } from '@utils/getFieldsValues';
import { deleteInitialValues } from '@/utils/deleteInitialValues';

interface IFeedsQuestionnaireProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FeedsQuestionnaire: FC<IFeedsQuestionnaireProps> = ({ isOpen, onClose }) => {
  const initialValues = getFieldsValues(Object.values(feedFormElements));
  const fields = deleteInitialValues(feedFormElements);

  const onSubmit = () => {
    console.log('submit');
  };
  const formik = useFormik({ initialValues, onSubmit });

  const onModalClose = () => {
    onClose();
    formik.resetForm();
  };
  return (
    <ModalCenter title="Questionnaire" isOpen={isOpen} onApply={onModalClose} onClose={onModalClose}>
      <div className="modal-info">
        {Object.values(fields).map((field) => (
          <SwitchInfo value={formik.values[field.name]} {...field} onChange={formik.handleChange} key={field.name} />
        ))}
      </div>
    </ModalCenter>
  );
};
