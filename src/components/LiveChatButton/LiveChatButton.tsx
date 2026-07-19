'use client'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { IoChatboxEllipsesOutline } from 'react-icons/io5'
import { Button } from 'rizzui'

const LiveChatButton = () => {
  return (
   <>
     <div>
    <Button
      //  onClick={}
       className="bg-blue-light text-dashBordCardsBG text-xs font-bold hover:!bg-pink-secondary sm:text-sm flex items-center justify-center gap-2"
    >
      Live Chat <IoChatboxEllipsesOutline  size={20}/>
    </Button>
  </div>
   </>
  )
}

export default LiveChatButton
