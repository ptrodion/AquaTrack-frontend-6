import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://warettrack.onrender.com/',
  // withCredentials: true,
});
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
      console.log('tututu');

      originalRequest._retry = true; // Mark the request as retried to avoid infinite loops.
      try {
        const persistedData = localStorage.getItem('persist:auth'); // Retrieve the stored refresh token.
        // Make a request to your auth server to refresh the token.
        const parsedPersistedData = JSON.parse(persistedData);

        const refreshToken = parsedPersistedData.refreshToken;

        console.log('refreshTokenDSfsdfSDFsdf', refreshToken);

        const response = await instance.post('api/auth/refresh', {
          refreshToken,
        });

        console.log('requesr22222222', originalRequest);
        const { accessToken, refreshToken: newRefreshToken } = response.data;
        // Store the new access and refresh tokens.
        localStorage.setItem('accessToken', accessToken);

        localStorage.setItem('refreshToken', newRefreshToken);
        // Update the authorization header with the new access token.
        instance.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${accessToken}`;
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

const setAuthToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      await instance.post('api/auth/register', formData);

      const { data } = await instance.post('api/auth/login', formData);

      setAuthToken(data.data.accessToken);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
