'use client';

import { SignupForm } from './_components/signup-form';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { signUp } from '@/lib/auth-client';
import { SignUpSchema, SignUpValues } from '@/types/signup';
import { toast } from 'sonner';
import { useTranslations } from 'next-intl';
import { zodResolver } from '@hookform/resolvers/zod';

export default function SignupPage() {
  const router = useRouter();
  const t = useTranslations('SignUp');

  const form = useForm<SignUpValues>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(values: SignUpValues) {
    await signUp.email({
      email: values.email,
      password: values.password,
      name: values.email.split('@')[0],
      fetchOptions: {
        onSuccess: () => {
          const userName = values.email.split('@')[0];
          toast.success(t('welcomeMessage', { name: userName }), {
            position: 'top-center',
            duration: 2000,
          });
          router.push('/dashboard');
        },
        onError: (ctx) => {
          toast.error(ctx.error.message || t('unexpectedError'), {
            position: 'top-center',
            duration: 2000,
          });
        },
      },
    });
  }

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <SignupForm form={form} onSubmit={form.handleSubmit(onSubmit)} />
      </div>
    </div>
  );
}
