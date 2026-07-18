'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Drawer } from 'rizzui';
import { useDrawer } from '@/shared/drawer-views/use-drawer';

export default function GlobalDrawer() {
    const { isOpen, view, placement, customSize, closeDrawer } = useDrawer();
    const pathname = usePathname();
    useEffect(() => {
        closeDrawer();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <Drawer
            isOpen={isOpen}
            onClose={closeDrawer}
            placement={placement}
            customSize={customSize}
            overlayClassName=""
            containerClassName=""
            className="z-[9999]"
        >
            {view}
        </Drawer>
    );
}
