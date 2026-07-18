'use client';
import React from 'react'
import CustomWidgetCard from '@/components/cards/custom-widget-card'
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';
import LiveChatButton from '@/components/LiveChatButton/LiveChatButton';

const ContactUs = () => {

  return (
 <>
 <CustomWidgetCard title="Contact Us With WhatsApp" shadow="left">
     <div className='flex flex-col gap-10 justify-center items-center h-[60vh] px-4'>

   <div className='text-center text-sm sm:text-base'>
    <p className='font-bold'>Contact us with WhatsApp</p>
    <p>Agency Service Operation Time: 10:00AM - 10:00PM</p>
   </div>

 <div className='flex gap-3'>
  <WhatsAppButton />
  <LiveChatButton />
</div>

 </div>
 </CustomWidgetCard>
 </>
  )
}

export default ContactUs