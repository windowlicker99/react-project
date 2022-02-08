import React, { FC } from 'react';

interface IPropertyWithSeparatorProps {
  name?: string | JSX.Element;
  value?: string | number | JSX.Element;
}

export const PropertyWithSeparator: FC<IPropertyWithSeparatorProps> = ({ name = '', value = '' }) => (
  <>
    <span className="">{name}</span>
    <span className="header-subtitle table-dropdown-subtitle text-grey">{value}</span>
  </>
);
