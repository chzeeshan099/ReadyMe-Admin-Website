
'use client';
import React, { useEffect, useState } from 'react'
import CustomWidgetCard from '@/components/cards/custom-widget-card'
import { userSocket } from '@/socket/userSocket';
import { getUserByIdApi } from '@/apis/authApi';
import toast from 'react-hot-toast';
import { getUserData, updateUserData } from '@/utils/localStorage';

const BalanceCard = ({totalSurveysCount=0 , totalCompletedSurveysCount=0}:any) => {
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState<any>({});
    const [localUserData, setLocalUserData] = useState<any>({});
   const getSingleUser = async (userId: string) => {
     if(!userId){
        toast.error("user id required")
        return
      }
        setLoading(true);
        const { data, error } = await getUserByIdApi(userId);
        if (error) {
         console.log(error);
         toast.error(error);
         setLoading(false);
         return;
        }
         setUserData(data?.data || {});
         setLoading(false);
      }
  
  
      useEffect(() => {
        function onPlanUpdated(payload: any) {
          console.log(payload, 'wallet_recharged_in_dashboard');
      
          updateUserData({
            wallet: payload?.wallet,
          });
  
          setLocalUserData((prevData: any) => ({
            ...prevData,
            wallet: payload?.wallet,
          }));
  
          setUserData((prevData: any) => ({
            ...prevData,
            wallet: payload?.wallet,
          }));
      
        }
      
        userSocket.on("wallet_recharged", onPlanUpdated);
      
        return () => {
          userSocket.off("wallet_recharged", onPlanUpdated);
        };
      }, []);
  
      useEffect(() => {
        const storedUser:any = getUserData();
        setLocalUserData(storedUser);
        if(!storedUser?._id) return
        getSingleUser(storedUser?._id);
      }, []);
  return (
   <>
    <CustomWidgetCard title="Journey Overview" shadow="left">
     <div className="grid grid-cols-2 overflow-hidden">
        <div className="px-4 py-2 xl:py-5">
          <p className="mt-1 text-[11px] sm:text-sm font-medium text-pink-500">
            Account Balance
          </p>

          <p className="text-sm sm:text-lg font-bold">
            <span className="font-semibold">$</span>
            {' '}{userData?.wallet?.accountBalance || 0}
          </p>
        </div>

        <div className="px-4 py-2 xl:py-5">
          <p className="mt-1 text-[11px] sm:text-sm font-medium text-pink-500">
            Commission
          </p>

          <p className="text-sm sm:text-lg font-bold">
            <span className="font-semibold">$</span>
            {' '}{userData?.wallet?.commissionBalance || 0}
          </p>
        </div>

        <div className="px-4 py-2 xl:py-5">
           <p className="mt-1 text-[11px] sm:text-sm font-medium text-pink-500">
            Number of Journies
          </p>

          <p className="text-sm sm:text-lg font-bold">
            {totalSurveysCount || 0}
          </p>
        </div>

        <div className="px-4 py-2 xl:py-5">
          <p className="mt-1 text-[11px] sm:text-sm font-medium text-pink-500">
           Journey Completed
          </p>

          <p className="text-sm sm:text-lg font-bold">
            {totalCompletedSurveysCount || 0}
          </p>
        </div>

      </div>
    </CustomWidgetCard>
   </>
  )
}

export default BalanceCard
