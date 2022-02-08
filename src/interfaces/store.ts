import { ETableTypes, IColumn, ICurrentElement, IElementsTabsColumnsList, IUser } from '@interfaces/interfaces';

export interface IAuth {
  user: IUser;
}
export interface IPagination {
  nextPage: () => void;
  prevPage: () => void;
  pickPage: (indexPage: number) => void;
  disablePrev: boolean;
  disableNext: boolean;
  currentPage: number;
  pageAmount: number;
  currentTab: string;
  totalElement: number;
  totalElementOnPage: number;
  showedElements: number;
}

export interface IVehicleStore {
  currentVehicle: string;
}

export interface IHeaderStore {
  subtitles: string[];
}

export interface IChangeTypeAction {
  type: ETableTypes;
}

export interface IUpdateDisplayedColumnsAction {
  displayColumnsList: IDisplayColumnsList;
}

export interface ICustomizeColumnState {
  type: ETableTypes;
  columns: IElementsTabsColumnsList;
}

export interface IStoreState {
  auth: IAuth;
  pagination: IPagination;
  vehicles: IVehicleStore;
  customizeColumns: ICustomizeColumnState;
  header: IHeaderStore;
  element: IElementStore;
}

export interface IDisplayColumnsList {
  [key: string]: boolean;
}

export interface ICustomizeColumnAction {
  type: ETableTypes;
  displayColumnsList: IDisplayColumnsList;
}

export interface ICustomizeColumnsState {
  [key: string]: IColumn[];
}

export interface IElementStore {
  currentElement: ICurrentElement;
}
