import React, { FC } from 'react';
import { PieChart, Pie, Sector, Text, ResponsiveContainer } from 'recharts';
import classNames from 'classnames';
import { IChartParams } from '@interfaces/interfaces';
import { getChartParams } from '@utils/getChartParams';
import { EComponentStatuses } from '@interfaces/enums';

interface ICircleChartProps {
  percentage: number;
  width?: number | string;
  status?: EComponentStatuses;
}

interface IActiveShapeProps {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
}

export const CircleChart: FC<ICircleChartProps> = ({
  percentage,
  width = '100%',
  status = EComponentStatuses.usual,
}) => {
  const chartParams: IChartParams = getChartParams(percentage, status);

  const activeShape: FC<IActiveShapeProps> = ({ cx, cy, innerRadius, outerRadius }) => (
    <>
      <Text x={cx} y={cy} textAnchor="middle" verticalAnchor="middle" fill="black">
        {chartParams.text}
      </Text>
      <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={-360} fill="#e5f0ff" />
    </>
  );

  const data = [
    { name: 'filled', value: 100 - chartParams.value },
    { name: chartParams.text, value: chartParams.value },
  ];

  return (
    <ResponsiveContainer width={width} height={chartParams.height}>
      <PieChart className={classNames('circle-chart', status, chartParams?.className)}>
        <Pie
          activeIndex={0}
          activeShape={activeShape}
          data={data}
          paddingAngle={0}
          cornerRadius={chartParams.value / 2}
          startAngle={chartParams.startAngle}
          innerRadius={chartParams.innerRadius}
          outerRadius={chartParams.outerRadius}
          fill="#4f98ff"
          dataKey="value"
        />
      </PieChart>
    </ResponsiveContainer>
  );
};
