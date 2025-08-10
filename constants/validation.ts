// constants/validation.ts
export const VALIDATION_PATTERNS = {
  PHONE: /^\+?[\d\s\-\(\)]+$/,
  EMAIL: /\S+@\S+\.\S+/
};

export const VALIDATION_MESSAGES = {
  REQUIRED_FIRST_NAME: 'First name is required',
  REQUIRED_LAST_NAME: 'Last name is required',
  REQUIRED_PHONE: 'Phone number is required',
  INVALID_PHONE: 'Invalid phone number format',
  INVALID_EMAIL: 'Invalid email format',
  DUPLICATE_PHONE: 'This phone number is already registered',
  ACCEPT_TERMS: 'You must accept the terms and conditions'
};