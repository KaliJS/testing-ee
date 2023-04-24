import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

interface Comment {
  comment: string;
  username: string;
}

interface CommentState {
  value: Comment[];
}

const initialState: CommentState = {
  value: [
    {
      comment: 'Gojo looks nice. Excellent work amigo!',
      username: 'Saitama',
    },
    {
      comment: 'Catoru Sensei! Konnichiwa!',
      username: 'Yuji',
    },
  ],
};

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    // Action to add comment
    addComment: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.email,
      };
    },
  },
});

export const { addComment } = commentSlice.actions;
export const selectComments = (state: { comment: CommentState }) => state.comment.value;
export default commentSlice.reducer;
