import { createSelector } from '@reduxjs/toolkit';
import { IStoreState } from '@interfaces/store';
import { getFieldsValues } from '@utils/getFieldsValues';
import {
  tabsColumnsList,
  dropdownColumn,
  vehicleTableInnerColumns,
  dropdownColumnWithExpandAll,
} from '@constants/tablesColumns';
import { ETableTypes } from '@/interfaces/interfaces';

const stateSelector = (state: IStoreState) => state.customizeColumns;

export const selectColumnsList = createSelector(stateSelector, (state) => {
  const { columns, type } = state;
  return columns[type] || [];
});

export const selectVehicleColumnsList = createSelector(stateSelector, (state) => {
  const { columns } = state;
  return [...dropdownColumnWithExpandAll, ...columns[ETableTypes.vehicles], ...vehicleTableInnerColumns];
});

export const selectColumnsWithDropdownList = createSelector(selectColumnsList, (columns) => [
  ...dropdownColumn,
  ...columns,
]);

export const selectColumnsWithExpandAllDropdownList = createSelector(selectColumnsList, (columns) => [
  ...dropdownColumnWithExpandAll,
  ...columns,
]);

export const selectColumnsFieldsList = createSelector(stateSelector, (state) => {
  const { columns, type } = state;
  return tabsColumnsList[type].map(({ Header, accessor }) => ({
    name: accessor,
    label: Header,
    checked: Object.values(columns[type] || []).some((column) => column.accessor === accessor),
  }));
});

export const selectColumnsInitialValues = createSelector(selectColumnsFieldsList, (state) =>
  getFieldsValues(state, 'checked')
);
