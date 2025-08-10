import { Camera, Shield, User, UserPlus, Wifi, WifiOff } from 'lucide-react';
import React from 'react';

interface WelcomeScreenProps {
  isOnline: boolean;
  setCurrentScreen: (screen: string) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ isOnline, setCurrentScreen }) => (
  
    

  <div className="flex flex-col h-screen bg-gradient-to-br from-emerald-50 to-green-100 p-6">
    {/* Header */}
    <div className="text-center mt-16 mb-12">
      <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <UserPlus className="w-10 h-10 text-white" />
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-3">Welcome to FacePay</h1>
      <p className="text-gray-600 text-lg">Join thousands using secure facial payments</p>
    </div>

    {/* Network Status */}
    <div className="flex items-center justify-center mb-8">
      <div className={`flex items-center px-4 py-2 rounded-full text-sm font-medium ${
        isOnline ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
      }`}>
        {isOnline ? <Wifi className="w-4 h-4 mr-2" /> : <WifiOff className="w-4 h-4 mr-2" />}
        {isOnline ? 'Connected' : 'Offline Mode'}
      </div>
    </div>

    {/* Benefits */}
    <div className="space-y-4 mb-12">
      <div className="bg-white rounded-2xl p-4 shadow-md">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
            <Shield className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Bank-level Security</h3>
            <p className="text-gray-600 text-sm">Your face data is encrypted and protected</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 shadow-md">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
            <Camera className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Quick & Contactless</h3>
            <p className="text-gray-600 text-sm">Pay instantly without cards or phones</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 shadow-md">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
            <User className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Personal & Private</h3>
            <p className="text-gray-600 text-sm">Only you can authorize payments</p>
          </div>
        </div>
      </div>
    </div>

    {/* Get Started Button */}
    <button
      onClick={() => setCurrentScreen('personalInfo')}
      className="w-full bg-green-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg active:bg-green-700 transition-colors mb-4"
    >
      Get Started
    </button>

    <p className="text-center text-gray-500 text-sm">
      Enrollment takes less than 2 minutes
    </p>
  </div>
);

export default WelcomeScreen;