import Image from 'next/image';
import { Modal } from 'rizzui';
import { RxCross2 } from "react-icons/rx";
import { motion } from 'framer-motion';

interface RewardModalProps {
  isOpen: boolean;
  onClose: () => void;
}
  
export const RewardModal: React.FC<RewardModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <motion.div 
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="relative rounded-xl overflow-hidden max-w-[95vw] md:max-w-2xl mx-auto shadow-lg"
      >
        <button 
          onClick={onClose}
          className="absolute right-3 top-3 z-20 text-black hover:bg-black/10 p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          <RxCross2 className="w-5 h-5" />
        </button>

        <Image
          src="/money-mutt/card-bg.jpg"
          alt="Modal Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-yellow-primary/85" />

        <div className="relative z-10 p-5 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
            <div className="flex-1 text-center md:text-left space-y-4">
              <h2 className="text-2xl md:text-4xl font-semibold text-greenPrimary-1000">
                Fetch Your First Reward
              </h2>
              <p className="text-lg text-yellow-secondary text-black/90">
                Every loyal mutt gets an early treat. Spin to unlock your presale bonus.
              </p>
              <div className="text-greenPrimary-1000">
                <p className="font-semibold text-greenPrimary-1000 text-lg">
                  Your Points: <span className="font-semibold text-greenPrimary-1000 text-2xl ml-1">205</span>
                </p>
              </div>
            </div>
            
            <div className="relative">
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="relative w-36 md:w-44 h-[130px] md:h-[160px]"
              >
                <Image
                  src="/money-mutt/gift.png"
                  alt="Reward"
                  fill
                  className="object-contain drop-shadow-xl"
                />
              </motion.div>
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute md:block hidden -bottom-16 md:-bottom-24 -left-16 md:-left-16 w-16 md:w-24 h-16 md:h-24"
              >
                <Image
                  src="/money-mutt/arroww.svg"
                  alt="Arrow"
                  fill
                  className="object-contain"
                  style={{ filter: 'grayscale(1)' }}
                />
              </motion.div>
            </div>
          </div>

          <div className="mt-6 md:mt-8">
            <p className="text-md md:text-lg font-regular  text-yellow-secondary text-center md:text-left">
              Scratch This for Reward:
            </p>
            <motion.div 
             
              className="h-12 md:h-14 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg cursor-pointer shadow-inner relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-scratch-pattern opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500 font-medium group-hover:text-gray-700">Scratch here to reveal your reward!</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Modal>
  );
};
