import { createSlice } from '@reduxjs/toolkit';
import {
  addWaterRecord,
  updateWaterRecord,
  deleteWaterRecord,
  getDailyWaterRecords,
  getMonthlyWaterRecords,
} from './operatioms';

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    records: [],
    dailyRecords: [],
    monthlyRecords: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addWaterRecord.fulfilled, (state, action) => {
        state.records.push(action.payload);
      })
      .addCase(updateWaterRecord.fulfilled, (state, action) => {
        const index = state.records.findIndex(r => r.id === action.payload.id);
        if (index !== -1) state.records[index] = action.payload;
      })
      .addCase(deleteWaterRecord.fulfilled, (state, action) => {
        state.records = state.records.filter(r => r.id !== action.payload);
      })
      .addCase(getDailyWaterRecords.fulfilled, (state, action) => {
        state.dailyRecords = action.payload;
      })
      .addCase(getMonthlyWaterRecords.fulfilled, (state, action) => {
        state.monthlyRecords = action.payload;
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export default waterSlice.reducer;
