import { Camera, Shield, User, UserPlus, Wifi, WifiOff } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const WelcomeScreen = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [currentScreen, setCurrentScreen] = useState('welcome');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <UserPlus size={40} color="white" />
        </View>
        <Text style={styles.title}>Welcome to FacePay</Text>
        <Text style={styles.subtitle}>Join thousands using secure facial payments</Text>
      </View>

      {/* Network Status */}
      <View style={styles.networkStatusContainer}>
        <View style={[styles.networkStatus, isOnline ? styles.onlineStatus : styles.offlineStatus]}>
          {isOnline ? <Wifi size={16} color="#047857" /> : <WifiOff size={16} color="#DC2626" />}
          <Text style={[styles.networkText, isOnline ? styles.onlineText : styles.offlineText]}>
            {isOnline ? 'Connected' : 'Offline Mode'}
          </Text>
        </View>
      </View>

      {/* Benefits */}
      <View style={styles.benefitsContainer}>
        <View style={styles.benefitCard}>
          <View style={styles.benefitContent}>
            <View style={[styles.benefitIcon, styles.greenIconBg]}>
              <Shield size={24} color="#059669" />
            </View>
            <View style={styles.benefitText}>
              <Text style={styles.benefitTitle}>Bank-level Security</Text>
              <Text style={styles.benefitDescription}>Your face data is encrypted and protected</Text>
            </View>
          </View>
        </View>

        <View style={styles.benefitCard}>
          <View style={styles.benefitContent}>
            <View style={[styles.benefitIcon, styles.blueIconBg]}>
              <Camera size={24} color="#2563EB" />
            </View>
            <View style={styles.benefitText}>
              <Text style={styles.benefitTitle}>Quick & Contactless</Text>
              <Text style={styles.benefitDescription}>Pay instantly without cards or phones</Text>
            </View>
          </View>
        </View>

        <View style={styles.benefitCard}>
          <View style={styles.benefitContent}>
            <View style={[styles.benefitIcon, styles.purpleIconBg]}>
              <User size={24} color="#7C3AED" />
            </View>
            <View style={styles.benefitText}>
              <Text style={styles.benefitTitle}>Personal & Private</Text>
              <Text style={styles.benefitDescription}>Only you can authorize payments</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity
        onPress={() => setCurrentScreen('personalInfo')}
        style={styles.getStartedButton}
        activeOpacity={0.8}
      >
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity>

      <Text style={styles.enrollmentText}>
        Enrollment takes less than 2 minutes
      </Text>

      {/* Toggle button for testing network status */}
      <TouchableOpacity
        onPress={() => setIsOnline(!isOnline)}
        style={styles.toggleButton}
      >
        <Text style={styles.toggleButtonText}>Toggle Network Status (for testing)</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FDF4', // from-green-50 to-green-100 approximation
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingTop: 64,
    paddingBottom: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  iconContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#059669', // green-600
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1F2937', // gray-800
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    color: '#4B5563', // gray-600
    fontSize: 18,
    textAlign: 'center',
  },
  networkStatusContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  networkStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  onlineStatus: {
    backgroundColor: '#DCFCE7', // green-100
  },
  offlineStatus: {
    backgroundColor: '#FEE2E2', // red-100
  },
  networkText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
  },
  onlineText: {
    color: '#047857', // green-700
  },
  offlineText: {
    color: '#DC2626', // red-700
  },
  benefitsContainer: {
    marginBottom: 48,
  },
  benefitCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  benefitContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  benefitIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  greenIconBg: {
    backgroundColor: '#DCFCE7', // green-100
  },
  blueIconBg: {
    backgroundColor: '#DBEAFE', // blue-100
  },
  purpleIconBg: {
    backgroundColor: '#EDE9FE', // purple-100
  },
  benefitText: {
    flex: 1,
  },
  benefitTitle: {
    fontWeight: '600',
    color: '#1F2937', // gray-800
    fontSize: 16,
    marginBottom: 2,
  },
  benefitDescription: {
    color: '#4B5563', // gray-600
    fontSize: 14,
  },
  getStartedButton: {
    backgroundColor: '#059669', // green-600
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  getStartedText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  enrollmentText: {
    textAlign: 'center',
    color: '#6B7280', // gray-500
    fontSize: 14,
  },
  toggleButton: {
    marginTop: 16,
    alignItems: 'center',
  },
  toggleButtonText: {
    fontSize: 12,
    color: '#9CA3AF', // gray-400
    textDecorationLine: 'underline',
  },
});

export default WelcomeScreen;