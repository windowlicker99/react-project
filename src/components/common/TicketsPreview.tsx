import React, { FC, useEffect, useState } from 'react';
import { getVehicleTickets } from '@/utils/getTickets';

interface ITicketsPreviewProps {
  vehicleId?: string;
}

interface IVehicleTickets {
  closed: number;
  open: number;
  inProgress: number;
}

export const TicketsPreview: FC<ITicketsPreviewProps> = ({ vehicleId }) => {
  const [tickets, setTickets] = useState<IVehicleTickets>();

  const getTickets = async () => {
    const ticketsList = await getVehicleTickets(vehicleId);

    if (ticketsList) {
      setTickets(ticketsList);
    }
  };
  useEffect(() => {
    getTickets();
  }, [vehicleId]);
  return (
    <div className="tickets-preview">
      <div className="tickets-preview-header">
        <span className="tickets-preview-title">Tickets</span>
        <button type="button" className="tickets-preview-details">
          View Details
        </button>
      </div>
      <div className="tickets-preview-body">
        <div className="tickets-preview-info">
          {tickets?.open || 0}
          <span className="tickets-preview-data">Open</span>
        </div>
        <div className="tickets-preview-info">
          {tickets?.inProgress || 0}
          <span className="tickets-preview-data">In Progress</span>
        </div>
        <div className="tickets-preview-info">
          {tickets?.closed || 0}
          <span className="tickets-preview-data">Closed</span>
        </div>
      </div>
    </div>
  );
};
