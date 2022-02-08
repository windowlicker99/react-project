import React, { FC, useState } from 'react';
import { PageControls } from '@components/page-contents/PageControls';
import { VehicleContent } from '@components/page-contents/VehicleContent';
import { CreateVehicle } from '@components/page-contents/CreateVehicle';
import { Preloader } from '@components/common/Preloader';

export const VehiclePage: FC = () => {
  const [isOpenVehicleModal, setIsOpenVehicleModal] = useState<boolean>(false);

  const [loading, setLoading] = useState(true);

  const onOpenVehicleModalClick = () => {
    setIsOpenVehicleModal(true);
  };

  const onCloseVehicleModalClick = () => {
    setIsOpenVehicleModal(false);
  };

  return (
    <div className="content" id="vehicle">
      <PageControls buttonText="Create Vehicle" onButtonClick={onOpenVehicleModalClick} />
      <VehicleContent changeLoadingState={setLoading} updateContent={isOpenVehicleModal} />
      <CreateVehicle isOpen={isOpenVehicleModal} onClose={onCloseVehicleModalClick} />
      {loading ? <Preloader /> : null}
    </div>
  );
};
