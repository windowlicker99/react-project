import React, { FC } from 'react';
import { Property } from '@components/common/Property';
import { ITicket } from '@interfaces/interfaces';
import { DatePickerComponent } from '@components/common/form-controls/DatePicker';
import { mockedDate } from '@constants/mockedDate';

interface RiskAssessmentTicketProps {
  ticket: ITicket;
}

export const RiskAssessmentTicket: FC<RiskAssessmentTicketProps> = ({ ticket }) => (
  <>
    <Property name="Due Date" />
    <Property name={<DatePickerComponent value={new Date(ticket?.created || mockedDate)} readOnly />} />
    <Property name="Assigned by" value={ticket?.user.name} key="Assigned by" />
    <Property name="Created by" value={ticket?.user.name} key="Created by" />
    <Property name="Brand" value="Skoda" key="Brand" />
    <Property name="Model" value={ticket?.vehicle?.model} key="Model" />
    <Property name="Platform" value={ticket?.vehicle?.platform} key="Platform" />
  </>
);
