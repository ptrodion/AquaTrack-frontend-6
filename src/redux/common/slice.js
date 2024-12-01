import { createSlice } from '@reduxjs/toolkit';
import { getUsersCount } from './operations';

const INITIAL_STATE = {
  usersCount: 0,
  error: null,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState: INITIAL_STATE,
  extraReducers: builder => {
    builder
      .addCase(getUsersCount.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUsersCount.fulfilled, (state, action) => {
        state.usersCount = action.payload;
      })
      .addCase(getUsersCount.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const commonReducer = commonSlice.reducer;
