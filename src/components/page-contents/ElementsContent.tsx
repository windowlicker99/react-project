import React, { FC } from 'react';
import { Avatar } from '@components/common/Avatar';
import { BadgeRound } from '@components/common/BadgeRound';
import { Btn } from '@components/common/form-controls/Btn';
import { DateLabel } from '@components/common/DateLabel';
import { mockedDate } from '@/constants/mockedDate';

export const ElementsContent: FC = () => (
  <div className="box-table elements-content">
    <table className="table">
      <thead className="table-header">
        <tr className="table-row">
          <th className="table-col">
            <div className="table-header-inner">
              <span className="table-header-title">Model</span>
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
              <span className="table-header-title">Platform</span>
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
              <span className="table-header-title">Name</span>
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
              <span className="table-header-title">Domain Usage</span>
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
              <span className="table-header-title">Communication</span>
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
              <span className="table-header-title">Online Connectivity</span>
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
              <span className="table-header-title">Author</span>
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
              <span className="table-header-title">Last Update</span>
            </div>
          </th>
          <th className="table-col">
            <div className="table-header-inner">
              <span className="table-header-title">Color</span>
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
          <td className="table-col">2021 TSI</td>
          <td className="table-col">20.3</td>
          <td className="table-col">30.5</td>
          <td className="table-col">23.5</td>
          <td className="table-col">40.3</td>
          <td className="table-col">23.5</td>
          <td className="table-col">
            <Avatar name="John Stone" avatar="" />
          </td>
          <td className="table-col">
            <DateLabel date={mockedDate} />
          </td>
          <td className="table-col">
            <BadgeRound color="green" />
          </td>
          <th className="table-col sticky">
            <div className="btn-group">
              <Btn btnStatus="btn-xs-primary mr-15" btnIcon="icon-architecture-blue" />
              <Btn btnStatus="btn-xs-primary mr-40" btnIcon="icon-elements" />
            </div>
          </th>
        </tr>
        <tr className="table-row">
          <td className="table-col">2021 TSI</td>
          <td className="table-col">50.2</td>
          <td className="table-col">40.63</td>
          <td className="table-col">45.23</td>
          <td className="table-col">39.3</td>
          <td className="table-col">40.3</td>
          <td className="table-col">
            <Avatar name="John Stone" avatar="" />
          </td>
          <td className="table-col">
            <DateLabel date={mockedDate} />
          </td>
          <td className="table-col">
            <BadgeRound color="red" />
          </td>
          <th className="table-col sticky">
            <div className="btn-group">
              <Btn btnStatus="btn-xs-primary mr-15" btnIcon="icon-architecture-blue" />
              <Btn btnStatus="btn-xs-primary mr-40" btnIcon="icon-elements" />
            </div>
          </th>
        </tr>
        <tr className="table-row">
          <td className="table-col">2021 TSI</td>
          <td className="table-col">25.4</td>
          <td className="table-col">30.2</td>
          <td className="table-col">33.3</td>
          <td className="table-col">36.7</td>
          <td className="table-col">2021 TSI</td>
          <td className="table-col">
            <Avatar name="John Stone" avatar="" />
          </td>
          <td className="table-col">
            <DateLabel date={mockedDate} />
          </td>
          <td className="table-col">
            <BadgeRound color="yellow" />
          </td>
          <th className="table-col sticky">
            <div className="btn-group">
              <Btn btnStatus="btn-xs-primary mr-15" btnIcon="icon-architecture-blue" />
              <Btn btnStatus="btn-xs-primary mr-40" btnIcon="icon-elements" />
            </div>
          </th>
        </tr>
        <tr className="table-row">
          <td className="table-col">2021 TSI</td>
          <td className="table-col">25.4</td>
          <td className="table-col">30.2</td>
          <td className="table-col">33.3</td>
          <td className="table-col">36.7</td>
          <td className="table-col">2021 TSI</td>
          <td className="table-col">
            <Avatar name="John Stone" avatar="" />
          </td>
          <td className="table-col">
            <DateLabel date={mockedDate} />
          </td>
          <td className="table-col">
            <BadgeRound color="azure" />
          </td>
          <th className="table-col sticky">
            <div className="btn-group">
              <Btn btnStatus="btn-xs-primary mr-15" btnIcon="icon-architecture-blue" />
              <Btn btnStatus="btn-xs-primary mr-40" btnIcon="icon-elements" />
            </div>
          </th>
        </tr>
        <tr className="table-row">
          <td className="table-col">2021 TSI</td>
          <td className="table-col">25.4</td>
          <td className="table-col">30.2</td>
          <td className="table-col">33.3</td>
          <td className="table-col">36.7</td>
          <td className="table-col">2021 TSI</td>
          <td className="table-col">
            <Avatar name="John Stone" avatar="" />
          </td>
          <td className="table-col">
            <DateLabel date={mockedDate} />
          </td>
          <td className="table-col">
            <BadgeRound color="azure" />
          </td>
          <th className="table-col sticky">
            <div className="btn-group">
              <Btn btnStatus="btn-xs-primary mr-15" btnIcon="icon-architecture-blue" />
              <Btn btnStatus="btn-xs-primary mr-40" btnIcon="icon-elements" />
            </div>
          </th>
        </tr>
        <tr className="table-row">
          <td className="table-col">2021 TSI</td>
          <td className="table-col">25.4</td>
          <td className="table-col">30.2</td>
          <td className="table-col">33.3</td>
          <td className="table-col">36.7</td>
          <td className="table-col">2021 TSI</td>
          <td className="table-col">
            <Avatar name="John Stone" avatar="" />
          </td>
          <td className="table-col">
            <DateLabel date={mockedDate} />
          </td>
          <td className="table-col">
            <BadgeRound color="azure" />
          </td>
          <th className="table-col sticky">
            <div className="btn-group">
              <Btn btnStatus="btn-xs-primary mr-15" btnIcon="icon-architecture-blue" />
              <Btn btnStatus="btn-xs-primary mr-40" btnIcon="icon-elements" />
            </div>
          </th>
        </tr>
        <tr className="table-row">
          <td className="table-col">2021 TSI</td>
          <td className="table-col">25.4</td>
          <td className="table-col">30.2</td>
          <td className="table-col">33.3</td>
          <td className="table-col">36.7</td>
          <td className="table-col">2021 TSI</td>
          <td className="table-col">
            <Avatar name="John Stone" avatar="" />
          </td>
          <td className="table-col">
            <DateLabel date={mockedDate} />
          </td>
          <td className="table-col">
            <BadgeRound color="azure" />
          </td>
          <th className="table-col sticky">
            <div className="btn-group">
              <Btn btnStatus="btn-xs-primary mr-15" btnIcon="icon-architecture-blue" />
              <Btn btnStatus="btn-xs-primary mr-40" btnIcon="icon-elements" />
            </div>
          </th>
        </tr>
        <tr className="table-row">
          <td className="table-col">2021 TSI</td>
          <td className="table-col">25.4</td>
          <td className="table-col">30.2</td>
          <td className="table-col">33.3</td>
          <td className="table-col">36.7</td>
          <td className="table-col">2021 TSI</td>
          <td className="table-col">
            <Avatar name="John Stone" avatar="" />
          </td>
          <td className="table-col">
            <DateLabel date={mockedDate} />
          </td>
          <td className="table-col">
            <BadgeRound color="azure" />
          </td>
          <th className="table-col sticky">
            <div className="btn-group">
              <Btn btnStatus="btn-xs-primary mr-15" btnIcon="icon-architecture-blue" />
              <Btn btnStatus="btn-xs-primary mr-40" btnIcon="icon-elements" />
            </div>
          </th>
        </tr>
        <tr className="table-row">
          <td className="table-col">2021 TSI</td>
          <td className="table-col">25.4</td>
          <td className="table-col">30.2</td>
          <td className="table-col">33.3</td>
          <td className="table-col">36.7</td>
          <td className="table-col">2021 TSI</td>
          <td className="table-col">
            <Avatar name="John Stone" avatar="" />
          </td>
          <td className="table-col">
            <DateLabel date={mockedDate} />
          </td>
          <td className="table-col">
            <BadgeRound color="azure" />
          </td>
          <th className="table-col sticky">
            <div className="btn-group">
              <Btn btnStatus="btn-xs-primary mr-15" btnIcon="icon-architecture-blue" />
              <Btn btnStatus="btn-xs-primary mr-40" btnIcon="icon-elements" />
            </div>
          </th>
        </tr>
        <tr className="table-row">
          <td className="table-col">2021 TSI</td>
          <td className="table-col">25.4</td>
          <td className="table-col">30.2</td>
          <td className="table-col">33.3</td>
          <td className="table-col">36.7</td>
          <td className="table-col">2021 TSI</td>
          <td className="table-col">
            <Avatar name="John Stone" avatar="" />
          </td>
          <td className="table-col">
            <DateLabel date={mockedDate} />
          </td>
          <td className="table-col">
            <BadgeRound color="azure" />
          </td>
          <th className="table-col sticky">
            <div className="btn-group">
              <Btn btnStatus="btn-xs-primary mr-15" btnIcon="icon-architecture-blue" />
              <Btn btnStatus="btn-xs-primary mr-40" btnIcon="icon-elements" />
            </div>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
);
