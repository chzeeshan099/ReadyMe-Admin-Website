import { Text, Button } from 'rizzui';

const ShapeFuture: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-yellow-primary py-6 md:py-16 px-4 text-center">
      <Text className="text-sm font-medium text-yellow-250 mb-3">
        DAO Governance with $MUTT
      </Text>
      
      <Text className="text-3xl md:text-4xl font-bold text-greenPrimary-1000 mb-4">
        Shape the Future of the Project
      </Text>
      
      <Text className="max-w-3xl text-gray-250 mb-8 text-md">
        Use your $MUTT to vote on major decisions about the direction and growth of the project. 
        Your voice matters in guiding our community forward.
      </Text>
      
      <Button 
       
        className="bg-gray-1300 hover:bg-gray-800 text-yellow-primary  px-4 md:px-8 py-3 rounded-full "
      >
        Claim Your Reward
      </Button>
    </div>
  );
}
export default ShapeFuture
