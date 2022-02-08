import React, { FC } from 'react';
import { DateLabel } from '@components/common/DateLabel';
import { Property } from '@components/common/Property';
import { mockedDate } from '@/constants/mockedDate';
import { ITicket } from '@/interfaces/interfaces';

interface IComplitmentTicketProps {
  ticket: ITicket;
}

export const ComplitmentTicket: FC<IComplitmentTicketProps> = ({ ticket }) => (
  <>
    <Property name="Last Update" />
    <Property name={<DateLabel date={ticket?.updated || mockedDate} />} />
  </>
);
