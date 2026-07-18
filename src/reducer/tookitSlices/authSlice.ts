import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SignInStateType = {
  isAuthenticated: boolean;
  user: object | null;
  error: object | null;
};

type SignUpStateType = {
  isSignedUp: boolean;
  error: string | null;
};

const initialSignInState: SignInStateType = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const initialSignUpState: SignUpStateType = {
  isSignedUp: false,
  error: null,
};

const signInSlice = createSlice({
  name: 'signIn',
  initialState: initialSignInState,
  reducers: {
    signInSuccess: (state, action: PayloadAction<object>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    signInFailure: (state, action: PayloadAction<object>) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
  },
});

const signUpSlice = createSlice({
  name: 'signUp',
  initialState: initialSignUpState,
  reducers: {
    signUpSuccess: (state) => {
      state.isSignedUp = true;
      state.error = null;
    },
    signUpFailure: (state, action: PayloadAction<string>) => {
      state.isSignedUp = false;
      state.error = action.payload;
    },
  },
});

export const { signInSuccess, signInFailure } = signInSlice.actions;
export const signInReducer = signInSlice.reducer;

export const { signUpSuccess, signUpFailure } = signUpSlice.actions;
export const signUpReducer = signUpSlice.reducer;
