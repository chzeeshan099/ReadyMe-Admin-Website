import React from 'react';
import clsx from 'clsx';
import { FiGlobe } from 'react-icons/fi';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { PiCheck, PiXBold } from 'react-icons/pi';

const Footer = () => {
    return (
        <div className={clsx(' w-full', 'bg-white', 'border-t border-white')}>
            <div className='max-w-full mx-auto border-t border-gray-500 bg-white/80 px-5 py-3 shadow-sm'>
                <div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
                    <div className='flex flex-wrap items-center gap-2 xl:gap-5 text-sm text-slate-600'>
                        <span>© 2026 Airbnb, Inc.</span>
                        <span className='hidden sm:inline'>·</span>
                        <a href='#' className='transition hover:text-slate-900'>Privacy</a>
                        <span className='hidden sm:inline'>·</span>
                        <a href='#' className='transition hover:text-slate-900'>Terms</a>
                        <span className='hidden sm:inline'>·</span>
                        <a href='#' className='inline-flex items-center gap-2 transition hover:text-slate-900'>
                            Your Privacy Choices
                            <span className='inline-flex items-center rounded-full border border-blue-500 bg-white overflow-hidden'>
                                <PiCheck className='h-5 w-5 p-1 text-blue-500' />
                                <PiXBold className='h-5 w-5 p-1 text-white bg-blue-500 ' />
                            </span>
                        </a>
                    </div>

                    <div className='flex flex-wrap items-center gap-2 xl:gap-5 text-sm'>
                        <button
                            type='button'
                            className='inline-flex items-center gap-2'>
                            <FiGlobe className='h-4 w-4' />
                            English (US)
                        </button>
                        <button
                            type='button'
                            className=''>
                            $ USD
                        </button>
                        <div className='inline-flex items-center gap-3 xl:gap-5'>
                            <a
                                href='#'
                                className=''>
                                <FaFacebook  className='h-4 w-4' />
                            </a>
                            <a
                                href='#'
                                className=''>
                                <FaXTwitter  className='h-4 w-4' />
                            </a>
                            <a
                                href='#'
                                className=''>
                                <FaInstagram className='h-4 w-4' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
