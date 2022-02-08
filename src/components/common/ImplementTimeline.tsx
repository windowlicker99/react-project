import React, { FC, useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { format } from 'date-fns';
import { ERiskLevels } from '@interfaces/enums';
import { IControl, IVehicle } from '@interfaces/interfaces';
import { getControls } from '@utils/getControls';
import { TooltipCustom } from './TooltipCustom';

interface IPayload {
  cx: number;
  cy: number;
  dataKey: string;
  fill: string;
  index: number;
  onClick: () => void;
  payload: { amt: string; color: string; name: ERiskLevels; pv: number };
  r: number;
  stroke: string;
  strokeWidth: number;
  value: ERiskLevels;
}

const data = [
  {
    name: ERiskLevels.veryLow,
    pv: new Date(2021, 10, 19).getTime(),
    amt: '1',
    color: '#10c9a1 ',
  },

  {
    name: ERiskLevels.low,
    pv: new Date(2021, 10, 1).getTime(),
    amt: '2',
    color: '#4f98ff ',
  },
  {
    name: ERiskLevels.moderate,
    pv: new Date(2021, 9, 19).getTime(),
    amt: '3',
    color: '#ffca6a',
  },
  {
    name: ERiskLevels.high,
    pv: new Date(2021, 7, 21).getTime(),
    amt: '4',
    color: '#fb5e06',
  },
  {
    name: ERiskLevels.veryHigh,
    pv: new Date(2021, 6, 17).getTime(),
    amt: '5',
    color: '#fc2033',
  },
];

interface DotProps {
  cx?: number;
  cy?: number;
  value?: ERiskLevels;
  onClick?: (event: string, payload: { cx: number; cy: number }) => void;
}

interface ICurrentElement {
  currentElement: IVehicle;
}

const dateFormatter = (date: Date) => format(new Date(date), 'dd.MM.yy');

const CustomizedDot: FC<DotProps> = ({ cx, cy, value, onClick }: DotProps) => (
  <>
    {data.map((dot) => {
      if (value === dot.name) {
        return (
          <React.Fragment key={dot.amt}>
            <circle
              cx={cx}
              cy={cy}
              r="8"
              stroke={dot.color}
              strokeWidth="1"
              fill="transparent"
              onClick={() => onClick('click', { cx, cy })}
            />
            <circle cx={cx} cy={cy} r="5" fill={dot.color} onClick={() => onClick('click', { cx, cy })} />
          </React.Fragment>
        );
      }

      return null;
    })}
    ;
  </>
);
export const ImplementTimeline: FC<ICurrentElement> = ({ currentElement }) => {
  const [tooltipDisplay, setTooltipDisplay] = useState(false);

  const [controls, setControls] = useState<IControl[]>([]);

  const [activeControl, setActiveControl] = useState({ x: 100, y: -100 });

  const getAllControls = async () => {
    const items = await getControls();
    setControls(items);
  };

  useEffect(() => {
    getAllControls();
  }, [tooltipDisplay]);

  return (
    <LineChart
      layout="horizontal"
      width={800}
      height={345}
      data={data}
      margin={{
        top: 55,
        right: 30,
        left: 20,
      }}
    >
      <CartesianGrid strokeDasharray="4 1 2" vertical={false} />
      {currentElement?.riskLevel !== 'noData' ? (
        <XAxis
          padding={{ left: 45 }}
          axisLine={false}
          dataKey="pv"
          domain={[data[0].pv, data[data.length - 2].pv]}
          type="number"
          tickFormatter={dateFormatter}
        />
      ) : (
        <XAxis
          padding={{ left: 45 }}
          axisLine={false}
          tick={false}
          dataKey="pv"
          type="number"
          tickFormatter={dateFormatter}
        />
      )}
      <YAxis dataKey="name" type="category" axisLine={false} />
      {currentElement?.riskLevel !== 'noData' ? (
        <Tooltip
          cursor={{ stroke: 'blue', strokeWidth: 1, strokeDasharray: '4 ' }}
          wrapperStyle={{
            visibility: 'visible',
            pointerEvents: 'auto',
            width: '100%',
            zIndex: 10,
          }}
          position={{ x: activeControl.x, y: activeControl.y }}
          content={
            <TooltipCustom controls={controls} tooltipDisplay={tooltipDisplay} setTooltipDisplay={setTooltipDisplay} />
          }
        />
      ) : null}

      {currentElement?.riskLevel !== 'noData' ? (
        <Line
          type="monotone"
          dataKey="name"
          stroke="gray"
          activeDot={{
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onClick: (event: any, payload: any) => {
              setActiveControl({ x: payload.cx - 150, y: payload.cy - 330 });
              setTooltipDisplay(!tooltipDisplay);
            },
          }}
          dot={
            <CustomizedDot
              onClick={(event: string, payload: IPayload) => {
                setActiveControl({ x: payload.cx - 150, y: payload.cy - 330 });
                setTooltipDisplay(!tooltipDisplay);
              }}
            />
          }
        />
      ) : null}
    </LineChart>
  );
};
