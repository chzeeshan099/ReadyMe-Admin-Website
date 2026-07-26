'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  registerSchema,
  ProposalFormValues,
} from '@/schema/register-schema';
import { useForm } from 'react-hook-form';
import CustomWidgetCard from '@/components/cards/custom-widget-card';
import { Button, Input, Text } from 'rizzui';
import { toast } from 'react-toastify';
import { routes } from '@/config/routes';
// import PhoneNumber from '@/components/phone-number/phone-number'
import 'react-phone-input-2/lib/style.css';
import { registerUserApi } from '@/apis/authApi';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { IoEyeOffOutline } from 'react-icons/io5';
import { saveUserData } from '@/utils/localStorage';
import SmallLoader from '@/components/smallLoader/SmallLoader';


const Register = () => {
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showWithdrawPassword, setShowWithdrawPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countryInfo, setCountryInfo] = useState({
  countryCode: '+1',
  countryName: 'United States',
});
         const router = useRouter();
    

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    control,
    trigger,
    setError,
    formState: { errors },
  } = useForm<ProposalFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      mobileNumber: '',
      invitationCode: '',
      loginPassword:'',
      withdrawPassword:'',
    },
  });


  const onSubmit = async (dataa: ProposalFormValues) => {
    toast.dismiss()

    console.log(dataa,'data_register')
    
    // console.log(countryInfo,'countryInfocountryInfo')

    // if(!countryInfo?.countryCode || !countryInfo?.countryName){
    //   toast.error('Please select a valid country code');
    //   return;
    // }

    setLoading(true)

    console.log('Validated Data:', dataa);
    // console.log('countryInfocountryInfocountryInfo', countryInfo);
  //    const payload = {
  //   ...dataa,
  //   countryCode: countryInfo.countryCode,
  //   countryName: countryInfo.countryName,
  //   accountType:'real'
  //  };
   const payload = {
  ...dataa,
  mobileNumber: `+${dataa.mobileNumber}`,
  accountType: 'real',
};
console.log('payloadpayload', payload);
   console.log('registerUserApi =>', registerUserApi);
   const {data , error} = await registerUserApi(payload)
  
   if (error) {
    toast.error(error);
    setLoading(false)
    return;
   }
   console.log(data,'register_api_response_data')
   saveUserData(data?.data)
  
   toast.success(data.message);
   reset({
    name: '',
    mobileNumber: '',
    invitationCode: '',
    loginPassword:'',
    withdrawPassword:'',
   });
   router.push(routes.jira.dashBoard);
   setLoading(false)
   console.log('router_after_registration', routes.jira.dashBoard);
  };

  const handleLoginNow = () =>{
   router.push(routes.jira.login);
    }
  
  return (
    <>
     <div className='w-full h-full bg-cover bg-center flex items-center justify-center'
       style={{ backgroundImage: 'url(https://res.cloudinary.com/dfxsu3ehp/image/upload/v1776126568/Atlantis_-The-Palm_-Dubai_e4xcos.jpg)' }}
>

 <div className='w-11/12 md:w-1/2 xl:w-5/12 mx-auto my-10 bg-white rounded-lg shadow-lg'>
      <CustomWidgetCard title="Register Your Account" shadow="left">
      <div className="p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 text-sm text-gray-1200"
        >
          <div className="relative">
            <p className='pl-1 mb-1'>User Name</p> 
        <input
  type={ 'text'}
  inputMode={'text' }
  {...register('name', {
  setValueAs: (value) => value.replace(/\s/g, '')
})}
  placeholder={'Enter Your Name' }
   onKeyDown={(e) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  }}
    onChange={(e) => {
    e.target.value = e.target.value.replace(/\s/g, '');
  }}
  className="
    w-full
    text-gray-900
    text-sm
    border
    border-gray-300
    rounded-lg
    px-3
    py-3
  focus:border-pink-500
    focus:ring-1
    focus:ring-pink-500
    focus:outline-none
    transition
    shadow-lg
    bg-transparent
  "
/>
            {errors.name && (
              <Text className="absolute -bottom-5 text-xs text-red-500">
                {errors.name.message}
              </Text>
            )}
          </div>


              {/* <PhoneNumber<ProposalFormValues> */}
  {/* // name="mobileNumber"
  // control={control}
  // errors={errors}
  // clearErrors={clearErrors}
  // setError={setError}
  // label="Mobile Number"
  // placeholder="Enter Your Mobile Number"
  // defaultCountry="us"
  // onCountryChange={(data) => setCountryInfo(data)} */}
{/* /> */}

<div className="relative">
  <p className="pl-1 mb-1">Mobile Number</p>

  <div
    className="
      flex items-center
      border border-gray-300
      rounded-lg
      px-3
      py-1
      shadow-lg
      focus-within:border-pink-500
      focus-within:ring-1
      focus-within:ring-pink-500
      transition
    "
  >
    {/* Fixed + Sign */}
    <span className="text-gray-700 mr-1 select-none">+</span>

    <input
      type="tel"
      inputMode="numeric"
      {...register('mobileNumber', {
        setValueAs: (value) => value.replace(/\D/g, ''),
      })}
      placeholder="14165550123"
      onKeyDown={(e) => {
        // Prevent typing + or -
        if (e.key === '+' || e.key === '-') {
          e.preventDefault();
        }
      }}
      onInput={(e: React.FormEvent<HTMLInputElement>) => {
        // Allow only numbers
        e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '');
      }}
      className="
        w-full
        bg-transparent
        outline-none
        border-none
        focus:ring-0
      "
    />
  </div>

  {errors.mobileNumber && (
    <Text className="absolute -bottom-5 text-xs text-red-500">
      {errors.mobileNumber.message}
    </Text>
  )}
</div>


          <div className="relative">
            <p className='pl-1 mb-1'>Invitation Code</p> 
        <input
  type={ 'text'}
  inputMode={'text' }
  minLength={6}
  maxLength={6}
  autoCapitalize="characters" 
  {...register('invitationCode')}
  placeholder={'Enter Invitation Code' }
   onInput={(e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.value = e.currentTarget.value.toUpperCase(); // live uppercase
  }}
  className="
    w-full
    text-gray-900
    text-sm
    border
    border-gray-300
    rounded-lg
    px-3
    py-3
  focus:border-pink-500
    focus:ring-1
    focus:ring-pink-500
    focus:outline-none
    transition
    shadow-lg
    bg-transparent
  "
/>
            {errors.invitationCode && (
              <Text className="absolute -bottom-5 text-xs text-red-500">
                {errors.invitationCode.message}
              </Text>
            )}
          </div>


         <div className="relative">
  <p className="pl-1 mb-1">Login Password</p>

  <div
    className="
      flex items-center justify-center
      text-gray-900
      text-sm
      border
      border-gray-300
      rounded-lg
      px-2 sm:px-0
      py-1

      focus-within:border-pink-500
      focus-within:ring-1
      focus-within:ring-pink-500

      transition
      shadow-lg
    "
  >
    <input
      type={showLoginPassword ? 'text' : 'password'}
      {...register('loginPassword')}
      placeholder="Enter Your Login Password"
      className="  w-[92%]
  bg-transparent
  border-none
  outline-none
  focus:outline-none
  ring-0
  focus:ring-0
  focus:border-none
  appearance-none"
    />

    <span 
     onClick={() => setShowLoginPassword((prev) => !prev)}
    className="w-[8%] flex justify-center cursor-pointer text-base">
       {showLoginPassword ? <IoEyeOffOutline /> : <MdOutlineRemoveRedEye />}
    </span>
  </div>

  {errors.loginPassword && (
    <Text className="absolute -bottom-5 text-xs text-red-500">
      {errors.loginPassword.message}
    </Text>
  )}
</div>





     <div className="relative">
  <p className="pl-1 mb-1">Withdraw Password</p>

  <div
    className="
      flex items-center justify-center
      text-gray-900
      text-sm
      border
      border-gray-300
      rounded-lg
      px-2 sm:px-0
      py-1

      focus-within:border-pink-500
      focus-within:ring-1
      focus-within:ring-pink-500

      transition
      shadow-lg
    "
  >
    <input
     type={showWithdrawPassword ? 'text' : 'password'}
      {...register('withdrawPassword')}
      placeholder="Enter Your Withdraw Password"
      className="  w-[92%]
  bg-transparent
  border-none
  outline-none
  focus:outline-none
  ring-0
  focus:ring-0
  focus:border-none
  appearance-none"
    />

    <span 
    onClick={() => setShowWithdrawPassword((prev) => !prev)}
    className="w-[8%] flex justify-center cursor-pointer text-base">
      {showWithdrawPassword ? <IoEyeOffOutline /> : <MdOutlineRemoveRedEye />}
    </span>
  </div>

  {errors.withdrawPassword && (
    <Text className="absolute -bottom-5 text-xs text-red-500">
      {errors.withdrawPassword.message}
    </Text>
  )}
</div>



        

          <Button
            type="submit"
            className="bg-blue-light text-dashBordCardsBG text-xs font-bold hover:!bg-blue-lighter sm:text-sm"
          >
            
            <span className='pe-1'> Register Now</span>  {loading && <SmallLoader/>} 
          </Button>

        </form>
          <p className='text-right mt-3 text-xs sm:text-base'>Already have an account? <span onClick={handleLoginNow} className='font-semibold text-blue-600 cursor-pointer'>Login now</span></p>
      </div>
    </CustomWidgetCard>
    </div>
    </div>
    </>
  );
};

export default Register;