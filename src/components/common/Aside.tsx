import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

interface IAsideProps {
  header?: ReactNode;
  asideStatus?: string;
  footer?: ReactNode;
}

export const Aside: FC<IAsideProps> = ({ asideStatus = '', header, footer, children }) => (
  <div className={classNames('aside', asideStatus)}>
    <div className="aside-header">{header}</div>
    <div className="aside-body">{children}</div>
    <div className="aside-footer"> {footer}</div>
  </div>
);
