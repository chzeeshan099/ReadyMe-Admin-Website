'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import {loginSchema} from '@/schema/login-schema';
import { useForm   } from 'react-hook-form';
import CustomWidgetCard from '@/components/cards/custom-widget-card';
import { Button, Text } from 'rizzui';
import { toast } from 'react-toastify';
import { routes } from '@/config/routes';
import { IoEyeOffOutline } from 'react-icons/io5';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { loginStaffApi } from '@/apis/authApi';
import { saveUserData } from '@/utils/localStorage';
import SmallLoader from '@/components/smallLoader/SmallLoader';

const Login = () => {
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loading, setLoading] = useState(false);

     const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
     mode: 'onSubmit',
     reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      loginPassword:'',
    },
  });


  const onSubmit = async  (dataa:any) => {
toast.dismiss()
  setLoading(true)
  console.log('login_form_data', dataa);
  const payload = {
     email:dataa.email,
     loginPassword:dataa.loginPassword,
    };
  
    const {data , error} = await loginStaffApi(payload)
    
    if (error) {
      toast.error(error);
      setLoading(false)
      return;
    }
    console.log(data,'login_api_response_data')
    saveUserData(data?.data)
    
  toast.success(data.message );
    reset({
      email: '',
      loginPassword:'',
    });
    router.push(routes.jira.dashBoard);
    setLoading(false)
  };

  const handleRegisterNow = () =>{
 router.push(routes.jira.register);
  }
  const handleForgetPassword = () =>{
 router.push(routes.jira.forgetPassword);
  }



  return (
    <>
     <div className='w-full h-screen bg-cover bg-center flex items-center justify-center'
       style={{ backgroundImage: 'url(https://res.cloudinary.com/dfxsu3ehp/image/upload/v1776126568/Atlantis_-The-Palm_-Dubai_e4xcos.jpg)' }}
>
    <div className='w-11/12 md:w-1/2 xl:w-5/12 m-auto bg-white rounded-lg shadow-lg'>
    <CustomWidgetCard title="Login Your Account" shadow="left ">
      <div className="p-4">


        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 text-sm text-gray-1200"
        >





  <div className="relative">
            <p className='pl-1 mb-1'>Email</p> 
        <input
  type={ 'text'}
  inputMode={'text' }
  // {...register('userName')}
  {...register('email', {
  setValueAs: (value) => value.replace(/\s/g, '')
})}
  placeholder={'Enter Your Email' }
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
            {errors.email && (
              <Text className="absolute -bottom-5 text-xs text-red-500">
                {errors.email.message}
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
                px-0
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


        

          <p onClick={handleForgetPassword} className='text-right font-semibold text-blue-600 cursor-pointer -mb-5 text-xs sm:text-base'>Forget Password</p>
          <Button
            type="submit"
            className="bg-blue-light text-dashBordCardsBG text-xs font-bold hover:!bg-pink-secondary sm:text-sm"
          >
           <span className='pe-1'> Login Now</span>  {loading && <SmallLoader/>}  
          </Button>

        </form>
          <p className='text-right mt-3 text-xs sm:text-base'>Not a member? <span onClick={handleRegisterNow} className='font-semibold text-blue-600 cursor-pointer'>Register now</span></p>
      </div>
    </CustomWidgetCard>
      </div>
    </div>
    </>
   
  );
};

export default Login;