// markup only
import React, { FC } from 'react';
import { CardDropdown } from '@components/common/СardDropdown';
import { ModalControl } from '@components/common/ModalControl';

export const DomainChooseContent: FC = () => (
  <div className="domains-aside-item">
    <ModalControl />
    <CardDropdown name="domain" />
  </div>
);
