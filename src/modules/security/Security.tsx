'use client';

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import CustomWidgetCard from '@/components/cards/custom-widget-card';
import { Button, Text } from 'rizzui';
import { toast } from 'react-toastify';
import { updateMyPasswordApi } from '@/apis/authApi';
import { getUserData } from '@/utils/localStorage';
import { IoEyeOffOutline } from 'react-icons/io5';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import {
  securitySchema,
  SecurityFormValues,
} from '@/schema/security-schema';
import SmallLoader from '@/components/smallLoader/SmallLoader';

const Security = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SecurityFormValues>({
    resolver: zodResolver(securitySchema),
    defaultValues: {
      passwordType: 'loginPassword',
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const selectedStatus = watch('passwordType');

  const handleChangeTab = (type: 'loginPassword' | 'withdrawPassword') => {
    setValue('passwordType', type);

    reset({
      passwordType: type,
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    });

    clearErrors();

    setShowOldPassword(false);
    setShowNewPassword(false);
    setShowConfirmPassword(false);
  };

  const onSubmit = async (formData: SecurityFormValues) => {
    toast.dismiss();

    const payload = {
      passwordType: formData.passwordType,
      oldPassword: formData.oldPassword,
      newPassword: formData.newPassword,
      confirmPassword: formData.confirmPassword,
    };

    const { data, error } = await updateMyPasswordApi(payload);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success(data?.message || 'Password updated successfully');

    reset({
      passwordType: formData.passwordType,
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    });

    setShowOldPassword(false);
    setShowNewPassword(false);
    setShowConfirmPassword(false);
  };

  return (
    <CustomWidgetCard title="Update Your Password" shadow="left">
      <div className="p-4">
        <div className="flex flex-wrap items-center gap-1 pb-4 sm:gap-3">
          <button
            type="button"
            onClick={() => handleChangeTab('loginPassword')}
            className={`rounded-md px-2 py-2 text-xs font-bold transition-all sm:px-5 sm:text-sm ${
              selectedStatus === 'loginPassword'
                ? 'bg-pink-primary text-black-dark'
                : 'border border-gray-300 text-slate-700 shadow-sm'
            }`}
          >
            Login Password
          </button>

          <button
            type="button"
            onClick={() => handleChangeTab('withdrawPassword')}
            className={`rounded-md px-2 py-2 text-xs font-bold transition-all sm:px-5 sm:text-sm ${
              selectedStatus === 'withdrawPassword'
                ? 'bg-pink-primary text-black-dark'
                : 'border border-gray-300 text-slate-700 shadow-sm'
            }`}
          >
            Withdraw Password
          </button>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-10 text-sm text-gray-1200"
        >
          <div className="relative">
            <p className="mb-1 pl-1">
              {selectedStatus === 'loginPassword'
                ? 'Old Login Password'
                : 'Old Withdraw Password'}
            </p>

            <div
              className="
                flex items-center justify-center
                rounded-lg border border-gray-300
                px-0 py-1 text-sm text-gray-900
                shadow-lg transition
                focus-within:border-pink-500
                focus-within:ring-1
                focus-within:ring-pink-500
              "
            >
              <input
                type={showOldPassword ? 'text' : 'password'}
                {...register('oldPassword')}
                placeholder={
                  selectedStatus === 'loginPassword'
                    ? 'Enter Old Login Password'
                    : 'Enter Old Withdraw Password'
                }
                className="
                  w-[92%] appearance-none border-none bg-transparent
                  px-3 py-2 outline-none ring-0
                  focus:border-none focus:outline-none focus:ring-0
                "
              />

              <span
                onClick={() => setShowOldPassword((prev) => !prev)}
                className="flex w-[8%] cursor-pointer justify-center pr-1 text-base"
              >
                {showOldPassword ? <IoEyeOffOutline /> : <MdOutlineRemoveRedEye />}
              </span>
            </div>

            {errors.oldPassword && (
              <Text className="absolute -bottom-5 text-xs text-red-500">
                {errors.oldPassword.message}
              </Text>
            )}
          </div>

          <div className="relative">
            <p className="mb-1 pl-1">
              {selectedStatus === 'loginPassword'
                ? 'New Login Password'
                : 'New Withdraw Password'}
            </p>

            <div
              className="
                flex items-center justify-center
                rounded-lg border border-gray-300
                px-0 py-1 text-sm text-gray-900
                shadow-lg transition
                focus-within:border-pink-500
                focus-within:ring-1
                focus-within:ring-pink-500
              "
            >
              <input
                type={showNewPassword ? 'text' : 'password'}
                {...register('newPassword')}
                placeholder={
                  selectedStatus === 'loginPassword'
                    ? 'Enter New Login Password'
                    : 'Enter New Withdraw Password'
                }
                className="
                  w-[92%] appearance-none border-none bg-transparent
                  px-3 py-2 outline-none ring-0
                  focus:border-none focus:outline-none focus:ring-0
                "
              />

              <span
                onClick={() => setShowNewPassword((prev) => !prev)}
                className="flex w-[8%] cursor-pointer justify-center pr-1 text-base"
              >
                {showNewPassword ? <IoEyeOffOutline /> : <MdOutlineRemoveRedEye />}
              </span>
            </div>

            {errors.newPassword && (
              <Text className="absolute -bottom-5 text-xs text-red-500">
                {errors.newPassword.message}
              </Text>
            )}
          </div>

          <div className="relative">
            <p className="mb-1 pl-1">
              {selectedStatus === 'loginPassword'
                ? 'Confirm New Login Password'
                : 'Confirm New Withdraw Password'}
            </p>

            <div
              className="
                flex items-center justify-center
                rounded-lg border border-gray-300
                px-0 py-1 text-sm text-gray-900
                shadow-lg transition
                focus-within:border-pink-500
                focus-within:ring-1
                focus-within:ring-pink-500
              "
            >
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                {...register('confirmPassword')}
                placeholder={
                  selectedStatus === 'loginPassword'
                    ? 'Enter Confirm New Login Password'
                    : 'Enter Confirm New Withdraw Password'
                }
                className="
                  w-[92%] appearance-none border-none bg-transparent
                  px-3 py-2 outline-none ring-0
                  focus:border-none focus:outline-none focus:ring-0
                "
              />

              <span
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="flex w-[8%] cursor-pointer justify-center pr-1 text-base"
              >
                {showConfirmPassword ? (
                  <IoEyeOffOutline />
                ) : (
                  <MdOutlineRemoveRedEye />
                )}
              </span>
            </div>

            {errors.confirmPassword && (
              <Text className="absolute -bottom-5 text-xs text-red-500">
                {errors.confirmPassword.message}
              </Text>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-pink-primary text-xs font-bold text-dashBordCardsBG hover:!bg-pink-secondary sm:text-sm"
          >
            <span className='pe-1'> Confirm</span>  {isSubmitting && <SmallLoader/>} 
            
          </Button>
        </form>
      </div>
    </CustomWidgetCard>
  );
};

export default Security;