'use client';

import Link from 'next/link';
import cn from '@/utils/class-names';
import SimpleBar from '@/components/ui/simplebar';
import { SidebarMenu } from './sidebar-menu';
import UpgradeSideBarCard from './UpgradeSideBarCard';
import Image from 'next/image';
import Logo from '@/components/airBnbImages/AirbnbLogo2.png';
import { useSelector } from 'react-redux';
import {
    useDrawer,
} from '@/shared/drawer-views/use-drawer';
import { RxCross2 } from 'react-icons/rx';
import ProfileBalanceCard from '@/modules/dashBoard/ProfileBalanceCard';

export default function Sidebar({ className }: { className?: string }) {
  const user = useSelector((state: any) => state?.user?.user);
  const { closeDrawer } = useDrawer();

  return (
    <div>
      <div className=" sticky top-0 z-40 w-full flex justify-between items-center border-b-2  border-pink-500  py-4 h-[50px] md:h-[71px] px-2 sm:px-6 2xl:px-8 2xl:pt-6">
        <Link
          href="/dashBoard"
          aria-label="Site Logo"
          className="flex items-center lg:justify-center justify-start"
        >
          <Image src={Logo} alt="headerLogoError" className="xl:w-56 w-40 h-[80px] object-cover" />
        </Link>
        <div onClick={() => closeDrawer()} className="xl:hidden block cursor-pointer">
          <RxCross2 className='w-8 h-8 text-yellow-500'  />
        </div>
      </div>
    <aside
      className={cn(
        'sm:h-full sm:max-h-screen sm:min-h-screen h-[100vh] custom-scrollbar overflow-y-auto w-full border-greenPrimary-300',
        className
      )}
    >
      {/* <div className=" fixed top-0 z-40 w-full flex justify-between items-center border-b border-greenPrimary-300 bg-greenPrimary-secodarydark py-4 h-[70px] px-2 sm:px-6 2xl:px-8 2xl:pt-6">
        <Link
          href="/dashboard"
          aria-label="Site Logo"
          className="flex items-center lg:justify-center justify-start"
        >
          <Image src={Logo} alt="headerLogoError" className="xl:w-72 w-40" />
        </Link>
        <div onClick={() => closeDrawer()} className="xl:hidden block cursor-pointer">
          <RxCross2 className='w-8 h-8 text-yellow-500'  />
        </div>
      </div> */}
      <div className='xl:hidden'>
      <ProfileBalanceCard/>
      </div>

      <SimpleBar>
        <SidebarMenu />
      </SimpleBar>

      {user?.accountType === 'owner' ? (
        <div className="px-6 py-4">
          <UpgradeSideBarCard />
        </div>
      ) : null}
    </aside>
    </div>
  );
}
