import { createAsyncThunk } from '@reduxjs/toolkit';

import { instance } from '../auth/operations';

export const getUser = createAsyncThunk('user/getUser', async (_, thunkAPI) => {
  try {
    const response = await instance.get('/api/auth/current');

    return response.data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (updatedUser, thunkAPI) => {
    console.log('updateUser', updateUser);

    try {
      const response = await instance.patch(
        '/api/auth/update-current-user',
        {
          ...updatedUser,
        },
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
