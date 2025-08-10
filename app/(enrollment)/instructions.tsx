 // app/(enrollment)/instructions.tsx
import { InstructionsScreen } from '@/components/screens';
import { useRouter } from 'expo-router';
import React from 'react';

export default function Instructions() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleStartCapture = () => {
    router.push('/(enrollment)/face-capture');
  };

  return (
    <InstructionsScreen
      onBack={handleBack}
      onStartCapture={handleStartCapture}
    />
  );
}
