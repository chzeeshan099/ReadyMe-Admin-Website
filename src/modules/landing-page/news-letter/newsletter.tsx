import React from 'react'
import { Input, Button } from "rizzui";
import "./style/index.css"
import { newsletterTexts } from "./constants";

interface NewsletterTexts {
    contactText: string;
    headingText: string;
    inputPlaceholder: string;
    buttonText: string;
}

const Newsletter: React.FC<{ newsletterTexts: NewsletterTexts }> = ({ newsletterTexts }) => {

    const { contactText, headingText, inputPlaceholder, buttonText } = newsletterTexts;

    return (
        <>
            <div className='bg-white p-6'>
                <div className='flex flex-col items-center justify-center text-center'>
                    <p className=' font-roboto text-gray-350 font-medium py-4'>{contactText}</p>
                    <h1 className='text-greenPrimary-1000 font-roboto font-semibold text-2xl md:text-3xl lg:text-4xl py-4 mb-4'>{headingText}</h1>
                </div>
                <div className='flex flex-col sm:flex-row  items-center justify-center  rounded-full px-4 py-2 border border-yellow-primary md:border mx-auto w-full max-w-sm sm:max-w-md '>
                    <Input
                        placeholder={inputPlaceholder}
                        rounded="pill"
                        color='primary'
                        className="w-full sm:w-[418px] !border-0 focus:outline-none focus:ring-0 focus:border-transparent"
                        inputClassName='input-border-none'
                    />
                    <Button
                        rounded="pill"
                        className="mt-0 md:ml-2 text-greenPrimary-1000 bg-yellow-primary hover:bg-yellow-600 sm:flex hidden w-full sm:w-auto"
                       
                    >
                        {buttonText}
                    </Button>
                </div>
                <div className='flex w-full max-w-sm mt-4  mx-auto justify-center  sm:hidden'>
                    <Button
                        size='lg'
                        rounded="pill"
                        className="w-full bg-yellow-primary text-greenPrimary-1000 hover:bg-yellow-600 "
                      
                    >
                        {buttonText}
                    </Button>
                </div>
            </div>
        </>
    )
}

const NewsletterWrapper = () => <Newsletter newsletterTexts={newsletterTexts} />;

export default NewsletterWrapper;