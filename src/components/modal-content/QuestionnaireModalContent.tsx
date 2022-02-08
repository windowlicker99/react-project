import React, { FC } from 'react';
import { Switch } from '@components/common/form-controls/Switch';

export const QuestionnaireModalContent: FC = () => (
  <div className="modal-info">
    <ul className="questionnaire-list">
      <li className="questionnaire-item">
        <Switch label="Vulnerability may affect the vehicle cyber security level?" />
      </li>
      <li className="questionnaire-item">
        <Switch label="OTA Scheduled?" />
      </li>
      <li className="questionnaire-item">
        <Switch label="Recall scheduled?" />
      </li>
      <li className="questionnaire-item">
        <Switch label="Maintenance scheduled?" />
      </li>
    </ul>
  </div>
);
