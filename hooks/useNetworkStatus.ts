 // hooks/useNetworkStatus.ts
import { useEffect, useState } from 'react';

export const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly simulate network changes for demo
      if (Math.random() < 0.02) { // 2% chance every second
        setIsOnline(prev => !prev);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { isOnline };
};