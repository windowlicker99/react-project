import React, { FC } from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';
import { ERiskLevels } from '@/interfaces/enums';

const data = [
  { name: ERiskLevels.veryHigh, value: 30, color: '#f26563' },
  { name: ERiskLevels.high, value: 20, color: '#faaa1b' },
  { name: ERiskLevels.moderate, value: 15, color: '#ffca6a' },
  { name: ERiskLevels.low, value: 8, color: '#0088FE' },
  { name: ERiskLevels.veryLow, value: 27, color: '#00C49F' },
];

const data2 = [{ name: ERiskLevels.veryHigh, value: 100, color: '#f26563' }];

const COLORS = ['#f26563', '#faaa1b', '#ffca6a', '#0088FE', '#00C49F'];

interface ActiveShape {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
}

interface IECuRiskProps {
  id: string;
}

const renderActiveShape: FC<ActiveShape> = ({ cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill }) => (
  <g>
    <circle cx={cx} cy={cy} r={40} fill="#ffe3e5" stroke="none" />
    <text x={cx} y={cy} dy={3} fontSize="11" textAnchor="middle" fill="#f26563">
      {ERiskLevels.veryHigh}
    </text>

    {data.map((legend, i) => {
      const a = i * 20;
      return (
        <React.Fragment key={legend.value}>
          <circle cx={cx + 90} cy={cy - 53 + a} r={5} fill={legend.color} stroke="none" />
          <text x={cx + 110} y={cy - 50 + a} dy={3} fontSize="15px" fontWeight="600">
            {legend.value}%
          </text>
          <text x={cx + 155} y={cy - 50 + a} dy={3} fontSize="9" className="progress-title">
            {legend.name}
          </text>
        </React.Fragment>
      );
    })}

    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={fill}
    />
  </g>
);

const renderActiveShapeForFirst: FC<ActiveShape> = ({
  cx,
  cy,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
}) => (
  <g>
    <circle cx={cx} cy={cy} r={40} fill="#ffe3e5" stroke="none" />
    <text x={cx} y={cy} dy={3} fontSize="11" textAnchor="middle" fill="#f26563">
      {ERiskLevels.veryHigh}
    </text>

    {data2.map((legend, i) => {
      const a = i * 20;
      return (
        <React.Fragment key={legend.value}>
          <circle cx={cx + 90} cy={cy - 53 + a} r={5} fill={legend.color} stroke="none" />
          <text x={cx + 110} y={cy - 50 + a} dy={3} fontSize="15px" fontWeight="600">
            {legend.value}%
          </text>
          <text x={cx + 155} y={cy - 50 + a} dy={3} fontSize="9" className="progress-title">
            {legend.name}
          </text>
        </React.Fragment>
      );
    })}

    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={fill}
    />
  </g>
);

export const EcuRisk: FC<IECuRiskProps> = ({ id }) => (
  <>
    {id === '0' ? (
      <PieChart width={300} height={150}>
        <Pie
          activeIndex={0}
          activeShape={renderActiveShape}
          data={data}
          cx={60}
          cy={80}
          innerRadius={45}
          outerRadius={65}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${entry}`} fill={COLORS[index % COLORS.length]} stroke={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    ) : (
      <PieChart width={300} height={150}>
        <Pie
          activeIndex={0}
          activeShape={renderActiveShapeForFirst}
          data={data2}
          cx={60}
          cy={80}
          innerRadius={45}
          outerRadius={65}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${entry}`} fill={COLORS[index % COLORS.length]} stroke={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    )}
  </>
);
