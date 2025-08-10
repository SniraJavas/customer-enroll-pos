import { ArrowLeft, Camera, User } from 'lucide-react';
import React from 'react';

interface CustomerData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  acceptTerms: boolean;
  marketing: boolean;
}

interface FaceCaptureScreenProps {
  setCurrentScreen: (screen: string) => void;
  isScanning: boolean;
  scanProgress: number;
  customerData: CustomerData;
  retryCount: number;
}

const FaceCaptureScreen: React.FC<FaceCaptureScreenProps> = ({ 
  setCurrentScreen, 
  isScanning, 
  scanProgress, 
  customerData, 
  retryCount 
}) => (
  <div className="flex flex-col h-screen bg-gray-900 text-white">
    <div className="flex items-center justify-between p-6 mt-8">
      <button 
        onClick={() => setCurrentScreen('instructions')} 
        className="p-2 hover:bg-gray-800 rounded-full transition-colors"
      >
        <ArrowLeft className="w-6 h-6 text-white" />
      </button>
      <div className="text-center">
        <h2 className="text-lg font-semibold">Capturing Face Data</h2>
        <p className="text-sm text-gray-400">Hold still and look at camera</p>
      </div>
      <Camera className="w-6 h-6" />
    </div>

    {/* Camera View */}
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="relative">
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

          {/* Quality indicators */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              scanProgress < 30 ? 'bg-yellow-500 text-yellow-900' :
              scanProgress < 70 ? 'bg-blue-500 text-blue-900' :
              'bg-green-500 text-green-900'
            }`}>
              {scanProgress < 30 ? 'Position Face' :
               scanProgress < 70 ? 'Scanning...' :
               'Almost Done'}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Instructions and Progress */}
    <div className="text-center p-6">
      <p className="text-xl font-semibold mb-2">
        {scanProgress < 20 ? 'Position your face in the frame' :
         scanProgress < 50 ? 'Hold still, scanning in progress...' :
         scanProgress < 80 ? 'Almost complete, don\'t move' :
         'Processing face data...'}
      </p>
      <p className="text-gray-300 mb-6">
        Quality: {Math.floor(scanProgress)}%
      </p>
      
      {/* Progress Circle */}
      <div className="relative w-24 h-24 mx-auto mb-6">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#10B981"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 40}`}
            strokeDashoffset={`${2 * Math.PI * 40 * (1 - scanProgress / 100)}`}
            className="transition-all duration-200"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold">{Math.floor(scanProgress)}%</span>
        </div>
      </div>
    </div>

    {/* Customer Info */}
    <div className="bg-gray-800 p-4 mx-6 mb-6 rounded-xl">
      <div className="text-center">
        <p className="text-gray-300 text-sm">Enrolling</p>
        <p className="text-lg font-semibold">{customerData.firstName} {customerData.lastName}</p>
        {retryCount > 0 && (
          <p className="text-yellow-400 text-xs mt-1">Retry attempt {retryCount}</p>
        )}
      </div>
    </div>
  </div>
);

export default FaceCaptureScreen;