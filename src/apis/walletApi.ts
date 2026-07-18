import { AxiosError } from "axios";
import api from "./axios.js"
export const getWalletByIdApi = async () =>{
  try {
    
    const res = await api.get(
      `/api/wallet/getWalletById`);
    console.log(res,'getWalletByIdApigetWalletByIdApi')
  

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