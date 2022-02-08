import { createSelector } from '@reduxjs/toolkit';
import { IStoreState } from '@interfaces/store';

const stateSelector = (state: IStoreState) => state.auth;

export const selectUser = createSelector(stateSelector, (state) => state.user);
