import React, { FC } from 'react';
import { Btn } from '../common/form-controls/Btn';
import { Badge } from '../common/Badge';
import { DropdownMore } from '../common/DropdownMore';
import { Link } from '../common/form-controls/Link';
import { PageFilter } from './PageFilter';

import { Property } from '../common/Property';

export const FunctionsListContent: FC = () => (
  <div className="box-table elements-content">
    <table className="table">
      <thead className="table-header">
        <tr className="table-row">
          <th className="table-col">
            <div className="table-header-inner">
              <span className="table-header-title" />
            </div>
          </th>
          <th className="table-col">
            <div className="table-header-inner">
              <span className="table-header-title">Function Name </span>
              <div className="table-filter">
                <button type="button" className="table-filter-btn">
                  <span className="icon-arrow-full-up" />
                </button>
                <button type="button" className="table-filter-btn">
                  <span className="icon-arrow-full-down" />
                </button>
              </div>
            </div>
          </th>
          <th className="table-col">
            <div className="table-header-inner">
              <span className="table-header-title">Function Cluster Information</span>
              <div className="table-filter">
                <button type="button" className="table-filter-btn">
                  <span className="icon-arrow-full-up" />
                </button>
                <button type="button" className="table-filter-btn">
                  <span className="icon-arrow-full-down" />
                </button>
              </div>
            </div>
          </th>
          <th className="table-col">
            <div className="table-header-inner">
              <span className="table-header-title">Supplier</span>
              <div className="table-filter">
                <button type="button" className="table-filter-btn">
                  <span className="icon-arrow-full-up" />
                </button>
                <button type="button" className="table-filter-btn">
                  <span className="icon-arrow-full-down" />
                </button>
              </div>
            </div>
          </th>
          <th className="table-col">
            <div className="table-header-inner">
              <span className="table-header-title">Risk level</span>
            </div>
          </th>
          <th className="table-col">
            <div className="table-header-inner">
              <span className="table-header-title">Online Connectivity</span>
            </div>
          </th>
          <th className="table-col">
            <div className="table-header-inner">
              <span className="table-header-title">Safety Criticality</span>
            </div>
          </th>
          <th className="table-col">
            <div className="table-header-inner">
              <span className="table-header-title">Risk Assessment</span>
            </div>
          </th>
          <th className="table-col">
            <div className="table-header-inner">
              <span className="table-header-title" />
            </div>
          </th>
          <th className="table-col sticky">
            <div className="table-header-inner">
              <span className="table-header-title">Actions</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody className="table-body">
        <tr className="table-row">
          <td className="table-col">
            <Btn btnStatus="btn-xs-primary" btnIcon="icon-arrow-border-down" />
          </td>
          <td className="table-col">Function Name 1</td>
          <td className="table-col">2021 TSIs</td>
          <td className="table-col">Lorem</td>
          <td className="table-col">
            <Badge badgeType="danger" badgeText="Very High" />
          </td>
          <td className="table-col" />
          <td className="table-col" />
          <td className="table-col">
            <Link linkText="Initiate RA" linkIcon="icon-power" />
          </td>
          <td className="table-col">
            <Link linkText="Assign RA to user" linkIcon="icon-user-plus" />
          </td>
          <td className="table-col sticky">
            <div className="btn-group">
              <DropdownMore />
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan={99}>
            <div className="table-dropdown">
              <div className="table-info">
                <div className="table-info-heading">
                  <span className="table-info-title">
                    Data
                    <span className="text-grey">(50)</span>
                  </span>
                  <Btn btnStatus="btn-lg-outline" btnIcon="" btnText="Add Data" />
                </div>
                <div className="table-info-item">
                  <div className="table-info-properties">
                    <Property />
                    <Property />
                    <Property />
                    <Property />
                  </div>
                  <div className="btn-group">
                    <Btn btnStatus="btn-xs-primary mr-10" btnIcon="icon-edit" />
                    <Btn btnStatus="btn-xs-danger" btnIcon="icon-delete" />
                  </div>
                </div>
                <div className="table-info-edit">
                  {/* <Input formLabel="Signal Name" formPlaceholder="Signal Name" /> */}
                  <PageFilter />
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
