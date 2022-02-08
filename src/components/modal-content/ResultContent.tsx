import React, { FC } from 'react';
import { Btn } from '../common/form-controls/Btn';

interface IResultContent {
  title: string;
  content?: string | React.ReactElement;
  btnText?: string;
  onConfirm: () => void;
}

export const ResultContent: FC<IResultContent> = ({ title, content, btnText = 'OK', onConfirm }) => (
  // togle classes successful/delete
  <div className="result-content successful">
    <div className="result-inner">
      <div className="result-img" />
      <div className="result-message">
        <span className="result-title">{title}</span>
        {typeof content === 'object' && (
          <p className="result-paragraph">Appropriate tickets were created for selected controls.</p>
        )}
        <p className="result-paragraph">{content}</p>
      </div>
      <Btn btnStatus="btn-lg-primary" btnIcon="" btnText={btnText} onClick={onConfirm} />
    </div>
  </div>
);
