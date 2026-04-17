import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from '@/components/ui/field';
import { PasswordRequirements } from './password-requirements';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SignUpValues } from '@/types/signup';
import { UseFormReturn } from 'react-hook-form';
import { PasswordInput } from '@/components/ui/password-input';
import { useEffect, useState } from 'react';

export function SignupForm({
  form,
  onSubmit,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  form: UseFormReturn<SignUpValues>;
  onSubmit: (e?: React.BaseSyntheticEvent) => void;
}) {
  const t = useTranslations('SignUp');
  const ct = useTranslations('Common');
  const [passwordValue, setPasswordValue] = useState(form.getValues('password'));

  useEffect(() => {
    const subscription = form.watch((value) => {
      setPasswordValue(value.password || '');
    });
    return () => subscription.unsubscribe();
  }, [form]);

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={onSubmit}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">{t('createAccount')}</h1>
              </div>
              <Field>
                <FieldLabel htmlFor="email">{ct('email')}</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  {...form.register('email')}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="password">{ct('password')}</FieldLabel>
                <PasswordInput id="password" required {...form.register('password')} />
              </Field>
              <Field>
                <FieldLabel htmlFor="confirm-password">
                  {ct('confirm')} {ct('password')}
                </FieldLabel>
                <PasswordInput
                  id="confirm-password"
                  required
                  {...form.register('confirmPassword')}
                />
              </Field>
              <PasswordRequirements password={passwordValue} />
              <Field>
                <Button type="submit">{t('createAccount')}</Button>
              </Field>
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                {t('continueWith')}
              </FieldSeparator>
              <Field className="grid grid-cols-1 gap-4">
                <Button variant="outline" type="button">
                  <span>{t('signUpWithGoogle')}</span>
                </Button>
              </Field>
              <FieldDescription className="text-center">
                {t('alreadyHaveAccount')} <a href="/signin">{t('signIn')}</a>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className="bg-muted relative hidden md:block">
            <Image
              src="https://placehold.co/200x400/6366F1/FFF?text=Sign Up"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
              width={100}
              height={150}
              unoptimized
              loading="eager"
            />
          </div>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        {ct('termsAndPrivacy')} <a href="#">{ct('terms')}</a> {ct('and')}{' '}
        <a href="#">{ct('privacy')}</a>.
      </FieldDescription>
    </div>
  );
}
