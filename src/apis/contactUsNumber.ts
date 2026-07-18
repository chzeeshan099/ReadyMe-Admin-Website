import { AxiosError } from "axios";
import api from "./axios.js"
export const getContactNumberApi = async () =>{
  try {
    
    const res = await api.get(
      `/api/whatsapp/getContactNumber`);
    console.log(res,'resresresres_getContactNumberApi')
  

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