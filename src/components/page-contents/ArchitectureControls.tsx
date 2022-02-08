import React, { FC, useEffect, useState } from 'react';
import { Btn } from '@components/common/form-controls/Btn';
import { Badge } from '@components/common/Badge';
import { Legend } from '@components/common/Legend';
import { PageFilter } from '@components/page-contents/PageFilter';
import { CircleChart } from '@components/common/CircleChart';
import { domainFilters } from '@constants/Filters';
import { IVehicle } from '@interfaces/interfaces';
import { EBadgeTypes, ERiskLevels } from '@interfaces/enums';
import { initialVehicle } from '@constants/initialData';

interface IArchitectureControls {
  vehicle: IVehicle;
  onOpenDomainModalClick: () => void;
  onOpenHistoryView: () => void;
}

export const ArchitectureControls: FC<IArchitectureControls> = ({
  vehicle,
  onOpenDomainModalClick,
  onOpenHistoryView,
}) => {
  const [displayedVehicle, setDisplayedVehicle] = useState<IVehicle>(initialVehicle);
  const [isOpenFilters, setIsOpenFilters] = useState<boolean>(false);

  const onShowFiltersClick = () => {
    setIsOpenFilters(!isOpenFilters);
  };

  const refreshFilters = () => {
    // temporary solution. Will be removed with adding filters refresh logic
    console.log('refresh filters');
  };

  useEffect(() => {
    if (!vehicle) {
      setDisplayedVehicle(initialVehicle);
      return;
    }
    setDisplayedVehicle(vehicle);
  }, [vehicle]);

  return (
    <div className="box page-controls">
      <div className="page-controls-content">
        <div className="page-controls-item">
          <div className="mr-15">
            <Btn
              disabledBtn={!vehicle}
              btnStatus="btn-lg-primary"
              btnIcon="icon-plus"
              btnText="Create Domain"
              onClick={onOpenDomainModalClick}
            />
          </div>
          <div className="mr-15">
            <Btn btnStatus="btn-lg-outline" btnText="View History" onClick={onOpenHistoryView} />
          </div>
          <div className="mr-15">
            <Btn btnStatus="btn-xs-primary" btnIcon="icon-filter-blue" onClick={onShowFiltersClick} />
          </div>
          <div className="mr-15">
            <Btn btnStatus="btn-xs-secondary" btnIcon="icon-refresh" onClick={refreshFilters} />
          </div>
        </div>
        <div className="page-controls-item">
          <div className="page-controls-architecture">
            <div className="page-controls-data">
              {vehicle && (
                <div className="page-controls-info">
                  <span className="page-controls-name">{displayedVehicle.brand?.name}</span>
                  {displayedVehicle.model}
                </div>
              )}
            </div>
            <div className="page-controls-data">
              Risk Level
              <Badge
                badgeType={EBadgeTypes[displayedVehicle.riskLevel]}
                badgeText={ERiskLevels[displayedVehicle.riskLevel]}
              />
            </div>
            <div className="page-controls-data">
              Progress
              <div className="chart">
                <CircleChart percentage={displayedVehicle.raProgress} />
              </div>
            </div>
            <div className="page-controls-data">
              <Legend isDisabled={!vehicle} legendType="Eth" legendName="Ethernet" />
              <Legend isDisabled={!vehicle} legendType="CAN" legendName="CAN" />
              <Legend isDisabled={!vehicle} legendType="LIN" legendName="LIN" />
            </div>
          </div>
        </div>
      </div>
      <PageFilter filters={domainFilters} isOpen={isOpenFilters} close={onShowFiltersClick} />
    </div>
  );
};
