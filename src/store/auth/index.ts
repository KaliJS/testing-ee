import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

interface AuthState {
  authState: boolean;
  authUser: string;
}

const initialState: AuthState = {
  authState: false,
  authUser: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState(state, action) {
      state.authState = action.payload;
    },
    setAuthUser(state, action) {
      state.authUser = action.payload;
    },
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.email,
      };
    },
  },
});

export const { setAuthState, setAuthUser } = authSlice.actions;
export const selectAuthState = (state: { auth: AuthState }) => state.auth.authState;
export const selectAuthUser = (state: { auth: AuthState }) => state.auth.authUser;
export default authSlice.reducer;
