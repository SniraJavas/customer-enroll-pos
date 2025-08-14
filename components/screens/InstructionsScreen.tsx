import { ArrowLeft, Camera, Shield } from 'lucide-react-native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface InstructionsScreenProps {
  setCurrentScreen: (screen: string) => void;
  startFaceCapture: () => void;
}

const InstructionsScreen: React.FC<InstructionsScreenProps> = ({ 
  setCurrentScreen, 
  startFaceCapture 
}) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => setCurrentScreen('personalInfo')}
        style={styles.backButton}
      >
        <ArrowLeft size={24} color="#4B5563" />
      </TouchableOpacity>
      <View style={styles.headerCenter}>
        <Text style={styles.headerTitle}>Face Capture Setup</Text>
        <Text style={styles.headerSubtitle}>Step 2 of 3</Text>
      </View>
      <View style={styles.spacer} />
    </View>

    {/* Progress Bar */}
    <View style={styles.progressBarContainer}>
      <View style={styles.progressBarBackground}>
        <View style={styles.progressBarFill} />
      </View>
    </View>

    <ScrollView 
      style={styles.scrollView} 
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.mainContent}>
        <View style={styles.iconContainer}>
          <Camera size={64} color="white" />
        </View>

        <Text style={styles.title}>Let's capture your face</Text>
        <Text style={styles.subtitle}>This helps us verify your identity securely</Text>

        {/* Instructions */}
        <View style={styles.instructionsCard}>
          <Text style={styles.instructionsTitle}>For best results:</Text>
          <View style={styles.instructionsList}>
            <View style={styles.instructionItem}>
              <View style={styles.bullet} />
              <Text style={styles.instructionText}>Look directly at the camera</Text>
            </View>
            <View style={styles.instructionItem}>
              <View style={styles.bullet} />
              <Text style={styles.instructionText}>Ensure good lighting on your face</Text>
            </View>
            <View style={styles.instructionItem}>
              <View style={styles.bullet} />
              <Text style={styles.instructionText}>Remove glasses if possible</Text>
            </View>
            <View style={styles.instructionItem}>
              <View style={styles.bullet} />
              <Text style={styles.instructionText}>Keep your head still during scan</Text>
            </View>
          </View>
        </View>

        <View style={styles.securityCard}>
          <Shield size={20} color="#2563EB" />
          <Text style={styles.securityText}>
            Your face data is encrypted and never shared
          </Text>
        </View>
      </View>
    </ScrollView>

    <TouchableOpacity
      onPress={startFaceCapture}
      style={styles.startButton}
      activeOpacity={0.8}
    >
      <Text style={styles.startButtonText}>Start Face Capture</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF6FF', // from-blue-50 to-indigo-100 approximation
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 56,
    marginBottom: 32,
  },
  backButton: {
    padding: 8,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  headerCenter: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1F2937', // gray-800
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6B7280', // gray-500
  },
  spacer: {
    width: 24,
  },
  progressBarContainer: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  progressBarBackground: {
    width: '100%',
    height: 8,
    backgroundColor: '#E5E7EB', // gray-200
    borderRadius: 4,
  },
  progressBarFill: {
    width: '66%',
    height: 8,
    backgroundColor: '#059669', // green-600
    borderRadius: 4,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
  },
  mainContent: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 400,
  },
  iconContainer: {
    width: 128,
    height: 128,
    backgroundColor: '#2563EB', // blue-600
    borderRadius: 64,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937', // gray-800
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    color: '#4B5563', // gray-600
    marginBottom: 32,
    textAlign: 'center',
    fontSize: 16,
  },
  instructionsCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    marginBottom: 32,
    maxWidth: 320,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  instructionsTitle: {
    fontWeight: '600',
    color: '#1F2937', // gray-800
    marginBottom: 16,
    fontSize: 16,
  },
  instructionsList: {
    gap: 12,
  },
  instructionItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bullet: {
    width: 8,
    height: 8,
    backgroundColor: '#10B981', // green-500
    borderRadius: 4,
    marginRight: 12,
  },
  instructionText: {
    fontSize: 14,
    color: '#4B5563', // gray-600
    flex: 1,
  },
  securityCard: {
    backgroundColor: '#DBEAFE', // blue-100
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
    maxWidth: 320,
    width: '100%',
  },
  securityText: {
    fontSize: 14,
    color: '#1E40AF', // blue-800
    fontWeight: '500',
    marginLeft: 8,
    flex: 1,
  },
  startButton: {
    backgroundColor: '#2563EB', // blue-600
    marginHorizontal: 24,
    marginBottom: 24,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  startButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
});
export default InstructionsScreen;