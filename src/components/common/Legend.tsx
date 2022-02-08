import classNames from 'classnames';
import React, { FC } from 'react';

interface ILegendProps {
  isDisabled: boolean;
  legendType: string;
  legendName: string;
}

export const Legend: FC<ILegendProps> = ({ isDisabled, legendType, legendName }) => (
  <div className={classNames('legend', legendType, isDisabled ? 'disabled' : '')}>
    <div className="legend-badge">{legendType}</div>
    <div className="legend-name">{legendName}</div>
  </div>
);
