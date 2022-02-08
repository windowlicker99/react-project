import React, { FC } from 'react';
import { Btn } from '../common/form-controls/Btn';
import { FormInputSwitch } from '../common/form-controls/FormInputSwitch';
import { Input } from '../common/form-controls/Input';
import { SelectComponent } from '../common/form-controls/SelectComponent';
import { SelectInfo } from '../common/form-controls/SelectInfo';
import { SwitchInfo } from '../common/form-controls/SwitchInfo';
import { Upload } from '../common/form-controls/Upload';

export const ECUDetailsContent: FC = () => (
  <div className="ecu-details-content">
    <div className="grid-box-columns">
      <Input name="test" label="label" placeholder="placeholder" />
      <SelectComponent label="Domain Usage" placeholder="Communication" />
      <FormInputSwitch />
      <Input name="test" label="label" placeholder="placeholder" />
      <SelectComponent label="Domain Usage" placeholder="Communication" />
    </div>
    <div className="card-dropdown">
      <SwitchInfo label="Lorem ipsum" />
      <SwitchInfo label="Lorem ipsum" />
      <SwitchInfo label="Lorem ipsum" />
      <SelectInfo label="Lorem ipsum" />
    </div>
    <div className="grid-box-columns-btn">
      <SelectComponent label="Domain Usage" placeholder="Communication" />
      <SelectComponent label="Domain Usage" placeholder="Communication" />
      <Btn btnStatus="btn-xs-danger" btnIcon="icon-delete" />
    </div>
    <div className="grid-box-columns-btn">
      <SelectComponent label="Domain Usage" placeholder="Communication" />
      <SelectComponent label="Domain Usage" placeholder="Communication" />
      <Btn btnStatus="btn-xs-danger" btnIcon="icon-delete" />
    </div>
    <Upload />
    <Btn btnStatus="btn-lg-outline" btnIcon="" btnText="Add Data" />
  </div>
);
