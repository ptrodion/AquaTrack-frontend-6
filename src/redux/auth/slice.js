import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCurrentUser,
  logIn,
  logOut,
  refresUser,
  register,
  updateFetchUser,
} from './operations';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: false,
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isRefreshing = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        console.error(action.payload);
      })
      .addCase(logIn.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logOut.pending, state => {
        state.isRefreshing = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(refresUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refresUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(updateFetchUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateFetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(updateFetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
