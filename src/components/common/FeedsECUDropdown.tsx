import React, { FC } from 'react';
import { IECU } from '@interfaces/interfaces';
import { EECUTypes } from '@interfaces/enums';

interface IFeedsECUDropdown {
  ECUs: IECU[];
}

export const FeedsECUDropdown: FC<IFeedsECUDropdown> = ({ ECUs }) => (
  <div className="table-dropdown-group">
    <div className="table-dropdown-content open">
      <div className="table-dropdown-heading">
        <span className="table-info-title">
          ECUs <span className="text-grey">({ECUs?.length})</span>
        </span>
      </div>
      {ECUs?.map((ECU: IECU) => (
        <div className="table-info-item not-stratch">
          <span className="mr-7">{ECU.name}</span>
          <span className="text-grey mr-7">|</span>
          <span className="text-grey mr-7">Firmware Version:</span>
          <span className="mr-7">{ECU.firmwareVersion} </span>
          <span className="text-grey mr-7">|</span>
          <span className="text-grey mr-7">Operation System:</span>
          <span className="mr-7">{ECU.operationSystem} </span>
          <span className="text-grey mr-7">|</span>
          <span className="mr-7">{ECU.onlineConnectivity} </span>
          <span className="mr-7">
            {ECU.type === EECUTypes.hostECU && (
              <>
                <span className="text-grey mr-7">|</span>
                {ECU.type}{' '}
              </>
            )}
          </span>
        </div>
      ))}
    </div>
  </div>
);
