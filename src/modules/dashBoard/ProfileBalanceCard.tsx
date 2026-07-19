'use client';

import { getUserByIdApi } from '@/apis/authApi';
import { userSocket } from '@/socket/userSocket';
import { getUserData, updateUserData } from '@/utils/localStorage';
import { set } from 'lodash';
import React, { use, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaMedal } from 'react-icons/fa';
import { LuCopy, LuCopyCheck } from 'react-icons/lu';
import { TbCopy } from 'react-icons/tb';


const ProfileBalanceCard = () => {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [inviteCode, setInviteCode] = useState('DF90YQ');
  const [userData, setUserData] = useState<any>({});
  const [localUserData, setLocalUserData] = useState<any>({});
  const user = {
    // name: 'Zeeshan',
    // accountId: '69b70789524e3826652a6145',
    // inviteCode: inviteCode,
    // accountBalance: '0.00',
    // totalCommission: '2775.43',
    // progress: 100,
  };


   const handleCopy = () => {
        navigator.clipboard.writeText(localUserData?.invitationCode || userData?.invitationCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // Auto hide after 1.5s
    };

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
      function onPlanUpdated(payload: any) {
        console.log(payload, 'user_performance_updated');

         setUserData((prevData: any) => ({
          ...prevData,
          performance: payload?.performance,
        }));
    
        updateUserData({
          performance: payload?.performance,
        });
    
      }
    
      userSocket.on("user_performance_updated", onPlanUpdated);
    
      return () => {
        userSocket.off("user_performance_updated", onPlanUpdated);
      };
    }, []);



    useEffect(() => {
      const storedUser:any = getUserData();
      setLocalUserData(storedUser);

      getSingleUser(storedUser?._id);
    }, []);

    console.log(localUserData, 'localUserData');
    console.log(userData, 'userData');

  return (
    <div className="rounded-2xl xl:border border-gray-200 bg-white shadow-sm overflow-hidden">
      {/* Top profile section */}
      <div className="flex items-center gap-2 xl:gap-4 p-3 xl:p-5">
        {/* Avatar */}
        <div className="h-12 xl:h-20 w-12 xl:w-20 shrink-0 overflow-hidden rounded-full border-2 border-gray-200 bg-gray-100">
          <div className="flex h-full w-full items-center justify-center text-gray-300">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-16 w-16"
            >
              <path d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5Zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z" />
            </svg>
          </div>
        </div>

        {/* User info */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h2 className="text-sm xl:text-2xl font-bold leading-none text-black">
              {localUserData?.name || userData?.name}
            </h2>
          </div>

          <div className="text-xs xl:text-base text-gray-700">
            <div className="flex items-center gap-1 xl:gap-3">
              <span className="">ID:</span>
              <span className="font-bold text-black">
               {localUserData?._id || userData?._id}
              </span>
            </div>

            <div className="flex items-center gap-1 sm:gap-3 -mt-1 xl:mt-0">
              <span className="">Invitation Code:</span>
              <span className="font-bold text-black">
               {localUserData?.invitationCode || userData?.invitationCode || 'N/A'}
              </span>

              <button
                onClick={handleCopy}
                className="rounded-md p-1 text-indigo-600 transition hover:bg-indigo-50"
                title="Copy invitation code"
              >
                   <span className='text-lg'>
                    {copied ? <LuCopyCheck /> : <LuCopy />}
                    </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress line */}
      <div className="px-4 pb-3 sm:px-5">
        <div className="relative h-2 rounded-full bg-violet-200">
          <div
            className="h-2 rounded-full bg-violet-500"
            style={{ width: `${userData?.performance}%` }}
          />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-violet-500 px-2 py-[2px] text-[10px] font-semibold text-white">
            {userData?.performance}%
          </div>
        </div>
      </div>

      {/* Bottom stats */}
      <div className="grid grid-cols-2 overflow-hidden">
        <div className="bg-gradient-to-r from-violet-500 to-purple-500 px-4 py-2 xl:py-5 text-center text-white">
          <p className="text-base sm:text-lg font-bold">
            {userData?.wallet?.accountBalance || 0}{' '}
            <span className="text-base font-semibold">USDT</span>
          </p>
          <p className="mt-1 text-sm font-medium text-violet-100">
            Account Balance
          </p>
        </div>

        <div className="bg-gradient-to-r from-cyan-400 to-teal-400 px-4 py-2 xl:py-5 text-center text-white">
          <p className="text-base sm:text-lg font-bold">
            {userData?.wallet?.commissionBalance || 0}{' '}
            <span className="text-base font-semibold">USDT</span>
          </p>
          <p className="mt-1 text-sm font-medium text-cyan-50">
            Total Commission
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBalanceCard;