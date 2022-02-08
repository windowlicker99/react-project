import classNames from 'classnames';
import React, { FC } from 'react';
import ReactTooltip from 'react-tooltip';
import { Btn } from './form-controls/Btn';

interface IExpandAllProps {
  isExpanded: boolean;
  toggleAllRowsExpanded: (isExpanded: boolean) => void;
}

export const ExpandAllBtn: FC<IExpandAllProps> = ({ isExpanded, toggleAllRowsExpanded }) => (
  <>
    <Btn
      btnStatus="btn-xs-primary"
      btnIcon={classNames('icon-arrow-line', { active: isExpanded })}
      dataFor="expandBtn"
      onClick={() => {
        toggleAllRowsExpanded(!isExpanded);
      }}
    />
    <ReactTooltip uuid="expandBtn" className="expand-tooltip" id="expandBtn" place="top" effect="solid">
      {isExpanded ? 'Hide All' : 'Expand All'}
    </ReactTooltip>
  </>
);
