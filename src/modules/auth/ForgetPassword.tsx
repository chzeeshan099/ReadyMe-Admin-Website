import CustomWidgetCard from '@/components/cards/custom-widget-card'
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton'
import React from 'react'

const ForgetPassword = () => {
  return (
   <>
 <div className='w-11/12 md:w-1/2 xl:w-5/12 m-auto'>
  <CustomWidgetCard title="Forget Password" shadow="left">
      <div className='flex flex-col gap-10 justify-center items-center h-[60vh] px-4'>
 
 <div className='text-center text-sm sm:text-base'>
     <p className='font-bold'>Contact us with WhatsApp</p>
     <p>Agency Service Operation Time: 10:00AM - 10:00PM</p>
  </div>

  <WhatsAppButton/>
 
  </div>
  </CustomWidgetCard>
   </div>
   </>
  )
}

export default ForgetPassword
