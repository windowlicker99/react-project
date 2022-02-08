import React, { FC, useState } from 'react';
import { BadgeGroup } from '@components/common/Badge-Group';
import { Btn } from '@components/common/form-controls/Btn';
import { PropertiesCard } from '@components/common/PropertiesCard';
import { IThreat } from '@/interfaces/interfaces';

const data = [
  {
    1: '1. Established trust boundaries and access controls;',
    2: '2. Apply least access principle to minimise risk;',
    3: '3. Access control and read/white procedures established for vehicle files, systems and data',
    4: '4. Duel control principles',
    5: '5. Authentication of devices and equipment',
  },
  {
    1: '1. For updates, applications should be reviewed and tested to ensure there is no adverse impact on vehicle and organisational security.',
    2: '2. Output Encoding',
    3: '3. Code modification prevention',
  },
  {
    1: '1. Ensure that no sensitive information is logged in the event of an error',
    2: '2. Examine the application for debug logging with the view to logging of sensitive data',
    3: '3. Examine the file structure. Are there any components, which should not be directly accessible, available to the user',
  },
  {
    1: '1. Authentication of data',
    2: '2. Verify that the size of received data matches expected values ',
    3: '3. Limit and monitor message content and protocols',
    4: '4. Employing rate limiting measures based on context',
    5: '5. Secure communications used for updates',
    6: '6. Implement cryptographic protection and signing of software updates',
  },
  {
    1: '1. Examine the application for debug logging with the view to logging of sensitive data',
    2: '2. Examine the file structure. Are there any components, which should not be directly accessible, available to the user',
    3: '3. Examine the application for dynamic SQL and determine if it is vulnerable to SQL injection attacks',
    4: '4. Cyber security incidents should be reported through appropriate management channels as quickly as possible',
    5: '5. Search for commented out code, commented out test code, which may contain sensitive information',
  },
  {
    1: '1. Examine all memory allocations/de-allocations',
    2: '2. Examine how and when a session is created for a user and how it is unauthenticated and authenticated',
    3: '3. Examine the session ID and verify if it is complex enough to fulfil requirements regarding strength',
    4: '4. Cyber security incidents should be reported through appropriate management channels as quickly as possible',
  },
];

const data2 = [
  { level: 'danger', withControl: 'primary' },
  { level: 'warning', withControl: 'success' },
  { level: 'danger', withControl: 'primary' },
  { level: 'warning', withControl: 'success' },
  { level: 'danger', withControl: 'primary' },
  { level: 'warning', withControl: 'success' },
];

interface IProps {
  threat: IThreat;
}

export const RiskLevelThreatCard: FC<IProps> = ({ threat }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="card-dropdown open">
      <div className="card-dropdown-header">
        <div className="card-dropdown-heading start">
          <Btn
            btnStatus="btn-xs-primary mr-10"
            btnIcon="icon-arrow-border-down"
            onClick={() => setDropdown(!dropdown)}
          />
          <div className="card-dropdown-header">
            <span className="card-dropdown-title">{threat.name})</span>
            <BadgeGroup type={data2[threat.id].level} />
          </div>
        </div>
      </div>
      <div className="card-dropdown-box">
        With Security Controls
        <BadgeGroup type={data2[threat.id].withControl} />
      </div>

      {dropdown && (
        <div className="card-dropdown-content">
          <PropertiesCard content={data[threat.id]} type="riskLevel" />
        </div>
      )}
    </div>
  );
};
