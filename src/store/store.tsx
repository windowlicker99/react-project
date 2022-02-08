import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { authReducer } from '@store/slices/authSlice';
import { columnsReducer } from '@store/slices/columnsSlice';
import { paginationReducer } from '@store/slices/paginationSlice';
import { vehiclesReducer } from '@store/slices/vehicleSlice';
import { headerReducer } from '@store/slices/headerSlice';
import { elementReducer } from '@store/slices/elementSlice';

const reducers = combineReducers({
  auth: authReducer,
  vehicles: vehiclesReducer,
  customizeColumns: columnsReducer,
  pagination: paginationReducer,
  header: headerReducer,
  element: elementReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['auth', 'customizeColumns'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

export const persistor = persistStore(store);
