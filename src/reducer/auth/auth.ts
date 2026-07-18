import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  user: null,
  error: null,
};


const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    signInUser: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
  },
});



export const { signInUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
