 // hooks/useFaceCapture.ts
import { FACE_QUALITY_THRESHOLD, SCAN_SETTINGS } from '@/constants';
import { useCallback, useEffect, useState } from 'react';

export const useFaceCapture = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [faceDataQuality, setFaceDataQuality] = useState(0);
  const [retryCount, setRetryCount] = useState(0);

  // Face scanning simulation
  useEffect(() => {
    if (!isScanning) return;

    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          setIsScanning(false);
          const quality = Math.floor(Math.random() * 20) + SCAN_SETTINGS.MIN_QUALITY;
          setFaceDataQuality(quality);
          return 100;
        }
        return prev + Math.random() * SCAN_SETTINGS.MAX_PROGRESS_STEP + SCAN_SETTINGS.MIN_PROGRESS_STEP;
      });
    }, SCAN_SETTINGS.PROGRESS_INTERVAL);

    return () => clearInterval(interval);
  }, [isScanning]);

  const startScanning = useCallback(() => {
    setIsScanning(true);
    setScanProgress(0);
    setFaceDataQuality(0);
  }, []);

  const stopScanning = useCallback(() => {
    setIsScanning(false);
  }, []);

  const retryCapture = useCallback(() => {
    setRetryCount(prev => prev + 1);
    startScanning();
  }, [startScanning]);

  const resetCapture = useCallback(() => {
    setIsScanning(false);
    setScanProgress(0);
    setFaceDataQuality(0);
    setRetryCount(0);
  }, []);

  const isQualityGood = faceDataQuality >= FACE_QUALITY_THRESHOLD;
  const scanningComplete = scanProgress >= 100 && !isScanning;

  return {
    isScanning,
    scanProgress,
    faceDataQuality,
    retryCount,
    isQualityGood,
    scanningComplete,
    startScanning,
    stopScanning,
    retryCapture,
    resetCapture
  };
};