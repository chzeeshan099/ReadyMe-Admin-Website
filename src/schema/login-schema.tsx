import Messages from "@/constants/messages";
import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({
      required_error: Messages.REQUIRED_FIELD("Email"),
    })
    .trim()
    .min(1, {
      message: Messages.REQUIRED_FIELD("Email"),
    })
    .email({
      message: "Please enter a valid email address",
    }),

  loginPassword: z
    .string({
      required_error: Messages.REQUIRED_FIELD("Password"),
    })
    .min(1, {
      message: Messages.REQUIRED_FIELD("Password"),
    })
    .min(8, {
      message: Messages.MIN_LENGTH("Password", 8),
    }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;