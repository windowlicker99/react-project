import React, { FC } from 'react';
import { Search } from '@components/common/form-controls/Search';
import { Btn } from '@components/common/form-controls/Btn';
import { PageFilter } from '@components/page-contents/PageFilter';

interface IPageControlsProps {
  buttonText?: string;
  onButtonClick?: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const PageControls: FC<IPageControlsProps> = ({ buttonText, onButtonClick = () => {} }) => (
  <div className="box page-controls">
    <div className="page-controls-content flex-end">
      <div className="page-controls-item">
        <div className="mr-15">
          <Search formLabel="What are you looking for?" formPlaceholder="Search" />
        </div>
        <div className="mr-15">
          <button type="button" className="btn-xs-primary">
            <span className="icon-filter-blue" />
          </button>
        </div>
      </div>
      {buttonText && (
        <div className="page-controls-item">
          <Btn btnStatus="btn-lg-primary" btnIcon="icon-plus" btnText={buttonText} onClick={onButtonClick} />
        </div>
      )}
    </div>
    <PageFilter />
    {/* toggle PageTabs */}
  </div>
);

// QUESTION togglePageFilter()
