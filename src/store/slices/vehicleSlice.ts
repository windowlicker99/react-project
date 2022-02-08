import { createSlice } from '@reduxjs/toolkit';

import { IVehicleStore } from '@interfaces/store';

const initialState: IVehicleStore = {
  currentVehicle: null,
};

export const vehicleSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    setCurrentVehicle: (state, action) => {
      state.currentVehicle = action.payload;
    },
    resetVehicles: () => initialState,
  },
});

export const { setCurrentVehicle, resetVehicles } = vehicleSlice.actions;

export const vehiclesReducer = vehicleSlice.reducer;
