import { CheckCircle, User } from 'lucide-react';
import React from 'react';

interface EnrolledCustomer {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  dateOfBirth?: string;
  enrolledAt: string;
  status: string;
  faceDataQuality: number;
}

interface SuccessScreenProps {
  isOnline: boolean;
  enrolledCustomer: EnrolledCustomer | null;
  faceDataQuality: number;
  retryCount: number;
  resetEnrollment: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({ 
  isOnline, 
  enrolledCustomer, 
  faceDataQuality, 
  retryCount, 
  resetEnrollment 
}) => (
  <div className="flex flex-col h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-6">
    <div className="flex-1 flex flex-col items-center justify-center text-center">
      {/* Success Animation */}
      <div className="relative mb-8">
        <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
          <CheckCircle className="w-16 h-16 text-white" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
      </div>
      
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to FacePay!</h2>
      <p className="text-gray-600 mb-8 text-lg">
        {isOnline ? 'Your account is active and ready to use' : 'Your enrollment is complete and will sync shortly'}
      </p>
      
      {/* Customer Details Card */}
      <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-lg mb-8">
        <div className="space-y-4">
          <div className="text-center pb-4 border-b">
            <h3 className="font-bold text-gray-800 text-lg">{enrolledCustomer?.firstName} {enrolledCustomer?.lastName}</h3>
            <p className="text-gray-600 text-sm">Customer ID: {enrolledCustomer?.id}</p>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Status</span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              isOnline ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
            }`}>
              {isOnline ? 'Active' : 'Pending Sync'}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Face Quality</span>
            <span className="font-semibold text-gray-800">{faceDataQuality}%</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Enrolled</span>
            <span className="text-gray-800">{new Date().toLocaleString()}</span>
          </div>
          
          {retryCount > 0 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Attempts</span>
              <span className="text-gray-800">{retryCount + 1}</span>
            </div>
          )}
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-blue-50 rounded-2xl p-6 w-full max-w-sm mb-8">
        <h4 className="font-semibold text-gray-800 mb-3">What's Next?</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            <span>Visit any FacePay merchant</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            <span>Look at the camera to pay</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
            <span>Enjoy contactless payments</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full space-y-3">
        <button
          onClick={resetEnrollment}
          className="w-full bg-green-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg active:bg-green-700 transition-colors"
        >
          Enroll Another Customer
        </button>
        
        <button
          onClick={() => {
            // In a real app, this would navigate to the customer app or close the enrollment
            alert('In a real app, this would open the FacePay customer app or provide next steps.');
          }}
          className="w-full border-2 border-green-600 text-green-600 py-4 rounded-2xl font-semibold active:bg-green-50 transition-colors"
        >
          Open FacePay App
        </button>
      </div>

      {/* Support Link */}
      <p className="text-center text-gray-500 text-sm mt-6">
        Need help? <span className="text-green-600 underline">Contact Support</span>
      </p>
    </div>
  </div>
);

export default SuccessScreen;