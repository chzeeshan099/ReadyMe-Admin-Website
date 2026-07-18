'use client';

import React, { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  reChargeSchema,
  ProposalFormValues,
} from '@/schema/recharge-schema';
import { useForm } from 'react-hook-form';
import CustomWidgetCard from '@/components/cards/custom-widget-card';
import { Button, Text } from 'rizzui';
import { toast } from 'react-toastify';
import BalanceCard from '@/components/cards/balance-card';
import ContactModal from '@/components/model/ContactModel';
import { getWalletByIdApi } from '@/apis/walletApi';

const RechargeCard = () => {

  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [modalState, setModalState] = useState<boolean>(false);
  const [accountBalance , setAccountBalance] = useState(0)


  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ProposalFormValues>({
    resolver: zodResolver(reChargeSchema),
    defaultValues: {
      amount: undefined,
    },
  });

  const amounts = [100, 200, 300];


   const getWalletData =async ()=>{
      const {data , error} = await getWalletByIdApi()
      if(error){
        toast.error(error)
        return
      }
      console.log(data?.wallet,'getWalletData')
      setAccountBalance(data?.wallet?.accountBalance || 0)
    }
  
    useEffect(()=>{
      getWalletData()
    },[])

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
    setValue('amount', amount);
  };

  const onSubmit = (data: ProposalFormValues) => {
    toast.success('Recharge request submitted.');
    console.log('Validated Data:', data);

    reset();
    setSelectedAmount(null);
    setModalState(true)
  };

  return (
    <>
    <CustomWidgetCard title="Recharge Your Account" shadow="left">
      <div className="p-4">

        <BalanceCard amount={accountBalance || 0} title="Account Balance" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-10 text-sm text-gray-1200"
        >

          {/* Amount Cards */}
          <div className="grid gap-2 grid-cols-3">
            {amounts.map((amount) => (
              <div
                key={amount}
                onClick={() => handleAmountClick(amount)}
                className={`cursor-pointer rounded-lg border-2 text-center p-4 transition
                ${
                  selectedAmount === amount
                    ? 'border-pink-500 bg-pink-50'
                    : 'border-gray-300'
                }`}
              >
                <p>USDT</p>
                <p>{amount}</p>
              </div>
            ))}
          </div>

          {/* Amount Input */}
          <div className="relative">
            <p className="pl-1 mb-1">Amount</p>

           <input
  type="text" // ⚠️ number ki jagah text rakho warna browser interfere karega
  inputMode="decimal"
  placeholder="Enter Amount"
  {...register('amount', {
    onChange: (e) => {
      let value = e.target.value;

      // numbers + decimal allow
      value = value.replace(/[^0-9.]/g, "");

      // sirf ek decimal allow
      const parts = value.split(".");
      if (parts.length > 2) {
        value = parts[0] + "." + parts[1];
      }

      // decimal ke baad sirf 2 digits
      if (parts[1]) {
        value = parts[0] + "." + parts[1].slice(0, 2);
      }

      // leading zero fix
      if (value.startsWith("0") && !value.startsWith("0.")) {
        value = value.replace(/^0+/, "");
      }

      e.target.value = value;

      setSelectedAmount(null);
    },
  })}
  className="w-full text-gray-900 text-sm border border-gray-300 rounded-lg px-3 py-3 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 focus:outline-none transition shadow-lg"
/>

            {errors.amount && (
              <Text className="absolute -bottom-5 text-xs text-red-500">
                {errors.amount.message}
              </Text>
            )}
          </div>

          <Button
            type="submit"
            className="bg-pink-primary text-dashBordCardsBG text-xs font-bold hover:!bg-pink-secondary sm:text-sm"
          >
            Recharge
          </Button>
        </form>
      </div>
    </CustomWidgetCard>


      <ContactModal isOpen={modalState} onClose={() => setModalState(false)}/>



    </>
  );
};

export default RechargeCard;