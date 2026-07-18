'use client';

import React from 'react';
import {
  Modal,
  Title,
  ActionIcon,
} from 'rizzui';
import { XMarkIcon } from '@heroicons/react/20/solid';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const CustomModal: React.FC<Props> = ({
  isOpen,
  onClose,
  title = "Modal Title",
  children,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="m-auto px-7 pt-6 pb-8 shadow-[0_0_12px_rgba(236,72,153,0.6)] border-b-2 border-gray-200">
        
        {/* Header */}
        <div className="mb-0 pb-1 flex items-center justify-between border-b border-black-dark">
          <Title className='text-sm sm:text-base'>{title}</Title>
          <ActionIcon
            size="sm"
            variant="text"
            onClick={onClose}
          >
            <XMarkIcon className="h-auto w-6 border-2 border-black-dark rounded-md" strokeWidth={1.8} />
          </ActionIcon>
        </div>

        {/* Body */}
        {children}

      </div>
    </Modal>
  );
};

export default CustomModal;