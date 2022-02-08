import React, { FC, useState, useEffect } from 'react';
import { Tickets } from '@components/common/Tickets';
import { getTickets } from '@utils/getTickets';
import { Heading } from '@components/common/Heading';
import { ITicket } from '@interfaces/interfaces';
import { TList } from '@interfaces/types';
import { ETicketStatus } from '@interfaces/enums';

const ticketStatusParams = {
  [ETicketStatus.open]: {
    color: 'sky-blue',
    title: 'Open',
  },
  [ETicketStatus.progress]: {
    color: 'yellow-dark',
    title: 'In Progress',
  },
  [ETicketStatus.closed]: {
    color: 'green',
    title: 'Close',
  },
  [ETicketStatus.deleted]: {
    color: 'red-light',
    title: 'Deleted',
  },
};

export const TicketsContent: FC = () => {
  const [tickets, setTickets] = useState<TList<ITicket[]>>({});

  const ticketList = async () => {
    const items = await getTickets();
    const ticketsForStatus = Object.values(ETicketStatus).reduce((acc, status) => {
      const tickets = items.filter((ticket: ITicket) => ticket.status === status);
      return { ...acc, [status]: tickets };
    }, {} as { [key: string]: ITicket[] });
    setTickets(ticketsForStatus);
  };

  useEffect(() => {
    ticketList();
  }, []);

  const getTicketsForStatus = (status: ETicketStatus) => tickets[status]?.length || 0;

  return (
    <div className="box-wrap tickets-content">
      {Object.values(ETicketStatus).map((status) => (
        <div className={`box-col ${status}`} key={`${status}-column`}>
          <div className="box-col-header" key={`${status}-header`}>
            <Heading
              headingText={ticketStatusParams[status]?.title}
              headingNumber={`(${getTicketsForStatus(status)})`}
              linkIcon="icon-ellipsis-vertival"
              BadgeRoundColor={ticketStatusParams[status]?.color}
              key={`${status}-heading`}
            />
          </div>
          <div className="box-col-content" key={`${status}-content-container`}>
            {tickets[status]?.map((ticket) => (
              <Tickets ticket={ticket} key={`${ticket.name}-content`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
