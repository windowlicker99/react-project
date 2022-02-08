import classNames from 'classnames';
import React, { FC } from 'react';

interface IPageTabs {
  active?: string;
  tabs?: string[];
  onClick?: (str: string) => void;
}

export const PageTabs: FC<IPageTabs> = ({
  active = '',
  tabs = ['Domains', 'ECUs', 'Functions', 'Data'],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick = () => {},
}) => (
  <div className="page-tabs">
    {tabs.map((title) => (
      <button
        type="button"
        key={title}
        className={classNames('page-tabs-item', { active: title === active })}
        onClick={() => onClick(title)}
      >
        {title}
      </button>
    ))}
  </div>
);
