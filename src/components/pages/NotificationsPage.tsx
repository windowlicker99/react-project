import React, { FC } from 'react';
import { PageControls } from '@components/page-contents/PageControls';
import { NotificationsContent } from '@components/page-contents/NotificationsContent';

export const NotificationsPage: FC = () => (
  <div className="content" id="notifications">
    <PageControls />
    <NotificationsContent />
  </div>
);
