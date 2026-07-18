import { AxiosError } from "axios";
import api from "./axios.js"
export const getTermAndConditionApi = async () =>{
  try {
    
    const res = await api.get(
      `/api/termAndConditions/getAllTermAndConditions`);
    console.log(res,'resresresres_getAllTermAndConditionsApi')
  

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