import React, { FC } from 'react';
import { Input } from '@components/common/form-controls/Input';
import { domainCreationElements } from '@constants/formsElements';
import { SelectComponent } from '../form-controls/SelectComponent';
import { FormInputSwitch } from '../form-controls/FormInputSwitch';
import { BadgeRoundGroup } from '../BadgeRoundGroup';

export const EditDomainContent: FC = () => (
  <div className="grid-box-columns">
    <Input name="test" label="Domain Name" placeholder="Enter Domain Name" />
    <SelectComponent label="Domain Usage" placeholder="Communication" />
    <FormInputSwitch />
    <SelectComponent label="Domain Usage" placeholder="Communication" />
    <BadgeRoundGroup
      name="edit-domain-color"
      values={domainCreationElements.color.values}
      onChange={(e) => {
        console.log(e); // temp
      }}
    />
  </div>
);
