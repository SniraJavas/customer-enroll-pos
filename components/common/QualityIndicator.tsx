 // components/common/QualityIndicator.tsx
import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import React from 'react';

interface QualityIndicatorProps {
  quality: number;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const QualityIndicator: React.FC<QualityIndicatorProps> = ({
  quality,
  showLabel = true,
  size = 'md',
  className = ''
}) => {
  const getQualityInfo = (quality: number) => {
    if (quality >= 90) {
      return {
        icon: CheckCircle,
        label: 'Excellent',
        color: 'text-green-600',
        bgColor: 'bg-green-100'
      };
    } else if (quality >= 75) {
      return {
        icon: CheckCircle,
        label: 'Good',
        color: 'text-blue-600',
        bgColor: 'bg-blue-100'
      };
    } else if (quality >= 50) {
      return {
        icon: AlertCircle,
        label: 'Fair',
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-100'
      };
    } else {
      return {
        icon: XCircle,
        label: 'Poor',
        color: 'text-red-600',
        bgColor: 'bg-red-100'
      };
    }
  };

  const { icon: Icon, label, color, bgColor } = getQualityInfo(quality);
  
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className={`p-2 rounded-full ${bgColor} mr-2`}>
        <Icon className={`${sizeClasses[size]} ${color}`} />
      </div>
      {showLabel && (
        <div>
          <span className={`font-medium ${color}`}>{label}</span>
          <span className="text-gray-600 ml-1">({quality}%)</span>
        </div>
      )}
    </div>
  );
};
