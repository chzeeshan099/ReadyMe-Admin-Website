import { AxiosError } from "axios";
import api from "./axios.js"
export const getUserSurveysApi = async (payload:any) =>{
  try {
    
    const res = await api.post(
      `/api/survays/getUserSurveys`,payload);
    console.log(res,'resresresres_getUserSurveys')
  

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


export const completeUserSurveyApi = async (payload:any) =>{
  try {
    
    const res = await api.post(
      `/api/survays/completeUserSurvey`,payload);
    console.log(res,'resresresres_completeUserSurvey')
  

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