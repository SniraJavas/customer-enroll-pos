 // components/ui/Input.tsx
import React from 'react';

interface InputProps {
  type?: 'text' | 'email' | 'tel' | 'date';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  required?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  label,
  error,
  required = false,
  icon,
  className = ''
}) => {
  const hasError = !!error;
  
  const inputClasses = `w-full p-4 border-2 rounded-xl text-lg focus:outline-none transition-colors ${
    hasError 
      ? 'border-red-300 bg-red-50 focus:border-red-500' 
      : 'border-gray-200 focus:border-green-500'
  } ${icon ? 'pl-12' : ''}`;

  return (
    <div className={className}>
      {label && (
        <label className="block text-gray-700 font-medium mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-4 text-gray-400">
            {icon}
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={inputClasses}
        />
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};