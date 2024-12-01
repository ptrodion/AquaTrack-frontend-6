import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/operations';

export const getWaterByDay = createAsyncThunk(
  'water/getWaterByDay',
  async (date, thunkAPI) => {
    try {
      const { data } = await instance.get('/api/water/day/2024-11-25');

      console.log('WATER!!!', data);

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
      const { data } = await instance.get('/api/water/month/2024-11-25');

      console.log('WATER!!!', data);

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
      console.log('WATER', updatedWater);

      const { data } = await instance.patch(`api/water/${id}`, {
        ...updatedWater,
      });

      console.log('PATCHH', data.data);

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async (id, thunkAPI) => {
    try {
      console.log(id);

      await instance.delete(`api/water/${id}`);

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
