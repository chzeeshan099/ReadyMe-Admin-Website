"use client"
import {getProposalHistoryTableDummyData,allProposals} from "@/constants/eco-system";

export const getProposalHistoryTableDataApi = async ( ) => {
    // const response = await axiosInstancePrivate.get('/users/company-users')
    return getProposalHistoryTableDummyData
};
export const getAllProposalsDataApi = async ( ) => {
    // const response = await axiosInstancePrivate.get('/users/company-users')
    return allProposals
};

