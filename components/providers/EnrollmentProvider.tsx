 // components/providers/EnrollmentProvider.tsx
import { Customer, CustomerData, EnrollmentScreen } from '@/components/types';
import { useEnrollment as useEnrollmentHook } from '@/hooks';
import React, { createContext, useContext } from 'react';

interface EnrollmentContextType {
  // State
  currentScreen: EnrollmentScreen;
  customerData: CustomerData;
  enrolledCustomer: Customer | null;
  isOnline: boolean;
  
  // Actions  
  updateCustomerData: (updates: Partial<CustomerData>) => void;
  navigateToScreen: (screen: EnrollmentScreen) => void;
  completeEnrollment: (faceDataQuality: number, retryCount: number) => Customer;
  resetEnrollment: () => void;
}

const EnrollmentContext = createContext<EnrollmentContextType | undefined>(undefined);

export const EnrollmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const enrollmentState = useEnrollmentHook();

  return (
    <EnrollmentContext.Provider value={enrollmentState}>
      {children}
    </EnrollmentContext.Provider>
  );
};

export const useEnrollmentContext = () => {
  const context = useContext(EnrollmentContext);
  if (context === undefined) {
    throw new Error('useEnrollmentContext must be used within an EnrollmentProvider');
  }
  return context;
};
