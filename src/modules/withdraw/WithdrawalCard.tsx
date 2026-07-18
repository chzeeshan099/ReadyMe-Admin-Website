'use client';

import React, { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  withdrawSchema,
  ProposalFormValues,
} from '@/schema/withdraw-schema';
import { useForm } from 'react-hook-form';
import CustomWidgetCard from '@/components/cards/custom-widget-card';
import { Button, Text } from 'rizzui';
import { toast } from 'react-toastify';
import BalanceCard from '@/components/cards/balance-card';
import { getWalletByIdApi } from '@/apis/walletApi';
import { getWithdrawRequestApi, sendWithdrawRequestApi } from '@/apis/withdrawRequestApi';
import Pagination2 from '@/components/others/pagination2';
import SmallLoader from '@/components/smallLoader/SmallLoader';
import LargeLoader from '@/components/largeLoader/LargeLoader'; 

const WithdrawalCard = () => {
  const [accountBalance, setAccountBalance] = useState(0);
  const [withdrawRequest, setWithdrawRequest] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingWithdrawRequest, setLoadingWithdrawRequest] = useState(false);
  const [statusFilter, setStatusFilter] = useState<'pending' | 'approved' | 'rejected'>('pending');
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecord, setTotalRecord] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ProposalFormValues>({
    resolver: zodResolver(withdrawSchema),
    defaultValues: {
      amount: 0,
      password: '',
    },
  });



  const getWalletData = async () => {
    const { data, error } = await getWalletByIdApi();
    if (error) {
      toast.error(error);
      return;
    }
    setAccountBalance(data?.wallet?.accountBalance || 0);
  };

  const getWithdrawRequest = async (
    pageNumber = 1,
    status = statusFilter
  ) => {
    setLoading(true);
    const payload = {
      paginationCurrentPage: pageNumber,
      status,
    };

    const { data, error } = await getWithdrawRequestApi(payload);
    if (error) {
      toast.error(error);
      setLoading(false);
      return;
    }

    setWithdrawRequest(data?.withdrawRequests || []);
    setPage(data?.currentPage || pageNumber);
    setLimit(data?.limit || 20);
    setTotalPages(data?.totalPages || 1);
    setTotalRecord(data?.totalRecord || 0);
    setLoading(false);
  };

  useEffect(() => {
    getWithdrawRequest(page, statusFilter);
  }, []);

  useEffect(() => {
    getWalletData();
  }, []);

  const handleStatusChange = (
    nextStatus: 'pending' | 'approved' | 'rejected'
  ) => {
    setStatusFilter(nextStatus);
    setPage(1);
    getWithdrawRequest(1, nextStatus);
  };

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
    getWithdrawRequest(nextPage, statusFilter);
  };

  const onSubmit =async (dataa: ProposalFormValues) => {
    console.log(dataa,'amount_withdraw')
    toast.dismiss()
    if(dataa?.amount > accountBalance){
      toast.error('Insufficient Balance');
      return
    }
    setLoadingWithdrawRequest(true)
    console.log('Validated Data:', dataa);
    const payload = {
      amount:dataa?.amount,
      password:dataa?.password
    }

    const { data, error } = await sendWithdrawRequestApi(payload);
    if (error) {
      toast.error(error);
      setLoadingWithdrawRequest(false)
      return;
    }
    toast.success(data?.message);

    reset({
      amount: 0,
      password: '',
    });

    getWithdrawRequest(page, statusFilter);
    setLoadingWithdrawRequest(false)
    getWalletData();
  };

  return (
  <>
  
    <CustomWidgetCard title="Withdraw Your Earning" shadow="left">
      <div className="p-4">
          {/* Balance Card */}
       <BalanceCard amount={accountBalance || 0} title="Account Balance"/>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-10 text-sm text-gray-1200"
        >
          <div className="relative">
              <p className='pl-1 mb-1'>Amount</p> 
              <div
                            className="
                              flex gap-2 items-center justify-between
                              rounded-lg border border-gray-300
                              px-2 py-1 text-sm text-gray-900
                              shadow-lg transition
                              focus-within:border-pink-500
                              focus-within:ring-1
                              focus-within:ring-pink-500
                            "
                          >
                            <input
                              type='text'
                               inputMode="decimal"
                               step="any"
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

    },
  })}
                              placeholder='Enter Amount'
                              className="
                                w-[80%] sm:w-[92%] border-none appearance-none bg-transparent
                                !px-0 outline-none ring-0
                                focus:border-none focus:outline-none focus:ring-0
                              "
                            />
              
                            <span
                              onClick={() => setValue('amount', accountBalance, { shouldValidate: true })}
                              className="w-[50px] cursor-pointer text-sm text-center text-black-dark bg-pink-400 rounded-md px-1 py-0.5"
                            >
                             Max
                            </span>
                          </div>           
           
            {errors.amount && (
              <Text className="absolute -bottom-5 text-xs text-red-500">
                {errors.amount.message}
              </Text>
            )}
          </div>

          <div className="relative">
            <p className='pl-1 mb-1'>Password</p> 
            <input
              type="text"
              inputMode="text"
              {...register('password')}
              placeholder="Confirm New PIN"
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
              "
            />
            {errors.password && (
              <Text className="absolute -bottom-5 text-xs text-red-500">
                {errors.password.message}
              </Text>
            )}
          </div>

          <Button
          disabled={loadingWithdrawRequest}
            type="submit"
            className="bg-pink-primary text-dashBordCardsBG text-xs font-bold hover:!bg-pink-secondary sm:text-sm"
          >
             <span className='me-1'>Withdraw</span> {loadingWithdrawRequest &&  <SmallLoader/> }
          </Button>
        </form>
      </div>
    </CustomWidgetCard>


    <CustomWidgetCard title="Withdraw Request" shadow="left" className='mt-8'>
      <div className="p-4">
        <div className="flex flex-col gap-4 border-b border-border/50 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <label htmlFor="withdraw-status" className="text-sm font-medium text-muted-foreground">
              Status
            </label>
            <select
              id="withdraw-status"
              value={statusFilter}
              onChange={(e) => handleStatusChange(e.target.value as 'pending' | 'approved' | 'rejected')}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
            >
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
          <div className="text-xs text-muted-foreground">
            Showing {withdrawRequest.length} of {totalRecord} requests
          </div>
        </div>

         <div className="bg-card rounded-lg border border-border/50 stat-shadow">
          <div className="relative w-24 min-w-full overflow-x-auto ">
          <table className="min-w-full table-auto text-left whitespace-nowrap">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="min-w-[150px] text-left py-3 px-4 font-medium text-muted-foreground">Request ID</th>
                <th className="min-w-[150px] text-left py-3 px-4 font-medium text-muted-foreground">User</th>
                <th className="min-w-[150px] text-left py-3 px-4 font-medium text-muted-foreground">Mobile Number</th>
                <th className="min-w-[150px] text-end py-3 px-4 font-medium text-muted-foreground">Amount</th>
                <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="py-10 text-center text-muted-foreground">
                    <div className="flex items-center justify-center">
                      <LargeLoader />
                    </div>
                  </td>
                </tr>
              ) : withdrawRequest.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-10 text-center text-muted-foreground">
                    No withdrawal requests found
                  </td>
                </tr>
              ) : (
                withdrawRequest.map((r: any) => (
                  <tr key={r?._id} className="border-b border-border/50 table-row-hover">
                    <td className="py-3 px-4 font-mono text-xs">{r?._id}</td>
                    <td className="py-3 px-4 font-medium">{r?.user?.userName}</td>
                    <td className="py-3 px-4 font-medium">{r?.user?.mobileNumber}</td>
                    <td className="py-3 px-4 font-bold text-end">${r?.amount}</td>
                    <td className="py-3 px-4">
                       <span
    className={`py-1 px-2 rounded-md text-white ${
      r?.status === "pending"
        ? "bg-yellow-500"
        : r?.status === "approved"
        ? "bg-green-500"
        : r?.status === "rejected"
        ? "bg-red-500"
        : "bg-gray-500"
    }`}
  >
    {r?.status}
  </span>
</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
         </div>

          <div className="flex items-center justify-end gap-2 border-t border-border/50 bg-card px-4 py-3">
            <Pagination2
              currentPage={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div> 
      </div>
    </CustomWidgetCard>
  </>
  );
};

export default WithdrawalCard;