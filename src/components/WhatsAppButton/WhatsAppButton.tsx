'use client'
import React, { useEffect, useState } from 'react'
import { getContactNumberApi } from '@/apis/contactUsNumber'
import { openWhatsApp } from '@/utils/contactOnWhatsapp'
import toast from 'react-hot-toast'
import { FaWhatsapp } from 'react-icons/fa'
import { Button } from 'rizzui'

const WhatsAppButton = () => {
  const [loading , setLoading] = useState(false)
  const [number , setNumber] = useState('')
   const fetchContactNumber = async () =>{
    setLoading(true)
    const {data , error } = await getContactNumberApi()
    if(error){
        toast.error(error)
        setLoading(false)
        return
    }
    console.log(data,'whatsapp_response_data')
    setNumber(data?.whatsappNumber || '')
   

    setLoading(false)
  }

  useEffect(()=>{
fetchContactNumber()
  },[])
  return (
   <>
     <div>
    <Button
       onClick={() => openWhatsApp(number)}
       className="bg-blue-light text-dashBordCardsBG text-xs font-bold hover:!bg-pink-secondary sm:text-sm flex items-center justify-center gap-2"
    >
       WhatsApp <FaWhatsapp size={20}/>
    </Button>
  </div>
   </>
  )
}

export default WhatsAppButton
