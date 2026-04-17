'use client';

import { LoginForm } from './_components/login-form';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { signIn } from '@/lib/auth-client';
import { SignInValues } from '@/types/signin';
import { toast } from 'sonner';

import { useTranslations } from 'next-intl';

export default function LoginPage() {
  const router = useRouter();
  const t = useTranslations('SignIn');

  const form = useForm<SignInValues>();

  async function onSubmit(values: SignInValues) {
    await signIn.email({
      email: values.email,
      password: values.password,
      fetchOptions: {
        onSuccess: () => {
          toast(t('welcomeBack'), { position: 'top-center', duration: 2000 });
          router.push('/dashboard');
        },
        onError: (ctx) => {
          const errorCode = ctx.error.code;
          console.log(errorCode);
          if (errorCode === 'INVALID_EMAIL_OR_PASSWORD') {
            toast.error(t('invalidUser'), { position: 'top-center', duration: 2000 });
          } else {
            toast.error(t('unexpectedError'), { position: 'top-center', duration: 2000 });
          }

          form.setError('root', { message: ctx.error.message });
        },
      },
    });
  }

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <LoginForm form={form} onSubmit={form.handleSubmit(onSubmit)} />
      </div>
    </div>
  );
}
