import { Button, Modal } from 'rizzui';
import Image from 'next/image';
import { useState } from 'react';
import { RiCloseLine, RiInformationLine, RiQrCodeLine, RiArrowLeftLine } from 'react-icons/ri';
import { WalletDetailsModal } from './wallet-details-modal';

interface WalletSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface WalletOption {
  name: string;
  icon: string;
}

const wallets: WalletOption[] = [
  {
    name: 'Wallet Connect',
    icon: '/money-mutt/wallet/wallet.svg',
  },
  {
    name: 'Meta Mask',
    icon: '/money-mutt/wallet/meta-mask.svg',

  },
  {
    name: 'Trust Wallet',
    icon: '/money-mutt/wallet/trust-wallet.svg',

  },
  {
    name: 'Plus Wallet',
    icon: '/money-mutt/wallet/plus-wallet.svg',

  },
  {
    name: 'Binance Wallet',
    icon: '/money-mutt/wallet/binance.svg',
  },
  {
    name: 'Coin-Base Wallet',
    icon: '/money-mutt/wallet/coinBase.svg',
  },
  {
    name: 'All Wallet',
    icon: '/money-mutt/wallet/wallet.svg',
  },
];

export const WalletSelectionModal: React.FC<WalletSelectionModalProps> = ({ isOpen, onClose }) => {
  const [hoveredWallet, setHoveredWallet] = useState<string | null>(null);
  const [selectedWallet, setSelectedWallet] = useState<WalletOption | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleWalletSelect = (wallet: WalletOption) => {
    setSelectedWallet(wallet);
    setShowDetails(true);
  };

  const handleBack = () => {
    setShowDetails(false);
    setSelectedWallet(null);
  };

  const handleClose = () => {
    setShowDetails(false);
    setSelectedWallet(null);
    onClose();
  };

  if (showDetails && selectedWallet) {
    return (
      <WalletDetailsModal
        isOpen={isOpen}
        onClose={handleClose}
        onBack={handleBack}
        wallet={selectedWallet}
      />
    );
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      size="md"
      className="!max-w-[420px] !mx-0 sm:!mr-8 !ml-auto"
    >
      <div className="relative overflow-hidden rounded-lg">
        <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-primary hover:bg-yellow-600" />
        
        <div className="flex items-center justify-between border-b border-gray-100 p-4">
          <RiInformationLine className="text-xl text-gray-400" />
          <h2 className="text-xl font-bold text-gray-900">Connect Wallet</h2>
          <button onClick={onClose} className="rounded-full p-1 hover:bg-gray-100">
            <RiCloseLine className="text-xl text-gray-500" />
          </button>
        </div>

        <div className="custom-scrollbar max-h-[70vh] overflow-y-auto p-4">
          {wallets.map((wallet) => (
            <div
              key={wallet.name}
              onClick={() => handleWalletSelect(wallet)}
              className="group mb-3 flex cursor-pointer items-center justify-between rounded-xl border border-gray-100 bg-white p-4 hover:bg-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-gray-50 p-2">
                  <Image 
                    src={wallet.icon} 
                    alt={wallet.name} 
                    width={32} 
                    height={32} 
                  />
                </div>
                <span className="font-medium text-gray-900">{wallet.name}</span>
              </div>
              <span className="rounded-md bg-gray-50 px-3 py-1 text-sm font-medium text-gray-500 opacity-0 transition-opacity group-hover:opacity-100">
                QR Code
              </span>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 p-4 text-center">
          <span className="text-gray-600">New to crypto? </span>
          <a href="#" className="font-medium text-yellow-primary hover:text-yellow-600">
            Learn More
          </a>
        </div>
      </div>
    </Modal>
  );
};
