import React, { FC } from 'react';
import { IControl, IThreat } from '@interfaces/interfaces';

interface IThumbProps {
  content: IThreat | IControl;
}

export const ThumbCrumbs: FC<IThumbProps> = ({ content }) => (
  <ul className="thumbs-crumbs">
    <li className="thumbs-crumbs-item">{content.name}</li>
    <li className="thumbs-crumbs-item">{content.category}</li>
  </ul>
);
