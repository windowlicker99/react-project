import React, { FC } from 'react';
import { Heading } from '@components/common/Heading';
import { Aside } from './Aside';
import { ICurrentElement } from '@/interfaces/interfaces';

interface IArchitectureAsideProps {
  asideStatus?: string;
  currentElement: ICurrentElement;
}

export const ArchitectureAside: FC<IArchitectureAsideProps> = ({ asideStatus = '', children, currentElement }) => (
  <Aside
    asideStatus={asideStatus}
    header={
      currentElement ? (
        <Heading headingText="Details" linkText="Edit details" linkIcon="icon-ellipsis-vertival" />
      ) : null
    }
  >
    {children}
  </Aside>
);
