import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { instance } from '../auth/operations.js';

export const BaseURL = axios.create({
  baseURL: 'https://warettrack.onrender.com',
});

const setAuthHeader = token => {
  BaseURL.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getUser = createAsyncThunk('user/current', async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    const response = await instance.get('api/auth/current');

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

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
