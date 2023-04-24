import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import axios from 'axios';
import { Dispatch } from 'redux';

interface ReduxType {
  getState: any;
  dispatch: Dispatch<any>;
}

// ** Fetch Mails
export const fetchMails = createAsyncThunk('appEmail/fetchMails', async (params: any) => {
  const response = await axios.get('/apps/email/emails', {
    params,
  });

  return { ...response.data, filter: params };
});

// ** Get Current Mail
export const getCurrentMail = createAsyncThunk(
  'appEmail/selectMail',
  async (id: number | string) => {
    const response = await axios.get('/apps/email/get-email', {
      params: {
        id,
      },
    });

    return response.data;
  }
);

// ** Update Mail
export const updateMail = createAsyncThunk(
  'appEmail/updateMail',
  async (params: any, { dispatch, getState }: ReduxType) => {
    const response = await axios.post('/apps/email/update-emails', {
      data: { emailIds: params.emailIds, dataToUpdate: params.dataToUpdate },
    });

    await dispatch(fetchMails(getState().email.filter));
    if (Array.isArray(params.emailIds)) {
      await dispatch(getCurrentMail(params.emailIds[0]));
    }

    return response.data;
  }
);

export const emailSlice = createSlice({
  name: 'email',
  initialState: {
    mails: [],
    mailMeta: null,
    filter: {
      q: '',
      label: '',
      folder: 'inbox',
    },
    currentMail: null,
    selectedMails: [],
  },
  reducers: {
    handleSelectMail: (state, action) => {
      const mails: any = state.selectedMails;
      if (!mails.includes(action.payload)) {
        mails.push(action.payload);
      } else {
        mails.splice(mails.indexOf(action.payload), 1);
      }
      state.selectedMails = mails;
    },
    handleSelectAllMail: (state, action) => {
      const selectAllMails: number[] = [];
      if (action.payload && state.mails !== null) {
        selectAllMails.length = 0;

        state.mails.forEach((mail: any) => selectAllMails.push(mail.id));
      } else {
        selectAllMails.length = 0;
      }
      state.selectedMails = selectAllMails as any;
    },
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.email,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentMail.fulfilled, (state, action) => {
      state.currentMail = action.payload;
    });
  },
});

export const { handleSelectMail, handleSelectAllMail } = emailSlice.actions;

export default emailSlice.reducer;
