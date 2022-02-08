import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Table } from '@components/page-contents/Table';
import { ETableTypes } from '@interfaces/interfaces';
import { selectVehicleColumnsList } from '@store/selectors/columns';

interface IVehicleContent {
  updateContent?: boolean;
  changeLoadingState: (props: boolean) => void;
}

export const VehicleContent: FC<IVehicleContent> = ({ updateContent, changeLoadingState }) => {
  const customizedColumns = useSelector(selectVehicleColumnsList);

  return (
    <div className="box-table">
      <Table
        changeLoadingState={changeLoadingState}
        updateContent={updateContent}
        tableType={ETableTypes.vehicles}
        columns={customizedColumns}
        showHeader
      />
    </div>
  );
};
