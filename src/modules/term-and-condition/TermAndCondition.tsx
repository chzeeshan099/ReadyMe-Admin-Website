"use client"
import React, { useEffect, useState } from 'react'
import { getTermAndConditionApi } from '@/apis/termAndCondition'
import CustomWidgetCard from '@/components/cards/custom-widget-card'
import toast from 'react-hot-toast'
import LargeLoader from '@/components/largeLoader/LargeLoader'
import DOMPurify from "dompurify";


const TermAndCondition = () => {
  const [loading , setLoading] = useState(true)
  const [content, setContent] = useState("");
  
    const getTermAndCondition =async ()=>{
      setLoading(true)
      const {data , error} = await getTermAndConditionApi()
      if(error){
        toast.error(error)
        setLoading(false)
        return
      }
      console.log(data,'datatatatatta_termAndCondition')
       setContent(data?.content || "");
      setLoading(false)
  
    }
  
      useEffect(()=>{
        getTermAndCondition()
      },[])
  return (
   <>
     <CustomWidgetCard title="Terms and Conditions" shadow="left" className='px-5 flex flex-col gap-4'>

 {loading ? (
    <div className="flex items-center justify-center">
      <LargeLoader />
    </div>
  ) : content ==='' ? (
    <div>
      <p className="text-center text-2xl font-bold">
        No Term And Condition Available
      </p>
    </div>
  ) : (
    <div className="prose max-w-none"  dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(content),
        }}>

    </div>
  )} 

     </CustomWidgetCard>
   </>
  )
}

export default TermAndCondition