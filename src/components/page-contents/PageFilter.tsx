import React, { FC } from 'react';
import classNames from 'classnames';
import { SelectComponent } from '@components/common/form-controls/SelectComponent';
import { Btn } from '@components/common/form-controls/Btn';
import { IFilter } from '@interfaces/interfaces';

interface IPageFilter {
  filters?: Array<IFilter>;
  isOpen?: boolean;
  close?: () => void;
}

export const PageFilter: FC<IPageFilter> = ({ filters = [], isOpen = false, close }) => {
  const onApplyFilters = () => {
    // there should be some apply logic
    close();
  };

  return (
    <div className={classNames('page-filter', isOpen ? 'show' : '')}>
      <div className="page-filter-inner">
        {filters.map(({ label, name }) => (
          <div className="page-filter-item" key={name}>
            <SelectComponent label={label} placeholder={label} />
          </div>
        ))}
      </div>
      <div className="page-filter-btn">
        <Btn btnStatus="btn-xs-secondary mr-15" btnIcon="icon-close" onClick={close} />
        <Btn btnStatus="btn-lg-outline" btnText="Apply" onClick={onApplyFilters} />
      </div>
    </div>
  );
};

// QUESTION <div className="page-filter"> <!-- add className show -->
