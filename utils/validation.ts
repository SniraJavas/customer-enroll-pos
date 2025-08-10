 // utils/validation.ts
import { CustomerData, FormErrors } from '@/components/types';
import { VALIDATION_MESSAGES, VALIDATION_PATTERNS } from '@/constants';
import { CustomerDB } from './CustomerDB';

export const validateCustomerData = (customerData: CustomerData): FormErrors => {
  const errors: FormErrors = {};
  
  if (!customerData.firstName.trim()) {
    errors.firstName = VALIDATION_MESSAGES.REQUIRED_FIRST_NAME;
  }
  
  if (!customerData.lastName.trim()) {
    errors.lastName = VALIDATION_MESSAGES.REQUIRED_LAST_NAME;
  }
  
  if (!customerData.phone.trim()) {
    errors.phone = VALIDATION_MESSAGES.REQUIRED_PHONE;
  } else if (!VALIDATION_PATTERNS.PHONE.test(customerData.phone)) {
    errors.phone = VALIDATION_MESSAGES.INVALID_PHONE;
  }
  
  if (customerData.email && !VALIDATION_PATTERNS.EMAIL.test(customerData.email)) {
    errors.email = VALIDATION_MESSAGES.INVALID_EMAIL;
  }
  
  if (!customerData.acceptTerms) {
    errors.acceptTerms = VALIDATION_MESSAGES.ACCEPT_TERMS;
  }
  
  // Check for duplicate phone
  if (customerData.phone && CustomerDB.searchByPhone(customerData.phone)) {
    errors.phone = VALIDATION_MESSAGES.DUPLICATE_PHONE;
  }
  
  return errors;
};

export const hasValidationErrors = (errors: FormErrors): boolean => {
  return Object.keys(errors).length > 0;
};

export const formatPhoneNumber = (phone: string): string => {
  // Basic phone number formatting
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
};

export const generateCustomerId = (): string => {
  return `CUST_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};
