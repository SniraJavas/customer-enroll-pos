 // components/common/NetworkStatus.tsx
import { StatusBadge } from '@/components/ui';
import React from 'react';

interface NetworkStatusProps {
  isOnline: boolean;
  className?: string;
}

export const NetworkStatus: React.FC<NetworkStatusProps> = ({ isOnline, className = '' }) => {
  return <StatusBadge isOnline={isOnline} className={className} />;
};