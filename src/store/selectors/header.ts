import { createSelector } from '@reduxjs/toolkit';
import { IStoreState } from '@interfaces/store';

const stateSelector = (state: IStoreState) => state.header;

export const headerSubtitles = createSelector(stateSelector, (state) => state.subtitles);

export const showHeaderArrow = createSelector(stateSelector, (state) => Boolean(state.subtitles?.length));
