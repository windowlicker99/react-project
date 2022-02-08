import React, { FC } from 'react';
import { Cell } from 'react-table';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { Property } from '@components/common/Property';
import { Textarea } from '@components/common/form-controls/Textarea';
import { Btn } from '@components/common/form-controls/Btn';
import { getFieldsValues } from '@utils/getFieldsValues';
import { deleteInitialValues } from '@utils/deleteInitialValues';
import { subRequirementForm } from '@constants/formsElements';
import { IRequirement, ISubRequirementsValues } from '@interfaces/interfaces';

interface IRequirementDropdownProps {
  expander: Cell;
  showExpandedInfo: boolean;
  requirement: IRequirement;
}

export const RequirementDropdown: FC<IRequirementDropdownProps> = ({ expander, showExpandedInfo, requirement }) => {
  const initialValues: Partial<ISubRequirementsValues> = getFieldsValues(Object.values(subRequirementForm));
  const { approved, implemented, comment, supplierComment } = deleteInitialValues(subRequirementForm);

  const onSubmit = (values: ISubRequirementsValues, actions: FormikHelpers<ISubRequirementsValues>) => {
    console.log(values); // temp
    actions.resetForm();
  };

  return (
    <tr>
      <td colSpan={99}>
        <div className="table-dropdown-group">
          <div className="table-dropdown-content open">
            <div className="table-dropdown-heading">
              <div className="mr-10" {...expander.getCellProps()} key={requirement?.id}>
                {expander.render('Cell')}
              </div>
              <span className="table-dropdown-title">{requirement?.name}</span>
              <span className="header-subtitle table-dropdown-subtitle">{requirement.type}</span>
            </div>
            {showExpandedInfo && (
              <div className="table-dropdown-wrap">
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                  {({ values, handleChange, submitForm }) => (
                    <Form>
                      <div className="table-dropdown-body">
                        <Property
                          name="Concept Description:"
                          value={requirement.description}
                          style={{ whiteSpace: 'pre-line' }}
                        />
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
                          <Textarea
                            className="ml-15"
                            {...supplierComment}
                            value={values.supplierComment}
                            onChange={handleChange}
                          />
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
