'use client'
import React, { useEffect, useState } from 'react'
import StatusBadge from '@/components/others/get-status-badge';
import { Button, Loader, Textarea } from 'rizzui';
import BalanceCard from './BalanceCard';
import CustomModal from '@/components/model/Model';
import Rating from '@/components/others/rating';
import Rate from '@/components/rate/rate';
import { completeUserSurveyApi, getUserSurveysApi } from '@/apis/survayApi';
import toast from 'react-hot-toast';
import { getUserActivePlanApi } from '@/apis/plansApi';
import { getUserData } from '@/utils/localStorage';
import { userSocket } from '@/socket/userSocket';
import LargeLoader from '@/components/largeLoader/LargeLoader';
import SmallLoader from '@/components/smallLoader/SmallLoader';


const reviewsOptions = [
    'We’ve stayed in many hotels, but this one stands out. The attention to detail and genuine hospitality are simply unmatched.',
    'Despite being central, the room was remarkably quiet. A perfect sanctuary to relax in after a long day of sightseeing.',
    'Dont miss the breakfast! The variety and quality were outstanding. It was the perfect way to start our mornings every day.',
    'Beautifully designed rooms with incredibly comfortable beds. It’s rare to find a hotel that balances style and comfort so well.',
    'The service here is world-class. Every staff member went above and beyond to ensure we were comfortable and well-fed.',
    'Ideally situated for exploring the city. The staff provided excellent local tips that made our trip truly unforgettable. Highly recommend!',
    'An absolute gem! From the warm welcome at check-in to the spotless rooms, everything was perfect. We’ll definitely return.'
  ];


const JourneyCardItem = ({ item, onStart }: { item:any; onStart: (item: any) => void }) => {
  return (
    <div className="relative overflow-hidden rounded-[30px] shadow-lg">
      {/* Background */}
     <div
  className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat blur-[0px] brightness-50"
  style={{
    backgroundImage: `url(${
      item?.imageUrl || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    })
    `,
  }}
/>

      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}

      <div className="relative flex flex-col justify-between py-6 text-white">
        {/* Top Section */}
        <div className="px-4">
          <div className="">
            <p className="mt-1 text-md font-semibold leading-tight text-yellow-500 drop-shadow sm:text-lg">
              {item?.name} 
              {
                item?.specialDeal&&
              <span className='text-white bg-green-500 ml-4 py-1 px-2 rounded-md'>Deal</span>
              }
            </p>
          </div>

          <div className="my-5 h-px w-full bg-white/50" />
           {/* Middle Section */}
            <div className="space-y-5 xl:space-y-8 text-sm sm:text-md">
              <div className="flex items-center justify-between gap-4">
              <span className="font-medium text-white/90">Total Amount</span>
              <span className="font-bold">USDT {item?.amount}</span>
            </div>

            <div className="flex items-center justify-between gap-4 mt-2">
              <span className="font-medium text-white/90">Commissions</span>
              <span className="font-bold">USDT {item?.commission}</span>
            </div>
            <div>
              <p className='text-center my-4 text-xs'>{item?.description}</p>
            </div>
             {/* Bottom Section */}
            <div className=''>
                <Button 
                 onClick={()=>onStart(item)}
                 className="w-full bg-pink-primary text-dashBordCardsBG text-xs font-bold hover:!bg-pink-secondary sm:text-sm"
                >Start</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StartJourney = () => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [user, setUser] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [totalSurveysCount, setTotalSurveysCount] = useState(0);
  const [totalCompletedSurveysCount, setTotalCompletedSurveysCount] = useState(0);
  const [journeyData, setJourneyData] = useState<any>([]);
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitJourneyLoading, setSubmitJourneyLoading] = useState(false);
  const [selectedJourney, setSelectedJourney] =useState <any> ({});
  
  

  const handleStart = (item:any) => {
    console.log(item,'item_item')
    setSelectedJourney(item || {})
    setIsModalOpen(true);
  };

  const handleSubmit = async() => {
    // Here you can save the rating and review, e.g., send to API
    console.log('Rating:', rating, 'Review:', review);
    if(!selectedJourney){
      toast.error('plan id and journey id required')
      return
    }
    if(rating < 1){
      toast.error('rating is required')
      return
    }
    if(!review){
      toast.error('review is required')
      return
    }
    setSubmitJourneyLoading(true)
    
    const payload = {
      userPlanId :selectedJourney?.userPlan ,
      surveyId:selectedJourney?._id
    }

    console.log(payload,'payloadpayloadpayload')
    const {data , error} = await completeUserSurveyApi(payload)
    if(error){
      toast.error(error)
      setSubmitJourneyLoading(false)
      return
    }

    toast.success(data?.message)
    setTotalCompletedSurveysCount(totalCompletedSurveysCount + 1)
    
    setRating(0);
    setReview(null);
    setSelectedReview(null)
    setSubmitJourneyLoading(false)
    setIsModalOpen(false);
    if (currentIndex < journeyData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // No Journey available
      alert('No Journey available!');
    }
  };
   const handleReviewClick = (review:any) => {
    setSelectedReview(review);
    console.log(review,'reviewreview')
    setReview(review)
  };

  const currentJourney = journeyData[currentIndex];


  const fetchAllJournies = async() => {
    setLoading(true)
  
  const {data:userActivePlanData , error:userActivePlanError} = await getUserActivePlanApi(user?._id);
  console.log(userActivePlanData,'userActivePlanDatauserActivePlanData')
   if(userActivePlanError){
    toast.error(userActivePlanError)
    return
  }
  
  if(!userActivePlanData?.data?.plan?._id){
    toast.error("planId is required")
    return
  }
  

  const payload ={
    userId:user?._id,
    userPlanId:userActivePlanData?.data?._id,
    status:'pending',
  }
  const {data , error} = await getUserSurveysApi(payload)
  if(error){
    toast.error(error)
    return
  }
  console.log(data,'datat_fetchAllJournies')
  setJourneyData(data?.data)
  setTotalSurveysCount(data?.totalSurveysCount || 0)
  setTotalCompletedSurveysCount(data?.totalCompletedSurveysCount || 0)
  setLoading(false)
  }
  useEffect(() => {
  const storedUser = getUserData();
  setUser(storedUser);
}, []);
  useEffect(()=>{
    if(!user?._id) return
    fetchAllJournies();
  },[user?._id])

  useEffect(() => {
    function onPlanUpdated(payload: any) {
      console.log(payload,'plan_updated_in_survay')
      setJourneyData(payload?.AssignedSurveys || [])
      setTotalSurveysCount(payload?.totalSurveysCount || 0)
      setTotalCompletedSurveysCount(0)
    }
  
    userSocket.on("plan_updated", onPlanUpdated);
  
    return () => {
      userSocket.off("plan_updated", onPlanUpdated);
    };
  }, []);

  console.log(journeyData,'journeyDatajourneyData')
  useEffect(() => {
  function onPlanUpdated(payload: any) {
    console.log(payload?.updatedSurvey, 'survay_updatedsurvay_updated');

    const updatedSurvey = payload?.updatedSurvey;

    setJourneyData((prev: any[]) => {
  const exists = prev.some((item) => item?._id === updatedSurvey?._id);

  if (exists) {
    return prev.map((item) =>
      item?._id === updatedSurvey?._id
        ? { ...item, ...updatedSurvey }
        : item
    );
  } 
});

   

  }

  userSocket.on("survay_updated", onPlanUpdated);

  return () => {
    userSocket.off("survay_updated", onPlanUpdated);
  };
}, []);

  return (
   <>
   <div>
    <BalanceCard totalSurveysCount={totalSurveysCount} totalCompletedSurveysCount={totalCompletedSurveysCount}/>
   </div>
 <div className='mt-5'>
  {loading ? (
    <div className='flex items-center justify-center'><LargeLoader/></div>
  ) : currentJourney ? (
    <div className="flex justify-center">
      <div className="w-full">
        <JourneyCardItem item={currentJourney} onStart={handleStart} />
      </div>
    </div>
  ) : (
    <div className="text-center text-lg font-semibold">
      No Journey available!
    </div>
  )}
</div>

   <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={currentJourney?.name}>
     <div className="">
       <p className="my-4">
         {currentJourney?.description}
       </p>
       <div className="mb-5">
         <label className="block text-sm font-medium mb-1">Rating (1-5):</label>
        <Rate
        value={rating}
        onChange={(value) => setRating(value)}
        />
       </div>

       
       <label className="block text-sm font-medium mb-2">Review:</label>

           <div className="grid gap-2 grid-cols-2 mb-4">
              {reviewsOptions?.map((review) => (
                <div
                  key={review}
                  onClick={() => handleReviewClick(review)}
                  className={`cursor-pointer rounded-lg border-2  p-3 text-center transition ${
                    selectedReview === review
                      ? 'border-pink-500 bg-pink-50'
                      : 'border-gray-300'
                  }`}
                >
                  <p className="text-xs font-medium">{review}</p>
                </div>
              ))}
            </div>
     

       <div className="flex justify-end gap-2">
         <Button className='bg-black-dark hover:!bg-black-light' onClick={() => setIsModalOpen(false)}>Cancel</Button>
         <Button onClick={handleSubmit} className="bg-pink-primary hover:!bg-pink-600"><span className='me-1'>Submit</span> {submitJourneyLoading && <SmallLoader/>}</Button>
       </div>
     </div>
   </CustomModal>
   </>
  )
}

export default StartJourney
