"use client"
import React, { useEffect, useState } from 'react'
import CustomWidgetCard from '@/components/cards/custom-widget-card'
import toast from 'react-hot-toast'
import LargeLoader from '@/components/largeLoader/LargeLoader'
import DOMPurify from "dompurify";
import { getAboutUsApi } from '@/apis/aboutUsApi'


const AboutUs = () => {
  const [loading , setLoading] = useState(true)
  const [content, setContent] = useState("");
  
    const getAboutUs =async ()=>{
      setLoading(true)
      const {data , error} = await getAboutUsApi()
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
        getAboutUs()
      },[])
  return (
   <>
     <CustomWidgetCard title="About Us" shadow="left" className='px-5 flex flex-col gap-4'>

 {loading ? (
    <div className="flex items-center justify-center">
      <LargeLoader />
    </div>
  ) : content ==='' ? (
    <div>
      <p className="text-center text-2xl font-bold">
        No About Us Data Available
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

export default AboutUs