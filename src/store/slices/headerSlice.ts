import { createSlice } from '@reduxjs/toolkit';

import { IHeaderStore } from '@interfaces/store';

const initialState: IHeaderStore = {
  subtitles: [],
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setHeader: (state, action) => {
      state.subtitles = action.payload;
    },
  },
});

export const { setHeader } = headerSlice.actions;

export const headerReducer = headerSlice.reducer;
