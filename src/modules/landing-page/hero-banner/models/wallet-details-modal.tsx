import { Button, Modal } from 'rizzui';
import Image from 'next/image';
import { RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { ConnectionSuccessModal } from './connection-success-modal';

interface WalletDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
  wallet: {
    name: string;
    icon: string;
  };
}

export const WalletDetailsModal: React.FC<WalletDetailsModalProps> = ({
  isOpen,
  onClose,
  onBack,
  wallet,
}) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleConnect = () => {
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnecting(false);
      setShowSuccessModal(true);
    }, 2000);
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    onClose();
  };

  return (
    <>
      <Modal
        isOpen={isOpen && !showSuccessModal}
        onClose={onClose}
        size="md"
        className="!max-w-[420px] !mx-0  sm:!mr-8 !ml-auto"
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <MdOutlineArrowBackIos
              className="text-lg cursor-pointer"
              onClick={onBack}
            />
            <h2 className="text-xl font-bold">{wallet.name}</h2>
            <RiCloseLine
              className="text-2xl cursor-pointer"
              onClick={onClose}
            />
          </div>
    
          <div className="flex flex-col items-center justify-center gap-6 my-8">
            <Image
              src={wallet.icon}
              alt={wallet.name}
              width={100}
              height={100}
              className="rounded-lg"
            />
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Continue in {wallet.name}</h3>
              <p className="text-gray-600">
                Accept connection request in the wallet
              </p>
            </div>
            <Button
              onClick={handleConnect}
              variant="outline"
              className="rounded-full border border-yellow-primary text-yellow-primary hover:border-white hover:text-white hover:bg-yellow-600 px-6 py-2"
            >
              {isConnecting ? 'Connecting...' : 'Connect'}
            </Button>
          </div>
        </div>
      </Modal>
                                
      <ConnectionSuccessModal 
        isOpen={showSuccessModal} 
        onClose={handleSuccessClose}
      />
    </>
  );
};
