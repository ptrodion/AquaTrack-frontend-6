import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const BaseURL = axios.create({
  baseURL: 'https://warettrack.onrender.com',
});

const setAuthHeader = token => {
  BaseURL.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getUser = createAsyncThunk(
  '/api/auth/current',
  async ({ user }, thunkAPI) => {
    try {
      const response = await BaseURL.post('/api/auth/current', { user });
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  '/api/auth/update-current-user',
  async ({ id, updatedData }, thunkAPI) => {
    try {
      const response = await BaseURL.post('/api/auth/update-current-user', { id, updatedData });
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
