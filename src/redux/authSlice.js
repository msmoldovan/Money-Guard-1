import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut } from './operations';

const initialState = {
  user: {
    username: '',
    email: '',
    id: '',
    balance: 0,
  },
  token: null,
  isLoggedIn: false,
  isRegistered: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isRegistered = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isRegistered = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.isRegistered = false;
      })
      .addCase(logIn.pending, state => {
        state.isLoggedIn = false;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoggedIn = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
