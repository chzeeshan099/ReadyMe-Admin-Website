import { createSlice } from '@reduxjs/toolkit';
// import { updateAdminProfile } from '../admin/adminApis';
// import { getLoggedInUser, loginWithMetaMask, updatePassword, updateProfile } from './authApis';

import { signInApi } from '@/apis';
import { userInterface } from '@/types';

export interface User {
  accountVerificationMethods?: {
    isEmailVerified?: boolean;
    isPhoneVerified?: boolean;
  };
  roles?:[{
    label?:string,
    value?:string,
  }];
  _id?: string;
  fullName?: string;
  username?: string;
  email?: string;
  accountType?: string;
  isAccountEnable?: boolean;
  resetToken?: string;
  resetTokenExpiry?: string;
  accessSharedBy?: any[];
  createdAt?: string;
  updatedAt?: string;
  roleId?:any;
  id?: string;
  companyDetail?: {
    address?:any
    _id?: string;
    name?: string;
    size?: number | null;
    status?: boolean;
    stripeCustomerId?: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
  };
}

interface AuthState {
  user: User;
  companyUsers:User;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  loggedInUser: string;
}

const initialState:AuthState= {
  user: { companyDetail: {
      status: false,
    },},
  companyUsers: {},
  status: 'idle',
  loggedInUser: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
      logout: (state) => {
      return initialState;
 },
    setUserData: (state, action) => {
        state.user = action?.payload;
    },
    setCompanyStatus: (state, action) => {
         state.user.companyDetail = action.payload;
    },
    setRoles:(state,action) =>{
    state.user = { ...state.user, roles: action.payload };
  },
   setCompanyUsers:(state,action) =>{
    state.companyUsers =  action.payload ;
  }
},
  extraReducers: (builder) => {
    builder
     .addCase(signInApi.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signInApi.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action?.payload;
        state.loggedInUser = "true"

      })
      .addCase(signInApi.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const { logout, setUserData , setCompanyStatus , setRoles , setCompanyUsers } = authSlice.actions;

export default authSlice.reducer;