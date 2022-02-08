import React, { FC } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { IECU } from '@/interfaces/interfaces';

const data = [
  { name: 'Group A', value: 200 },
  { name: 'Group B', value: 200 },
  { name: 'Group C', value: 200 },
  { name: 'Group D', value: 200 },
  { name: 'Group D', value: 200 },
];

const pointerAngle = {
  'Very High': { rotate: -60, x: 225, y: 115 },
  veryHigh: { rotate: -60, x: 225, y: 115 },
  High: { rotate: 30, x: 195, y: 70 },
  high: { rotate: 30, x: 195, y: 70 },
  Moderate: { rotate: 0, x: 153, y: 60 },
  moderate: { rotate: 0, x: 153, y: 60 },
  Medium: { rotate: 0, x: 153, y: 60 },
  medium: { rotate: 0, x: 153, y: 60 },
  Low: { rotate: -30, x: 113, y: 70 },
  low: { rotate: -30, x: 113, y: 70 },
  'Very Low': { rotate: -60, x: 95, y: 115 },
  veryLow: { rotate: -60, x: 95, y: 115 },
  'No Data': { rotate: 30, x: 173, y: 80 },
  noData: { rotate: 30, x: 173, y: 80 },
  undefined: { rotate: 0, x: 153, y: 60 },
};

const COLORS = ['#00C49F', '#0088FE', '#ffca6a', '#faaa1b', '#f26563'];

interface IProps {
  ECU?: Partial<IECU>;
}

export const RiskLevel: FC<IProps> = ({ ECU }) => (
  <PieChart className="level-chart" width={310} height={150}>
    <text x={155} y={125} textAnchor="middle" dominantBaseline="middle" fontSize="20px">
      {ECU?.riskLevel || 'No Data'}
    </text>
    {ECU?.riskLevel && (
      <text
        x={pointerAngle[ECU.riskLevel]?.x}
        y={pointerAngle[ECU.riskLevel]?.y}
        rotate={pointerAngle[ECU.riskLevel]?.rotate}
        textAnchor="middle"
        dominantBaseline="middle"
        fontWeight="600"
        fontSize="20px"
      >
        &#9650;
      </text>
    )}
    <Pie
      data={data}
      cx={150}
      cy={125}
      startAngle={180}
      endAngle={0}
      innerRadius={90}
      outerRadius={110}
      fill="#8884d8"
      paddingAngle={5}
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${entry}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
  </PieChart>
);
