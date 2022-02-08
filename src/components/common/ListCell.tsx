import React, { FC } from 'react';

interface IListCellProps {
  list: string[];
}

export const ListCell: FC<IListCellProps> = ({ list }) => (
  <ol className="list-cell">
    {list.map((description) => (
      <li>{description}</li>
    ))}
  </ol>
);
