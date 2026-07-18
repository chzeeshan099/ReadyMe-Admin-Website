import Messages from '@/constants/messages';
import { z } from 'zod';
import {
  parsePhoneNumberFromString,
  validatePhoneNumberLength,
  CountryCode,
} from 'libphonenumber-js/max';
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_\-+=[\]{};:'",.<>\/\\|`~]).{8,}$/;

const strongPassword = (fieldName: string) =>
  z
    .string({
      required_error: Messages.REQUIRED_FIELD(fieldName),
      invalid_type_error: Messages.REQUIRED_FIELD(fieldName),
    })
    .min(8, { message: Messages.MIN_LENGTH(fieldName, 8) })
    .regex(passwordRegex, {
      message: `Must include upper, lower, number & special char`,
    });

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

export const registerSchema = z.object({
  userName: z
  .string({
    required_error: Messages.REQUIRED_FIELD('User Name'),
    invalid_type_error: Messages.REQUIRED_FIELD('User Name'),
  })
  .trim()
  .min(3, { message: Messages.MIN_LENGTH('User Name', 3) })
  .regex(/^[A-Za-z][A-Za-z0-9\s]*$/, {
      message:
        "Start with letter, letters & numbers only",
    }),
  

    mobileNumber: z
    .string()
    .trim()
    .min(1, Messages.REQUIRED_FIELD('Mobile Number'))
    ,


 invitationCode: z
  .string()
  .trim()
  .transform((val) => val.toUpperCase())
  .optional()
  .refine((val) => {
    if (!val) return true;
    return /^[A-Z0-9]{6}$/.test(val);
  }, {
    message: "Invalid Invitation code",
  }),


 loginPassword: strongPassword('Login Password'),
 withdrawPassword: strongPassword('Withdraw Password'),
   
});

export type ProposalFormValues = z.infer<typeof registerSchema>;