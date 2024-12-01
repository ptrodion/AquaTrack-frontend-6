import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/operations';

export const getUsersCount = createAsyncThunk(
  'common/getUsersCount',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/api/users-count');

      return data.totalUser;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
