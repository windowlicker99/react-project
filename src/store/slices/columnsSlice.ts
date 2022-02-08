import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { tabsColumnsList } from '@constants/tablesColumns';
import { IUpdateDisplayedColumnsAction, ICustomizeColumnState, IChangeTypeAction } from '@interfaces/store';
import { ETableTypes } from '@interfaces/interfaces';

const initialState: ICustomizeColumnState = {
  type: ETableTypes.domains,
  columns: tabsColumnsList,
};

export const columnsSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    changeType: (state, { payload }: PayloadAction<IChangeTypeAction>) => {
      state.type = payload.type;
    },
    updateDisplayedColumns: (state, { payload }: PayloadAction<IUpdateDisplayedColumnsAction>) => {
      const { type } = state;
      const { columns } = initialState;
      const { displayColumnsList } = payload;

      const newColumns = columns[type].filter(({ accessor }) => displayColumnsList[accessor]);

      state.columns[type] = newColumns;
    },
    resetColumns: () => initialState,
  },
});

export const { changeType, updateDisplayedColumns, resetColumns } = columnsSlice.actions;

export const columnsReducer = columnsSlice.reducer;
