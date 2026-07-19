
import { TbLogout } from 'react-icons/tb';
import SelectCountry from '@/components/select-country/select-country';
import { IoNotificationsOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import { routes } from '@/config/routes';
import { removeUserData } from '@/utils/localStorage';
import { logOutStaffApi } from '@/apis/authApi';
import { toast } from 'react-toastify';

export default function HeaderMenuRight() {
  const router = useRouter();

  const handleLogout = async() => {
    const { data , error} = await logOutStaffApi();
    if(error){
      toast.error(error)
      return
    }
    toast.success(data?.message);
    router.push(routes.jira.login);
    removeUserData();
  };

  return (
    <div className="ms-auto flex items-center gap-2 xs:gap-3 xl:gap-4">
      <div className="flex cursor-pointer items-center hidden">
        <IoNotificationsOutline className="h-5 w-5" />
      </div>

      <div className="flex cursor-pointer items-center hidden">
        <SelectCountry />
      </div>

      <div onClick={handleLogout} className="flex w-full cursor-pointer items-center gap-x-2 text-gray-800">
        <TbLogout className="h-5 w-5" />
        <p className="sm:block hidden">Logout</p>
      </div>

      {/* Profile Menu (Optional) */}
      {/* <ProfileMenu /> */}
    </div>
  );
}
