"use client";

import React, { useRef } from 'react';
import Image from 'next/image';

const CustomSlider = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const newValue = Math.min(Math.max(0, clientX - rect.left), rect.width) / rect.width * 100;
    onChange(Math.round(newValue));
  };

  const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    const isTouchEvent = 'touches' in e;
    const clientX = isTouchEvent ? e.touches[0].clientX : e.clientX;
    handleMove(clientX);
    if (isTouchEvent) {
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleEnd);
    } else {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleEnd);
    }
  };

  const handleEnd = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleEnd);
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleEnd);
  };

  const dotOffset = value >= 99.5 ? 34 : 34; // 34px: image width, 17px: half

  return (
    <div
      ref={sliderRef}
      className="relative w-full h-3 bg-gray-300  rounded-full overflow-visible"
      onMouseDown={handleStart}
      onTouchStart={handleStart}
    >
      {/* Filled Track */}
      <div
        className="absolute h-3 bg-[#1D3633] rounded-full "
        style={{ width: `${value}%` }}
      />

      {/* Slider Dot */}
      <div
        className="absolute -top-3  "
        style={{
          left: `calc(${value}% - ${dotOffset}px)`,
        }}
      >
        <Image
          src="/coin.svg"
          alt="Slider Dot"
          width={34}
          height={34}
          className="cursor-pointer  ml-5 mr-5"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default CustomSlider;
