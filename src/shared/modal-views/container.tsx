'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Modal } from 'rizzui';
import { useModal } from '@/shared/modal-views/use-modal';

export default function GlobalModal() {
    const { isOpen, view, closeModal, customSize } = useModal();
    const pathname = usePathname();
    useEffect(() => {
        closeModal();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <Modal
            isOpen={isOpen}
            onClose={closeModal}
            customSize={customSize}
            overlayClassName=""
            containerClassName=""
            className="z-[9999]"
        >
            {view}
        </Modal>
    );
}
