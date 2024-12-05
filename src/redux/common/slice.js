import { createSlice } from '@reduxjs/toolkit';
import { getUsersCount, setSelectedDay } from './operations';

const INITIAL_STATE = {
  usersCount: 0,
  selectedDate: null,
  error: null,
  isLoading: false,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    // Обробка getUsersCount
    builder
      .addCase(getUsersCount.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUsersCount.fulfilled, (state, action) => {
        state.isLoading = false;
        state.usersCount = action.payload;
      })
      .addCase(getUsersCount.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(setSelectedDay.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(setSelectedDay.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedDate = action.payload;
      })
      .addCase(setSelectedDay.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const commonReducer = commonSlice.reducer;
