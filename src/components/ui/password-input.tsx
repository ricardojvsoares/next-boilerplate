import { useState } from 'react';

import { Eye, EyeOff } from 'lucide-react';

import { Input } from '@/components/ui/input';

import { Button } from '@/components/ui/button';

import { forwardRef } from 'react';

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  showToggle?: boolean;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ showToggle = true, className, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="relative">
        <Input
          ref={ref}
          type={showPassword ? 'text' : 'password'}
          className={className}
          {...props}
        />

        {showToggle && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute top-1/2 right-2 h-6 w-6 -translate-y-1/2 transform p-0"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <Eye className="text-muted-foreground h-4 w-4" />
            ) : (
              <EyeOff className="text-muted-foreground h-4 w-4" />
            )}
          </Button>
        )}
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';
