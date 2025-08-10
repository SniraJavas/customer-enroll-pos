
// types/customer.ts
export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  dateOfBirth?: string;
  acceptTerms: boolean;
  marketing: boolean;
  enrolledAt: string;
  status: 'pending_verification' | 'active' | 'pending_sync' | 'inactive';
  faceDataQuality: number;
  retryCount?: number;
}

export interface CustomerData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  faceDataQuality : number;
  acceptTerms: boolean;
  marketing: boolean;
}

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