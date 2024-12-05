import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/operations';
import { checkIsToday } from '../../utils/getDateNow';

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

export const setSelectedDay = createAsyncThunk(
  'common/setSelectedDay',
  async (slelectedDate, thunkAPI) => {
    try {
      const date = new Date(slelectedDate);
      const day = date.getDate();
      const month = date.toLocaleString('en-US', { month: 'long' });
      const formattedDate = `${day}, ${month}`;

      const isToday = checkIsToday(formattedDate);

      return isToday ? 'Today' : formattedDate;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
