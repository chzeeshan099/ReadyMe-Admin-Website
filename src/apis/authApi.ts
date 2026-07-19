import { AxiosError } from "axios";
import api from "./axios.js"



export const loginStaffApi = async (payloadData:any) =>{
  try {
    
    const res = await api.post(
      `/api/staffUser/loginStaff`,
      payloadData,
    );
    console.log(res,'resresresres')
  

    if(res?.data?.success){
        return { data: res?.data , error: null };
        }else{
            return { data: null, error:res?.data?.message || "error try again." };
        }
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
        return { data: null, error: error.response?.data?.message ?? "error try again." };
    }
}


export const logOutStaffApi = async () =>{
  try {
    
    const res = await api.get(
      `/api/staffUser/logoutStaff`,
    );
    console.log(res,'resresresres_logout')
  

    if(res?.data?.success){
        return { data: res?.data , error: null };
        }else{
            return { data: null, error:res?.data?.message || "error try again." };
        }
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
        return { data: null, error: error.response?.data?.message ?? "error try again." };
    }
}
















/////////////////////////////////////////////
export const registerUserApi = async (payloadData:any) =>{
  try {
    
    const res = await api.post(
      `/api/auth/registerUser`,
      payloadData,
    );
    console.log(res,'resresresres')
  

    if(res?.data?.success){
        return { data: res?.data , error: null };
        }else{
            return { data: null, error:res?.data?.message || "error try again." };
        }
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
        return { data: null, error: error.response?.data?.message ?? "error try again." };
    }
}








export const updateMyPasswordApi = async (payload:any) =>{
  try {
    
    const res = await api.put(
      `/api/auth/updateMyPassword`, payload);
    console.log(res,'updateMyPasswordupdateMyPasswordupdateMyPassword')
  

    if(res?.data?.success){
        return { data: res?.data , error: null };
        }else{
            return { data: null, error:res?.data?.message || "error try again." };
        }
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
        return { data: null, error: error.response?.data?.message ?? "error try again." };
    }
}


export const getUserByIdApi = async (id:any) =>{
  try {
    
    const res = await api.get(
      `/api/auth/getUserById/${id}`);
    console.log(res,'getUserByIdApigetUserByIdApi')
  

    if(res?.data?.success){
        return { data: res?.data , error: null };
        }else{
            return { data: null, error:res?.data?.message || "error try again." };
        }
  } catch (err) {
    const error = err as AxiosError<{ message: string }>;
        return { data: null, error: error.response?.data?.message ?? "error try again." };
    }
}