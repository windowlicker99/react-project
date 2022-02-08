// markup only
import React, { FC } from 'react';
import { FormInputSwitch } from '../common/form-controls/FormInputSwitch';
import { Input } from '../common/form-controls/Input';
import { PropertiesCard } from '../common/PropertiesCard';

export const FunctionDetailsModalContent: FC = () => (
  <div className="function-details">
    <div className="modal-box">
      <Input name="test" label="label" placeholder="placeholder" />
      <Input name="test" label="label" placeholder="placeholder" />
    </div>
    <PropertiesCard />
    <div className="modal-box">
      <FormInputSwitch />
    </div>
  </div>
);
