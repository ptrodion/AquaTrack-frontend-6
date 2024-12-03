import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/operations';

export const getWaterByDay = createAsyncThunk(
  'water/getWaterByDay',
  async (date, thunkAPI) => {
    try {
      const { data } = await instance.get(`/api/water/day/${date}`);

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getWaterByMonth = createAsyncThunk(
  'water/getWaterByMonth',
  async (date, thunkAPI) => {
    try {
      const { data } = await instance.get(`/api/water/month/${date}`);

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWater = createAsyncThunk(
  'water/addWater',
  async (water, thunkAPI) => {
    try {
      const { data } = await instance.post('/api/water', water);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateWater = createAsyncThunk(
  'water/updateWater',
  async ({ id, updatedWater }, thunkAPI) => {
    try {
      const { data } = await instance.patch(`api/water/${id}`, {
        ...updatedWater,
      });

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async ({id}, thunkAPI) => {
    try {
      await instance.delete(`api/water/${id}`);

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
