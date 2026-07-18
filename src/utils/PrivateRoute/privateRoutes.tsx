'use client';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import localStorageService from '../localStorage';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { usePathname } from 'next/navigation'
import { MenuItems } from '@/layouts/hydrogen/menu-items';
import { RootState } from '@/reducer/store';
import { filterMenuItems } from '../MoneyMutt/func';
import Messages from '@/constants/messages';

const LayoutProtected = ({ children }: any) => {
  const user = useSelector((state: RootState) => state?.user?.user)

  const [isAuthenticated, setAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname()
  const permissions = user?.roleId?.permissions
  const [isUserVerifyPath, setUserVerifyPath] = useState(false)

  const isAllowedRoute = () => {

    const menuItemPrivate = MenuItems.find(item => {
      if (!item?.dropdownItems || item.dropdownItems.length === 0) {
        return item.href === pathname
      }
      if (item?.dropdownItems && item?.dropdownItems?.length > 0) {
        return item?.dropdownItems.some(subItem => subItem.href === pathname);
      }
      return false;
    });


    if (menuItemPrivate) {
      const isValidatePaths = filterMenuItems([menuItemPrivate], permissions);
      if (!isValidatePaths?.length) {
        toast.error(Messages?.NOT_AUTHORIZED)
        router.push('/dashboard')

      }
      setAuthenticated(true);
    }

  }

  useEffect(() => {
    const tokenString = localStorageService.getItem('token');
    if (!tokenString) {
      return router.push('/auth/signin');
    }

    if (!(user?.accountType === 'owner')) {
      isAllowedRoute()
    }

    setAuthenticated(true)

    // const verifyTokens = async () => {
    //   try {

    //     // dispatch(setUserData(userData))
    //     setAuthenticated(true)

    //     // localStorageService.removeItem("verifyToken")
    //     // const isVerifyToken = localStorageService.getItem('verifyToken');

    //     // if (!isVerifyToken) {
    //     //   await tokenVerifyApi();
    //     //   localStorageService.setItem('verifyToken', true);
    //     //   setAuthenticated(true);
    //     //   // add user information into the redux
    //     // }

    //   } catch (error) {
    //     localStorageService.clear();
    //     return router.push('/auth/signin');
    //   }
    // };
    // verifyTokens();

  }, [pathname]);


  if (!isAuthenticated) return null


  return <>{children}</>;
};

export default LayoutProtected;
