'use client';

import React, { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button, Text } from 'rizzui';
import { toast } from 'react-toastify';
import LargeLoader from '@/components/largeLoader/LargeLoader';
import CustomWidgetCard from '@/components/cards/custom-widget-card';
import {
  walletInfoSchema,
  ProposalFormValues,
} from '@/schema/walletInfo';
// import PhoneNumber from '@/components/phone-number/phone-number';
import { getWalletInfoApi, setWalletInfoApi } from '@/apis/walletInfoApi';
import { getUserData } from '@/utils/localStorage';

const WalletInfo = () => {
  const [selectedNetwork, setSelectedNetwork] = useState<
    'TRC20' | 'ERC20' | 'BTC' | null
  >('TRC20');

  const [selectedCurrency, setSelectedCurrency] = useState<
    'USDT' | 'USDC' | 'ETH' | 'BTC' | null
  >('USDT');

  const [isLoading, setIsLoading] = useState(true);
  const [hasWalletInfo, setHasWalletInfo] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    setError,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm<ProposalFormValues>({
    resolver: zodResolver(walletInfoSchema),
    defaultValues: {
      fullName: '',
      walletAddress: '',
      network: 'TRC20',
      currency: 'USDT',
      mobileNumber: '',
    },
  });

  const networkOptions: Array<'TRC20' | 'ERC20' | 'BTC'> = [
    'TRC20',
    'ERC20',
    'BTC',
  ];

  const currencyOptions: Array<'USDT' | 'USDC' | 'ETH' | 'BTC'> = [
    'USDT',
    'USDC',
    'ETH',
    'BTC',
  ];

  const handleNetworkClick = (network: 'TRC20' | 'ERC20' | 'BTC') => {
    if (hasWalletInfo) return;
    setSelectedNetwork(network);
    setValue('network', network, { shouldValidate: true, shouldDirty: true });
  };

  const handleCurrencyClick = (currency: 'USDT' | 'USDC' | 'ETH' | 'BTC') => {
    if (hasWalletInfo) return;
    setSelectedCurrency(currency);
    setValue('currency', currency, { shouldValidate: true, shouldDirty: true });
  };

  const onSubmit = async (dataa: ProposalFormValues) => {
    const payload = {
      fullName: dataa?.fullName,
      walletAddress: dataa?.walletAddress,
      network: dataa?.network,
      currency: dataa?.currency,
      mobileNumber: `+${dataa?.mobileNumber}`,
    };

    const { data, error } = await setWalletInfoApi(payload);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success(data?.message);

    // reset({
    //   fullName: '',
    //   walletAddress: '',
    //   network: 'TRC20',
    //   currency: 'USDT',
    //   mobileNumber: '',
    // });

    // setSelectedNetwork('TRC20');
    // setSelectedCurrency('USDT');
    setHasWalletInfo(true); // after save, lock form
  };

  const getWalletInfo = async () => {
    setIsLoading(true);

    const userData: any = getUserData();
    if (!userData?._id) {
      setIsLoading(false);
      return;
    }

    const payload = {
      userId: userData?._id,
    };

    const { data, error } = await getWalletInfoApi(payload);

    if (error) {
      toast.error(error);
      setIsLoading(false);
      return;
    }

    if (data?.data) {
      const wallet = data.data;
      // console.log('Fetched wallet info:', wallet);

      setValue('fullName', wallet?.fullName);
      setValue('walletAddress', wallet?.walletAddress);
      setValue('network', wallet?.network);
      setValue('currency', wallet?.currency);
      // setValue('mobileNumber', wallet?.mobileNumber);
      setValue('mobileNumber',wallet?.mobileNumber?.replace(/^\+/, '') || '');

      setSelectedNetwork(
        networkOptions.includes(wallet?.network)
          ? wallet.network
          : 'TRC20'
      );

      setSelectedCurrency(
        currencyOptions.includes(wallet?.currency)
          ? wallet.currency
          : 'USDT'
      );

      setHasWalletInfo(true);
    } else {
      setHasWalletInfo(false);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getWalletInfo();
  }, []);

  const inputClassName = `
    w-full text-gray-900 text-sm border border-gray-300 bg-pink-50
    rounded-lg px-3 py-3 focus:border-pink-500 focus:ring-1
    focus:ring-pink-500 focus:outline-none transition shadow-lg
  `;

  if (isLoading) {
    return (
      <CustomWidgetCard title="Wallet Info" shadow="left">
        <div className="flex items-center justify-center h-[300px]"><LargeLoader/></div>
      </CustomWidgetCard>
    );
  }

  return (
    <CustomWidgetCard title="Wallet Info" shadow="left">
      <div className="p-4">
        <p className="pb-5 text-center text-xs sm:text-base">
          Dear user to protect your funds, please make sure you enter the
          correct and complete information.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 text-sm text-gray-1200"
        >
          <div className="relative">
            <p className="mb-1 pl-1">Full Name</p>
            <input
              type="text"
              {...register('fullName')}
              readOnly={hasWalletInfo}
              className={inputClassName}
            />
            {errors.fullName && (
              <Text className="absolute -bottom-5 text-xs text-red-500">
                {errors.fullName.message}
              </Text>
            )}
          </div>

          <div className="relative">
            <p className="mb-1 pl-1">Wallet Address</p>
            <input
              type="text"
              {...register('walletAddress')}
              readOnly={hasWalletInfo}
              className={inputClassName}
            />
            {errors.walletAddress && (
              <Text className="absolute -bottom-5 text-xs text-red-500">
                {errors.walletAddress.message}
              </Text>
            )}
          </div>

          <div className="relative">
            <p className="mb-2 pl-1">Network</p>
            <div className="grid grid-cols-3 gap-2">
              {networkOptions.map((network) => (
                <div
                  key={network}
                  onClick={() => handleNetworkClick(network)}
                  className={` rounded-lg border-2 p-3 text-center transition ${
                    selectedNetwork === network
                      ? 'border-pink-500 bg-pink-50'
                      : 'border-gray-300'
                  } ${hasWalletInfo ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <p className="text-xs font-medium">{network}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <p className="mb-2 pl-1">Currency</p>
            <div className="grid gap-2 grid-cols-4">
              {currencyOptions.map((currency) => (
                <div
                  key={currency}
                  onClick={() => handleCurrencyClick(currency)}
                  className={`rounded-lg border-2 p-3 text-center transition ${
                    selectedCurrency === currency
                      ? 'border-pink-500 bg-pink-50'
                      : 'border-gray-300'
                  } ${hasWalletInfo ? ' cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <p className="text-xs font-medium">{currency}</p>
                </div>
              ))}
            </div>
          </div>

          {/* <PhoneNumber<ProposalFormValues>
            name="mobileNumber"
            control={control}
            errors={errors}
            clearErrors={clearErrors}
            setError={setError}
            label="Mobile Number"
            placeholder="Enter Your Mobile Number"
            defaultCountry="us"
          /> */}

          <div className="relative">
            <p className="pl-1 mb-1">Mobile Number</p>
          
            <div
              className="
                flex items-center
                border border-gray-300
                text-black-dark
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
                maxLength={20}
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
                  text-black-dark
                "
              />
            </div>
          
            {errors.mobileNumber && (
              <Text className="absolute -bottom-5 text-xs text-red-500">
                {errors.mobileNumber.message}
              </Text>
            )}
          </div>

          {!hasWalletInfo && (
            <Button
              type="submit"
              className="bg-pink-primary text-xs font-bold text-dashBordCardsBG hover:!bg-pink-secondary sm:text-sm"
            >
              Save Wallet Info
            </Button>
          )}
        </form>
      </div>
    </CustomWidgetCard>
  );
};

export default WalletInfo;