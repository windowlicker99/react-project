import React, { FC } from 'react';
import { Property } from '@components/common/Property';
import { ITicket } from '@/interfaces/interfaces';

interface ImplementTicketProps {
  ticket: ITicket;
}

export const ImplementTicket: FC<ImplementTicketProps> = ({ ticket }) => (
  <>
    <Property name="Assigned by" value={ticket?.user.name} key="Assigned by" />
    <Property name="Created by" value={ticket?.user.name} key="Created by" />
    <Property name="Brand" value="Skoda" key="Brand" />
    <Property name="Model" value={ticket?.vehicle?.model} key="Model" />
    <Property name="Platform" value={ticket?.vehicle?.platform} key="Platform" />
    <Property name="Element Type" value={ticket?.elementType} />
    <Property name="Element Name" value={ticket?.elementName} />
  </>
);
