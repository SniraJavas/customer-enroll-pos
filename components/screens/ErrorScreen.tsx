import { AlertCircle, ArrowLeft, Home, RefreshCw } from 'lucide-react-native';
import React from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ErrorScreenProps {
  setCurrentScreen: (screen: string) => void;
  errorMessage?: string;
  errorCode?: string;
  onRetry?: () => void;
  canRetry?: boolean;
  retryCount?: number;
  maxRetries?: number;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({ 
  setCurrentScreen,
  errorMessage = "An unexpected error occurred",
  errorCode,
  onRetry,
  canRetry = true,
  retryCount = 0,
  maxRetries = 3
}) => {
  const pulseAnim = new Animated.Value(1);

  React.useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );
    pulse.start();
    return () => pulse.stop();
  }, []);

  const handleRetry = () => {
    if (onRetry && retryCount < maxRetries) {
      onRetry();
    }
  };

  const getErrorTitle = () => {
    if (errorCode === 'CAMERA_ERROR') return 'Camera Access Error';
    if (errorCode === 'FACE_DETECTION_FAILED') return 'Face Detection Failed';
    if (errorCode === 'NETWORK_ERROR') return 'Connection Error';
    if (errorCode === 'PROCESSING_ERROR') return 'Processing Error';
    return 'Error Occurred';
  };

  const getErrorDescription = () => {
    if (errorCode === 'CAMERA_ERROR') {
      return 'Unable to access camera. Please check permissions and try again.';
    }
    if (errorCode === 'FACE_DETECTION_FAILED') {
      return 'We couldn\'t detect your face clearly. Please ensure good lighting and try again.';
    }
    if (errorCode === 'NETWORK_ERROR') {
      return 'Connection lost. Please check your internet connection and try again.';
    }
    if (errorCode === 'PROCESSING_ERROR') {
      return 'Something went wrong while processing your data. Please try again.';
    }
    return errorMessage;
  };

  const isMaxRetriesReached = retryCount >= maxRetries;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => setCurrentScreen('welcome')} 
          style={styles.backButton}
        >
          <ArrowLeft size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Error</Text>
          <Text style={styles.headerSubtitle}>Something went wrong</Text>
        </View>
        <View style={styles.spacer} />
      </View>

      {/* Error Content */}
      <View style={styles.content}>
        {/* Error Icon */}
        <View style={styles.iconContainer}>
          <View style={styles.iconBackground}>
            <AlertCircle size={64} color="#F87171" />
          </View>
          {/* Pulse animation */}
          <Animated.View 
            style={[
              styles.pulseCircle,
              { transform: [{ scale: pulseAnim }] }
            ]} 
          />
        </View>

        {/* Error Title */}
        <Text style={styles.errorTitle}>
          {getErrorTitle()}
        </Text>

        {/* Error Description */}
        <Text style={styles.errorDescription}>
          {getErrorDescription()}
        </Text>

        {/* Error Code */}
        {errorCode && (
          <Text style={styles.errorCode}>
            Error Code: {errorCode}
          </Text>
        )}

        {/* Retry Information */}
        {retryCount > 0 && (
          <View style={styles.retryInfo}>
            <Text style={styles.retryText}>
              Attempt {retryCount} of {maxRetries}
            </Text>
          </View>
        )}

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          {canRetry && !isMaxRetriesReached && (
            <TouchableOpacity
              onPress={handleRetry}
              style={styles.retryButton}
            >
              <RefreshCw size={20} color="white" />
              <Text style={styles.buttonText}>Try Again</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            onPress={() => setCurrentScreen('welcome')}
            style={styles.homeButton}
          >
            <Home size={20} color="white" />
            <Text style={styles.buttonText}>Start Over</Text>
          </TouchableOpacity>

          {isMaxRetriesReached && (
            <View style={styles.maxRetriesContainer}>
              <Text style={styles.maxRetriesText}>
                Maximum retry attempts reached. Please contact support if the problem persists.
              </Text>
            </View>
          )}
        </View>
      </View>

      {/* Support Information */}
      <View style={styles.supportContainer}>
        <Text style={styles.supportTitle}>Need help?</Text>
        <Text style={styles.supportEmail}>
          Contact support at help@example.com
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827', // gray-900
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 56,
    marginBottom: 20,
  },
  backButton: {
    padding: 8,
    borderRadius: 50,
  },
  headerCenter: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#F87171', // red-400
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#9CA3AF', // gray-400
  },
  spacer: {
    width: 40,
    height: 40,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  iconContainer: {
    position: 'relative',
    marginBottom: 32,
  },
  iconBackground: {
    width: 128,
    height: 128,
    backgroundColor: 'rgba(239, 68, 68, 0.2)', // red-500/20
    borderRadius: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pulseCircle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 128,
    height: 128,
    backgroundColor: 'rgba(239, 68, 68, 0.1)', // red-500/10
    borderRadius: 64,
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
    textAlign: 'center',
  },
  errorDescription: {
    color: '#D1D5DB', // gray-300
    textAlign: 'center',
    marginBottom: 8,
    maxWidth: 300,
    lineHeight: 22,
  },
  errorCode: {
    color: '#6B7280', // gray-500
    fontSize: 14,
    marginBottom: 32,
  },
  retryInfo: {
    backgroundColor: '#1F2937', // gray-800
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 24,
  },
  retryText: {
    color: '#FBBF24', // yellow-400
    fontSize: 14,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
  },
  retryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2563EB', // blue-600
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 16,
  },
  homeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#374151', // gray-700
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    marginLeft: 8,
    fontSize: 16,
  },
  maxRetriesContainer: {
    backgroundColor: 'rgba(127, 29, 29, 0.3)', // red-900/30
    borderWidth: 1,
    borderColor: '#B91C1C', // red-700
    padding: 16,
    borderRadius: 12,
  },
  maxRetriesText: {
    color: '#FCA5A5', // red-300
    fontSize: 14,
    textAlign: 'center',
  },
  supportContainer: {
    backgroundColor: '#1F2937', // gray-800
    padding: 16,
    marginHorizontal: 24,
    marginBottom: 24,
    borderRadius: 12,
    alignItems: 'center',
  },
  supportTitle: {
    color: '#D1D5DB', // gray-300
    fontSize: 14,
    marginBottom: 4,
  },
  supportEmail: {
    color: '#9CA3AF', // gray-400
    fontSize: 12,
  },
});

export default ErrorScreen;