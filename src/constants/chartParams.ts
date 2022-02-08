import { IChartParams } from '@/interfaces/interfaces';

export const defaultChartParams: IChartParams = {
  value: 0,
  text: 'No Data',
  startAngle: -270,
  height: 70,
  innerRadius: 19,
  outerRadius: 25,
  className: 'disable',
};

export const largeChartParams: Partial<IChartParams> = {
  innerRadius: 48,
  outerRadius: 60,
  height: 150,
};
