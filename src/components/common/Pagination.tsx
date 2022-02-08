import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import {
  nextPage,
  prevPage,
  pageAmount,
  currentPage,
  pickPage,
  disableNext,
  disablePrev,
} from '@store/selectors/pagination';

export const Pagination: FC = () => {
  const setNextPage = useSelector(nextPage);
  const setPrevPage = useSelector(prevPage);
  const setPageAmount = useSelector(pageAmount);
  const selectedPage = useSelector(currentPage);
  const goToPage = useSelector(pickPage);
  const disableNextIcon = useSelector(disableNext);
  const disablePrevIcon = useSelector(disablePrev);

  const pagesArray = Array.from(Array(setPageAmount).keys());

  return (
    <nav className="pagination" aria-label="pagination">
      <ul className="pagination-list">
        <li className="page-item disabled" role="presentation" onClick={setPrevPage}>
          {disablePrevIcon && (
            <span className="page-link prev">
              <span className="icon-prev" />
            </span>
          )}
        </li>

        {pagesArray.map((page) => (
          <li className={classNames('page-item', { active: selectedPage === page })} key={page}>
            <span className="page-link" role="presentation" onClick={() => goToPage(page)}>
              {page + 1}
            </span>
          </li>
        ))}

        <li className="page-item" role="presentation" onClick={setNextPage}>
          {disableNextIcon && (
            <span className="page-link next">
              <span className="page-link next" />
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
};
