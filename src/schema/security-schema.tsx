import { z } from 'zod';

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

export const securitySchema = z
  .object({
    passwordType: z.enum(['loginPassword', 'withdrawPassword'], {
      required_error: 'Password option is required',
    }),

    oldPassword: z
      .string()
      .min(8, 'Minimum 8 characters')
      .regex(
        passwordRegex,
        'Must include upper, lower, number & special char'
      ),

    newPassword: z
      .string()
      .min(8, 'Minimum 8 characters')
      .regex(
        passwordRegex,
        'Must include upper, lower, number & special char'
      ),

    confirmPassword: z.string().min(8, 'Minimum 8 characters'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })
  .refine((data) => data.oldPassword !== data.newPassword, {
    message: 'New password must be different from old password',
    path: ['newPassword'],
  });

export type SecurityFormValues = z.infer<typeof securitySchema>;