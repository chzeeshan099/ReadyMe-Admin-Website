import { AxiosError } from "axios";
import api from "./axios.js"
export const getWalletInfoApi = async (payload:any) =>{
  try {
    
    const res = await api.post(
      `/api/walletInfo/getWalletInfo`,payload);
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


export const setWalletInfoApi = async (payload:any) =>{
  try {
    
    const res = await api.post(
      `/api/walletInfo/setWalletInfo`,payload);
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