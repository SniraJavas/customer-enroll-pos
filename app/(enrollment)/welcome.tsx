 // app/(enrollment)/welcome.tsx
import { WelcomeScreen } from '@/components/screens';
import { useEnrollment } from '@/hooks';
import { useRouter } from 'expo-router';
import React from 'react';

export default function Welcome() {
  const router = useRouter();
  const { isOnline, resetEnrollment } = useEnrollment();

  // Reset enrollment state when entering welcome screen
  React.useEffect(() => {
    resetEnrollment();
  }, [resetEnrollment]);

  const handleGetStarted = () => {
    router.push('/(enrollment)/personal-info');
  };

  return (
    <WelcomeScreen
      isOnline={isOnline}
      onGetStarted={handleGetStarted}
    />
  );
}