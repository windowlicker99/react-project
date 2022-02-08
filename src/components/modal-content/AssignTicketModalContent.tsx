import React, { ChangeEventHandler, FC } from 'react';
import { FormikValues } from 'formik';
import { Textarea } from '@components/common/form-controls/Textarea';
import { SelectComponent } from '@components/common/form-controls/SelectComponent';
import { IOption } from '@interfaces/interfaces';

interface IAssignTicketModalContent {
  values: FormikValues;
  options: IOption[];
  onChange: ChangeEventHandler;
  onSelectChange: (name: string, value: IOption) => void;
}

export const AssignTicketModalContent: FC<IAssignTicketModalContent> = ({
  values,
  options,
  onChange,
  onSelectChange,
}) => (
  <div className="modal-info">
    <SelectComponent
      name="user"
      value={values.user}
      options={options}
      label="Assign to"
      placeholder=""
      onChange={onSelectChange}
    />
    <Textarea placeholder="Add a message (optional)" name="message" value={values.message} onChange={onChange} />
  </div>
);
