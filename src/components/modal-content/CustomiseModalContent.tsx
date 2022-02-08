import React, { ChangeEventHandler, FC, FormEventHandler } from 'react';
import { FormikValues } from 'formik';
import { Checkbox } from '@components/common/form-controls/Checkbox';

interface IColumnField {
  label: string;
  name: string;
}

interface ICustomiseModalContent {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  values: FormikValues;
  columns: IColumnField[];
}

export const CustomiseModalContent: FC<ICustomiseModalContent> = ({ values, columns, handleChange, handleSubmit }) => (
  <div className="modal-info">
    <form onSubmit={handleSubmit}>
      <ul className="customise-list">
        {columns.map(({ label, name }) => (
          <li className="customise-item" key={name}>
            <button type="button" className="customise-move" />
            <Checkbox name={name} checked={values[name]} onChange={handleChange} label={label} />
          </li>
        ))}
      </ul>
    </form>
  </div>
);
