 // utils/CustomerDB.ts
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
  status: 'pending_verification' | 'active' | 'pending_sync';
  faceDataQuality: number;
  retryCount?: number;
}

export interface CustomerData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  acceptTerms: boolean;
  marketing: boolean;
}

// Enhanced Local Storage for Customer Data
export class CustomerDB {
  static getCustomers(): Customer[] {
    try {
      return JSON.parse(localStorage.getItem('facepay_customers') || '[]');
    } catch (error) {
      console.error('Error parsing customer data:', error);
      return [];
    }
  }
  
  static addCustomer(customer: Partial<Customer> & CustomerData): Customer {
    const customers = this.getCustomers();
    const newCustomer: Customer = {
      id: `CUST_${Date.now()}`,
      enrolledAt: new Date().toISOString(),
      status: 'pending_verification',
      faceDataQuality: Math.floor(Math.random() * 20) + 80, // 80-100%
      retryCount: 0,
      ...customer
    };
    customers.push(newCustomer);
    localStorage.setItem('facepay_customers', JSON.stringify(customers));
    return newCustomer;
  }
  
  static updateCustomer(id: string, updates: Partial<Customer>): Customer | null {
    const customers = this.getCustomers();
    const index = customers.findIndex(c => c.id === id);
    if (index !== -1) {
      customers[index] = { ...customers[index], ...updates };
      localStorage.setItem('facepay_customers', JSON.stringify(customers));
      return customers[index];
    }
    return null;
  }
  
  static searchByPhone(phone: string): Customer | undefined {
    const customers = this.getCustomers();
    return customers.find(c => c.phone === phone);
  }
}