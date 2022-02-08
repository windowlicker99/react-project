import React, { FC } from 'react';
import { EBadgeText } from '@interfaces/enums';
import { Badge } from './Badge';

interface IProps {
  type: string;
}
export const BadgeGroup: FC<IProps> = ({ type }) => (
  <div className="badge-group">
    <span className="badge-group-labe">Risk Level</span>
    <Badge badgeType={type} badgeText={EBadgeText[type as keyof typeof EBadgeText]} />
  </div>
);
