import React, { useState } from 'react'
import CustomWidgetCard from '../cards/custom-widget-card'
import RoadMapCard from '../cards/road-map-card'
import Image from 'next/image'
import Profile from "@public/images/Profile.svg"
import { Button, Input, Text } from 'rizzui'
import { IoIosSend } from 'react-icons/io'
const chatData = [
    {
        title: "Tech",
        description: "Purchase IIDAG with your NEW custom bonus code. To ritach your ultimate reward bonus you must complete 3 purchase",
        name: "money$Mutt",
        address: "Ox815b...652",
        profileImg: Profile
    },
    {
        title: "Tech",
        description: "Purchase IIDAG with your NEW custom bonus code. To ritach your ultimate reward bonus you must complete 3 purchase",
        name: "money$Mutt",
        address: "Ox815b...653",
        profileImg: Profile
    },
    {
        title: "Tech",
        description: "Purchase IIDAG with your NEW custom bonus code. To ritach your ultimate reward bonus you must complete 3 purchase Purchase IIDAG with your NEW custom bonus code. To ritach your ultimate reward bonus you must complete 3 purchase",
        name: "money$Mutt",
        address: "Ox815b...654",
        profileImg: Profile
    }
];
const Chat = () => {
    const [showInput, setShowInput] = useState<boolean>(false);

    const handleButtonClick = () => {
      setShowInput(true); 
    };
  return (
    <CustomWidgetCard title="Chat" shadow="left" className='my-5 w-full'>
            {chatData?.map((item, index) => (
                <>
        <div className='flex items-center px-5 gap-2 mt-5'>
            <Image
                src={item.profileImg}
                alt="Chat"
                width={24}
                height={24}
                className=""
            />
            <Text className='flex items-center gap-2 font-semibold text-sm text-greenPrimary-100'>{item.name}   <Text className='font-medium text-sm text-black-light'>{item.address}</Text></Text>
        </div>
        <RoadMapCard title="" shadow="" className='my-2 w-[93%] mx-auto' >
           

                <div key={index}>
                    <Text className='text-sm font-medium my-3 px-5 sm:text-base text-black-light'>{item.title}</Text>
                    <Text className='font-normal text-sm text-gray-1200 px-5 mb-4'>{item.description}</Text>
                </div>
        </RoadMapCard>
            </>
            ))}
           <div className='flex justify-end w-[96%] mx-auto mb-4'>
      {!showInput && (
        <Button
          onClick={handleButtonClick}
          as='button'
          type='button'
          className='!bg-yellow-primary !hover:bg-yellow-600 text-sm font-bold py-2 px-4 rounded-md mt-5'
        >
          Write Message
        </Button>
      )}

      {showInput && (
        <div className=' w-[97%] mx-auto flex items-center text-gray-1100 relative border border-white rounded-full'>
        <Input
          type="text"
          rounded='pill'
          placeholder="Write your message..."
          className=" w-11/12 text-gray-1200 text-sm font-medium"
          inputClassName='!border-none !shadow-none !ring-0 focus:ring-0 focus:shadow-none !placeholder:text-gray-1200'
        />
        <Button  type='submit' className='absolute top-2 right-1 !py-0 max-h-6 !px-1 !bg-transparent !hover:bg-transparent'><IoIosSend className='w-5 h-5 text-black-light' /></Button>
        </div>

      )}
    </div>
    </CustomWidgetCard>
  )
}

export default Chat
