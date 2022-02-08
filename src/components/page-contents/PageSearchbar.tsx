import React, { FC } from 'react';
import { Btn } from '@components/common/form-controls/Btn';
import { Search } from '@components/common/form-controls/Search';

interface IPageSearchbar {
  searchText: string;
  onSearch: (arg0: string) => void;
  onCustomizeColumnsClick: () => void;
  btnText?: string;
  btnIcon?: string;
  showFilterBtn?: boolean;
}

export const PageSearchbar: FC<IPageSearchbar> = ({
  searchText,
  onSearch,
  onCustomizeColumnsClick,
  btnText = '',
  btnIcon = '',
  showFilterBtn = true,
}) => (
  <div className="page-controls-content flex-end">
    <div className="page-controls-item">
      <div className="mr-15">
        <Search
          formLabel="What are you looking for?"
          formPlaceholder="Search"
          searchText={searchText}
          onSearch={onSearch}
        />
      </div>
      {showFilterBtn && (
        <div className="mr-15">
          <button type="button" className="btn-xs-primary">
            <span className="icon-filter-blue" />
          </button>
        </div>
      )}
    </div>
    <div className="page-controls-item">
      <Btn btnStatus="btn-lg-primary" btnIcon={btnIcon} btnText={btnText} onClick={onCustomizeColumnsClick} />
    </div>
  </div>
);
