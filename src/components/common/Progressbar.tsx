import React, { FC } from 'react';

interface IProgressbarProps {
  progressInfo: string;
  progressTitle: string;
}

export const Progressbar: FC<IProgressbarProps> = ({ progressInfo, progressTitle }) => (
  <div className="progressbar">
    <div className="progress-line">
      <span className="progress-line-active" style={{ width: `${progressInfo}%` }} />
    </div>
    <div className="progress-label">
      <span className="progress-info">{progressInfo}</span>
      <span className="progress-title">{progressTitle}</span>
    </div>
  </div>
);

// INLINE STYLES at progress-line-active style="width: 60%"
