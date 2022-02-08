import React, { FC } from 'react';
import { RadioButton } from '../common/form-controls/RadioButton';
import { SelectComponent } from '../common/form-controls/SelectComponent';
import { SwitchInfo } from '../common/form-controls/SwitchInfo';

export const ECUQuestionnaireContent: FC = () => (
  <div className="ecu-questionnaire-content">
    <div className="card-dropdown">
      <div className="card-dropdown-item">
        <SwitchInfo label="Lorem lorem" />
        <SelectComponent label="Domain Usage" placeholder="Communication" />
      </div>
      <div className="card-dropdown-item">
        <SwitchInfo label="Lorem lorem" />
        <RadioButton label="Lorem lorem" />
        <RadioButton label="Lorem lorem" />
      </div>
      <SwitchInfo label="Lorem lorem" />
      <SwitchInfo label="Lorem lorem" />
      <SwitchInfo label="Lorem lorem" />
    </div>
  </div>
);
