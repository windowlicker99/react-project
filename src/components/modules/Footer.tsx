import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from '@components/common/Pagination';
import { currentTab, elementAmount, showedAmount } from '@/store/selectors/pagination';

export const Footer: FC = () => {
  const tab = useSelector(currentTab);
  const totalElements = useSelector(elementAmount);
  const elements = useSelector(showedAmount);

  return (
    <footer className="footer">
      <div className="footer-inner ">
        <span className="footer-text">
          Showing {elements} of {totalElements} {tab}
        </span>
        <Pagination />
      </div>
    </footer>
  );
};
