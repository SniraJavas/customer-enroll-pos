import { ArrowLeft, CheckCircle, Shield } from 'lucide-react-native';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface CustomerData {
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  dateOfBirth?: string;
  acceptTerms: boolean;
  marketing: boolean;
}

interface ReviewScreenProps {
  setCurrentScreen: (screen: string) => void;
  faceDataQuality: number;
  customerData?: CustomerData; // now optional
  isOnline: boolean;
  completeEnrollment: () => void;
}

const ReviewScreen: React.FC<ReviewScreenProps> = ({
  setCurrentScreen,
  faceDataQuality,
  customerData,
  isOnline,
  completeEnrollment
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

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => setCurrentScreen('faceCapture')}
          style={styles.backButton}
        >
          <ArrowLeft size={24} color="#4B5563" />
        </TouchableOpacity>
        <View style={styles.headerText}>
          <Text style={styles.title}>Review & Confirm</Text>
          <Text style={styles.step}>Step 3 of 3</Text>
        </View>
        <View style={{ width: 24 }} />
      </View>

      {/* Progress Bar */}
      <View style={styles.progressBar}>
        <View style={styles.progressFill} />
      </View>

      <View style={{ flex: 1 }}>
        {/* Face Capture Success */}
        <View style={styles.successCard}>
          <View style={styles.successIcon}>
            <CheckCircle size={32} color="#fff" />
          </View>
          <Text style={styles.successTitle}>Face Captured Successfully</Text>
          <Text style={styles.successSubtitle}>
            Quality: {faceDataQuality ?? 0}% - Excellent!
          </Text>

          <View style={styles.metricsGrid}>
            <View style={styles.metricBox}>
              <Text style={styles.metricLabel}>Clarity</Text>
              <Text style={styles.metricValue}>Excellent</Text>
            </View>
            <View style={styles.metricBox}>
              <Text style={styles.metricLabel}>Lighting</Text>
              <Text style={styles.metricValue}>Good</Text>
            </View>
            <View style={styles.metricBox}>
              <Text style={styles.metricLabel}>Position</Text>
              <Text style={styles.metricValue}>Perfect</Text>
            </View>
          </View>
        </View>

        {/* Customer Info */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Your Information</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Phone</Text>
            <Text style={styles.infoValue}>{customerData.phone || 'N/A'}</Text>
          </View>
          {customerData.email ? (
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>{customerData.email}</Text>
            </View>
          ) : null}
          {customerData.dateOfBirth ? (
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Date of Birth</Text>
              <Text style={styles.infoValue}>
                {new Date(customerData.dateOfBirth).toLocaleDateString()}
              </Text>
            </View>
          ) : null}
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Marketing Emails</Text>
            <Text style={styles.infoValue}>{customerData.marketing ? 'Yes' : 'No'}</Text>
          </View>
        </View>

        {/* Status */}
        <View style={styles.statusCard}>
          <View style={styles.statusRow}>
            <View
              style={[
                styles.statusDot,
                { backgroundColor: isOnline ? '#22C55E' : '#EAB308' }
              ]}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.statusTitle}>
                {isOnline
                  ? 'Account will be activated immediately'
                  : 'Account will be activated when online'}
              </Text>
              <Text style={styles.statusText}>
                {isOnline
                  ? 'You can start using FacePay right away'
                  : 'Data will sync automatically when connected'}
              </Text>
            </View>
          </View>
        </View>

        {/* Privacy */}
        <View style={styles.privacyCard}>
          <Shield size={20} color="#4B5563" style={{ marginRight: 8, marginTop: 2 }} />
          <Text style={styles.privacyText}>
            <Text style={{ fontWeight: '600' }}>Privacy Protected:</Text> Your facial data is
            encrypted with military-grade security. We never store actual images, only mathematical
            representations that cannot be reverse-engineered.
          </Text>
        </View>
      </View>

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity onPress={completeEnrollment} style={styles.primaryButton}>
          <Text style={styles.primaryText}>Complete Enrollment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrentScreen('personalInfo')}
          style={styles.secondaryButton}
        >
          <Text style={styles.secondaryText}>Edit Information</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    backgroundColor: '#F3F4F6',
  },

  headerText: {
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937',
  },

  step: {
    fontSize: 12,
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
    width: '100%',
    height: '100%',
    backgroundColor: '#16A34A',
    borderRadius: 9999,
  },

  successCard: {
    backgroundColor: '#ECFDF5',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    alignItems: 'center',
  },

  successIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#22C55E',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  successTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 4,
  },

  successSubtitle: {
    color: '#4B5563',
    marginBottom: 16,
  },

  metricsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  metricBox: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 4,
    alignItems: 'center',
  },

  metricLabel: {
    fontWeight: '600',
    color: '#1F2937',
  },

  metricValue: {
    color: '#16A34A',
  },

  infoCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
  },

  infoTitle: {
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },

  infoLabel: {
    color: '#6B7280',
  },

  infoValue: {
    color: '#1F2937',
    fontFamily: 'monospace',
  },

  statusCard: {
    backgroundColor: '#EFF6FF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },

  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },

  statusTitle: {
    fontWeight: '600',
    color: '#1F2937',
  },

  statusText: {
    fontSize: 12,
    color: '#4B5563',
  },

  privacyCard: {
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    marginBottom: 24,
  },

  privacyText: {
    fontSize: 12,
    color: '#374151',
    flex: 1,
  },

  actions: {
    marginTop: 16,
    marginBottom: 24,
  },

  primaryButton: {
    backgroundColor: '#16A34A',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 12,
  },

  primaryText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },

  secondaryButton: {
    borderWidth: 2,
    borderColor: '#D1D5DB',
    paddingVertical: 12,
    borderRadius: 16,
    alignItems: 'center',
  },

  secondaryText: {
    color: '#374151',
    fontWeight: '600',
  },
});

export default ReviewScreen;
