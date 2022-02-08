import React, { useState, FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ArchitectureControls } from '@components/page-contents/ArchitectureControls';
import { Btn } from '@components/common/form-controls/Btn';
import { ArchitectureScheme } from '@components/page-contents/ArchitectureScheme';
import { ModalCenter } from '@components/modules/ModalCenter';
import { AssignRA } from '@components/page-contents/AssignRA';
import { ArchitectureAside } from '@components/common/ArchitectureAside';
import { ArchitectureDetailsContent } from '@components/common/aside-content/ArchitectureDetailsContent';
import { EAside } from '@interfaces/enums';
import { selectCurrentVehicle } from '@store/selectors/vehicle';
import { getCurrentVehicle } from '@utils/getCurrentVehicle';
import { IGatewayResponse, IVehicle } from '@interfaces/interfaces';
import { DomainDetails } from '@components/page-contents/DomainDetails';
import { ECUDetails } from '@components/page-contents/ECUDetails';
import { getVehicleGateway } from '@utils/getVehicleGateway';
import { setCurrentElement } from '@store/slices/elementSlice';
import { InitiateRiskAssesment } from '@components/page-contents/InitiateRiskAssesment';
import { currentElementSelector } from '@store/selectors/element';
import { getSchemeData } from '@utils/getSchemeData';
import { IArchitectureDomain } from '@interfaces/ArchitectureScheme/interfaces';
import { Preloader } from '@components/common/Preloader';
import { setHeader } from '@/store/slices/headerSlice';

export const ArchitecturePage: FC = () => {
  const dispatch = useDispatch();
  const [vehicle, setVehicle] = useState<IVehicle>(null);
  const [schemeData, setSchemeData] = useState<IArchitectureDomain[]>(null);
  const [isOpenDomainModal, setIsOpenDomainModal] = useState<boolean>(false);
  const [isOpenECUModal, setIsOpenECUModal] = useState<boolean>(false);
  const [isOpenHistoryView, setIsOpenHistoryView] = useState<boolean>(false);
  const [isOpenRAModal, setIsOpenRAModal] = useState<boolean>(false);
  const [isOpenInitiateView, setIsOpenInitiateView] = useState<boolean>(false);
  const [gateway, setGateway] = useState<IGatewayResponse>(null);
  const [loading, setLoading] = useState(true);

  const currentElement = useSelector(currentElementSelector);

  const currentVehicle = useSelector(selectCurrentVehicle);

  const onOpenDomainModalClick = () => {
    setIsOpenDomainModal(true);
  };

  const onCloseDomainModalClick = () => {
    setIsOpenDomainModal(false);
  };

  const onOpenECUModalClick = () => {
    setIsOpenECUModal(true);
  };

  const onCloseECUModalClick = () => {
    setIsOpenECUModal(false);
  };

  const onOpenHistoryView = () => {
    setIsOpenHistoryView(true);
  };

  const onCloseHistoryView = () => {
    setIsOpenHistoryView(false);
  };

  const onOpenInitiateView = () => {
    setIsOpenInitiateView(true);
  };

  const onOpenRAModal = () => {
    setIsOpenRAModal(true);
  };
  const onCloseRAModal = () => {
    setIsOpenRAModal(false);
  };

  const onApplyModal = () => {
    console.log('apply'); // temp
  };

  const getVehicle = async () => {
    if (!currentVehicle) {
      setVehicle(null);
      return;
    }
    const currentVehicleData = await getCurrentVehicle(currentVehicle);
    setVehicle(currentVehicleData);
  };

  const onCloseInitiateView = () => {
    setIsOpenInitiateView(false);
    getVehicle();
  };

  const getController = async (vehicleId: string) => {
    try {
      setLoading(true);
      const { gateway, type } = await getVehicleGateway(vehicleId);
      setGateway({ gateway, type });
      dispatch(setCurrentElement({ type: EAside[type], id: gateway?.id }));
      setLoading(false);
    } catch (error) {
      dispatch(setCurrentElement(null));
    }
  };

  const getArchitectureSchemeData = async (id: string) => {
    const newSchemeData = await getSchemeData(id);
    setSchemeData(newSchemeData);
    setLoading(false);
  };

  useEffect(() => {
    if (!isOpenDomainModal || isOpenECUModal) {
      getArchitectureSchemeData(currentVehicle);
    }
  }, [currentVehicle, isOpenDomainModal, isOpenECUModal]);

  useEffect(() => {
    getVehicle();
  }, [currentVehicle]);

  useEffect(() => {
    if (currentVehicle && !gateway && !isOpenECUModal) {
      getController(currentVehicle);
    }
  }, [currentVehicle, isOpenECUModal]);

  useEffect(() => {
    if (vehicle) {
      const subtitles = [];
      if (vehicle.model) {
        subtitles.push(vehicle.model);
      }

      if (vehicle.brand?.name) {
        subtitles.push(vehicle?.brand?.name);
      }
      dispatch(setHeader(subtitles));
    }
  }, [vehicle]);

  return (
    <div className="content" id="architecture">
      <ArchitectureControls
        vehicle={vehicle}
        onOpenDomainModalClick={onOpenDomainModalClick}
        onOpenHistoryView={onOpenHistoryView}
      />
      <div className="page-content">
        {loading ? (
          <Preloader />
        ) : (
          <>
            <div className="page-thumb">
              <div className="architecture-scheme" id="architectureScheme">
                <ArchitectureScheme
                  gatewayInfo={gateway}
                  schemeData={schemeData}
                  onECUCreateClick={onOpenECUModalClick}
                />
              </div>
              <div className="architecture-controls">
                <div className="page-controls-main">
                  <div className="btn-box">
                    <Btn btnStatus="btn-control" btnIcon="icon-grid" />
                    <Btn btnStatus="btn-control" btnIcon="icon-list" />
                  </div>
                  <div className="btn-box">
                    <Btn btnStatus="btn-control" btnIcon="icon-maximize" />
                    <div className="btn-box-separator" />
                    <Btn btnStatus="btn-control" btnIcon="icon-minus" />
                  </div>
                </div>
                <Btn btnStatus="btn-control" btnIcon="icon-chevrons-right" />
              </div>
            </div>
            <ArchitectureAside currentElement={currentElement} asideStatus="large">
              <ArchitectureDetailsContent
                onAssign={onOpenRAModal}
                element={currentElement}
                isAssignModalOpen={isOpenRAModal}
                onOpenInitiateView={onOpenInitiateView}
                isInitiateModalOpen={isOpenInitiateView}
              />
            </ArchitectureAside>
          </>
        )}
      </div>
      <DomainDetails
        vehicle={vehicle}
        isOpenDomainModal={isOpenDomainModal}
        onCloseDomainModalClick={onCloseDomainModalClick}
      />
      <ECUDetails vehicle={vehicle} isOpen={isOpenECUModal} onClose={onCloseECUModalClick} />
      <AssignRA element={currentElement} isOpen={isOpenRAModal} onClose={onCloseRAModal} />
      {/* Add content to modals */}
      <ModalCenter title="History" isOpen={isOpenHistoryView} onApply={onApplyModal} onClose={onCloseHistoryView} />
      <InitiateRiskAssesment
        element={currentElement}
        vehicle={vehicle}
        isOpenInitiateView={isOpenInitiateView}
        onCloseInitiateView={onCloseInitiateView}
      />
    </div>
  );
};
