import { createSlice } from '@reduxjs/toolkit';

import { IPagination } from '@interfaces/store';

const initialState: IPagination = {
  nextPage: null,
  prevPage: null,
  pickPage: null,
  disablePrev: false,
  disableNext: true,
  currentPage: 0,
  pageAmount: 0,
  currentTab: 'domains',
  totalElement: 0,
  totalElementOnPage: 0,
  showedElements: 0,
};

export const paginationSlice = createSlice({
  name: 'pagination',

  initialState,

  reducers: {
    setPrevPage: (state, action) => {
      state.prevPage = action.payload;
    },

    setNextPage: (state, action) => {
      state.nextPage = action.payload;
    },

    currentPage: (state, action) => {
      state.currentPage = action.payload;
    },

    pageAmount: (state, action) => {
      state.pageAmount = action.payload;
    },

    pickPage: (state, action) => {
      state.pickPage = action.payload;
    },

    disablePrev: (state, action) => {
      state.disablePrev = action.payload;
    },

    disableNext: (state, action) => {
      state.disableNext = action.payload;
    },

    currentTab: (state, action) => {
      state.currentTab = action.payload;
    },

    totalElement: (state, action) => {
      state.totalElement = action.payload;
      state.showedElements = action.payload;
    },

    totalElementOnPage: (state, action) => {
      state.totalElementOnPage = action.payload;
      if (state.currentPage + 1 === state.pageAmount) {
        state.showedElements = state.totalElement;
      } else {
        state.showedElements = (state.currentPage + 1) * 8;
        if (!state.totalElement) {
          state.showedElements = 0;
        }
      }
    },
  },
});

export const { setNextPage } = paginationSlice.actions;

export const { setPrevPage } = paginationSlice.actions;

export const { currentPage } = paginationSlice.actions;

export const { pageAmount } = paginationSlice.actions;

export const { pickPage } = paginationSlice.actions;

export const { disablePrev } = paginationSlice.actions;

export const { disableNext } = paginationSlice.actions;

export const { currentTab } = paginationSlice.actions;

export const { totalElement } = paginationSlice.actions;

export const { totalElementOnPage } = paginationSlice.actions;

export const paginationReducer = paginationSlice.reducer;
