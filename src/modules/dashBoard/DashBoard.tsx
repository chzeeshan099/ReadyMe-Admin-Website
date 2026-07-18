'use client'
import React, { useEffect, useState } from 'react'
import { FaMedal, FaAward, FaTrophy, FaCrown } from "react-icons/fa";
import { MdCheckCircleOutline } from 'react-icons/md';
import { Badge } from 'rizzui';
import ProfileBalanceCard from './ProfileBalanceCard';
import { getAllPlansApi, getUserActivePlanApi } from '@/apis/plansApi';
import { getUserData, updateUserData } from '@/utils/localStorage';
import { userSocket } from '@/socket/userSocket';
import Image1 from '@/components/airBnbImages/img1.jpeg';
import Image2 from '@/components/airBnbImages/img2.jpeg';
import Image3 from '@/components/airBnbImages/img3.jpeg';
import Image4 from '@/components/airBnbImages/img4.jpeg';
import Image5 from '@/components/airBnbImages/img5.jpeg';
import Image6 from '@/components/airBnbImages/img6.jpeg';

import Image from 'next/image';

const DashBoard = () => {
  const [plans, setPlans] = useState([]);
  const [user, setUser] = useState<any>(null);

  const insightCards = [
  {
    image: Image1,
    title: "Las Vegas",
    hotel: "1360",
    hotelPrice: "$232",
    alt: "Consumer analytics dashboard",
  },
  {
    image: Image2,
    title: "New york",
    hotel: "2668",
    hotelPrice: "$468",
    alt: "Consumer analytics dashboard",
  },
  {
    image: Image3,
    title: "Myrtle beach",
    hotel: "1601",
    hotelPrice: "$221",
    alt: "Business heatmap and performance overview",
  },
  {
    image: Image4,
    title: "Chicago",
    hotel: "766",
    hotelPrice: "$336",
    alt: "Business heatmap and performance overview",
  },
  {
    image: Image5,
    title: "Nashville",
    hotel: "782",
    hotelPrice: "$278",
    alt: "Business heatmap and performance overview",
  },
  {
    image: Image6,
    title: "San diego",
    hotel: "920",
    hotelPrice: "$290",
    alt: "Business heatmap and performance overview",
  },
];


  const getPlansWithUserStatus = async (userId?: string) => {
    console.log(user,'user_in_dashboard_getPlansWithUserStatus')
    console.log(userId,'userId_in_dashboard_getPlansWithUserStatus')
  try {
    const [plansRes, activePlanRes] = await Promise.all([
      getAllPlansApi(),
      getUserActivePlanApi(user?._id || userId),
    ]);

    const allPlans = plansRes?.data?.plans || [];
    const activePlanId = activePlanRes?.data?.data?.plan?._id;

   
    const updatedPlans = allPlans.map((plan:any) => {
  const meta = getPlanMeta(plan.name);

  return {
    ...plan,
    ...meta,
    isPurchased: plan._id === activePlanId,
  };
});

    setPlans(updatedPlans);

  } catch (error) {
    console.error(error);
  }
};
const getUserDataFromStorage = () => {
  const storedUser = getUserData();
  setUser(storedUser);
}

useEffect(() => {
 getUserDataFromStorage();
}, []);
 

  useEffect(()=>{
    if(!user?._id) return 
     getPlansWithUserStatus();
  },[user?._id])

const planMeta = {
  Normal: {
    icon: FaMedal,
    color: "#CD7F32",
    rank: 1,
  },
  Senior: {
    icon: FaAward,
    color: "#C0C0C0",
    rank: 2,
  },
  Expert: {
    icon: FaTrophy,
    color: "#FFD700",
    rank: 3,
  },
  Supreme: {
    icon: FaCrown,
    color: "#00C2FF",
    rank: 4,
  },
};
const getPlanMeta = (planName:any) => {
  return planMeta[planName as keyof typeof planMeta] || {
    icon: FaMedal,
    color: "#999",
    rank: 0,
  };
};


console.log(plans,'plansplansplans')

useEffect(() => {
  function onPlanUpdated(payload: any) {
    console.log(payload, 'plan_updated_in_dashboard');

    updateUserData({
      user: payload?.user,
      wallet: payload?.wallet,
    });

   
    const userId = payload?.user?._id;

    getPlansWithUserStatus(userId);
  }

  userSocket.on("plan_updated", onPlanUpdated);

  return () => {
    userSocket.off("plan_updated", onPlanUpdated);
  };
}, []);




useEffect(() => {
  if (!user || !window.LiveChatWidget) return;

  window.LiveChatWidget.on("ready", () => {
    window.LiveChatWidget?.call("set_customer", {
      name: user?.userName || "",
      phone: user?.mobileNumber || "",
    });

    // ✅ IMPORTANT: unique user id
    window.LiveChatWidget?.call("set_session_variables", {
      userId: user?._id || "",
    });
  });
}, [user]);
  return (
    <>
    <div className='hidden xl:block'>
    <ProfileBalanceCard/>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mt-4">
      {plans?.map((plan:any, index) => {
        const Icon = plan?.icon;

        return (
          <div
            key={index}
            className="relative bg-white rounded-xl p-3 sm:p-4 shadow border flex flex-col items-center"
          >
            {
              plan?.isPurchased &&
              <span className='absolute top-1 right-1'><Badge color="danger">Buy</Badge></span>
            }
            {/* <span className='absolute top-2 right-3'><MdCheckCircleOutline className='text-2xl text-pink-500'/></span> */}
            <Icon color={plan?.color} className='text-4xl sm:text-5xl'/>
            <h3 className="mt-2 font-semibold text-base sm:text-xl">{plan?.name}</h3>
            {
              plan?.price > 1 && 
            <p className="text-green-600 text-sm font-semibold">$ { plan?.price }</p>
            } 
          </div>
        );
      })}
    </div>


    <div className="mt-6 rounded-[28px] bg-slate-50 p-4 sm:p-6 shadow-sm border border-slate-200">
      <div className="mb-5 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Dashboard Insight</p>
        <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-slate-900">Use Consumer Behavior Insights to Drive Decisions</h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600">
          For operational leaders and analysts, our intelligence helps you analyze trade areas, uncover consumer patterns, and gain insight into competitive performance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {insightCards?.map((card, index) => (
    <div
      key={index}
      className="overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-200"
    >
      <Image
        src={card?.image}
        alt={card?.alt}
        className="h-[200px] w-full object-cover"
        width={800}
        height={400}
        quality={100}
      />
      <div className="p-4">
        <h4 className="font-semibold text-slate-900">{card?.title}</h4>
        <p className="mt-1 text-sm text-slate-600"><span className='text-base font-bold'>{card?.hotel}</span> hotels</p>
        <p className="mt-1 text-sm text-slate-600"><span className='text-base font-bold'>{card?.hotelPrice}</span> average</p>
      </div>
    </div>
  ))}
</div>
    </div>
    </>
  )
}

export default DashBoard