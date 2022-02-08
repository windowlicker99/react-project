/* eslint-disable @typescript-eslint/no-empty-function */
import React, { FC, ChangeEvent } from 'react';

interface ISearchProps {
  formLabel?: string;
  formPlaceholder: string;
  searchText?: string;
  onSearch?: (arg0: string) => void;
}

export const Search: FC<ISearchProps> = ({ formLabel = '', formPlaceholder, searchText = '', onSearch = () => {} }) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => onSearch(e.currentTarget.value);
  const onResetClick = () => onSearch('');

  return (
    <div className="form-group">
      <label htmlFor="exampleFormControlInput1" className="form-label search-label">
        {formLabel}
      </label>
      <div className="search-group">
        <div className="search-icon">
          <span className="icon-loupe" />
        </div>
        <input
          type="email"
          className="form-control search-input"
          id="exampleFormControlInput1"
          placeholder={formPlaceholder}
          value={searchText}
          onChange={onChange}
        />
        <button type="button" className="search-btn" onClick={onResetClick}>
          <span className="icon-cross" />
        </button>
      </div>
    </div>
  );
};
