import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchUserCount = createAsyncThunk(
  'userCount/fetchUserCount',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/users-count');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.count;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userCountSlice = createSlice({
  name: 'userCount',
  initialState: {
    count: 0,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserCount.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserCount.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.count = action.payload;
      })
      .addCase(fetchUserCount.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default userCountSlice.reducer;
