import { AxiosError } from "axios";
import api from "./axios.js"
export const getWithdrawRequestApi = async (payload:any) =>{
  try {
    
    const res = await api.post(
      `/api/withdrawRequest/getWithdrawRequest`,payload);
    console.log(res,'getWithdrawRequestApigetWithdrawRequestApi')
  

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


export const sendWithdrawRequestApi = async (payload:any) =>{
  try {
    
    const res = await api.post(
      `/api/withdrawRequest/sendWithdrawRequest`,payload);
    console.log(res,'setWalletInfoApisetWalletInfoApi')
  

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