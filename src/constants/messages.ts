const Messages = {
  STRIPE_VALIDATION_FAILED: "Oops!, Stripe payment model is down for now",
  SOME_WENT_WRONG: 'Something went wrong',
  STRIPE_SUCCESSFULL_PAYMENT : 'Payment Successfully Done!',
  USER_ALREADY_SUBSCRIBE_PLAN : 'You already subscribe our plan',
  NOT_AUTHORIZED : 'You are not Authorized, Please contact your company owner or administrator.',
  REQUIRED_FIELD: (name: string): string => `${name} is required`,
  MIN_LENGTH: (name: string , length:number): string => `Minimum length of ${name} is ${length}`,
  MAX_LENGTH: (name: string , length:number): string => `Maximum length of ${name} is ${length}`,
};

export default Messages