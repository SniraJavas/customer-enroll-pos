 // hooks/useFormValidation.ts
import { CustomerData, FormErrors } from '@/components/types';
import { hasValidationErrors, validateCustomerData } from '@/utils';
import { useCallback, useState } from 'react';

export const useFormValidation = () => {
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = useCallback((customerData: CustomerData): boolean => {
    const newErrors = validateCustomerData(customerData);
    setErrors(newErrors);
    return !hasValidationErrors(newErrors);
  }, []);

  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);

  const setFieldError = useCallback((field: keyof FormErrors, message: string) => {
    setErrors(prev => ({ ...prev, [field]: message }));
  }, []);

  const clearFieldError = useCallback((field: keyof FormErrors) => {
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  }, []);

  return {
    errors,
    validateForm,
    clearErrors,
    setFieldError,
    clearFieldError,
    hasErrors: hasValidationErrors(errors)
  };
};