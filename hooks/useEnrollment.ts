 // hooks/useEnrollment.ts
import { Customer, CustomerData, EnrollmentScreen } from '@/components/types';
import { CustomerDB } from '@/utils';
import { useCallback, useState } from 'react';
import { useNetworkStatus } from './useNetworkStatus';

const initialCustomerData: CustomerData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  dateOfBirth: '',
  acceptTerms: false,
  marketing: false
};

export const useEnrollment = () => {
  const [currentScreen, setCurrentScreen] = useState<EnrollmentScreen>('welcome');
  const [customerData, setCustomerData] = useState<CustomerData>(initialCustomerData);
  const [enrolledCustomer, setEnrolledCustomer] = useState<Customer | null>(null);
  const { isOnline } = useNetworkStatus();

  const updateCustomerData = useCallback((updates: Partial<CustomerData>) => {
    setCustomerData(prev => ({ ...prev, ...updates }));
  }, []);

  const navigateToScreen = useCallback((screen: EnrollmentScreen) => {
    setCurrentScreen(screen);
  }, []);

  const completeEnrollment = useCallback((faceDataQuality: number, retryCount: number) => {
    const customer = CustomerDB.addCustomer({
      ...customerData,
      faceDataQuality,
      retryCount,
      status: isOnline ? 'active' : 'pending_sync'
    });
    setEnrolledCustomer(customer);
    setCurrentScreen('success');
    return customer;
  }, [customerData, isOnline]);

  const resetEnrollment = useCallback(() => {
    setCurrentScreen('welcome');
    setCustomerData(initialCustomerData);
    setEnrolledCustomer(null);
  }, []);

  return {
    currentScreen,
    customerData,
    enrolledCustomer,
    isOnline,
    updateCustomerData,
    navigateToScreen,
    completeEnrollment,
    resetEnrollment
  };
};