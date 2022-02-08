import React, { FC } from 'react';
import classNames from 'classnames';
import { EProgressBarTypes } from '@interfaces/enums';
import { formatDate } from '@utils/formatDate';
import { mockedDate } from '@constants/mockedDate';
import { IProgressPoint } from '@interfaces/interfaces';
import { DateLabel } from './DateLabel';

export interface IProgressBarPointsProps {
  progressbarType?: EProgressBarTypes;
  progressList: IProgressPoint[];
}

export const ProgressbarPoints: FC<IProgressBarPointsProps> = ({
  progressbarType = EProgressBarTypes.horizontal,
  progressList,
}) => (
  <ul className={classNames('progress-points', progressbarType)}>
    {progressList.map((progress) => (
      <li className={classNames('progres-points-item', progress.status)} key={progress.date || progress.startDate}>
        <span className="progres-point-title">{progress.title}</span>
        <div className="progres-point-subtitle">
          {progressbarType === EProgressBarTypes.horizontal && (
            <>Start date: {formatDate(progress.startDate || mockedDate)}</>
          )}
          {progressbarType === EProgressBarTypes.vertical && <DateLabel date={progress.date} />}
        </div>
      </li>
    ))}
  </ul>
);
