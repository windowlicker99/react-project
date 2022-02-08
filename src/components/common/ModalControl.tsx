import React, { FC } from 'react';
import { Btn } from './form-controls/Btn';
import { Search } from './form-controls/Search';

interface IModalControlProps {
  searchText?: string;
  onSearch?: React.Dispatch<React.SetStateAction<string>>;
  btnText?: string;
}

export const ModalControl: FC<IModalControlProps> = ({ searchText, onSearch, btnText }) => (
  <div className="modal-control">
    <div className="modal-control-inner">
      <Search formLabel="" formPlaceholder="Search" searchText={searchText} onSearch={onSearch} />
      <Btn btnStatus="btn-lg-primary ml-15" btnIcon="" btnText={btnText} />
    </div>
  </div>
);
