import { createSelector } from '@reduxjs/toolkit';
import { IStoreState } from '@interfaces/store';

const stateSelector = (state: IStoreState) => state.pagination;

export const currentPage = createSelector(stateSelector, (state) => state.currentPage);

export const nextPage = createSelector(stateSelector, (state) => state.nextPage);

export const prevPage = createSelector(stateSelector, (state) => state.prevPage);

export const pageAmount = createSelector(stateSelector, (state) => state.pageAmount);

export const pickPage = createSelector(stateSelector, (state) => state.pickPage);

export const disablePrev = createSelector(stateSelector, (state) => state.disablePrev);

export const disableNext = createSelector(stateSelector, (state) => state.disableNext);

export const currentTab = createSelector(stateSelector, (state) => state.currentTab);

export const elementAmount = createSelector(stateSelector, (state) => state.totalElement);

export const showedAmount = createSelector(stateSelector, (state) => state.showedElements);

export const totalElement = createSelector(stateSelector, (state) => state.totalElement);
