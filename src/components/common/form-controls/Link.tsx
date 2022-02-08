import React, { FC } from 'react';

interface ILinkProps {
  linkIcon?: string;
  linkText: string;
}

export const Link: FC<ILinkProps> = ({ linkIcon = '', linkText }) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a href="#" className="link">
    <span className={`${linkIcon} mr-7`} />
    {linkText}
  </a>
);
