import { createSelector } from '@reduxjs/toolkit';
import { IStoreState } from '@interfaces/store';

const stateSelector = (state: IStoreState) => state.element;

export const currentElementSelector = createSelector(stateSelector, (state) => state.currentElement);
