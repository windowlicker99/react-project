import React, { FC } from 'react';

interface ISheduleRound {
  percent?: number;
}

export const ScheduleRound: FC<ISheduleRound> = ({ percent }) => <div className="schedule-round">{percent}</div>;
