import React, { FC } from 'react';
import { Cell } from 'react-table';
import { Field, Form, Formik, FormikHelpers, FormikValues } from 'formik';
import { Property } from '@components/common/Property';
import { Textarea } from '@components/common/form-controls/Textarea';
import { Btn } from '@components/common/form-controls/Btn';
import { getFieldsValues } from '@utils/getFieldsValues';
import { deleteInitialValues } from '@utils/deleteInitialValues';
import { securityConceptControlForm } from '@constants/formsElements';
import { IControl, ISecurityConceptControlValues } from '@interfaces/interfaces';

interface IControlDropdownProps {
  expander: Cell;
  showExpandedInfo: boolean;
  control: IControl;
}

export const ControlDropdown: FC<IControlDropdownProps> = ({ expander, showExpandedInfo, control }) => {
  const initialValues: Partial<ISecurityConceptControlValues> = getFieldsValues(
    Object.values(securityConceptControlForm)
  );
  const { approved, implemented, comment } = deleteInitialValues(securityConceptControlForm);

  const onSubmit = (values: ISecurityConceptControlValues, actions: FormikHelpers<FormikValues>) => {
    console.log(values); // temp
    actions.resetForm();
  };

  return (
    <tr>
      <td colSpan={99}>
        <div className="table-dropdown-group">
          <div className="table-dropdown-content open">
            <div className="table-dropdown-heading">
              <div className="mr-10" {...expander.getCellProps()} key={control?.id}>
                {expander.render('Cell')}
              </div>
              <span className="table-dropdown-title">{control?.name}</span>
            </div>
            {showExpandedInfo && (
              <div className="table-dropdown-wrap">
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                  {({ values, handleChange, submitForm }) => (
                    <Form>
                      <div className="table-dropdown-body">
                        <Property name="Control Description:" value={control.category} />
                        <Property name="Concept Description:" value="-" />
                        <div className="table-dropdown-thumb">
                          <div className="radio-button-group mr-15">
                            <div className="radio-button-item">
                              {approved.values.map((value) => (
                                <Field key={value} name={approved.name} label={value} component={approved.component} />
                              ))}
                            </div>
                            <div className="radio-button-item">
                              {implemented.values.map((value) => (
                                <Field
                                  key={value}
                                  name={implemented.name}
                                  label={value}
                                  component={implemented.component}
                                />
                              ))}
                            </div>
                          </div>
                          <Textarea {...comment} value={values.comment} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="table-dropdown-footer">
                        <Btn btnStatus="btn-lg-primary" btnIcon="" btnText="Apply" onClick={submitForm} />
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            )}
          </div>
        </div>
      </td>
    </tr>
  );
};
