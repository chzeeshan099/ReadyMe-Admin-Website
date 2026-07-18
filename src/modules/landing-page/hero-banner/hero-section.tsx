'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from 'rizzui';
import Carousel from '@/components/Carousel';
import { RewardModal } from './models/reward-modal';
import { motion } from 'framer-motion'; // 👈 Import Framer Motion
import Navbar from '@/components/navbar/navbar';

const BACKGROUND_IMAGE = "/money-mutt/banner/hero-bg.png";

const BANNER_DATA = [
  {
    title: "Welcome to MONEYMUTT ($MUTT) – The Future of Meme Coins!",
    description: "Join the Moneymutt Army and be part of the next big thing in meme coins! Earn rewards, stake your tokens, and explore gaming integrations.",
    ctaText: "Claim Your Reward",
    Image: "/money-mutt/banner/coins.svg"
  },
  {
    title: "Join the MONEYMUTT Army – Let’s Take Over!",
    description: "Be part of the hottest meme coin community and become a legend.",
    ctaText: "Claim Your Reward",
    Image: "/money-mutt/banner/Dashboard.svg"
  },
  {
    title: "Staking & Rewards – Earn Passive Income!",
    description: "Earn rewards effortlessly with high-yield staking pools, automatic reflections, and locked liquidity for long-term sustainability.",
    ctaText: "Claim Your Reward",
    Image: "/money-mutt/banner/chartt.svg",
    largeImage: true
  },
  {
    title: "Deflationary & Secure – Built for Long-Term Growth!",
    description: "Every trade burns for scarcity, boosts liquidity, and locks out whales & rugs.",
    ctaText: "Claim Your Reward",
    Image: "/money-mutt/banner/cards.svg"
  }
];

const TICKER_DATA = [
  { icon: "/money-mutt/dog-coin.svg", coin: 'MUTT/USDT', price: '$153.00', change: '(1.13 %)' },
  { icon: "/money-mutt/dog-coin.svg", coin: 'Total Supply', price: '$182.00', change: '(-1.04 %)' },
  { icon: "/money-mutt/dog-coin.svg", coin: 'Circulating Supply', price: '$223.00', change: '(-0.70 %)%' },
  { icon: "/money-mutt/dog-coin.svg", coin: ' Tokens Burned', price: '$153.00', change: '(1.13 %)' },
  { icon: "/money-mutt/dog-coin.svg", coin: 'Holder Count', price: '$182.00', change: '(-1.04 %)' },
];

export const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative w-full">
      <div className="absolute bg-primary-lighter inset-0 z-0">
        <Image
          src={BACKGROUND_IMAGE}
          alt="Banner background"
          fill
          priority
          className="object-cover"
        />
      </div>
      <Navbar />

      <Carousel className="relative z-0">
        {BANNER_DATA.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.2 }}
            className="px-4 pt-20 sm:px-6 lg:px-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center text-center"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
                className="mb-6 font-semibold max-w-5xl leading-10 text-white text-2xl md:text-3xl lg:text-5xl "
              >
                {slide.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
                className="mb-8 max-w-2xl text-md text-gray-750 sm:text-lg"
              >
                {slide.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.4, ease: 'easeOut' }}
              >
                <Button
                  className="rounded-full bg-yellow-primary  sm:px-8 sm:py-4 mb-4 sm:text-base font-semibold text-gray-1300 hover:bg-yellow-600"
                  onClick={() => setIsModalOpen(true)}
                >
                  {slide.ctaText}
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{
                  scale: [1, 1.05, 1.03, 1.05, 1], 
                  transition: {
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
                transition={{
                  delay: 1.2,
                  duration: 0.9,
                  ease: 'easeOut',
                }}
                className={`mt-4 relative w-full min-h-[300px] ${slide.largeImage ? "sm:min-h-[500px]" : "sm:min-h-[350px]"} `}
              >
                <Image
                  src={slide.Image}
                  alt="Featured content"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>


            </motion.div>
          </motion.div>

        ))}
      </Carousel>

      <div className='max-w-7xl mx-auto bg-yellow-primary'>
        <div className="absolute bottom-0 left-0 right-0 bg-yellow-primary py-3 z-0 overflow-hidden">
          <div className="flex animate-marquee gap-6 whitespace-nowrap px-4">
            {[...TICKER_DATA, ...TICKER_DATA, ...TICKER_DATA].map((item, index) => (
              <div key={index} className="flex items-center text-black gap-2 font-semibold">
                <Image src={item.icon} alt="coin" width={50} height={50} className='w-full' />
                <span className='text-md text-gray-1300'>{item.coin}:</span>
                <span className='text-md text-gray-1300'>{item.price}</span>
                <span className=" text-md text-greenPrimary-500">{item.change}</span>

                {(index !== (TICKER_DATA.length * 2) - 1) && (
                  <span className="mx-4 text-black/50">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <RewardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};
