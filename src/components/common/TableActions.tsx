import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Btn } from '@components/common/form-controls/Btn';
import { DropdownMore } from '@components/common/DropdownMore';
import { FeedsQuestionnaire } from '@components/page-contents/FeedsQuestionnaire';
import { ETableTypes } from '@interfaces/interfaces';
import { setCurrentVehicle } from '@store/slices/vehicleSlice';
import { CLIENT_PATHS } from '@constants/paths';
import { setHeader } from '@store/slices/headerSlice';

interface ITableActionsProps {
  tableType: ETableTypes;
  id?: string;
  model?: string;
  brand?: string;
}

export const TableActions: FC<ITableActionsProps> = ({ tableType, id, brand, model }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isOpenFeedsModal, setIsOpenFeedsModal] = useState(false);
  const onOpenFeedsModal = () => setIsOpenFeedsModal(true);
  const onCloseFeedsModal = () => setIsOpenFeedsModal(false);

  const onVehicleArchitectureClick = () => {
    if (id) {
      dispatch(setCurrentVehicle(id));
    }
    if (model && brand) {
      dispatch(setHeader([brand, model]));
    }

    history.push(`${CLIENT_PATHS.sidebar}${CLIENT_PATHS.architecture}`);
  };

  switch (tableType) {
    case ETableTypes.domains:
    case ETableTypes.ECUs:
    case ETableTypes.functions:
      return (
        <div className="btn-group">
          <Btn btnStatus="btn-xs-primary mr-15" btnIcon="icon-architecture-blue" />
          <Btn btnStatus="btn-xs-primary mr-40" btnIcon="icon-elements" />
        </div>
      );

    case ETableTypes.vehicles:
      return (
        <div className="btn-group">
          <Btn btnStatus="btn-xs-primary mr-10" btnIcon="icon-bell" />
          <Btn btnStatus="btn-xs-primary mr-10" btnIcon="icon-architecture-blue" onClick={onVehicleArchitectureClick} />
          <Btn btnStatus="btn-xs-primary mr-40" btnIcon="icon-elements" />

          <DropdownMore />
        </div>
      );
    case ETableTypes.data:
      return (
        <div className="btn-group">
          <Btn btnStatus="btn-xs-primary mr-15" btnIcon="icon-architecture-blue" />
        </div>
      );

    case ETableTypes.threats:
      return (
        <div className="btn-group">
          <Btn btnStatus="btn-xs-primary mr-15" btnIcon="icon-edit" />
          <Btn btnStatus="btn-xs-danger" btnIcon="icon-delete" />
        </div>
      );

    case ETableTypes.controlGroups:
      return (
        <div className="btn-group flex-end">
          <Btn btnStatus="btn-xs-primary mr-15 " btnIcon="icon-edit" />
          <Btn btnStatus="btn-xs-danger" btnIcon="icon-delete" />
        </div>
      );

    case ETableTypes.feeds:
      return (
        <div className="btn-group">
          <Btn btnStatus="btn-link" btnIcon="icon-power" btnText="Take Action" onClick={onOpenFeedsModal} />
          <FeedsQuestionnaire isOpen={isOpenFeedsModal} onClose={onCloseFeedsModal} />
        </div>
      );
    default:
      return null;
  }
};
