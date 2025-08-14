
import { ArrowLeft, Mail, Phone } from 'lucide-react';
import React from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';



interface Errors {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  acceptTerms?: string;
}

interface PersonalInfoScreenProps {
  setCurrentScreen: (screen: string) => void;
  customerData: CustomerData;
  setCustomerData: (data: CustomerData) => void;
  errors: Errors;
}

interface CustomerData {
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  dateOfBirth?: string;
  acceptTerms: boolean;
  marketing: boolean;
}

const PersonalInfoScreen: React.FC<PersonalInfoScreenProps> = ({
  setCurrentScreen,
  customerData,
  setCustomerData,
  errors,
}) => {

    // Show loading if data not available
  if (!customerData) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#16A34A" />
        <Text style={{ marginTop: 12, color: '#4B5563' }}>Loading your information...</Text>
      </View>
    );
  }
  
  return ( <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 30 }}>
    {/* Header */}
    <View style={styles.header}>
      <TouchableOpacity onPress={() => setCurrentScreen('welcome')} style={styles.backButton}>
        <ArrowLeft size={24} color="#4B5563" />
      </TouchableOpacity>
      <View style={styles.headerText}>
        <Text style={styles.headerTitle}>Personal Information</Text>
        <Text style={styles.headerStep}>Step 1 of 3</Text>
      </View>
      <View style={{ width: 24 }} />
    </View>

    {/* Progress Bar */}
    <View style={styles.progressBar}>
      <View style={styles.progressFill} />
    </View>

    {/* Name Fields */}
    <View style={styles.row}>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>First Name *</Text>
        <TextInput
          value={customerData.firstName}
          onChangeText={(text) => setCustomerData({ ...customerData, firstName: text })}
          style={[
            styles.input,
            errors.firstName ? styles.inputError : styles.inputNormal,
          ]}
          placeholder="John" />
        {errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Last Name *</Text>
        <TextInput
          value={customerData.lastName}
          onChangeText={(text) => setCustomerData({ ...customerData, lastName: text })}
          style={[
            styles.input,
            errors.lastName ? styles.inputError : styles.inputNormal,
          ]}
          placeholder="Doe" />
        {errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}
      </View>
    </View>

    {/* Phone Number */}
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>Phone Number *</Text>
      <View style={styles.iconInputWrapper}>
        <Phone size={20} color="#9CA3AF" style={styles.icon} />
        <TextInput
          value={customerData.phone}
          onChangeText={(text) => setCustomerData({ ...customerData, phone: text })}
          style={[
            styles.input,
            styles.inputWithIcon,
            errors.phone ? styles.inputError : styles.inputNormal,
          ]}
          placeholder="+1 (555) 123-4567"
          keyboardType="phone-pad" />
      </View>
      {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}
    </View>

    {/* Email */}
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>Email (Optional)</Text>
      <View style={styles.iconInputWrapper}>
        <Mail size={20} color="#9CA3AF" style={styles.icon} />
        <TextInput
          value={customerData.email}
          onChangeText={(text) => setCustomerData({ ...customerData, email: text })}
          style={[
            styles.input,
            styles.inputWithIcon,
            errors.email ? styles.inputError : styles.inputNormal,
          ]}
          placeholder="john@example.com"
          keyboardType="email-address" />
      </View>
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
    </View>

    {/* Date of Birth */}
    <View style={styles.inputWrapper}>
      <Text style={styles.label}>Date of Birth (Optional)</Text>
      <TextInput
        value={customerData.dateOfBirth}
        onChangeText={(text) => setCustomerData({ ...customerData, dateOfBirth: text })}
        style={[styles.input, styles.inputNormal]}
        placeholder="YYYY-MM-DD" />
    </View>

    {/* Terms */}
    <View style={{ marginTop: 16 }}>
      <TouchableOpacity
        style={styles.checkboxRow}
        onPress={() => setCustomerData({ ...customerData, acceptTerms: !customerData.acceptTerms })}
      >
        <View style={styles.checkbox} />
        <Text style={[styles.checkboxText, errors.acceptTerms && styles.errorCheckbox]}>
          I agree to the <Text style={styles.link}>Terms of Service</Text> and{' '}
          <Text style={styles.link}>Privacy Policy</Text> *
        </Text>
      </TouchableOpacity>
      {errors.acceptTerms && <Text style={styles.errorText}>{errors.acceptTerms}</Text>}

      <TouchableOpacity
        style={styles.checkboxRow}
        onPress={() => setCustomerData({ ...customerData, marketing: !customerData.marketing })}
      >
        <View style={styles.checkbox} />
        <Text style={styles.checkboxText}>
          I'd like to receive updates about new features and promotions
        </Text>
      </TouchableOpacity>
    </View>

    {/* Continue Button */}
    <TouchableOpacity
      onPress={() => setCurrentScreen('instructions')}
      style={styles.primaryButton}
    >
      <Text style={styles.primaryButtonText}>Continue to Face Capture</Text>
    </TouchableOpacity>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 32,
  },
  backButton: {
    padding: 8,
    borderRadius: 9999,
  },
  headerText: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
  },
  headerStep: {
    fontSize: 14,
    color: '#6B7280',
  },
  progressBar: {
    width: '100%',
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 9999,
    marginBottom: 32,
  },
  progressFill: {
    width: '33%',
    height: '100%',
    backgroundColor: '#16A34A',
    borderRadius: 9999,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
  },
  inputWrapper: {
    flex: 1,
    marginBottom: 24,
  },
  label: {
    color: '#374151',
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 2,
    borderRadius: 12,
    fontSize: 16,
  },
  inputNormal: {
    borderColor: '#E5E7EB',
  },
  inputError: {
    borderColor: '#FCA5A5',
    backgroundColor: '#FEF2F2',
  },
  iconInputWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  inputWithIcon: {
    paddingLeft: 44,
  },
  icon: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },
  errorText: {
    color: '#EF4444',
    fontSize: 14,
    marginTop: 4,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    marginRight: 12,
  },
  checkboxText: {
    fontSize: 14,
    color: '#374151',
    flex: 1,
  },
  errorCheckbox: {
    color: '#DC2626',
  },
  link: {
    color: '#16A34A',
    textDecorationLine: 'underline',
  },
  primaryButton: {
    backgroundColor: '#16A34A',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  primaryButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
});

export default PersonalInfoScreen;
