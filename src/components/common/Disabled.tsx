import React, { FC } from 'react';

export const Disabled: FC = ({ children }) => <div style={{ opacity: 0.5, pointerEvents: 'none' }}>{children}</div>;
