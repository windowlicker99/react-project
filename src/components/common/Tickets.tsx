import React, { FC } from 'react';
import { Btn } from '@components/common/form-controls/Btn';
import { Link } from '@components/common/form-controls/Link';
import { ITicket } from '@/interfaces/interfaces';
import { ETicketsTypes } from '@/interfaces/enums';
import { ComplitmentTicket } from './ticketsContents/ComplitmentTicket';
import { RiskAssessmentTicket } from './ticketsContents/RiskAssessmentTicket';
import { ImplementTicket } from './ticketsContents/ImplementTicket';

interface ITicketProps {
  ticket: ITicket;
}

export const Tickets: FC<ITicketProps> = ({ ticket }) => (
  <div className="box tickets">
    <div className="tickets-header">
      <div className="tickets-heading">
        <span className="tickets-title">{ticket.name}</span>
        <Link linkText="Edit" linkIcon="icon-edit" />
      </div>
      <span className="tickets-subtitle" />
      <span className="tickets-mark" />
    </div>
    <div className="tickets-body">
      {ticket.type === ETicketsTypes.riskAssessment && <RiskAssessmentTicket ticket={ticket} />}
      {ticket.type === ETicketsTypes.implementation && <ImplementTicket ticket={ticket} />}
      {ticket.type === ETicketsTypes.completment && <ComplitmentTicket ticket={ticket} />}
    </div>

    <div className="btn-details">
      <span className="tickets-details">
        {ticket.type === ETicketsTypes.riskAssessment ? 'Architecture' : 'Creation details'}
      </span>
      <Btn btnStatus="btn-xs-primary" btnIcon="icon-arrow-border-right" />
    </div>
  </div>
);
