'use client'
import { FC } from 'react';
import { motion } from 'framer-motion';
import Carousel from '@/components/Carousel';
import { Text } from 'rizzui';
import { FaQuoteRight } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

interface TestimonialCard {
  name: string;
  designation: string;
  rating: number;
  description: string;
  image?: string;
}

const testimonials: TestimonialCard[] = [
  {
    name: "Savannah N.",
    designation: "Operations Manager",
    rating: 5,
    description: "Money Mutt has transformed my investment strategy. The AI-powered tools are incredible, and the community is amazing!"
  },
  {
    name: "Jenny W.",
    designation: "General Manager",
    rating: 5,
    description: "The cross-platform utility of MUTT is unmatched. It's not just a meme coin, it's a complete ecosystem."
  },
  {
    name: "Leslie A.",
    designation: "Operations Manager",
    rating: 4,
    description: "The deflationary tokenomics make MUTT a solid long-term investment. Plus, the memes are top-tier!"
  },
  {
    name: "Emma Davis",
    designation: "Trading Analyst",
    rating: 5,
    description: "I'm impressed by the professional approach combined with the fun aspect. MUTT stands out in the meme coin space."
  }
];

const TestimonialsSection: FC = () => {
  const CustomArrow = ({ direction, onClick }: { direction: 'prev' | 'next', onClick?: () => void }) => (
    <button
      onClick={onClick}
      className={`absolute top-1/2 hidden md:flex transform -translate-y-1/2 ${direction === 'prev' ? '-left-8 lg:-left-12' : '-right-8 lg:-right-12'
        } z-10 bg-yellow-600 hover:bg-yellow-700  rounded-full p-3`}
    >
      {direction === 'prev' ? (
        <FaArrowLeftLong className="w-6 h-6 text-yellow-primary" />
      ) : (
        <FaArrowRightLong className="w-6 h-6 text-yellow-primary" />
      )}
    </button>
  );

  const carouselSettings = {
    slidesToShow: 3,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="relative pb-20">

      <div className="bg-yellow-primary pt-16 pb-40">
        <div className='max-w-7xl mx-auto'>
          <div className="container mx-auto text-center mb-12">
            <Text className="text-sm font-medium text-yellow-250 mb-3 uppercase">Reviews</Text>
            <Text className="text-4xl font-bold text-greenPrimary-1000">
              Stunning Testimonials
            </Text>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-44">
        <div className="px-4 lg:px-16">
          <Carousel {...carouselSettings} className="testimonial-carousel">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="px-4 py-2"
              >
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg text-greenPrimary-1000">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-250">{testimonial.designation}</p>
                    </div>
                    <FaQuoteRight className="text-gray-300 text-2xl" />
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-250 mb-4 line-clamp-3">
                    {testimonial.description}
                  </p>

                  <button className="text-greenPrimary-1000 hover:text-gray-900 text-sm font-medium">
                    Read more
                  </button>
                </div>
              </motion.div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
