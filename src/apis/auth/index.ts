"use client"
import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstancePublic , axiosInstancePrivate } from "@/config/request";
import { signUpInterface , signInInterface  , forgotInterface , resetPasswordInterface} from "@/types";
import localStorageService from '@/utils/localStorage';


export interface StripeSesssionType {
    data : {
    sessionURL: string,
    isSuccess:  boolean,
    message : string
    }
}

export interface stripCompanySubscription {
    sessionURL: string,
    isSuccess:  boolean,
    message : string
}

interface StripePortalType {
    customerId: string,
}
export const signUpApi = async (
    data:signUpInterface
  ) => {
      const response = await axiosInstancePublic.post('/users/signup',data)
      return response
  };

  export const emailVerifyApi = async (
    data:string,type?:String|null
  ) => {
    console.log(`/users/verify-email/${data}${type ? '?type=team': ''} ` , type);

      const response = await axiosInstancePublic.post(`/users/verify-email/${data}${type ? '?type=team': ''} ` , )
      return response
  };

    export const forgotApi = async (
    data:forgotInterface
    ) => {
        const response = await axiosInstancePublic.post('/users/forgot-password/' , data)
        return response
    };

    export const resetPasswordAPi = async (
    data:resetPasswordInterface
    ) => {
        const response = await axiosInstancePublic.post(`/users/reset-password/${data?.token}` , data)
        return response
    };

    export const tokenVerifyApi = async (
    ) => {
        const response = await axiosInstancePrivate.post('/users/verify-token')
        return response
    };

      export const changePasswordAPi = async (
    data:forgotInterface
    ) => {
        const response = await axiosInstancePrivate.post('/users/change-password' , data)
        return response
    };
       export const teamSignUpAPI = async (
    data:any
    ) => {
        const response = await axiosInstancePrivate.post('/users/team-signup' , data)
        return response
    };

export const createStripeCheckoutSession = async (
    lookupKey:string = "standard_monthly"
    ) => {

        const response:StripeSesssionType = await axiosInstancePrivate.post('/users/create-checkout-session' , {lookupKey})
        const { sessionURL, isSuccess , message } = response?.data || {};
        return { sessionURL, isSuccess , message};
    };

        export const createStripePortalSessionApi = async (
    data:StripePortalType
    ) => {
        const response = await axiosInstancePrivate.post('/users/create-portal-session' , data)
        return response?.data
    };

       export const compnaySubscription = async (
    data:any
    ) => {
        const response = await axiosInstancePrivate.post('/users/company-subscription' , data)
        return response?.data
    };

// export const signInApi = async (
//     email: string,
//     password: string,
//   ) => {
//       const response = await axiosInstancePublic.post('/users/signin')
//       return response
//   };


export const signInApi = createAsyncThunk(
    'auth/signIn',
    async (data:signInInterface, thunkAPI) => {
        try {
            const res = await axiosInstancePublic.post("/users/signin", data);

            const token = res?.data?.token
            const refreshToken = res?.data?.refreshToken

            if(token) {
                localStorageService.setItem("token" , token)
                localStorageService.setItem("refreshToken" , refreshToken)
                localStorageService.setItem("user" , res?.data?.data)
                return { ...res?.data?.data, token , refreshToken  }
            }

            return thunkAPI.rejectWithValue('Token not found');

        } catch (error:any) {
            return thunkAPI.rejectWithValue(error?.response?.data?.message || error)
        }
    }
);