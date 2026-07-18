import React, { useState } from 'react';
import { Text } from 'rizzui';

interface StepContent {
  title: string;
  description: string;
  example?: string;  // Made optional with ?
  options?: string[];
}

interface StepperTooltipProps {
  steps: StepContent[];
  onComplete?: () => void;
  onStepChange?: (step: number) => void;
  position?: 'top' | 'left' | 'right' | 'bottom';
}

const StepperTooltip = ({ steps, position = 'right', onComplete, onStepChange }: StepperTooltipProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [visible, setVisible] = useState(true);

  const getPositionClasses = () => {
    switch (position) {
      case 'left':
        return {
          wrapper: 'fixed left-0 top-0 h-screen w-[300px] z-50',
          arrow: 'top-1/2 left-full -translate-y-1/2 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-lightgray-primary',
        };
      case 'right':
        return {
          wrapper: 'w-[400px] z-[999]',
          arrow: 'top-1/2 right-full -translate-y-1/2 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-lightgray-primary',
        };
      case 'bottom':
        return {
          wrapper: 'fixed bottom-0 left-0 w-full h-[300px] z-50',
          arrow: 'bottom-full left-1/2 -translate-x-1/2 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-lightgray-primary',
        };
      case 'top':
      default:
        return {
          wrapper: 'fixed top-0 left-0 w-full h-[300px] z-50',
          arrow: 'top-full left-1/2 -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-lightgray-primary',
        };
    }
  };

  const { wrapper, arrow } = getPositionClasses();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      onStepChange?.(nextStep);
    } else {
      onComplete?.();
      setVisible(false);
    }
  };

  return (
    <div className="relative ">
      <div className='relative'>
        {visible && (
          <div className={wrapper}>
            <div className="relative bg-lightgray-primary text-sm py-2 rounded-lg text-gray-900 shadow-lg ">
              <div className='border-b border-gray-200'>
                <Text className="font-medium  mb-2 text-[#20655D] px-4">{steps[currentStep].title}</Text>
                <Text className="text-white text-xs  mb-2 px-4">{steps[currentStep].description}</Text>
                {
                  steps[currentStep]?.example&&
                <Text className="text-white text-xs  mb-2 px-4">{steps[currentStep]?.example}</Text>
                }
              </div>
              <div className="flex justify-between items-center mt-2 px-4">
                <div className="text-xs text-gray-500">
                  Step {currentStep + 1} of {steps.length}
                </div>
                <button
                  onClick={handleNext}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm"
                >
                  {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
                </button>
              </div>
              {arrow && <div className={`absolute w-0 h-0 ${arrow}`}></div>}
            </div>
            <div className={`absolute w-0 h-0 ${arrow}`}></div>

          </div>
        )}
      </div>

    </div>
  );
};

export default StepperTooltip;