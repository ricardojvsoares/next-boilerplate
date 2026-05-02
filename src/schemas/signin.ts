import { z } from 'zod';

export const SignInSchema = z.object({
  email: z.email(),
  password: z.string().min(1, { message: 'Password is required' }),
});

export type SignInValues = z.infer<typeof SignInSchema>;
