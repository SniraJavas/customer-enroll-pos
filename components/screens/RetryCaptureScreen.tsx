import { AlertCircle } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface RetryCaptureScreenProps {
  faceDataQuality: number;
  retryFaceCapture: () => void;
  setCurrentScreen: (screen: string) => void;
}

const RetryCaptureScreen: React.FC<RetryCaptureScreenProps> = ({ 
  faceDataQuality, 
  retryFaceCapture, 
  setCurrentScreen 
}) => (
  <View style={styles.container}>
    <View style={styles.content}>
      <View style={styles.iconWrapper}>
        <AlertCircle size={48} color="#fff" />
      </View>

      <Text style={styles.title}>Let's try that again</Text>
      <Text style={styles.subtitle}>
        Face quality was {faceDataQuality}%. We need at least 85% for security.
      </Text>

      <View style={styles.tipsCard}>
        <Text style={styles.tipsTitle}>Tips for better capture:</Text>
        <View style={styles.tipsList}>
          {['Move to better lighting', 'Clean camera lens', 'Look directly at camera', 'Keep head perfectly still'].map((tip, index) => (
            <View style={styles.tipRow} key={index}>
              <View style={styles.tipDot} />
              <Text style={styles.tipText}>{tip}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity onPress={retryFaceCapture} style={styles.primaryButton}>
          <Text style={styles.primaryText}>Try Again</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen('personalInfo')} style={styles.secondaryButton}>
          <Text style={styles.secondaryText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FFEDD5', // light gradient base simulated
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#F97316',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 32,
    textAlign: 'center',
  },
  tipsCard: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 32,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  tipsList: {
    flexDirection: 'column',
    gap: 12, // spacing between tips
  },
  tipRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  tipDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#F97316',
    marginRight: 12,
  },
  tipText: {
    fontSize: 14,
    color: '#4B5563',
  },
  actions: {
    width: '100%',
    gap: 12,
  },
  primaryButton: {
    width: '100%',
    backgroundColor: '#EA580C',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  primaryText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  secondaryButton: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#D1D5DB',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  secondaryText: {
    color: '#374151',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default RetryCaptureScreen;
