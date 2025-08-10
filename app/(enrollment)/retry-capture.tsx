 // app/(enrollment)/retry-capture.tsx
import { RetryCaptureScreen } from '@/components/screens';
import { useFaceCapture } from '@/hooks';
import { useRouter } from 'expo-router';
import React from 'react';

export default function RetryCapture() {
  const router = useRouter();
  const { faceDataQuality } = useFaceCapture();

  const handleRetry = () => {
    router.push('/(enrollment)/face-capture');
  };

  const handleGoBack = () => {
    router.push('/(enrollment)/personal-info');
  };

  return (
    <RetryCaptureScreen
      faceDataQuality={faceDataQuality}
      onRetry={handleRetry}
      onGoBack={handleGoBack}
    />
  );
}
