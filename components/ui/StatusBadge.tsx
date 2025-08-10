 // components/ui/StatusBadge.tsx
import { Wifi, WifiOff } from 'lucide-react';
import React from 'react';

interface StatusBadgeProps {
  isOnline: boolean;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ isOnline, className = '' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`flex items-center px-4 py-2 rounded-full text-sm font-medium ${
        isOnline ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
      }`}>
        {isOnline ? <Wifi className="w-4 h-4 mr-2" /> : <WifiOff className="w-4 h-4 mr-2" />}
        {isOnline ? 'Connected' : 'Offline Mode'}
      </div>
    </div>
  );
};