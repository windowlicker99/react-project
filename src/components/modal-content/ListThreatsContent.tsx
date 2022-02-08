import React, { FC } from 'react';
import { Heading } from '../common/Heading';

export const ListThreatsContent: FC = () => (
  <div className="threats-content">
    <Heading headingText="Data" linkText="" linkIcon="" BadgeRoundColor="" headingNumber={100} />
    <ul className="threats-content-list">
      <li className="threats-content-item">Lorem</li>
      <li className="threats-content-item">Lorem</li>
      <li className="threats-content-item">Lorem</li>
    </ul>
  </div>
);
