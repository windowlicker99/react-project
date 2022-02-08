import {
  IGateway,
  IDataRow,
  IDomain,
  IDomainRow,
  IECU,
  IECURow,
  IFunctionsRow,
  ITicket,
  IVehicleRow,
  IOption,
  IThreatListRow,
  IThreatRow,
  IDetailedFindingRow,
  IMainFindingRow,
  IConceptRow,
  IControlsRow,
  IFeedRow,
} from './interfaces';

export type TRows = Partial<
  | IVehicleRow[]
  | IDomainRow[]
  | IDataRow[]
  | IFunctionsRow[]
  | IECURow[]
  | IVehicleRow[]
  | IThreatRow[]
  | IThreatListRow[]
  | IDetailedFindingRow[]
  | IMainFindingRow[]
  | IConceptRow[]
  | IControlsRow[]
  | IFeedRow[]
>;

export type TSetFieldValue = (name: string, value: IOption | IOption[]) => void;

export type TList<T> = { [key: string]: T };

export type TElement = Partial<IECU & IDomain & IGateway>;

export type TPutData = Partial<IECU | ITicket>;

export type TField = {
  label: string;
  name: string;
  placeholder?: string;
};

export type TOnlineConnectivity = 'Online' | 'Offline';
