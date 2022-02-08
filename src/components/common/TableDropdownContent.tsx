import React, { FC } from 'react';
import { Property } from './Property';
import { Btn } from './form-controls/Btn';
import { Textarea } from './form-controls/Textarea';

export const TableDropdownContent: FC = () => (
  <div className="table-dropdown-content open">
    <div className="table-dropdown-heading">
      <Btn btnStatus="btn-xs-primary mr-10" btnIcon="icon-arrow-border-down" />
      <span className="table-dropdown-title">
        Ensure that the in-vehicle application has clearly defined the user types and the rights of said users
      </span>
    </div>
    <div className="table-dropdown-wrap">
      <div className="table-dropdown-body">
        <Property name="Name" value="value" />
        <Property name="Name" value="value" />
        <div className="table-dropdown-thumb">
          <div className="radio-button-group mr-15">
            <div className="radio-button-item">
              <span>Radiobutton</span>
              <span>Radiobutton</span>
            </div>
            <div className="radio-button-item">
              <span>Radiobutton</span>
              <span>Radiobutton</span>
            </div>
          </div>
          <Textarea value="" label="" placeholder="Add a message" name="message" />
        </div>
      </div>
      <div className="table-dropdown-footer">
        <Btn btnStatus="btn-lg-primary" btnIcon="" btnText="Apply" />
      </div>
    </div>
  </div>
);
