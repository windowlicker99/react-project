import React, { FC } from 'react';
import classNames from 'classnames';

interface IBadgeRoundProps {
  color: string;
  status?: string;
}

export const BadgeRound: FC<IBadgeRoundProps> = ({ color, status, children }) => (
  <div className={classNames('badge-round', color, status)} style={{ backgroundColor: color }}>
    {children}
  </div>
);
