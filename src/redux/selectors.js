import { createSelector } from '@reduxjs/toolkit';

/** AUTH selectors */
export const selectIsRegistered = state => state.auth.isRegistered;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectAuthError = state => state.auth.error;
