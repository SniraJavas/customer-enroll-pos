import { ArrowLeft, Mail, Phone } from 'lucide-react';
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

interface Errors {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  acceptTerms?: string;
}

interface PersonalInfoScreenProps {
  setCurrentScreen: (screen: string) => void;
  customerData: CustomerData;
  setCustomerData: (data: CustomerData) => void;
  errors: Errors;
}

const PersonalInfoScreen: React.FC<PersonalInfoScreenProps> = ({ 
  setCurrentScreen, 
  customerData, 
  setCustomerData, 
  errors 
}) => (
  <div className="flex flex-col h-screen bg-white p-6">
    {/* Header */}
    <div className="flex items-center justify-between mt-8 mb-8">
      <button 
        onClick={() => setCurrentScreen('welcome')} 
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        <ArrowLeft className="w-6 h-6 text-gray-600" />
      </button>
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
        <p className="text-sm text-gray-500">Step 1 of 3</p>
      </div>
      <div className="w-6" />
    </div>

    {/* Progress Bar */}
    <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
      <div className="bg-green-600 h-2 rounded-full transition-all duration-300" style={{ width: '33%' }} />
    </div>

    <div className="flex-1 space-y-6">
      {/* Name Fields */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">First Name *</label>
          <input
            type="text"
            value={customerData.firstName}
            onChange={(e) => setCustomerData({...customerData, firstName: e.target.value})}
            className={`w-full p-4 border-2 rounded-xl text-lg ${
              errors.firstName ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-green-500'
            } focus:outline-none transition-colors`}
            placeholder="John"
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Last Name *</label>
          <input
            type="text"
            value={customerData.lastName}
            onChange={(e) => setCustomerData({...customerData, lastName: e.target.value})}
            className={`w-full p-4 border-2 rounded-xl text-lg ${
              errors.lastName ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-green-500'
            } focus:outline-none transition-colors`}
            placeholder="Doe"
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
        </div>
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
        <div className="relative">
          <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
          <input
            type="tel"
            value={customerData.phone}
            onChange={(e) => setCustomerData({...customerData, phone: e.target.value})}
            className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl text-lg ${
              errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-green-500'
            } focus:outline-none transition-colors`}
            placeholder="+1 (555) 123-4567"
          />
        </div>
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      {/* Email (Optional) */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Email (Optional)</label>
        <div className="relative">
          <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
          <input
            type="email"
            value={customerData.email}
            onChange={(e) => setCustomerData({...customerData, email: e.target.value})}
            className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl text-lg ${
              errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-green-500'
            } focus:outline-none transition-colors`}
            placeholder="john@example.com"
          />
        </div>
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Date of Birth */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Date of Birth (Optional)</label>
        <input
          type="date"
          value={customerData.dateOfBirth}
          onChange={(e) => setCustomerData({...customerData, dateOfBirth: e.target.value})}
          className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-green-500 focus:outline-none transition-colors"
        />
      </div>

      {/* Terms and Marketing */}
      <div className="space-y-4 pt-4">
        <label className="flex items-start cursor-pointer">
          <input
            type="checkbox"
            checked={customerData.acceptTerms}
            onChange={(e) => setCustomerData({...customerData, acceptTerms: e.target.checked})}
            className="mt-1 mr-3 w-5 h-5 text-green-600 border-2 border-gray-300 rounded focus:ring-green-500"
          />
          <span className={`text-sm ${errors.acceptTerms ? 'text-red-600' : 'text-gray-700'}`}>
            I agree to the <span className="text-green-600 underline">Terms of Service</span> and{' '}
            <span className="text-green-600 underline">Privacy Policy</span> *
          </span>
        </label>
        {errors.acceptTerms && <p className="text-red-500 text-sm">{errors.acceptTerms}</p>}

        <label className="flex items-start cursor-pointer">
          <input
            type="checkbox"
            checked={customerData.marketing}
            onChange={(e) => setCustomerData({...customerData, marketing: e.target.checked})}
            className="mt-1 mr-3 w-5 h-5 text-green-600 border-2 border-gray-300 rounded focus:ring-green-500"
          />
          <span className="text-sm text-gray-700">
            I'd like to receive updates about new features and promotions
          </span>
        </label>
      </div>
    </div>

    {/* Next Button */}
    <button
      onClick={() => setCurrentScreen('instructions')}
      className="w-full bg-green-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg active:bg-green-700 transition-colors mt-6"
    >
      Continue to Face Capture
    </button>
  </div>
);

export default PersonalInfoScreen;