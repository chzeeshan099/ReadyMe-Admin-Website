'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { getUserActivePlanApi } from '@/apis/plansApi';
import { getUserData } from '@/utils/localStorage';
import toast from 'react-hot-toast';
import { getUserSurveysApi } from '@/apis/survayApi';
import LargeLoader from '@/components/largeLoader/LargeLoader';
import { formatDate } from '@/utils/func';


type StatusType =  'OnHold' | 'Completed';

type JourneyItemType = {
  id: number;
  title: string;
  dateTime: string;
  totalAmount: number;
  commission: number;
  status: StatusType;
  imageUrl: string;
};

const formatUsdt = (value: number): string => `USDT ${value.toFixed(2)}`;

const StatusBadge = ({ status }: { status: StatusType }) => {
  const statusStyles: Record<StatusType, string> = {
    OnHold: 'bg-amber-500 text-white',
    Completed: 'bg-sky-500 text-white',
  };

  const statusLabels: Record<StatusType, string> = {
    OnHold: 'On Hold',
    Completed: 'Completed',
  };

  return (
    <span
      className={`rounded-md px-3 py-1 text-xs font-semibold shadow ${statusStyles[status]}`}
    >
       {statusLabels[status]}
    </span>
  );
};

const JourneyCardItem = ({ item }:any) => {
  console.log(item,'itemitemitem')
  return (
    <div className="relative overflow-hidden rounded-[30px] shadow-lg">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center blur-[0px] brightness-50"
        // style={{ backgroundImage: `url(${item?.imageUrl})` }}
         style={{
    backgroundImage: `url(${
      item?.imageUrl || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    })`,
  }}
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative flex flex-col justify-between py-6 text-white">
        {/* <div className="mb-4 flex items-start justify-end px-4">
          <StatusBadge status={item?.isComplete ? 'Completed' : 'OnHold'} />
        </div> */}

        <div className="px-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-black-dark">{formatDate(item?.createdAt) || 'N/A'}</p>
            {/* <p className="text-sm font-medium text-white/90">{item?.createdAt}</p> */}
            <p className="mt-1 text-md font-semibold leading-tight text-yellow-500 drop-shadow sm:text-lg">
              {item?.name}
            </p>
          </div>

          <div className="my-5 h-px w-full bg-white/50" />

          <div className="space-y-3 text-sm sm:text-md">
            <div className="flex items-center justify-between gap-4">
              <span className="font-medium">Amount</span>
              <span className="font-bold">{formatUsdt(item?.amount)}</span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <span className="font-medium">Commissions</span>
              <span className="font-bold">{formatUsdt(item?.commission)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = () => {
 const statuses = [
  { value: 'OnHold', label: 'On Hold' },
  { value: 'Completed', label: 'Completed' },
];

  const [selectedStatus, setSelectedStatus] = useState<'Completed' | StatusType>('Completed');
  const [loader, setLoader] = useState<boolean>(false);
  const [journeyData, setJourneyData] = useState<any>([]);
  



 const filteredData = useMemo(() => {

  if (selectedStatus === 'Completed') {
    return journeyData.filter((item:any) => item?.isComplete === true);
  }

  if (selectedStatus === 'OnHold') {
    return journeyData.filter((item:any) => item?.isComplete === false);
  }

  return journeyData;
}, [selectedStatus, journeyData]);

 const getJournies = async (statusType: 'Completed' | StatusType) => {
  setLoader(true)
  const storedUser:any = getUserData();

  const {data:userActivePlanData} = await getUserActivePlanApi(storedUser?._id);

  let apiStatus = 'pending';

  if (statusType === 'Completed') {
    apiStatus = 'completed';
  } 

  const payload = {
    userId: storedUser?._id,
    userPlanId: userActivePlanData?.data?._id,
    status: apiStatus,
  };

  const {data , error} = await getUserSurveysApi(payload);

  if(error){
    toast.error(error);
    setLoader(false)
    return;
  }

  // 👇 SPECIAL CASE: OnHold → sirf pehla item
  if (statusType === 'OnHold') {
    setJourneyData(data?.data?.slice(0,1));
  } else {
    setJourneyData(data?.data);
  }

  setLoader(false)
};

  useEffect(()=>{
  getJournies(selectedStatus)
},[selectedStatus])

  return (
    <section className="px-4 py-6 sm:px-4">
      <div className="w-full">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Dealing Slip</h2>
            <p className="text-sm text-slate-500">
              {filteredData.length} records
            </p>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap items-center gap-1.5 sm:gap-3 border-b border-gray-300 pb-4">
          {statuses?.map((status) => (
            <button
              key={status?.value}
              type="button"
              onClick={() => setSelectedStatus(status?.value as StatusType)}
              className={`rounded-md px-2.5 sm:px-5 py-1.5 sm:py-2 text-[11px] font-semibold sm:font-bold transition-all sm:text-sm  ${
                selectedStatus === status?.value
                  ? 'bg-pink-primary text-black-dark'
                  : 'bg-white text-slate-700 shadow-sm border border-gray-300'
              }`}
            >
              {status?.label}
            </button>
          ))}
        </div>

        
          {
            loader && (<div className='flex justify-center items-center'>
              <LargeLoader/>
            </div>)
           }


          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          { !loader &&
          (filteredData?.map((item:any) => (
            <JourneyCardItem key={item?._id} item={item} />
          )))
        }
        </div>
        </div>
      
    </section>
  );
};

export default Card;