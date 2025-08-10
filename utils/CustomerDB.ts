// utils/CustomerDB.ts
import { Customer, CustomerData } from '@/components/types';

export class CustomerDB {
  private static readonly STORAGE_KEY = 'facepay_customers';

  static getCustomers(): Customer[] {
    if (typeof localStorage === 'undefined') return [];
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
  }
  
  static addCustomer(customerData: CustomerData & { faceDataQuality: number ; retryCount: number }): Customer {
    const customers = this.getCustomers();
    const newCustomer: Customer = {
      id: `CUST_${Date.now()}`,
      enrolledAt: new Date().toISOString(),
      status: 'pending_verification',
      //faceDataQuality: Math.floor(Math.random() * 20) + 80, // 80-100%
      ...customerData
    };
    
    customers.push(newCustomer);
    
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(customers));
    }
    
    return newCustomer;
  }
  
  static updateCustomer(id: string, updates: Partial<Customer>): Customer | null {
    const customers = this.getCustomers();
    const index = customers.findIndex(c => c.id === id);
    
    if (index !== -1) {
      customers[index] = { ...customers[index], ...updates };
      
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(customers));
      }
      
      return customers[index];
    }
    
    return null;
  }
  
  static searchByPhone(phone: string): Customer | undefined {
    const customers = this.getCustomers();
    return customers.find(c => c.phone === phone);
  }

  static deleteCustomer(id: string): boolean {
    const customers = this.getCustomers();
    const filteredCustomers = customers.filter(c => c.id !== id);
    
    if (filteredCustomers.length !== customers.length) {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filteredCustomers));
      }
      return true;
    }
    
    return false;
  }
}
