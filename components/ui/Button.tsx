 // components/ui/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'lg',
  disabled = false,
  className = ''
}) => {
  const baseClasses = 'font-semibold rounded-2xl transition-colors shadow-lg';
  
  const variantClasses = {
    primary: 'bg-green-600 text-white active:bg-green-700',
    secondary: 'bg-blue-600 text-white active:bg-blue-700',
    outline: 'border-2 border-gray-300 text-gray-700 active:bg-gray-50'
  };

  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-6 text-lg w-full'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};