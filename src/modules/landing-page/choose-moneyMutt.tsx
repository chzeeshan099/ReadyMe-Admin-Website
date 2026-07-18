"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

import Freedom from "@/components/moneyMuttImages/chooseMoneyMutt/freedom.svg";
import PieceOfMind from "@/components/moneyMuttImages/chooseMoneyMutt/mind.svg";
import EarlyMover from "@/components/moneyMuttImages/chooseMoneyMutt/early.svg";
import Growth from "@/components/moneyMuttImages/chooseMoneyMutt/growth.svg";
import count1 from "@/components/moneyMuttImages/chooseMoneyMutt/01.svg";
import count2 from "@/components/moneyMuttImages/chooseMoneyMutt/02.svg";
import count3 from "@/components/moneyMuttImages/chooseMoneyMutt/03.svg";
import count4 from "@/components/moneyMuttImages/chooseMoneyMutt/04.svg";

const features = [
  {
    title: "Financial Freedom",
    description: "Earn passive income through staking and reflections, letting your assets grow effortlessly.",
    icon: <Image src={Freedom} alt="Freedom" width={80} height={80} />,
    couuntImage: <Image src={count1} alt="count1" width={93} height={80} />,
  },
  {
    title: "Peace of Mind",
    description: "Anti-whale and anti-rug protections ensure a safer, more secure investment.",
    icon: <Image src={PieceOfMind} alt="Freedom" width={80} height={80} />,
    couuntImage: <Image src={count2} alt="count1" width={93} height={80} />,
  },
  {
    title: "Early Mover Advantage",
    description: "Get in on the ground floor of a meme coin with real utility before mass adoption.",
    icon: <Image src={EarlyMover} alt="Freedom" width={80} height={80} />,
    couuntImage: <Image src={count3} alt="count1" width={93} height={80} />,
  },
  {
    title: "Built for Growth",
    description: "Deflationary tokenomics and auto-liquidity boosts create long-term value and sustainability.",
    icon: <Image src={Growth} alt="Freedom" width={80} height={80} />,
    couuntImage: <Image src={count4} alt="count1" width={93} height={80} />,
  },
];

const WhyChooseMoneymutt = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section className="bg-[#1D3633] text-white w-full py-20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mx-auto mb-12 w-11/12">
          <h4 className="text-sm font-medium text-white mb-2">WHY CHOOSE</h4>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Why Choose Moneymutt ($MUTT)?</h2>
          <p className="text-lg font-normal w-10/12 mx-auto mb-4">
            Moneymutt offers passive income, security, early adoption benefits, and long-term growth through deflationary tokenomics and auto-liquidity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-[95%] mx-auto">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-stretch">
              
              <div className="mb-2 text flex justify-center w-full md:hidden">
                <div className="w-24 h-16 flex items-center justify-center mb-2">
                  {item.couuntImage}
                </div>
              </div>

              {index % 2 === 1 && (
                <div className="mb-3 text-center justify-center w-full hidden md:flex">
                  {item.couuntImage}
                </div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className="bg-white border border-white p-6 mb-4 relative overflow-hidden flex flex-col items-center flex-grow"
              >
                <div className="mb-4 sm:text-left text-center w-full">{item.icon}</div>
                <h3 className="text-2xl sm:text-left font-medium mb-2  text-left xl:whitespace-nowrap w-full">
                  {item.title}
                </h3>
                <p className="text-lg font-normal sm:text-left text-center text-gray-500">
                  {item.description}
                </p>
                <div className="absolute bottom-4 right-4 text-gray-200 text-4xl font-bold opacity-10">
                  {`0${index + 1}`}
                </div>
              </motion.div>

              {index % 2 === 0 && (
                <div className="mt-2 text-center justify-center w-full hidden md:flex md:mb-2">
                  {item.couuntImage}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMoneymutt;
