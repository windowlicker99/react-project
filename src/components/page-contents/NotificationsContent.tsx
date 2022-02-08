import React, { FC } from 'react';
import { NotificationIcon } from '@components/common/NotificationIcon';
import { DateLabel } from '@components/common/DateLabel';
import { Btn } from '@components/common/form-controls/Btn';
import { mockedDate } from '@/constants/mockedDate';

export const NotificationsContent: FC = () => (
  <div className="box-table notifications-content">
    <table className="table">
      <tbody className="table-body">
        <tr className="table-row notification-message active">
          <td className="table-col ">
            <NotificationIcon />
          </td>
          <td className="table-col">
            The implementation period of <span className="text-bold">Organization`s employees security practices</span>{' '}
            control for Threat 1234 has expired at |{' '}
            <span className="text-grey">Brand Model Platform Element Name</span>
          </td>
          <td className="table-col">
            <DateLabel date={mockedDate} />
          </td>
          <td className="table-col">
            <div className="btn-group">
              <Btn btnStatus="btn-xs-primary mr-15" btnIcon="icon-architecture-blue" />

              <button type="button" className="btn-xs-danger">
                <span className="icon-delete" />
              </button>
            </div>
          </td>
        </tr>
        <tr className="table-row notification-assigned active">
          <td className="table-col ">
            <NotificationIcon />
          </td>
          <td className="table-col">
            The implementation period of Organization`s employees security practices control for Threat 1234 has expired
            at | Brand Model Platform Element Name
          </td>
          <td className="table-col">
            <DateLabel date={mockedDate} />
          </td>
          <td className="table-col">
            <div className="btn-group">
              <Btn btnStatus="btn-xs-primary mr-15" btnIcon="icon-architecture-blue" />
              <Btn btnStatus="btn-xs-danger" btnIcon="icon-delete" />
            </div>
          </td>
        </tr>
        <tr className="table-row notification-risk active">
          <td className="table-col ">
            <NotificationIcon />
          </td>
          <td className="table-col">
            The implementation period of Organization`s employees security practices control for Threat 1234 has expired
            at | Brand Model Platform Element Name
          </td>
          <td className="table-col">
            <DateLabel date={mockedDate} />
          </td>
          <td className="table-col">
            <div className="btn-group">
              <Btn btnStatus="btn-xs-primary mr-15" btnIcon="icon-architecture-blue" />
              <Btn btnStatus="btn-xs-danger" btnIcon="icon-delete" />
            </div>
          </td>
        </tr>
        <tr className="table-row notification-warning active">
          <td className="table-col ">
            <NotificationIcon />
          </td>
          <td className="table-col">
            The implementation period of Organization`s employees security practices control for Threat 1234 has expired
            at | Brand Model Platform Element Name
          </td>
          <td className="table-col">
            <DateLabel date={mockedDate} />
          </td>
          <td className="table-col">
            <div className="btn-group">
              <Btn btnStatus="btn-xs-primary mr-15" btnIcon="icon-architecture-blue" />
              <Btn btnStatus="btn-xs-danger" btnIcon="icon-delete" />
            </div>
          </td>
        </tr>
        <tr className="table-row notification-risk ">
          <td className="table-col ">
            <NotificationIcon />
          </td>
          <td className="table-col">
            The implementation period of Organization`s employees security practices control for Threat 1234 has expired
            at | Brand Model Platform Element Name
          </td>
          <td className="table-col">
            <DateLabel date={mockedDate} />
          </td>
          <td className="table-col">
            <div className="btn-group">
              <Btn btnStatus="btn-xs-primary mr-15" btnIcon="icon-architecture-blue" />
              <Btn btnStatus="btn-xs-danger disabled" btnIcon="icon-delete" />
            </div>
          </td>
        </tr>
        <tr className="table-row notification-risk ">
          <td className="table-col ">
            <NotificationIcon />
          </td>
          <td className="table-col">
            The implementation period of Organization`s employees security practices control for Threat 1234 has expired
            at | Brand Model Platform Element Name
          </td>
          <td className="table-col">
            <DateLabel date={mockedDate} />
          </td>
          <td className="table-col">
            <div className="btn-group">
              <Btn btnStatus="btn-xs-primary mr-15" btnIcon="icon-architecture-blue" />
              <Btn btnStatus="btn-xs-danger" btnIcon="icon-delete" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
