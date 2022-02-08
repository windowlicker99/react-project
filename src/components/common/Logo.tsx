import React, { FC } from 'react';
import { CLIENT_PATHS } from '@/constants/paths';
import '@styles/components/common/_logo.scss';

export const Logo: FC = () => (
  <a href={CLIENT_PATHS.main} className="logo">
    <span className="icon-logo" />
  </a>
);
