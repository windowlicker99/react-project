import React, { FC } from 'react';

export const MessageModalContent: FC = () => (
  <div className="modal-info center">
    <div className="modal-img icon-mark-read" />
    <span className="modal-title">Mark All as Read</span>
    <span className="modal-subtitle">
      Do you really want to mark all notifications as read?
    </span>
  </div>
);

// QUESTION <div class="modal-img icon-mark-read"></div>-change class to icon-mark-delete
