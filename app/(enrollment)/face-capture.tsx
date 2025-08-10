// app/(enrollment)/face-capture.tsx
import { FaceCaptureScreen } from '@/components/screens';
import { useEnrollment, useFaceCapture } from '@/hooks';
import { useRouter } from 'expo-router';
import React from 'react';

export default function FaceCapture() {
  const router = useRouter();
  const { customerData } = useEnrollment();
  const { 
    isScanning, 
    scanProgress, 
    faceDataQuality, 
    retryCount, 
    scanningComplete,
    isQualityGood,
    startScanning 
  } = useFaceCapture();

  // Start scanning when component mounts
  React.useEffect(() => {
    startScanning();
  }, [startScanning]);

  // Navigate based on scan results
  React.useEffect(() => {
    if (scanningComplete) {
      if (isQualityGood) {
        router.push('/(enrollment)/review');
      } else {
        router.push('/(enrollment)/retry-capture');
      }
    }
  }, [scanningComplete, isQualityGood, router]);

  const handleBack = () => {
    router.back();
  };

  return (
    <FaceCaptureScreen
      customerData={customerData}
      isScanning={isScanning}
      scanProgress={scanProgress}
      retryCount={retryCount}
      onBack={handleBack}
    />
  );
}
