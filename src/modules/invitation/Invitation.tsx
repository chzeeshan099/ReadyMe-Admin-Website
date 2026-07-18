'use client';
import React, { useEffect, useState } from 'react'
import CustomWidgetCard from '@/components/cards/custom-widget-card'
import { FaWhatsapp } from 'react-icons/fa'
import { Button } from 'rizzui'
import { TbCopy } from 'react-icons/tb';
import { LuCopy, LuCopyCheck } from 'react-icons/lu';
import { getUserData } from '@/utils/localStorage';

const Invitation = () => { 
    const [invitationCode, setInvitationCode] = useState('');
    const [copied, setCopied] = useState(false);

      const handleCopy = () => {
        navigator.clipboard.writeText(invitationCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // Auto hide after 1.5s
    };


    useEffect(()=>{
      const userData:any = getUserData()
      setInvitationCode(userData?.invitationCode || '')

    },[])



  return (
 <>
 <CustomWidgetCard title="Invite & Earn" shadow="left">
     <div className='flex flex-col gap-10 justify-center items-center h-[60vh] px-4'>

<div className='text-center font-semibold text-sm sm:text-base'>
    <p>Invite Your Friends and Earn Money</p>
    <p className='mt-2'>Your Code is <span className='text-lg font-bold'>{invitationCode}</span></p>
 </div>

 <div>
   <Button
    onClick={handleCopy}
      className="relative cursor-pointer bg-pink-primary text-dashBordCardsBG text-xs font-bold hover:!bg-pink-secondary sm:text-sm flex items-center justify-center gap-2"
   >
      Copy Code 
      <span className='text-2xl'>
                    {copied ? <LuCopyCheck /> : <LuCopy />}
                    </span>

                    {/* ✅ Custom Tooltip */}
                    {copied && (
                        <span className="absolute -top-8 bg-gray-700 text-white text-xs px-2 py-1 rounded shadow-md">
                            Copied!
                        </span>
                    )}
 
   </Button>
 </div>

 </div>
 </CustomWidgetCard>
 </>
  )
}

export default Invitation