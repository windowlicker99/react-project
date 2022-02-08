import React, { FC } from 'react';
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { Input } from '@components/common/form-controls/Input';
import { loginFormElements } from '@constants/formsElements';
import { login } from '@store/slices/authSlice';
import { ILoginData } from '@interfaces/interfaces';
import { selectUser } from '@store/selectors/auth';
import { CLIENT_PATHS } from '@constants/paths';
import { getFieldsValues } from '@utils/getFieldsValues';
import { loginValidationSchema } from '@utils/validations';

export const LoginForm: FC = () => {
  const dispatch = useDispatch();
  const initialValues = getFieldsValues(loginFormElements.fields);
  const user = useSelector(selectUser);

  const onSubmit = (values: ILoginData) => {
    dispatch(login(values));
  };

  return user ? (
    <Redirect to={CLIENT_PATHS.main} />
  ) : (
    <div className="login-content">
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={loginValidationSchema}>
        {({ isSubmitting, errors, touched, dirty, isValid, handleSubmit }) => (
          <Form className="login-form">
            <span className="login-title">{loginFormElements.title}</span>
            {loginFormElements.fields.map((field) => (
              <div key={field.name} className="form-wrap">
                <Field
                  label={field.label}
                  className="form-control"
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  maxLength={field.maxLength}
                  component={Input}
                  autoComplete="on"
                  error={touched[field.name] && errors[field.name]}
                  onKeyDown={(e: KeyboardEvent) => {
                    if (field.name === 'password' && e.key === 'Enter') {
                      handleSubmit();
                    }
                  }}
                />
              </div>
            ))}
            <button type="submit" className="btn btn-lg-primary mb-30" disabled={!dirty || !isValid || isSubmitting}>
              <span className="btn-icon " />
              <span className="btn-text">{loginFormElements.button.text}</span>
            </button>
            <div className="d-flex justify-content-end">
              <a href="#" className="link">
                <span className="nill mr-7" />
                {loginFormElements.forgotPasswordText}
              </a>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
