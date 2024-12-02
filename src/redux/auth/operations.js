import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://warettrack.onrender.com/',
  // withCredentials: true,
});

const setAuthToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const { data } = await axios.post(
        'https://warettrack.onrender.com/api/auth/register',
        formData
      );
      return data;
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        const message = error.response.data.message || 'Registration failed.';
        return thunkAPI.rejectWithValue({ status, message });
      } else {
        return thunkAPI.rejectWithValue({
          status: 0,
          message: 'Network error. Please try again.',
        });
      }
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      const { data } = await instance.post('api/auth/login', formData);

      setAuthToken(data.data.accessToken);

      return data.data;
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        const message =
          error.response.data.message || 'Unexpected error occurred';
        return thunkAPI.rejectWithValue({ status, message });
      } else {
        return thunkAPI.rejectWithValue({
          status: 0,
          message: 'Network error. Please try again.',
        });
      }
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      setAuthToken(token);

      const { data } = await instance.post('api/auth/refresh');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      if (token) return true;

      return false;
    },
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const { data } = await instance.post('api/auth/logout');

    setAuthToken('');

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
