import React, { useState } from 'react';

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: 'top' | 'left' | 'right' | 'bottom'|'top-right';
}

const CustomTooltip = ({ content, children, position = 'top' }: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  const getPositionClasses = () => {
    switch (position) {
      case 'left':
        return {
          wrapper: 'right-full mr-3 top-1/2 -translate-y-1/2',
          arrow: 'top-1/2 left-full -translate-y-1/2 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-greenPrimary-200',
        };
      case 'right':
        return {
          wrapper: 'left-full ml-3 top-1/2 -translate-y-1/2',
          arrow: 'top-1/2 right-full -translate-y-1/2 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-greenPrimary-200',
        };
      case 'bottom':
        return {
          wrapper: 'top-full mt-3 left-1/2 -translate-x-1/2',
          arrow: 'bottom-full left-1/2 -translate-x-1/2 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-greenPrimary-200',
        };
      case 'top':
      default:
        return {
          wrapper: 'bottom-full mb-3 left-1/2 -translate-x-1/2',
          arrow: 'top-full left-1/2 -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-greenPrimary-200',
        };
      case 'top-right':
        return {
          wrapper: 'bottom-14 mb-3 -left-16 -translate-x-1/2',
          arrow: 'top-full right-2 -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-lightgray-primary',
        };
    }
  };

  const { wrapper, arrow } = getPositionClasses();

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="cursor-pointer"
      >
        {children}
      </div>

      {visible && (
        <div className={`absolute z-50 ${wrapper}`}>
          <div className="relative bg-black bg-lightgray-primary text-sm px-3 py-2 rounded-lg text-gray-900 shadow-lg max-w-xs w-max text-center">
            {content}
            <div className={`absolute w-0 h-0 ${arrow}`}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomTooltip;
