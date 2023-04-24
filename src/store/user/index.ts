import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import axios from 'axios';
import { Dispatch } from 'redux';
import { STATUSES, ReduxType } from 'store/common';

interface UserState {
  users: any[];
  // status: 'idle' | 'loading' | 'error';
  fetchStatus: (typeof STATUSES)[keyof typeof STATUSES];
  addStatus: (typeof STATUSES)[keyof typeof STATUSES];
  deleteStatus: (typeof STATUSES)[keyof typeof STATUSES];
}

interface AddUserParams {
  name: string;
  email: string;
}

const initialState: UserState = {
  users: [],
  fetchStatus: STATUSES.IDLE,
  addStatus: STATUSES.IDLE,
  deleteStatus: STATUSES.IDLE,
};

// ** Fetch Users
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  // async (params: any, { dispatch, getState }: ReduxType) => {
  async (params: any) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users', {
      params,
    });
    return res.data;
  }
);

// ** Add Users
export const addUsers = createAsyncThunk(
  'users/addUsers', // Note that you should use a unique action name here
  async ({ name, email }: AddUserParams) => {
    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      {
        name,
        email,
      },
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
    return res.data;
  }
);

// ** Delete Users
export const deleteUsers = createAsyncThunk(
  'users/deleteUsers', // Note that you should use a unique action name here
  async (id: string) => {
    const res = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    return res.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.email,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.fetchStatus = STATUSES.LOADING;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.fetchStatus = STATUSES.IDLE;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.fetchStatus = STATUSES.ERROR;
      })
      .addCase(addUsers.pending, (state, action) => {
        state.addStatus = STATUSES.LOADING;
      })
      .addCase(addUsers.fulfilled, (state, action) => {
        state.addStatus = STATUSES.IDLE;
      })
      .addCase(addUsers.rejected, (state, action) => {
        state.addStatus = STATUSES.ERROR;
      })
      .addCase(deleteUsers.pending, (state, action) => {
        state.deleteStatus = STATUSES.LOADING;
      })
      .addCase(deleteUsers.fulfilled, (state, action) => {
        state.deleteStatus = STATUSES.IDLE;
      })
      .addCase(deleteUsers.rejected, (state, action) => {
        state.deleteStatus = STATUSES.ERROR;
      });
  },
});

// export const {  } = userSlice.actions;

export default userSlice.reducer;
