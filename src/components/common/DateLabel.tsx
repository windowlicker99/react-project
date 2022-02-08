import React, { FC } from 'react';
import { format } from 'date-fns';

interface IDateLabelProps {
  date: string;
}

export const DateLabel: FC<IDateLabelProps> = ({ date }) => (
  <div className="date">
    <div className="date-item">
      <div className="date-icon">
        <span className="icon-calendar" />
      </div>
      {date && <span className="date-data">{format(new Date(date), 'dd/MM/yyyy')}</span>}
    </div>
    <div className="date-item">
      <div className="date-icon">
        <span className="icon-time" />
      </div>
      {date && <span className="date-data">{format(new Date(date), 'hh:mm aa')}</span>}
    </div>
  </div>
);
