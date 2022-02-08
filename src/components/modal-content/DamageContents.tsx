import { FormikValues, useFormikContext } from 'formik';
import React, { FC } from 'react';
import { SelectComponent } from '@components/common/form-controls/SelectComponent';
import { setDamagePotential } from '@/constants/formsElements';
import { deleteInitialValues } from '@/utils/deleteInitialValues';

const title = [{ name: 'Confidentiality' }, { name: 'Integrity' }, { name: 'Availability' }, { name: 'Authenticity' }];

const formInputs = deleteInitialValues(setDamagePotential);

export const DamageContent: FC = () => {
  const { values, setFieldValue } = useFormikContext<FormikValues>();
  return (
    <div className="damage-content">
      {title.map(({ name }) => (
        <React.Fragment key={name}>
          <span className="damage-title">{name}</span>
          <div className="damage-item">
            {Object.keys(formInputs).map((input) => (
              <SelectComponent
                key={input}
                onChange={setFieldValue}
                {...formInputs[input]}
                value={values[name][input]}
                name={`${name}.${input}`}
              />
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
