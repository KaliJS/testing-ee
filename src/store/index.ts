//Toolkit imports
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
//Reducers
import email from 'store/email';
import comment from 'store/comment';
import auth from 'store/auth';
import user from 'store/user';

const makeStore = () =>
  configureStore({
    reducer: {
      auth,
      email,
      comment,
      user,
    },
    devTools: true,
  });

const store = makeStore();
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const wrapper = createWrapper(makeStore, { debug: true });
