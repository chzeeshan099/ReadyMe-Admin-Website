'use client';

import { useIsMounted } from '@/hooks/use-is-mounted';

type LayoutProps = {
    children: React.ReactNode;
};

export default function AuthLayout({ children }: LayoutProps) {
    const isMounted = useIsMounted();

    if (!isMounted) {
        return null;
    }

    return (
        <div className="flex !h-[100vh] w-full flex-col bg-gray-50 ">
            <div className="flex w-full flex-1 flex-col">
                {children}
            </div>
        </div>
    );
}