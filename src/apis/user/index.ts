"use client"
import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstancePublic , axiosInstancePrivate } from "@/config/request";
import localStorageService from '@/utils/localStorage';

type deleteUserType  ={
   id:string
}

export const getRolesApi = async ( ) => {
      const response = await axiosInstancePrivate.get('/users/roles')
      return response?.data || null
  };

export const getCompanyUserApi = async ( ) => {
      const response = await axiosInstancePrivate.get('/users/company-users')
      return response
  };

export const companyUserStatusApi = async ( data:any) => {
      const response = await axiosInstancePrivate.patch('/users/company-user-status' , data)
      return response
  };


export const updateCompanyUserRole = async ( data:any) => {
      const response = await axiosInstancePrivate.patch('/users/update-user-roles' , data)
      return response
  };


  export const deleteCompanyUser = async (userId:string) => {
      const response = await axiosInstancePrivate.delete(`/users/delete-company-user/${userId}`)
      return response?.data || null
  };

  export const resendEmailCompanyUser = async (email:string) => {
      const response = await axiosInstancePrivate.post(`/users/resend-verify-email-team`, {email})
      return response?.data || null
  };

    export const resendEmail = async (email:string , type:string) => {
      const response = await axiosInstancePublic.post(`/users/resend-email?type=${type}`, {email})
      return response?.data || null
  };

    export const stripCustomerDetailsUpdate = async (data:any) => {
      const response = await axiosInstancePrivate.post(`/users/stripe-customer-details-update`, data )
      return response?.data || null
  };
