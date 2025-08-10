 // app/(enrollment)/success.tsx
import { SuccessScreen } from '@/components/screens';
import { useEnrollment } from '@/hooks';
import { useRouter } from 'expo-router';
import React from 'react';

export default function Success() {
  const router = useRouter();
  const { enrolledCustomer, isOnline, resetEnrollment } = useEnrollment();

  const handleEnrollAnother = () => {
    resetEnrollment();
    router.push('/(enrollment)/welcome');
  };

  const handleOpenApp = () => {
    // In a real app, this would navigate to the customer app or close the enrollment
    alert('In a real app, this would open the FacePay customer app or provide next steps.');
  };

  if (!enrolledCustomer) {
    // Fallback if somehow we reach this screen without a customer
    router.push('/(enrollment)/welcome');
    return null;
  }

  return (
    <SuccessScreen
      enrolledCustomer={enrolledCustomer}
      isOnline={isOnline}
      onEnrollAnother={handleEnrollAnother}
      onOpenApp={handleOpenApp}
    />
  );
}