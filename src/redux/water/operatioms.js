import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const BaseURL = axios.create({
  baseURL: 'https://warettrack.onrender.com',
});

const setAuthHeader = token => {
  BaseURL.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const addWaterRecord = createAsyncThunk(
  'water/addRecord',
  async ({ amount, date }, thunkAPI) => {
    try {
      const response = await BaseURL.post('/api/water', { amount, date });
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateWaterRecord = createAsyncThunk(
  'water/updateRecord',
  async ({ id, updatedData }, thunkAPI) => {
    try {
      const response = await BaseURL.patch(`/api/water/${id}`, updatedData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Видалення запису
export const deleteWaterRecord = createAsyncThunk(
  'water/deleteRecord',
  async (id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      setAuthHeader(state.user.token);
      await BaseURL.delete(`/water/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Отримання записів за день
export const getDailyWaterRecords = createAsyncThunk(
  'water/getDailyRecords',
  async (date, thunkAPI) => {
    try {
      const response = await BaseURL.get(`/api/water/day/${date}`);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Отримання записів за місяць
export const getMonthlyWaterRecords = createAsyncThunk(
  'water/getMonthlyRecords',
  async (month, thunkAPI) => {
    try {
      const response = await BaseURL.get(`/api/water/month/${month}`);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
