import React, { FC } from 'react';

interface IBadgeProps {
  badgeType: string;
  badgeText: string;
  dataFor?: string;
}

export const Badge: FC<IBadgeProps> = ({ badgeType, badgeText, dataFor = '' }) => (
  <div className={`badge ${badgeType} `} {...(dataFor && { 'data-for': dataFor, 'data-tip': true })}>
    {badgeText}
  </div>
);
