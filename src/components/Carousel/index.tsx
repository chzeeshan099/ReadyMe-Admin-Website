import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';

export interface CarouselProps extends Partial<Settings> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  hideOverflow?: boolean;
}

const defaultSettings: Settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  swipeToSlide: true,
  draggable: true,
  touchThreshold: 10
};

export const Carousel: React.FC<CarouselProps> = ({
  children,
  className = '',
  containerClassName = '',
  hideOverflow = false,
  ...slickSettings
}) => {
  const settings = { ...defaultSettings, ...slickSettings };

  return (
    <div
    className={`carousel-container w-full ${hideOverflow ? 'overflow-hidden' : ''} ${containerClassName}`}>
    <Slider className={`carousel ${className}`} {...settings}>
      {children}
    </Slider>
  </div>
  );
};

export default Carousel;
