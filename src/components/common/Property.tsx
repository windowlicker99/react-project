import React, { FC } from 'react';
import { TList } from '@interfaces/types';

interface IPropertyProps {
  name?: string | JSX.Element;
  value?: string | number | JSX.Element | string[];
  style?: TList<string | number>;
  isSeparator?: boolean;
}

export const Property: FC<IPropertyProps> = ({ name = '', value = '', style = {}, isSeparator = false }) => {
  let renderValue = value;

  if (typeof value === 'object' && (value as string[]).length) {
    renderValue = (value as string[]).map((name) => `${name} `);
  }

  return (
    <div className="property" key={`${name}${value}`}>
      <span className="property-name">{name}</span>
      <span className="property-value" style={style}>
        {isSeparator && ' | '}
        {renderValue}
      </span>
    </div>
  );
};
