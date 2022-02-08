import React, { FC, ReactElement } from 'react';
import { Header } from '@components/modules/Header';

interface IPageContentLayoutProps {
  children: ReactElement;
  title: string;
}

export const PageContentLayout: FC<IPageContentLayoutProps> = ({ children, title }) => (
  <>
    <Header title={title} />
    <div className="container">{children}</div>
  </>
);
