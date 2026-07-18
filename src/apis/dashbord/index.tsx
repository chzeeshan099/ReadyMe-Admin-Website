"use client"
import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstancePublic , axiosInstancePrivate } from "@/config/request";
import { signUpInterface , signInInterface  , forgotInterface , resetPasswordInterface} from "@/types";
import localStorageService from '@/utils/localStorage';
import {LastTransactionsData,WalletOverviewData,communityCardsData,historyDataByRange} from "@/constants/dashbord";
import { BuyBarkData } from '@/constants/dashbord';
import { ReferralData } from '@/constants/dashbord';
import { ReferralStreak } from '@/constants/dashbord';
import { Topreffer } from '@/constants/dashbord';
import { roadMapCards  } from '@/constants/dashbord';
import { alphabarkData } from '@/constants/dashbord';
import { topContributorData } from '@/constants/dashbord';

export const getLastTransactionsApi = async ( ) => {
    // const response = await axiosInstancePrivate.get('/users/company-users')
    return LastTransactionsData
};
export const getHistoryDataByRangeApi = async ( ) => {
    // const response = await axiosInstancePrivate.get('/users/company-users')
    return historyDataByRange

};
export const getBuyBarkData = async ( ) => {
    // const response = await axiosInstancePrivate.get('/users/company-users')
    return BuyBarkData;
   
};
export const getReferralData = async ( ) => {
    // const response = await axiosInstancePrivate.get('/users/company-users')
    return ReferralData;
   
};
export const getReferralStreak = async ( ) => {
    // const response = await axiosInstancePrivate.get('/users/company-users')
    return ReferralStreak;
   
};
export const getTopreffer = async ( ) => {
    // const response = await axiosInstancePrivate.get('/users/company-users')
    return Topreffer;
   
};
export const getRoadMapCards = async ( ) => {
    // const response = await axiosInstancePrivate.get('/users/company-users')
    return roadMapCards;
   
};
export const getAlphaBarkData = async () => {
    // const response = await axiosInstancePrivate.get('/alphabark')
    return alphabarkData;
};
export const getCommunityCardsData = async () => {
    // const response = await axiosInstancePrivate.get('/alphabark')
    return communityCardsData;
};
export const getTopContributorData = async () => {
    // const response = await axiosInstancePrivate.get('/top-contributors')
    return topContributorData;
};
export const getSummaryCardData = async () => {
    // const response = await axiosInstancePrivate.get('/top-contributors')
    return WalletOverviewData;
};
