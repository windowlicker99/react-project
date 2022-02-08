import React, { FC } from 'react';
import AvatarImg from '@images/avatar.jpeg';

interface IAvatarProps {
  name: string;
  avatar: string;
}

export const Avatar: FC<IAvatarProps> = ({ name, avatar }) => (
  <div className="avatar-card">
    <div className="avatar">
      <img className="avatar-img" src={avatar || AvatarImg} alt="avatar" />
    </div>
    <span className="avatar-name">{name || 'John Stone'}</span>
  </div>
);
