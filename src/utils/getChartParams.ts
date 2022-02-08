import { defaultChartParams, largeChartParams } from '@constants/chartParams';
import { EComponentStatuses } from '@interfaces/enums';
import { IChartParams } from '@interfaces/interfaces';

export const getChartParams = (percentage: number, status: EComponentStatuses): IChartParams => {
  let params = { ...defaultChartParams };

  if (percentage) {
    params = { ...params, value: percentage, text: `${percentage}%`, className: 'active' };
  }

  if (status === EComponentStatuses.large) {
    params = { ...params, ...largeChartParams };
  }

  return params;
};
