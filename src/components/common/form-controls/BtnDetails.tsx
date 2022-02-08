import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { Btn } from './Btn';

interface BtnDetailsProps {
  BtnDetailsText: string;
  path: string;
}

export const BtnDetails: FC<BtnDetailsProps> = ({ BtnDetailsText, path }) => {
  const history = useHistory();
  const onClick = () => {
    if (path) {
      history.push(path);
    }
  };
  return (
    <div role="button" tabIndex={0} className="btn-details" onClick={onClick} onKeyDown={onClick}>
      <span className="btn-detail-text">{BtnDetailsText}</span>
      <Btn btnStatus="btn-xs-primary" btnIcon="icon-arrow-border-right" />
    </div>
  );
};
