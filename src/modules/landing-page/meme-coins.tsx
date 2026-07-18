'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import Carousel from '@/components/Carousel';

interface FeatureCard {
  icon: string;
  title: string;
  subTitle: string;
  description: string;
  image: string;
}

const featureCards: FeatureCard[] = [
  {
    icon: '/money-mutt/Frame.svg',
    title: 'Cross-Platform Utility',
    subTitle: '$MUTT goes beyond just crypto',
    description:
      'It’s a multi-utility powerhouse! From gaming and DeFi to real-world payments, $MUTT seamlessly integrates across platforms, making it more than just a meme coin—it’s a movement!',
    image: '/money-mutt/cross-platform.svg',
  },
  {
    icon: '/money-mutt/AII.svg',
    title: 'AI-Powered Trading Tools',
    subTitle: 'Gain the edge with AI-driven analytics!',
    description:
      '$MUTT holders get access to cutting-edge trading insights, predictive market trends, and automated strategies to maximize gains like a pro. Making meme coin—it’s a movement!',
    image: '/money-mutt/ai.svg',
  },
  {
    icon: '/money-mutt/arrow.svg',
    title: 'Deflationary Tokenomics',
    subTitle: 'The more you trade, the more we burn!',
    description:
      'With every transaction, $MUTT becomes scarcer, increasing its value over time. Our built-in burn mechanism ensures long-term growth and sustainability.',
    image: '/money-mutt/token.png',
  },
];

const MemeCoins: FC = () => {
  const carouselSettings = {
    slidesToShow: 3,
    centerMode: false,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    swipeToSlide: true,
    draggable: true,
    touchThreshold: 10,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerPadding: '40px' },
      },
    ],
  };

  return (
    <section className="py-8 sm:py-12 lg:max-w-7xl lg:mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="flex flex-col px-4 lg:px-9 lg:flex-row gap-6 sm:gap-8 items-start lg:items-center mb-8 sm:mb-12"
      >
        <div className="flex-1 space-y-3 sm:space-y-4">
          <motion.span className="text-sm font-medium text-gray-150 uppercase">
            Why Choose Us
          </motion.span>
          <motion.h2 className="text-2xl sm:text-3xl text-greenPrimary-1000 md:text-5xl font-semibold leading-tight">
            The Funniest & Most Rewarding Meme Coin in Crypto!
          </motion.h2>
        </div>
        <motion.p className="flex-1 text-gray-250 text-md sm:text-lg leading-relaxed">
          Moneymutt ($MUTT) isn't just another meme coin—it's a revolution! Combining hilarious meme culture,
          community-driven growth, and real utility, $MUTT is the perfect blend of entertainment and investment.
          Whether you're here for the memes or the money, Moneymutt delivers non-stop fun and financial opportunity.
        </motion.p>
      </motion.div>

      <div className="w-full px-9">
        <Carousel hideOverflow {...carouselSettings} className="feature-carousel">
          {featureCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="py-2 px-2"
            >
              <motion.div
                whileHover={{
                  scale: 1.05, 
                  y: -4, 
                  transition: {
                    duration: 0.3,
                    ease: 'easeInOut',
                  },
                }}
                className="h-full w-full mx-auto bg-greenPrimary-1100 hover:bg-greenPrimary-750 rounded-xl p-4 sm:p-5 shadow-xl border border-gray-800 flex flex-col transition-all duration-300"
              >
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-12 h-12 sm:w-16 sm:h-16 mb-4"
                >
                  <img
                    src={card.icon}
                    alt={`${card.title} icon`}
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                <h3 className="text-lg sm:text-2xl leading-tight text-white font-semibold mb-1">{card.title}</h3>
                <p className="text-sm sm:text-md text-white  mb-3">{card.subTitle}</p>
                <p className="text-xs sm:text-sm text-gray-750 flex-grow">{card.description}</p>

                <div className="flex justify-center items-center mt-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-36 h-36 sm:w-48 sm:h-48"
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default MemeCoins;
