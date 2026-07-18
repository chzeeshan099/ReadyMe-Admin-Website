"use client"

import React from 'react';
import UpgradeBtn from '@/components/moneyMuttImages/moneyMuttSideBar/upgradeBtn';
import toast from 'react-hot-toast';
import MESSAGES from '@/constants/messages';
import { GoInfinity } from "react-icons/go";
import { createStripeCheckoutSession, createStripePortalSessionApi } from '@/apis';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { routes } from '@/config/routes';

const UpgradeSideBarCard = () => {
  const user = useSelector((state: any) => state?.user.user)

  const handleStipeSession = async () => {
    try {
      if (user.companyDetail?.status) {
        handleStripePortal()
        return
      }

      const stripeData = await createStripeCheckoutSession()
      const windowObj = window.open('about:blank', "blank")

      if (!stripeData?.sessionURL)
        throw new Error(stripeData?.message)

      if (windowObj)
        return windowObj.location.href = stripeData?.sessionURL;

    } catch (error: any) {
      toast.error(error?.message || MESSAGES.STRIPE_VALIDATION_FAILED);
    }
  }

  const handleStripePortal = async () => {
    try {
      const stripeData = await createStripePortalSessionApi({ customerId: user?.companyDetail?.stripeCustomerId || '' })
      const windowObj = window.open('about:blank', "blank")

      if (stripeData && windowObj) return windowObj.location.href = stripeData?.portalURL;

      toast.error(MESSAGES.SOME_WENT_WRONG);
    } catch (error) {
      toast.error(MESSAGES.SOME_WENT_WRONG);
    }
  }


  return (
    <div className="w-full rounded-md border p-2">

      <div className="mt-2 w-full">
        <div className="mb-1 flex w-full items-center justify-between">
          <div className='text-xs'>
            <p className='flex '>0 / <span className='ml-1 mt-1'><GoInfinity /></span></p>
          </div>
          <div>
            <p className="rounded-md border bg-webSecondary text-xs	sideBar-text-purple">
              credits
            </p>
          </div>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-lg bg-gray-200">
          <div className="h-full w-full sideBar-background-purple"></div>
        </div>
      </div>

      <div className="mt-2 w-full">
        {/* <Link */}
          {/* // href={routes.moneyMutt.billing} */}
        {/* > */}

          <button
            // onClick={handleStipeSession}
            className="flex w-full items-center border bg-webPrimary-dark text-webSecondary  hover:border-webSecondary justify-center rounded-md p-2  ">
            <UpgradeBtn />
            <p className='pl-2'>{user.companyDetail?.status ? "Billing Portal" : "Upgrade"}</p>
          </button>
        {/* </Link> */}

      </div>


    </div >
  );
};

export default UpgradeSideBarCard;
