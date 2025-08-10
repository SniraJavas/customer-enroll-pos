import { ArrowLeft, CheckCircle, Shield } from 'lucide-react';
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

interface ReviewScreenProps {
  setCurrentScreen: (screen: string) => void;
  faceDataQuality: number;
  customerData: CustomerData;
  isOnline: boolean;
  completeEnrollment: () => void;
}

const ReviewScreen: React.FC<ReviewScreenProps> = ({ 
  setCurrentScreen, 
  faceDataQuality, 
  customerData, 
  isOnline, 
  completeEnrollment 
}) => (
  <div className="flex flex-col h-screen bg-white p-6">
    <div className="flex items-center justify-between mt-8 mb-8">
      <button 
        onClick={() => setCurrentScreen('faceCapture')} 
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        <ArrowLeft className="w-6 h-6 text-gray-600" />
      </button>
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800">Review & Confirm</h2>
        <p className="text-sm text-gray-500">Step 3 of 3</p>
      </div>
      <div className="w-6" />
    </div>

    {/* Progress Bar */}
    <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
      <div className="bg-green-600 h-2 rounded-full transition-all duration-300" style={{ width: '100%' }} />
    </div>

    <div className="flex-1">
      {/* Face Capture Success */}
      <div className="bg-green-50 rounded-2xl p-6 mb-6 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Face Captured Successfully</h3>
        <p className="text-gray-600 mb-4">Quality: {faceDataQuality}% - Excellent!</p>
        
        {/* Quality Metrics */}
        <div className="grid grid-cols-3 gap-3 text-sm">
          <div className="bg-white rounded-lg p-3">
            <p className="font-semibold text-gray-800">Clarity</p>
            <p className="text-green-600">Excellent</p>
          </div>
          <div className="bg-white rounded-lg p-3">
            <p className="font-semibold text-gray-800">Lighting</p>
            <p className="text-green-600">Good</p>
          </div>
          <div className="bg-white rounded-lg p-3">
            <p className="font-semibold text-gray-800">Position</p>
            <p className="text-green-600">Perfect</p>
          </div>
        </div>
      </div>

      {/* Customer Information Review */}
      <div className="bg-gray-50 rounded-2xl p-6 mb-6">
        <h4 className="font-semibold text-gray-800 mb-4">Your Information</h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">Phone</span>
            <span className="font-mono text-gray-800">{customerData.phone}</span>
          </div>
          {customerData.email && (
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Email</span>
              <span className="text-gray-800">{customerData.email}</span>
            </div>
          )}
          {customerData.dateOfBirth && (
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Date of Birth</span>
              <span className="text-gray-800">{new Date(customerData.dateOfBirth).toLocaleDateString()}</span>
            </div>
          )}
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">Marketing Emails</span>
            <span className="text-gray-800">{customerData.marketing ? 'Yes' : 'No'}</span>
          </div>
        </div>
      </div>

      {/* Status Information */}
      <div className="bg-blue-50 rounded-2xl p-4 mb-6">
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-full mr-3 ${isOnline ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
          <div className="flex-1">
            <p className="font-semibold text-gray-800">
              {isOnline ? 'Account will be activated immediately' : 'Account will be activated when online'}
            </p>
            <p className="text-sm text-gray-600">
              {isOnline ? 'You can start using FacePay right away' : 'Data will sync automatically when connected'}
            </p>
          </div>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="bg-gray-100 rounded-xl p-4 mb-6">
        <div className="flex items-start">
          <Shield className="w-5 h-5 text-gray-600 mr-3 mt-0.5" />
          <div>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Privacy Protected:</span> Your facial data is encrypted with military-grade security. 
              We never store actual images, only mathematical representations that cannot be reverse-engineered.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="space-y-3">
      <button
        onClick={completeEnrollment}
        className="w-full bg-green-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg active:bg-green-700 transition-colors"
      >
        Complete Enrollment
      </button>
      
      <button
        onClick={() => setCurrentScreen('personalInfo')}
        className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-2xl font-semibold active:bg-gray-50 transition-colors"
      >
        Edit Information
      </button>
    </div>
  </div>
);

export default ReviewScreen;