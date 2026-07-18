import React from 'react';
import Image from 'next/image';
import { Button } from "rizzui";
import { FaCheckCircle, FaWindows, FaApple, FaLinux, FaChrome } from "react-icons/fa";
import { RiAndroidFill } from "react-icons/ri";
import {
    footerConstants
} from './footerConstants';

interface footerConstants{
    emailLabel: string;
    emailAddress: string;
    headerText: string;
    sunheaderText: string;
    availableOnText: string;
    buttonTextBuyNow: string;
    buttonTextWatchDemo: string;
    buttonTextWindows: string;
    buttonTextMacos: string;
    buttonTextLinux: string;
    buttonTextChrome: string;
    buttonTextIos: string;
    buttonTextAndroid: string;
}

const Footer = () => {
    return (
        <>
            <div className='bg-gray-1500 p-6 w-full'>
                <div className='max-w-7xl mx-auto'>
                <div className=''>
                    <div className='flex flex-col md:flex-row items-center md:justify-between'>
                        <div className='py-3'>
                            <Image src="/moneylogo.svg" alt="Logo" width={230} height={70} />
                            <div className='py-6'>
                                <p className='font-roboto text-[14px] text-gray-750 sm:text-center md:text-left lg:text-left text-center pb-2'>{footerConstants.emailLabel}</p>
                                <p className='font-roboto font-semibold text-[16px] text-[#FFFFFF] sm:text-center md:text-left lg:text-left text-center'>{footerConstants.emailAddress}</p>
                            </div>
                        </div>
                        <div className='lg:mt-0 flex flex-col'>
                            <p className='font-semibold font-roboto text-[19px] lg:text-[27px] text-gray-750 text-center lg:text-left'>{footerConstants.headerText}</p>
                            <p className='font-semibold py-3 font-roboto text-[19px] lg:text-[27px] text-gray-750 text-center lg:text-left'>{footerConstants.sunheaderText}</p>
                            <div className='flex flex-col lg:flex-row items-start lg:items-start py-3 gap-3'>
                                <Button
                                    rounded="pill"
                                    className="w-full lg:w-auto text-greenPrimary-1000 bg-yellow-primary hover:bg-yellow-500"
                                   
                                >
                                    {footerConstants.buttonTextBuyNow}
                                </Button>
                                <Button
                                    rounded="pill"
                                    className="w-full lg:w-auto"
                                    style={{ backgroundColor: '#0F0F0F', color: '#FFFFFF', border: '1px solid #FFFFFF' }}
                                >
                                    {footerConstants.buttonTextWatchDemo}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='opacity-100 flex items-center justify-center bg-gray-400 h-[2px] mx-auto'></div>
                <div className='flex flex-col lg:flex-row items-center justify-between  py-5 gap-6 lg:gap-0'>
                    <div className='flex justify-between items-center w-full flex-col lg:flex-row gap-6 lg:gap-[195px] mx-auto'>
                        <div className='flex items-center gap-x-2'>
                            <FaCheckCircle className='text-gray-750' />
                            <p className='text-[14px] text-gray-750 text-center lg:text-left'>{footerConstants.availableOnText}</p>
                        </div>
                        <div className='flex flex-wrap gap-4 lg:gap-x-2 justify-center lg:justify-start'>
                            <Button
                                rounded="pill"
                                className="w-full sm:w-auto"
                                style={{ backgroundColor: '#0F0F0F', color: '#FFFFFF', border: '1px solid #FFFFFF' }}
                            >
                                <FaWindows className="mr-2 h-6" /> {footerConstants.buttonTextWindows}
                            </Button>
                            <Button
                                rounded="pill"
                                className="w-full sm:w-auto"
                                style={{ backgroundColor: '#0F0F0F', color: '#FFFFFF', border: '1px solid #FFFFFF' }}
                            >
                                <FaApple className="mr-2 h-6" /> {footerConstants.buttonTextMacos}
                            </Button>
                            <Button
                                rounded="pill"
                                className="w-full sm:w-auto"
                                style={{ backgroundColor: '#0F0F0F', color: '#FFFFFF', border: '1px solid #FFFFFF' }}
                            >
                                <FaLinux className="mr-2 h-6" /> {footerConstants.buttonTextLinux}
                            </Button>
                            <Button
                                rounded="pill"
                                className="w-full sm:w-auto"
                                style={{ backgroundColor: '#0F0F0F', color: '#FFFFFF', border: '1px solid #FFFFFF' }}
                            >
                                <FaChrome className="mr-2 h-6" /> {footerConstants.buttonTextChrome}
                            </Button>
                            <Button
                                rounded="pill"
                                className="w-full sm:w-auto"
                                style={{ backgroundColor: '#0F0F0F', color: '#FFFFFF', border: '1px solid #FFFFFF' }}
                            >
                                <FaApple className="mr-2 h-6" /> {footerConstants.buttonTextIos}
                            </Button>
                            <Button
                                rounded="pill"
                                className="w-full sm:w-auto"
                                style={{ backgroundColor: '#0F0F0F', color: '#FFFFFF', border: '1px solid #FFFFFF' }}
                            >
                                <RiAndroidFill className="mr-2 h-6" /> {footerConstants.buttonTextAndroid}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='bg-[#FFC000] h-[12px] w-full'></div>
           
        </>
    )
}

export default Footer;
