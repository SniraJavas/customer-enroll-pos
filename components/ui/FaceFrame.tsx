 // components/ui/FaceFrame.tsx
import { User } from 'lucide-react';
import React from 'react';

interface FaceFrameProps {
  isScanning: boolean;
  scanProgress: number;
  className?: string;
}

export const FaceFrame: React.FC<FaceFrameProps> = ({
  isScanning,
  scanProgress,
  className = ''
}) => {
  const getStatusText = () => {
    if (scanProgress < 20) return 'Position Face';
    if (scanProgress < 70) return 'Scanning...';
    return 'Almost Done';
  };

  const getStatusColor = () => {
    if (scanProgress < 30) return 'bg-yellow-500 text-yellow-900';
    if (scanProgress < 70) return 'bg-blue-500 text-blue-900';
    return 'bg-green-500 text-green-900';
  };

  return (
    <div className={`relative ${className}`}>
      <div className="w-80 h-96 relative">
        {/* Main frame */}
        <div className="absolute inset-0 border-4 border-white rounded-3xl opacity-60"></div>
        
        {/* Corner markers */}
        <div className="absolute top-6 left-6 w-10 h-10 border-l-4 border-t-4 border-green-400 rounded-tl-lg"></div>
        <div className="absolute top-6 right-6 w-10 h-10 border-r-4 border-t-4 border-green-400 rounded-tr-lg"></div>
        <div className="absolute bottom-6 left-6 w-10 h-10 border-l-4 border-b-4 border-green-400 rounded-bl-lg"></div>
        <div className="absolute bottom-6 right-6 w-10 h-10 border-r-4 border-b-4 border-green-400 rounded-br-lg"></div>
        
        {/* Scanning line */}
        {isScanning && (
          <div 
            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent transition-all duration-200"
            style={{ top: `${(scanProgress / 100) * 350}px` }}
          />
        )}

        {/* Face indicator */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-40 h-40 border-2 border-white rounded-full flex items-center justify-center opacity-60">
            <User className="w-20 h-20" />
          </div>
        </div>

        {/* Status indicator */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}>
            {getStatusText()}
          </div>
        </div>
      </div>
    </div>
  );
};