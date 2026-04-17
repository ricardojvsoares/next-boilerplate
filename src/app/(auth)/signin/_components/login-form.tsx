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
import { PasswordInput } from '@/components/ui/password-input';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { SignInValues } from '@/types/signin';
import { UseFormReturn } from 'react-hook-form';

export function LoginForm({
  form,
  onSubmit,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  form: UseFormReturn<SignInValues>;
  onSubmit: (e?: React.BaseSyntheticEvent) => void;
}) {
  const t = useTranslations('SignIn');
  const ct = useTranslations('Common');

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={onSubmit}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">{t('welcomeBack')}</h1>
                <p className="text-muted-foreground text-balance">{t('login')}</p>
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
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">{ct('password')}</FieldLabel>
                  <a href="#" className="ml-auto text-sm underline-offset-2 hover:underline">
                    {t('forgotPassword')}
                  </a>
                </div>
                <PasswordInput id="password" required {...form.register('password')} />
              </Field>
              <Field>
                <Button type="submit">{t('loginButton')}</Button>
              </Field>
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                {t('continueWith')}
              </FieldSeparator>
              <Field className="grid grid-cols-1 gap-4">
                <Button variant="outline" type="button">
                  <span>{t('signInWithGoogle')}</span>
                </Button>
              </Field>
              <FieldDescription className="text-center">
                {t('dontHaveAccount')} <a href="/signup">{t('signUp')}</a>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className="bg-muted relative hidden md:block">
            <Image
              src="https://placehold.co/200x400/6366F1/FFF?text=Sign In"
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
