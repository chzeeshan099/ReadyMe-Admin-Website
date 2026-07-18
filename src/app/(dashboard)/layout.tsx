'use client';

import HydrogenLayout from '@/layouts/hydrogen/layout';
import { useIsMounted } from '@/hooks/use-is-mounted';
import LayoutProtected from '@/utils/PrivateRoute/privateRoutes';
import { userSocket } from '@/socket/userSocket';
import { useEffect, useState } from 'react';
import { getUserData, updateUserData } from '@/utils/localStorage';
import { useRouter } from 'next/navigation';
import { routes } from '@/config/routes';

type LayoutProps = {
    children: React.ReactNode;
};

export default function DefaultLayout({ children }: LayoutProps) {
      const [user, setUser] = useState<any>(null);
      const router = useRouter();

        useEffect(() => {
        const storedUser = getUserData();
        if (storedUser) {
        setUser(storedUser);
        }
        if(!storedUser){
          router.push(routes.jira.login);
        }
      }, []);
    
      useEffect(() => {
    if (!user?._id) return;

    userSocket.connect();

      userSocket.on("connect", () => {
      console.log("User socket connected:", userSocket.id);
      userSocket.emit("join:user", user?._id);
    });

    return () => {
      userSocket.off("connect");
      userSocket.disconnect();
    };
  }, [user?._id]);



   useEffect(() => {
        function onBanStatusUpdated(payload: any) {
          console.log(payload, 'onBanStatusUpdatedonBanStatusUpdated');
      
          updateUserData({
            isBanned: payload?.isBanned,
          });
      
        }
      
        userSocket.on("user_ban_status", onBanStatusUpdated);
      
        return () => {
          userSocket.off("user_ban_status", onBanStatusUpdated);
        };
      }, [user?._id]);
   
  return (
        <div className="flex !h-[100vh]  w-full flex-col bg-gray-50">
            <div className="flex w-full flex-1 flex-col">
                <LayoutProvider>{children}</LayoutProvider>
            </div>
        </div>
    );
}

function LayoutProvider({ children }: LayoutProps) {

    const isMounted = useIsMounted();

    if (!isMounted) {
        return null;
    }

    return <HydrogenLayout>{children}</HydrogenLayout>

    //  <LayoutProtected>
    //     <HydrogenLayout>{children}</HydrogenLayout>
    //     </LayoutProtected>
}
