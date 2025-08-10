import { ArrowLeft, Camera, Shield } from 'lucide-react';
import React from 'react';

interface InstructionsScreenProps {
  setCurrentScreen: (screen: string) => void;
  startFaceCapture: () => void;
}

const InstructionsScreen: React.FC<InstructionsScreenProps> = ({ setCurrentScreen, startFaceCapture }) => (
  <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
    <div className="flex items-center justify-between mt-8 mb-8">
      <button 
        onClick={() => setCurrentScreen('personalInfo')} 
        className="p-2 hover:bg-white/50 rounded-full transition-colors"
      >
        <ArrowLeft className="w-6 h-6 text-gray-600" />
      </button>
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800">Face Capture Setup</h2>
        <p className="text-sm text-gray-500">Step 2 of 3</p>
      </div>
      <div className="w-6" />
    </div>

    {/* Progress Bar */}
    <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
      <div className="bg-green-600 h-2 rounded-full transition-all duration-300" style={{ width: '66%' }} />
    </div>

    <div className="flex-1 flex flex-col items-center justify-center text-center">
      <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mb-8">
        <Camera className="w-16 h-16 text-white" />
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mb-4">Let's capture your face</h3>
      <p className="text-gray-600 mb-8">This helps us verify your identity securely</p>

      {/* Instructions */}
      <div className="bg-white rounded-2xl p-6 mb-8 max-w-sm">
        <h4 className="font-semibold text-gray-800 mb-4">For best results:</h4>
        <div className="space-y-3 text-sm text-gray-600 text-left">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
            <span>Look directly at the camera</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
            <span>Ensure good lighting on your face</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
            <span>Remove glasses if possible</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
            <span>Keep your head still during scan</span>
          </div>
        </div>
      </div>

      <div className="bg-blue-100 rounded-xl p-4 mb-8 max-w-sm">
        <div className="flex items-center">
          <Shield className="w-5 h-5 text-blue-600 mr-2" />
          <span className="text-sm text-blue-800 font-medium">Your face data is encrypted and never shared</span>
        </div>
      </div>
    </div>

    <button
      onClick={startFaceCapture}
      className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg active:bg-blue-700 transition-colors"
    >
      Start Face Capture
    </button>
  </div>
);

export default InstructionsScreen;