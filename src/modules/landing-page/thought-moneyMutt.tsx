'use client';
import Image from 'next/image';
import React from 'react';
import ThoughtImage from '@/components/moneyMuttImages/chooseMoneyMutt/thoughtimage.svg';
import Paws from '@/components/moneyMuttImages/chooseMoneyMutt/paws.svg';
import Howl from '@/components/moneyMuttImages/chooseMoneyMutt/Howl.svg';
import Furce from '@/components/moneyMuttImages/chooseMoneyMutt/furce.svg';
import Star from '@/components/moneyMuttImages/chooseMoneyMutt/Star.svg';
import Carousel from '@/components/Carousel';
import { motion } from 'framer-motion';

const contentData = [
  {
    title: 'UNLEASHED',
    subtitle: 'Paws for Thought Why MoneyMutt?',
    description:
      "In a world of traditional banks, MoneyMutt breaks free from convention. Whether you just need some puppy-sized or unleashed solutions, nothing else in the world gives you as much MoneyMutt as designed to bring fast results along with high returns. It's time to experience banking that's fun, swift, efficient, and caring.",
    image: ThoughtImage,
  },
  {
    title: 'LIFTOFF',
    subtitle: "Paws to the Skies MoneyMutt's BSC Blast-Off",
    description:
      "Strap in and get ready for a rocket ride! MoneyMutt is launching on the Binance Smart Chain, delivering lightning-fast transactions, robust security, and a community-centric experience. This isn't just a launch—it's a new era where playful innovation meets high-speed technology. Join us as we blast off into the stratosphere of crypto innovation.",
    image: Paws,
  },
  {
    title: 'HOWL',
    subtitle: 'Howl of Fame Celebrating Meme Culture',
    description:
      "MoneyMutt isn't just a coin—it's a full-blown celebration of meme culture. We honor the internet's creative spirit with humor, authenticity, and a community that howls with laughter and passion. Whether you're a crypto enthusiast or a meme aficionado, join us as we make a joyful noise and redefine what it means to be part of a digital revolution.",
    image: Howl,
  },
  {
    title: 'FURCE',
    subtitle: 'Barking Up the FURCE Unleashing Mutt Power',
    description:
      "At the heart of MoneyMutt is a force that's both playful and powerful—FURCE. We fuse the raw energy and loyalty of our mutt mascot with cutting-edge blockchain innovation. This isn't just about fun; it's about harnessing a dynamic energy that propels our community forward. Feel the strength, embrace the spirit, and experience the FURCE behind every transaction.",
    image: Furce,
  },
];

const Starwords = [
  'Financial Freedom',
  'Peace of Mind',
  'Early Mover Advantage',
  'Built for Growth',
  'Financial Freedom',
  'Peace of Mind',
  'Early Mover Advantage',
  'Built for Growth',
];

const ThoughtMoneyMutt = () => {
  const slideVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="relative min-h-screen w-full bg-yellow-400 py-16"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={slideVariants}
    >
      <div className="max-w- mx-auto">
        <div className="absolute top-0 w-full items-center overflow-hidden whitespace-nowrap bg-[#E3AD09] px-2  py-8"></div>
        <div className="absolute top-0 w-[100.1%] -rotate-3 items-center overflow-hidden whitespace-nowrap bg-[#CC9A00] py-4 xl:-rotate-2 ">
          <div className="flex animate-marquee flex-row gap-6">
            {[...Starwords, ...Starwords, ...Starwords].map((word, index) => (
              <div
                key={index}
                className="flex items-center gap-x-6  text-white"
              >
                <Image
                  src={Star}
                  alt="star"
                  width={20}
                  height={20}
                  className="text-white "
                />
                <span className="pr-6 text-lg font-semibold text-white ">
                  {word}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 pt-28">
          <Carousel className="relative z-0">
            {contentData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="px-4 py-8"
              >
                <motion.div
                  className="grid grid-cols-1 overflow-hidden rounded-xl bg-[#F0B501] md:grid-cols-5"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 md:col-span-3 md:p-8">
                    <h2 className="mb-4 text-sm font-medium text-yellow-250 md:text-lg">
                      {item.title}
                    </h2>
                    <h2 className="mb-6 text-xl font-semibold text-greenPrimary-1000 md:text-4xl lg:text-5xl">
                      {item.subtitle}
                    </h2>
                    <p className="text-sm text-gray-250 md:text-lg lg:text-xl">
                      {item.description}
                    </p>
                  </div>
                  <div className="relative h-[300px] w-full flex-shrink-0 md:col-span-2 md:h-auto">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </Carousel>
        </div>
      </div>
    </motion.div>
  );
};

export default ThoughtMoneyMutt;
