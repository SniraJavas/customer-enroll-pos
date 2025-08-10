 // app/(enrollment)/review.tsx
import { ReviewScreen } from '@/components/screens';
import { useEnrollment, useFaceCapture } from '@/hooks';
import { useRouter } from 'expo-router';
import React from 'react';

export default function Review() {
  const router = useRouter();
  const { customerData, isOnline, completeEnrollment } = useEnrollment();
  const { faceDataQuality, retryCount } = useFaceCapture();

  const handleBack = () => {
    router.back();
  };

  const handleComplete = () => {
    completeEnrollment(faceDataQuality, retryCount);
    router.push('/(enrollment)/success');
  };

  const handleEdit = () => {
    router.push('/(enrollment)/personal-info');
  };

  return (
    <ReviewScreen
      customerData={customerData}
      faceDataQuality={faceDataQuality}
      isOnline={isOnline}
      onBack={handleBack}
      onComplete={handleComplete}
      onEdit={handleEdit}
    />
  );
}
