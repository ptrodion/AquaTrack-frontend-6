import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://warettrack.onrender.com/',
  // withCredentials: true,
});

const setAuthToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

instance.interceptors.request.use(
  request => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      request.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => response, // Directly return successful responses.
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark the request as retried to avoid infinite loops.
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        // const persistedData = localStorage.getItem('persist:auth');

        // const parsedPersistedData = JSON.parse(persistedData);

        // const refreshToken = parsedPersistedData.refreshToken;
        // const fromated = refreshToken.substring(1, refreshToken.length - 1);

        console.log('refreshTokenDSfsdfSDFsdf', refreshToken);

        const response = await instance.post('api/auth/refresh', {
          refreshToken,
        });

        const { accessToken, refreshToken: newRefreshToken } =
          response.data.data;

        console.log('token', accessToken, 'reff', refreshToken);
        console.log(newRefreshToken);

        // Store the new access and refresh tokens.
        localStorage.setItem('accessToken', accessToken);

        localStorage.setItem('refreshToken', newRefreshToken);
        // Update the authorization header with the new access token.

        setAuthToken(accessToken);

        return instance(originalRequest); // Retry the original request with the new access token.
      } catch (refreshError) {
        // Handle refresh token errors by clearing stored tokens and redirecting to the login page.
        console.log('tatatta', error.response.status);
        console.error('Token refresh failed:', refreshError);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        // window.location.href = '/signin';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error); // For all other errors, return the error as is.
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      await instance.post('api/auth/register', formData);

      const { data } = await instance.post('api/auth/login', formData);

      setAuthToken(data.data.accessToken);

      localStorage.setItem('accessToken', data.data.accessToken);
      localStorage.setItem('refreshToken', data.data.refreshToken);

      return data.data;
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

      console.log(data.data);

      setAuthToken(data.data.accessToken);

      localStorage.setItem('accessToken', data.data.accessToken);
      localStorage.setItem('refreshToken', data.data.refreshToken);

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
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
