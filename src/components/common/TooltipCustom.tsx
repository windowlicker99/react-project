import React, { FC } from 'react';
import { IControl } from '@/interfaces/interfaces';
import { Heading } from './Heading';

interface ITooltipProps {
  controls: IControl[];
  tooltipDisplay: boolean;
  setTooltipDisplay: (props: boolean) => void;
}

export const TooltipCustom: FC<ITooltipProps> = ({ controls, tooltipDisplay, setTooltipDisplay }) => {
  if (!tooltipDisplay) {
    return null;
  }
  return (
    <div className="tooltip-custom">
      <div className="tooltip-custom-content">
        <div className="tooltip-custom-header">
          <div className="tooltip-custom-heading">
            <Heading headingText="Controls" />
            <button
              type="button"
              className="btn btn-xs-secondary"
              onClick={() => {
                setTooltipDisplay(false);
              }}
            >
              <span className="icon-close" />
            </button>
          </div>
        </div>
        <div className="tooltip-custom-body">
          {controls.map((control) => (
            <p key={control.name} className="tooltip-paragraph">
              {control.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
