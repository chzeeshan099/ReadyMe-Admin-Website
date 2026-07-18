import { z } from 'zod';
import Messages from '@/constants/messages';

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


export const withdrawSchema = z.object({
  amount: z
    .coerce.number({
      required_error: Messages.REQUIRED_FIELD('amount'),
      invalid_type_error: Messages.REQUIRED_FIELD('amount'),
    })
    .min(100, 'You Withdraw Minimum $100'),

  password: strongPassword('Password'),
});

export type ProposalFormValues = z.infer<typeof withdrawSchema>;