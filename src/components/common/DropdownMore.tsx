import React, { FC } from 'react';
import { Btn } from '@components/common/form-controls/Btn';

export const DropdownMore: FC = () => (
  <div className="dropdown-more">
    <Btn btnStatus="btn-xs-secondary active" btnIcon="icon-ellipsis" />

    <div className="dropdown-more-content">
      <ul className="dropdown-more-list">
        <li className="dropdown-more-item">
          <span className="dropdown-more-icon" />
          <span className="dropdown-more-text">View Threats and Controls</span>
        </li>
        <li className="dropdown-more-item">
          <span className="dropdown-more-icon icon-edit" />
          <span className="dropdown-more-text">Edit</span>
        </li>
        <li className="dropdown-more-item">
          <span className="dropdown-more-icon icon-delete" />
          <span className="dropdown-more-text">Delete</span>
        </li>
      </ul>
    </div>
  </div>
);

// QUESTION <div className="dropdown-more"> <!-- add class active-->
