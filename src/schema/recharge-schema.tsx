import { z } from 'zod';
import Messages from '@/constants/messages';

export const reChargeSchema = z.object({
  amount: z
    .coerce.number({
      required_error: Messages.REQUIRED_FIELD('amount'),
      invalid_type_error: Messages.REQUIRED_FIELD('amount'),
    })
    .min(1, 'Amount must be at least 1'),
});

export type ProposalFormValues = z.infer<typeof reChargeSchema>;