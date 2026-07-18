import { z } from 'zod';
import Messages from '@/constants/messages';
import {
  parsePhoneNumberFromString,
  validatePhoneNumberLength,
  CountryCode,
} from 'libphonenumber-js/max';

const tronRegex = /^T[a-zA-Z0-9]{33}$/;
const ethRegex = /^0x[a-fA-F0-9]{40}$/;
const btcRegex = /^(1|3|bc1)[a-zA-Z0-9]{25,39}$/i;


const validateInternationalMobile = (value: string): true | string => {
  const raw = value?.trim();

  if (!raw) {
    return Messages.REQUIRED_FIELD('Mobile Number');
  }

  const fullNumber = raw.startsWith('+') ? raw : `+${raw}`;

  const parsed = parsePhoneNumberFromString(fullNumber);

  if (!parsed || !parsed.country) {
    return 'Please enter a valid mobile number';
  }

  const country = parsed.country as CountryCode;
  const countryName = parsed.countryCallingCode
    ? parsed.country
    : 'selected country';

  const lengthResult = validatePhoneNumberLength(fullNumber, country);

  if (
    lengthResult === 'TOO_SHORT' ||
    lengthResult === 'TOO_LONG' ||
    lengthResult === 'INVALID_LENGTH' ||
    lengthResult === 'NOT_A_NUMBER' ||
    lengthResult === 'INVALID_COUNTRY'
  ) {
    return `Please enter a valid ${countryName} mobile number`;
  }

  if (!parsed.isValid()) {
    return `Please enter a valid ${countryName} mobile number`;
  }

  const type = parsed.getType();

  if (type && type !== 'MOBILE' && type !== 'FIXED_LINE_OR_MOBILE') {
    return 'Please enter a valid mobile number';
  }

  return true;
};


export const walletInfoSchema = z
  .object({
    fullName: z
      .string({
        required_error: Messages.REQUIRED_FIELD('fullName'),
        invalid_type_error: Messages.REQUIRED_FIELD('fullName'),
      })
      .trim()
      .min(3, 'Full name must be at least 3 characters')
      .max(50, 'Full name must not exceed 50 characters'),

    walletAddress: z
      .string({
        required_error: Messages.REQUIRED_FIELD('walletAddress'),
        invalid_type_error: Messages.REQUIRED_FIELD('walletAddress'),
      })
      .trim()
      .min(1, 'Wallet address is required'),

    network: z.enum(['TRC20', 'ERC20', 'BTC'], {
      required_error: Messages.REQUIRED_FIELD('network'),
      invalid_type_error: Messages.REQUIRED_FIELD('network'),
    }),

    currency: z.enum(['USDT', 'USDC', 'ETH', 'BTC'], {
      required_error: Messages.REQUIRED_FIELD('currency'),
      invalid_type_error: Messages.REQUIRED_FIELD('currency'),
    }),

   

     mobileNumber: z
    .string()
    .trim()
    .min(1, Messages.REQUIRED_FIELD('Mobile Number'))
    // .superRefine((value, ctx) => {
    //   const result = validateInternationalMobile(value);

    //   if (result !== true) {
    //     ctx.addIssue({
    //       code: z.ZodIssueCode.custom,
    //       message: result,
    //     });
    //   }
    // })
    ,






  })
  .superRefine((data, ctx) => {
    const address = data.walletAddress.trim();

    if (data.network === 'TRC20' && !tronRegex.test(address)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['walletAddress'],
        message: 'Invalid TRC20 wallet address',
      });
    }

    if (data.network === 'ERC20' && !ethRegex.test(address)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['walletAddress'],
        message: 'Invalid ERC20 wallet address',
      });
    }

    if (data.network === 'BTC' && !btcRegex.test(address)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['walletAddress'],
        message: 'Invalid BTC wallet address',
      });
    }

    if (data.currency === 'BTC' && data.network !== 'BTC') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['currency'],
        message: 'BTC currency only used with BTC network',
      });
    }

    if ((data.currency === 'USDT' || data.currency === 'USDC') && data.network === 'BTC') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['currency'],
        message: `${data.currency} cannot be used with BTC network`,
      });
    }

    if (data.currency === 'ETH' && data.network !== 'ERC20') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['currency'],
        message: 'ETH can only be used with ERC20 network',
      });
    }
  });

export type ProposalFormValues = z.infer<typeof walletInfoSchema>;