'use client';

import React, { useState } from 'react';
import {
  Modal,
  Title,
  ActionIcon,
  Button,
} from 'rizzui';
import { XMarkIcon } from '@heroicons/react/20/solid';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import LiveChatButton from '@/components/LiveChatButton/LiveChatButton';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<Props> = ({
  isOpen,
  onClose,
}) => {
    
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="m-auto px-4 sm:px-7 pt-6 pb-8 shadow-[0_0_12px_rgba(236,72,153,0.6)] border-b-2 border-gray-200">
        
        {/* Header */}
        <div className="mb-7 flex items-center justify-between">
          <Title as="h3">Contact US</Title>
          <ActionIcon
            size="sm"
            variant="text"
            onClick={onClose}
          >
            <XMarkIcon className="h-auto w-6" strokeWidth={1.8} />
          </ActionIcon>
        </div>

        {/* Body */}
         <div className='flex items-cente justify-center gap-3'>
         <WhatsAppButton/>
        
        <LiveChatButton/>
         </div>
        

      </div>
    </Modal>
  );
};

export default ContactModal;