"use client";
import React, { useEffect, useState } from "react";
import { Accordion } from "rizzui";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import cn from "@/utils/class-names";
import CustomWidgetCard from "@/components/cards/custom-widget-card";
import { getFAQsApi } from "@/apis/faqs";
import toast from "react-hot-toast";
import LargeLoader from "@/components/largeLoader/LargeLoader";

const Faq = () => {
  const [loading , setLoading] = useState(true)
  const [faqs , setFaqs] = useState([])

  const fetchFaqs =async ()=>{
    setLoading(true)
    const {data , error} = await getFAQsApi()
    if(error){
      toast.error(error)
      setLoading(false)
      return
    }
    console.log(data,'datatatatatta')
    setFaqs(data?.faqs)
    setLoading(false)

  }

    useEffect(()=>{
      fetchFaqs()
    },[])
  return (
    <>
    <CustomWidgetCard title="FAQs" shadow="left">
   <div>
  {loading ? (
    <div className="flex items-center justify-center">
      <LargeLoader />
    </div>
  ) : faqs?.length === 0 ? (
    <div>
      <p className="text-center text-2xl font-bold">
        No FAQs Available
      </p>
    </div>
  ) : (
    faqs?.map((item: any) => (
      <Accordion
        key={item?._id}
        className="mx-8 border-b last-of-type:border-b-0"
      >
        <Accordion.Header className="flex w-full cursor-pointer items-center justify-between py-5 text-xl font-semibold">
          <span>{item?.question}</span>
          <ChevronDownIcon className="h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </Accordion.Header>

        <Accordion.Body className="mb-7 text-sm text-gray-500">
          {item?.answer}
        </Accordion.Body>
      </Accordion>
    ))
  )}
</div>
    </CustomWidgetCard>
    </>
  );
};

export default Faq;