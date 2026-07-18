import { AxiosError } from "axios";
import api from "./axios.js"
export const getAllPlansApi = async () =>{
  try {
    
    const res = await api.get(
      `/api/plans/getAllPlans`,);
    console.log(res,'resresresres_getAllPlans')
  

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


export const getUserActivePlanApi = async (userId:any) =>{
  try {
    
    const res = await api.get(
      `/api/plans/getUserActivePlan/${userId}`,);
    console.log(res,'resresresres_getUserActivePlanApi')
  

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