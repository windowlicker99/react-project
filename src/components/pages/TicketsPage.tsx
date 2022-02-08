import React, { FC } from 'react';
import { PageControls } from '@components/page-contents/PageControls';
import { TicketsContent } from '@components/page-contents/TicketsContent';

export const TicketsPage: FC = () => (
  <div className="content" id="tickets">
    <PageControls />
    <TicketsContent />
  </div>
);
