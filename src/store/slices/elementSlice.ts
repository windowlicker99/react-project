import { createSlice } from '@reduxjs/toolkit';

import { IElementStore } from '@interfaces/store';

const initialState: IElementStore = {
  currentElement: null,
};

export const elementSlice = createSlice({
  name: 'element',
  initialState,
  reducers: {
    setCurrentElement: (state, action) => {
      state.currentElement = action.payload;
    },
  },
});

export const { setCurrentElement } = elementSlice.actions;

export const elementReducer = elementSlice.reducer;
