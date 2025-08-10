 // components/common/HeaderNavigation.tsx
import { ArrowLeft } from 'lucide-react';
import React from 'react';

interface HeaderNavigationProps {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  showBackButton?: boolean;
  rightElement?: React.ReactNode;
  className?: string;
}

export const HeaderNavigation: React.FC<HeaderNavigationProps> = ({
  title,
  subtitle,
  onBack,
  showBackButton = true,
  rightElement,
  className = ''
}) => {
  return (
    <div className={`flex items-center justify-between mt-8 mb-8 ${className}`}>
      <div className="flex items-center">
        {showBackButton && onBack && (
          <button 
            onClick={onBack} 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors mr-4"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
        )}
        {!showBackButton && <div className="w-6" />}
      </div>
      
      <div className="text-center flex-1">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
      
      <div className="flex items-center">
        {rightElement || <div className="w-6" />}
      </div>
    </div>
  );
};
