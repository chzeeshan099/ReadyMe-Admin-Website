"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from "rizzui";
import { layoutWrapperData } from './constants';
import CustomSlider from '@/modules/landing-page/layout-wrapper/CustomSlider/CustomSlider';
import { motion } from 'framer-motion';

interface layoutWrapperData {
  tagline: string;
  title: string;
  subtitle: string;
  description: string;
  buttontext: string;
  votinginfo: string;
}

const LayoutWrapper = ({ data }: { data: typeof layoutWrapperData }) => {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="flex flex-col w-full md:flex-row  bg-white mt-16 border-2 border-gray-100">

      <motion.div
        className="flex justify-center items-center w-full md:w-1/2 mb-6 md:mb-0"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        whileHover={{
          scale: [1, 1.05, 1.1, 1.05, 1],
          transition: {
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity,
          }
        }}
      >
        <Image
          src="/coin.svg"
          alt="In Mutt We Trust"
          height={450}
          width={450}
          className=""
        />
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 bg-yellow-primary items-center sm:items-start flex flex-col h-auto justify-between border-2 border-gray-100 border-t-0 border-b-0 border-r-0 p-6 md:p-15 lg:p-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className=" font-medium font-roboto mb-2 text-yellow-250 sm:text-center text-center md:text-left xl:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {data.tagline}
        </motion.p>

        <motion.h1
          className="text-2xl md:text-3xl text-greenPrimary-1000 font-semibold font-roboto sm:text-center text-center md:text-left xl:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {data.title}
        </motion.h1>

        <motion.h1
          className="text-2xl md:text-3xl font-semibold text-greenPrimary-1000 font-roboto sm:text-center text-center md:text-left xl:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {data.subtitle}
        </motion.h1>

        <motion.p
          className="text-sm md:text-lg font-roboto text-gray-250 my-8 sm:text-center text-center md:text-left xl:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {data.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Button
            className="bg-gray-1300 text-yellow-primary xl:w-32 xl:h-9 lg:w-32 lg:h-9 md:w-full rounded-full flex items-center justify-center font-roboto font-semibold hover:bg-black mb-4"
          >
            {data.buttontext}
          </Button>
        </motion.div>

        <motion.p
          className="text-xs md:text-xl font-medium text-gray-250 font-roboto mb-4 sm:text-center text-center md:text-left xl:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          {data.votinginfo}
        </motion.p>

        <motion.div
          className="flex items-center bg-gray-100/30 flex-col py-5 px-3 rounded-lg w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <div className="flex items-center justify-between w-full mt-2">
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className=""
            >
            <Image
              src="/Group.svg"
              alt="Paw Icon"
              width={24}
              height={24}
              className="text-lg md:text-xl "
            />
            </motion.div>
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className=""
            >
            <Image
              src="/dog.svg"
              alt="Dog Icon"
              width={24}
              height={24}
              className="text-lg md:text-xl "
            />
            </motion.div>
          </div>
          <div className="flex-1 mx-2 relative w-full">
            <CustomSlider
              value={sliderValue}
              onChange={(value) => setSliderValue(value)}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default function LayoutWrapperContainer() {
  return <LayoutWrapper data={layoutWrapperData} />;
}
