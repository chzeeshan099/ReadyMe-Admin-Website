'use client';
import { Button, Modal, Text } from 'rizzui';
import { RiCheckLine } from 'react-icons/ri';
import { useRouter } from 'next/navigation';

interface ConnectionSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConnectionSuccessModal: React.FC<ConnectionSuccessModalProps> = ({
  isOpen,
  onClose,
}) => {
  const router = useRouter();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="md"
      className="!max-w-[420px] !mx-0  sm:!mr-8 !ml-auto"
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-white to-gray-50 p-6">
        <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-primary" />
        <Text className='text-center text-2xl font-bold mb-4'> Connection Success!</Text>
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <div className="relative">
              <div className="absolute inset-0 animate-ping rounded-full bg-green-100 opacity-50" />
              <div className="relative rounded-full bg-gradient-to-r from-green-400 to-green-500 p-4">
                <RiCheckLine className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>

          <h2 className="mb-2 text-2xl text-center font-bold text-gray-900">You can now use MetaMask</h2>
          <p className="mb-8 text-center text-gray-600">
          Please keep in mind that you will be need to return to the game for transaction approval.
          </p>

            <Button
            onClick={() => {
              onClose();
              router.push('/dashboard');
            }}
            className="rounded-full bg-yellow-primary hover:bg-yellow-600 px-8 py-3 font-medium text-white"
            >
            Close
            </Button>
        </div>
      </div>
    </Modal>
  );
};
