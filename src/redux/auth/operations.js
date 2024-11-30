import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const BaseURL = axios.create({
  baseURL: 'https://warettrack.onrender.com',
});
const setAuthHeader = token => {
  BaseURL.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'user/register',
  async (newUser, thunkApi) => {
    try {
      const res = await BaseURL.post('/api/auth/register', newUser);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'user/logIn',
  async (logUser, thunkApi) => {
    try {
      const res = await BaseURL.post('/api/auth/login', logUser);
      setAuthHeader(res.data.token);
      console.log(res.data.token);

      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('user/logOut', async (_, thunkApi) => {
  try {
    await BaseURL.post('/api/auth/logout');
    BaseURL.defaults.headers.common.Authorization = '';
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refresUser = createAsyncThunk(
  '/api/auth/refresh',
  async (_, thunkApi) => {
    const reduxStane = thunkApi.getState();
    console.log(reduxStane);

    setAuthHeader(reduxStane.user.token);
    try {
      const res = await BaseURL.post('/api/auth/refresh');
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkApi) => {
      const reduxStane = thunkApi.getState();
      return reduxStane.user.token !== null;
    },
  }
);

export const updateFetchUser = createAsyncThunk(
  'user/updateUser',
  async (updateData, thunkAPI) => {
    try {
      const res = await axios.patch(
        ' /api/auth/update-current-user',
        updateData
      );
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchCurrentUser = createAsyncThunk(
  'user/fetchCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.user.token;

    if (!token) {
      return thunkAPI.rejectWithValue('No token available');
    }

    try {
      setAuthHeader(token);
      const res = await BaseURL.get('/api.auth/find-one-user');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to fetch user'
      );
    }
  }
);
