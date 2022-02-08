import React, { FC } from 'react';
export const Preloader: FC = () => (
  <div className="preloader">
    <div className="preloader-circle" />
    <span className="preloader-label">Loading data...</span>
  </div>
);
