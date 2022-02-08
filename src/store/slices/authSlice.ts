import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { IAuth } from '@interfaces/store';
import { API_PATHS } from '@constants/paths';
import HTTPService from '@services/HTTPService';
import { ILoginData } from '@interfaces/interfaces';

export const login = createAsyncThunk('auth/login', async ({ name, password }: ILoginData): Promise<AxiosResponse> => {
  const data = await HTTPService.post(API_PATHS.login, { name, password });
  return data;
});

const initialState: IAuth = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.rejected, (state, action) => {
        console.error(action.error);
      })
      .addCase(login.fulfilled, (state, action) => {
        const { data } = action.payload;
        state.user = data;
      });
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
