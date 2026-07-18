export const CART_KEY = 'isomorphic-cart';
export const POS_CART_KEY = 'isomorphic-pos-cart';
export const DUMMY_ID = 'FC6723757651DB74';
export const CHECKOUT = 'isomorphic-checkout';
export const CURRENCY_CODE = 'USD';
export const LOCALE = 'en';
export const CURRENCY_OPTIONS = {
  formation: 'en-US',
  fractions: 2,
};

export const ROW_PER_PAGE_OPTIONS = [
  {
    value: 5,
    name: '5',
  },
  {
    value: 10,
    name: '10',
  },
  {
    value: 15,
    name: '15',
  },
  {
    value: 20,
    name: '20',
  },
];

export const Category = {
  Electricity: 'Electricity',
  Utils: 'Utils',
  Gas: 'Gas',
} as const;

export const DateCategory = {
  Today: 'Today',
  Month: 'Month',
  Year: 'Year',
} as const;