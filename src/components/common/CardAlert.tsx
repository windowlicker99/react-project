import React, { FC } from 'react';
import { IAlert } from '@interfaces/interfaces';
import { formatDate } from '@utils/formatDate';
import { Property } from './Property';
import { Link } from './form-controls/Link';

interface ICarAlert {
  alert: IAlert;
}

export const CardAlert: FC<ICarAlert> = ({ alert }) => (
  <div className="card-alert">
    <div className="card-alert-header">
      <span className="card-alert-title">Car Alert</span>
      <span className="card-alert-subtitle"> | {alert.name} </span>
    </div>
    <div className="card-alert-body">
      <Property name="From:" value={formatDate(alert.started)} />
      <span className="card-alert-arrow icon-arrow-right" />
      <Property name="To:" value={formatDate(alert.planned)} />
    </div>
    <div className="card-alert-footer">
      <span className="card-alert-link icon-link" />
      <Property name="CA URL:" value={<Link linkText={alert.url} />} />
    </div>
  </div>
);
