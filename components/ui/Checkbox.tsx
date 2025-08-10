 // components/ui/Checkbox.tsx
import React from 'react';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: React.ReactNode;
  error?: string;
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  error,
  className = ''
}) => {
  return (
    <div className={className}>
      <label className="flex items-start cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-1 mr-3 w-5 h-5 text-green-600 border-2 border-gray-300 rounded focus:ring-green-500"
        />
        <span className={`text-sm ${error ? 'text-red-600' : 'text-gray-700'}`}>
          {label}
        </span>
      </label>
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};