import { Customer, CustomerData } from ".";

 // types/enrollment.ts
export type EnrollmentScreen = 
  | 'welcome' 
  | 'personalInfo' 
  | 'instructions' 
  | 'faceCapture' 
  | 'retryCapture' 
  | 'review' 
  | 'success';

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  acceptTerms?: string;
}

export interface FaceCaptureState {
  isScanning: boolean;
  scanProgress: number;
  faceDataQuality: number;
  retryCount: number;
}

export interface EnrollmentState {
  currentScreen: EnrollmentScreen;
  customerData: CustomerData;
  errors: FormErrors;
  enrolledCustomer: Customer | null;
  isOnline: boolean;
}