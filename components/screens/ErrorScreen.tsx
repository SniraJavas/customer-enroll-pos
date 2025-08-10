 import { AlertCircle, ArrowLeft, Home, RefreshCw } from 'lucide-react';
import React from 'react';

interface ErrorScreenProps {
  setCurrentScreen: (screen: string) => void;
  errorMessage?: string;
  errorCode?: string;
  onRetry?: () => void;
  canRetry?: boolean;
  retryCount?: number;
  maxRetries?: number;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({ 
  setCurrentScreen,
  errorMessage = "An unexpected error occurred",
  errorCode,
  onRetry,
  canRetry = true,
  retryCount = 0,
  maxRetries = 3
}) => {
  const handleRetry = () => {
    if (onRetry && retryCount < maxRetries) {
      onRetry();
    }
  };

  const getErrorTitle = () => {
    if (errorCode === 'CAMERA_ERROR') return 'Camera Access Error';
    if (errorCode === 'FACE_DETECTION_FAILED') return 'Face Detection Failed';
    if (errorCode === 'NETWORK_ERROR') return 'Connection Error';
    if (errorCode === 'PROCESSING_ERROR') return 'Processing Error';
    return 'Error Occurred';
  };

  const getErrorDescription = () => {
    if (errorCode === 'CAMERA_ERROR') {
      return 'Unable to access camera. Please check permissions and try again.';
    }
    if (errorCode === 'FACE_DETECTION_FAILED') {
      return 'We couldn\'t detect your face clearly. Please ensure good lighting and try again.';
    }
    if (errorCode === 'NETWORK_ERROR') {
      return 'Connection lost. Please check your internet connection and try again.';
    }
    if (errorCode === 'PROCESSING_ERROR') {
      return 'Something went wrong while processing your data. Please try again.';
    }
    return errorMessage;
  };

  const isMaxRetriesReached = retryCount >= maxRetries;

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6 mt-8">
        <button 
          onClick={() => setCurrentScreen('welcome')} 
          className="p-2 hover:bg-gray-800 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <div className="text-center">
          <h2 className="text-lg font-semibold text-red-400">Error</h2>
          <p className="text-sm text-gray-400">Something went wrong</p>
        </div>
        <div className="w-10 h-10"></div> {/* Spacer for centering */}
      </div>

      {/* Error Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {/* Error Icon */}
        <div className="relative mb-8">
          <div className="w-32 h-32 bg-red-500/20 rounded-full flex items-center justify-center">
            <AlertCircle className="w-16 h-16 text-red-400" />
          </div>
          {/* Pulse animation */}
          <div className="absolute inset-0 w-32 h-32 bg-red-500/10 rounded-full animate-ping"></div>
        </div>

        {/* Error Title */}
        <h3 className="text-2xl font-bold text-white mb-4 text-center">
          {getErrorTitle()}
        </h3>

        {/* Error Description */}
        <p className="text-gray-300 text-center mb-2 max-w-md leading-relaxed">
          {getErrorDescription()}
        </p>

        {/* Error Code */}
        {errorCode && (
          <p className="text-gray-500 text-sm mb-8">
            Error Code: {errorCode}
          </p>
        )}

        {/* Retry Information */}
        {retryCount > 0 && (
          <div className="bg-gray-800 px-4 py-2 rounded-lg mb-6">
            <p className="text-yellow-400 text-sm text-center">
              Attempt {retryCount} of {maxRetries}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col space-y-4 w-full max-w-sm">
          {canRetry && !isMaxRetriesReached && (
            <button
              onClick={handleRetry}
              className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors"
            >
              <RefreshCw className="w-5 h-5" />
              <span>Try Again</span>
            </button>
          )}

          <button
            onClick={() => setCurrentScreen('welcome')}
            className="flex items-center justify-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Start Over</span>
          </button>

          {isMaxRetriesReached && (
            <div className="bg-red-900/30 border border-red-700 p-4 rounded-xl">
              <p className="text-red-300 text-sm text-center">
                Maximum retry attempts reached. Please contact support if the problem persists.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Support Information */}
      <div className="bg-gray-800 p-4 mx-6 mb-6 rounded-xl">
        <div className="text-center">
          <p className="text-gray-300 text-sm mb-1">Need help?</p>
          <p className="text-gray-400 text-xs">
            Contact support at help@example.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorScreen;