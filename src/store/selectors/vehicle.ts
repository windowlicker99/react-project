import { createSelector } from '@reduxjs/toolkit';
import { IStoreState } from '@interfaces/store';

const stateSelector = (state: IStoreState) => state.vehicles;

export const selectCurrentVehicle = createSelector(stateSelector, (state) => state.currentVehicle);
