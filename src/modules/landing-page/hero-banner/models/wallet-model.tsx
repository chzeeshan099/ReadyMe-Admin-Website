import { Button, Modal } from 'rizzui';
import Image from 'next/image';
import { useState } from 'react';
import MoneyMuttLogo from "@/components/moneyMuttImages/moneyMuttLogo.svg";
import { FaWallet } from 'react-icons/fa';
import { CiHome } from 'react-icons/ci';
import { WalletSelectionModal } from './walletSelection-model';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
  const [showWalletSelection, setShowWalletSelection] = useState(false);

  const handleConnectWallet = () => {
    onClose();
    setShowWalletSelection(true);
  };
      
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size='md' className="flex justify-end sm:mr-8">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-white to-gray-50 p-8">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-yellow-primary" />
          
          <div className="flex flex-col items-center">
            <div className="relative mb-6 h-16">
              <Image 
                src={MoneyMuttLogo} 
                alt="Money Mutt" 
                className="h-full w-auto object-contain" 
              />
            </div>
                  
            <h2 className="mb-3 text-3xl text-center font-bold text-greenPrimary-1000">
              Welcome to MoneyMutt
            </h2>
            <p className="mb-8 text-center  text-greenPrimary-1000">
              Connect your wallet to access your dashboard and rewards
            </p>

            <div className="flex sm:flex-row flex-col gap-4">
              <Button
                variant="outline"
                className="flex items-center  gap-2 rounded-full border-2 border-yellow-primary px-6 py-2.5 font-medium text-yellow-primary transition-all hover:bg-yellow-50"
              >
                <CiHome className="text-lg" />
                Home
              </Button>
              <Button
                onClick={handleConnectWallet}
                className="flex items-center gap-2 rounded-full bg-yellow-primary hover:bg-yellow-600 px-6 py-2.5 font-medium text-gray-1300 "
              >
                <FaWallet className="text-lg" />
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </Modal>
      <WalletSelectionModal 
        isOpen={showWalletSelection} 
        onClose={() => setShowWalletSelection(false)} 
      />
    </>
  );
};
