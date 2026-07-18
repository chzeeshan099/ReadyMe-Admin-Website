"use client";

import React, { useState, useEffect } from 'react';
import { currencyTexts } from './constants';
import { motion, useInView } from 'framer-motion';

interface currencyTexts {
    aboutText: string;
    headingText: string;
    subheading: string;
    currencyExchanged: string;
    currencyExchangedDesc: string;
    volumeRecord: string;
    volumeRecordDesc: string;
    countriesSupported: string;
    countriesSupportedDesc: string;
    customersServed: string;
    customersServedDesc: string;
}

const CurrencyStats = () => {
    const [currencyExchangedCount, setCurrencyExchangedCount] = useState(0);
    const [volumeRecordCount, setVolumeRecordCount] = useState(0);
    const [countriesSupportedCount, setCountriesSupportedCount] = useState(0);
    const [customersServedCount, setCustomersServedCount] = useState(0);

    useEffect(() => {
        const animateCounter = (setter: React.Dispatch<React.SetStateAction<number>>, target: number) => {
            let current = 0;
            const increment = Math.ceil(target / 100);
            const interval = setInterval(() => {
                current += increment;
                if (current >= target) {
                    setter(target);
                    clearInterval(interval);
                } else {
                    setter(current);
                }
            }, 50);
        };

        animateCounter(setCurrencyExchangedCount, parseInt(currencyTexts.currencyExchanged.replace(/,/g, '').replace(/[BM]\+$/, '')));
        animateCounter(setVolumeRecordCount, parseInt(currencyTexts.volumeRecord.replace(/,/g, '').replace(/[BM]\+$/, '')));
        animateCounter(setCountriesSupportedCount, parseInt(currencyTexts.countriesSupported.replace(/,/g, '').replace(/[BM]\+$/, '')));
        animateCounter(setCustomersServedCount, parseInt(currencyTexts.customersServed.replace(/,/g, '').replace(/[BM]\+$/, '')));
    }, []);

    const formatWithSuffix = (value: number, suffix: string) => `${value.toLocaleString()}${suffix}`;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white py-10 px-6 my-5 lg:my-10 md:my-7 sm:my-2"
        >
            <motion.div variants={itemVariants} className="text-center">
                <p className=" font-medium text-gray-350 uppercase">{currencyTexts.aboutText}</p>
                <h1 className="text-greenPrimary-1000 font-semibold text-xl md:text-3xl py-4">
                    {currencyTexts.headingText}. <br /> {currencyTexts.subheading}
                </h1>
            </motion.div>
            <motion.div className="flex flex-col md:flex-row  justify-center items-center gap-6 md:gap-12 mt-8">
                {[
                    { count: currencyExchangedCount, suffix: 'B+', desc: currencyTexts.currencyExchangedDesc },
                    { count: volumeRecordCount, suffix: 'M+', desc: currencyTexts.volumeRecordDesc },
                    { count: countriesSupportedCount, suffix: '', desc: currencyTexts.countriesSupportedDesc },
                    { count: customersServedCount, suffix: 'M+', desc: currencyTexts.customersServedDesc }
                ].map((stat, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="relative text-center group transform-none"
                    >
                        <motion.div
                            className="relative md:p-4 bg-white rounded-lg z-0"
                            whileHover={{
                                y: -5,
                                transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 10
                                }
                            }}
                        >
                            <motion.h2
                                className=" font-roboto font-bold text-greenPrimary-1000 text-xl md:text-4xl"
                                whileHover={{
                                    color: "#FFC000",
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                {formatWithSuffix(stat.count, stat.suffix)}
                            </motion.h2>
                            <p className="text-gray-250 my-2 ">
                                {stat.desc}
                            </p>
                        </motion.div>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-lg -z-10"
                            whileHover={{
                                opacity: 1,
                                transition: { duration: 0.3 }
                            }}
                            initial={{ opacity: 0 }}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default CurrencyStats;
