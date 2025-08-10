import { AlertCircle } from 'lucide-react';
import React from 'react';

interface RetryCaptureScreenProps {
  faceDataQuality: number;
  retryFaceCapture: () => void;
  setCurrentScreen: (screen: string) => void;
}

const RetryCaptureScreen: React.FC<RetryCaptureScreenProps> = ({ 
  faceDataQuality, 
  retryFaceCapture, 
  setCurrentScreen 
}) => (
  <div className="flex flex-col h-screen bg-gradient-to-br from-orange-50 to-red-100 p-6">
    <div className="flex-1 flex flex-col items-center justify-center text-center">
      <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mb-8">
        <AlertCircle className="w-12 h-12 text-white" />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Let's try that again</h2>
      <p className="text-gray-600 mb-8">Face quality was {faceDataQuality}%. We need at least 85% for security.</p>
      
      <div className="bg-white rounded-2xl p-6 mb-8 max-w-sm">
        <h4 className="font-semibold text-gray-800 mb-4">Tips for better capture:</h4>
        <div className="space-y-3 text-sm text-gray-600 text-left">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
            <span>Move to better lighting</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
            <span>Clean camera lens</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
            <span>Look directly at camera</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
            <span>Keep head perfectly still</span>
          </div>
        </div>
      </div>

      <div className="w-full space-y-3">
        <button
          onClick={retryFaceCapture}
          className="w-full bg-orange-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg active:bg-orange-700 transition-colors"
        >
          Try Again
        </button>
        <button
          onClick={() => setCurrentScreen('personalInfo')}
          className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-2xl font-semibold active:bg-gray-50 transition-colors"
        >
          Go Back
        </button>
      </div>
    </div>
  </div>
);

export default RetryCaptureScreen;