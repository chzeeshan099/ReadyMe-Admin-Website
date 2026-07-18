'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HamburgerButton from '@/layouts/hamburger-button';
import Sidebar from '@/layouts/hydrogen/sidebar';
import Logo from '@/components/moneyMuttImages/moneyMuttLogo.svg';
import HeaderMenuRight from '@/layouts/header-menu-right';
import StickyHeader from '@/layouts/sticky-header';
import { usePathname } from 'next/navigation';
import { getUserData } from '@/utils/localStorage';

export default function Header() {
  const pathname = usePathname();
  const [userData , setUserData] = useState<any>({})

  const closeDrawer = () => {
    console.log('Drawer closed');
  };
  const getUser = ()=>{
    const user:any = getUserData()
    setUserData(user)
  }
  

  useEffect(()=>{
    getUser()
  },[])

  return (
    <StickyHeader className="z-[990] border-b-2 border-pink-primary w-full  items-center justify-between bg-white backdrop-blur-md  py-3 -ml-[1px] pr-4">

      <div className="flex relative items-center  gap-4 lg:max-w-2xl w-full">
       
        <HamburgerButton
          view={<Sidebar className="static w-full" />}
          className=""
          hide={false}
        />

        <p className="text-lg">
          {(pathname && pathname === '/dashboard/team') ||
          pathname === '/dashboard/profile-settings/team' ||
          pathname === '/dashboard/profile-settings/billing'
            ? 'Company settings'
            : ''}
        </p>

      </div>

      <div className="px-2  w-full py-2 mb-[1px] rounded-lg hidden md:flex">
        <p className="font-bold text-lg text-greenPrimary-100">
          Hello , {userData?.userName}
        </p>
      </div>

      <div className=' w-full flex justify-end'>
        <HeaderMenuRight />
      </div>
    </StickyHeader>
  );
}
