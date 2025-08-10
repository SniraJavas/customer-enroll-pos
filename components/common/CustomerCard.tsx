 // components/common/CustomerCard.tsx
import { Customer } from '@/types';
import React from 'react';

interface CustomerCardProps {
  customer: Customer;
  showDetails?: boolean;
  className?: string;
}

export const CustomerCard: React.FC<CustomerCardProps> = ({ 
  customer, 
  showDetails = false,
  className = '' 
}) => {
  const getStatusColor = (status: Customer['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'pending_verification':
      case 'pending_sync':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusLabel = (status: Customer['status']) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'pending_verification':
        return 'Pending Verification';
      case 'pending_sync':
        return 'Pending Sync';
      default:
        return 'Inactive';
    }
  };

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg ${className}`}>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-600">Status</span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(customer.status)}`}>
            {getStatusLabel(customer.status)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Face Quality</span>
          <span className="font-semibold text-gray-800">{customer.faceDataQuality}%</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Enrolled</span>
          <span className="text-gray-800">{new Date(customer.enrolledAt).toLocaleDateString()}</span>
        </div>
        
        {showDetails && (
          <>
            <div className="flex justify-between">
              <span className="text-gray-600">Phone</span>
              <span className="font-mono text-gray-800">{customer.phone}</span>
            </div>
            
            {customer.email && (
              <div className="flex justify-between">
                <span className="text-gray-600">Email</span>
                <span className="text-gray-800">{customer.email}</span>
              </div>
            )}
            
            {customer.retryCount && customer.retryCount > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-600">Attempts</span>
                <span className="text-gray-800">{customer.retryCount + 1}</span>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};