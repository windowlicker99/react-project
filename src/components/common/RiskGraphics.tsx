import React, { FC } from 'react';
import { Progressbar } from '@components/common/Progressbar';
import { IECU } from '@/interfaces/interfaces';

interface IProps {
  id: string;
  ecusForVehicle: IECU[];
}

export const RiskGraphics: FC<IProps> = ({ id, ecusForVehicle }) => (
  <div className="risk-graphics">
    <span className="risk-title" />
    <div className="risk-content">
      {id === '0' ? (
        <>
          <Progressbar progressInfo="66" progressTitle="Infotainment" />
          <Progressbar progressInfo="32" progressTitle="TCU" />
          <Progressbar progressInfo="15" progressTitle="Instrument Cluster" />
          <Progressbar progressInfo="6" progressTitle="Secure GW" />
        </>
      ) : (
        ecusForVehicle?.map((ecu: IECU) => <Progressbar progressInfo="33" progressTitle={ecu.name} />)
      )}
    </div>
  </div>
);
