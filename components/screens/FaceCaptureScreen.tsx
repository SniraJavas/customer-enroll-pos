import { ArrowLeft, Camera, User } from 'lucide-react-native';
import React from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface CustomerData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  acceptTerms: boolean;
  marketing: boolean;
}

interface FaceCaptureScreenProps {
  setCurrentScreen: (screen: string) => void;
  isScanning: boolean;
  scanProgress: number;
  customerData: CustomerData;
  retryCount: number;
}

const FaceCaptureScreen: React.FC<FaceCaptureScreenProps> = ({ 
  setCurrentScreen, 
  isScanning, 
  scanProgress, 
  customerData, 
  retryCount 
}) => {
  const scanlineAnim = new Animated.Value(0);

  React.useEffect(() => {
    if (isScanning) {
      const scanAnimation = Animated.loop(
        Animated.timing(scanlineAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: false,
        })
      );
      scanAnimation.start();
      return () => scanAnimation.stop();
    }
  }, [isScanning]);

  const scanlineTop = scanlineAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [24, 350],
  });

  const getStatusText = () => {
    if (scanProgress < 20) return 'Position your face in the frame';
    if (scanProgress < 50) return 'Hold still, scanning in progress...';
    if (scanProgress < 80) return 'Almost complete, don\'t move';
    return 'Processing face data...';
  };

  const getQualityStatus = () => {
    if (scanProgress < 30) return { text: 'Position Face', color: '#EAB308', bgColor: '#FEF3C7' };
    if (scanProgress < 70) return { text: 'Scanning...', color: '#3B82F6', bgColor: '#DBEAFE' };
    return { text: 'Almost Done', color: '#059669', bgColor: '#D1FAE5' };
  };

  const qualityStatus = getQualityStatus();
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference * (1 - scanProgress / 100);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => setCurrentScreen('instructions')} 
          style={styles.backButton}
        >
          <ArrowLeft size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Capturing Face Data</Text>
          <Text style={styles.headerSubtitle}>Hold still and look at camera</Text>
        </View>
        <Camera size={24} color="white" />
      </View>

      {/* Camera View */}
      <View style={styles.cameraContainer}>
        <View style={styles.cameraFrame}>
          {/* Main frame */}
          <View style={styles.mainFrame} />
          
          {/* Corner markers */}
          <View style={[styles.cornerMarker, styles.topLeft]} />
          <View style={[styles.cornerMarker, styles.topRight]} />
          <View style={[styles.cornerMarker, styles.bottomLeft]} />
          <View style={[styles.cornerMarker, styles.bottomRight]} />
          
          {/* Scanning line */}
          {isScanning && (
            <Animated.View 
              style={[
                styles.scanningLine,
                { top: scanlineTop }
              ]}
            />
          )}

          {/* Face indicator */}
          <View style={styles.faceIndicatorContainer}>
            <View style={styles.faceIndicator}>
              <User size={80} color="white" />
            </View>
          </View>

          {/* Quality indicators */}
          <View style={styles.qualityIndicator}>
            <View style={[
              styles.qualityBadge, 
              { backgroundColor: qualityStatus.bgColor }
            ]}>
              <Text style={[
                styles.qualityText,
                { color: qualityStatus.color }
              ]}>
                {qualityStatus.text}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Instructions and Progress */}
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionText}>
          {getStatusText()}
        </Text>
        <Text style={styles.qualityText}>
          Quality: {Math.floor(scanProgress)}%
        </Text>
        
        {/* Progress Circle */}
        <View style={styles.progressContainer}>
          <Svg width={96} height={96} viewBox="0 0 100 100" style={styles.progressSvg}>
            <Circle
              cx="50"
              cy="50"
              r="40"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="8"
              fill="none"
            />
            <Circle
              cx="50"
              cy="50"
              r="40"
              stroke="#10B981"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              transform="rotate(-90 50 50)"
            />
          </Svg>
          <View style={styles.progressTextContainer}>
            <Text style={styles.progressPercentage}>{Math.floor(scanProgress)}%</Text>
          </View>
        </View>
      </View>

      {/* Customer Info */}
      <View style={styles.customerInfo}>
        <Text style={styles.enrollingText}>Enrolling</Text>
        <Text style={styles.customerName}>
          {customerData.firstName} {customerData.lastName}
        </Text>
        {retryCount > 0 && (
          <Text style={styles.retryText}>Retry attempt {retryCount}</Text>
        )}
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
    color: 'white',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#9CA3AF', // gray-400
  },
  cameraContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  cameraFrame: {
    width: 320,
    height: 384,
    position: 'relative',
  },
  mainFrame: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 24,
    opacity: 0.6,
  },
  cornerMarker: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderColor: '#10B981', // green-400
    borderWidth: 4,
  },
  topLeft: {
    top: 24,
    left: 24,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderTopLeftRadius: 8,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  topRight: {
    top: 24,
    right: 24,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderTopRightRadius: 8,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  bottomLeft: {
    bottom: 24,
    left: 24,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderBottomLeftRadius: 8,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  bottomRight: {
    bottom: 24,
    right: 24,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderBottomRightRadius: 8,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  scanningLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: '#10B981', // green-400
    opacity: 0.8,
  },
  faceIndicatorContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  faceIndicator: {
    width: 160,
    height: 160,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.6,
  },
  qualityIndicator: {
    position: 'absolute',
    top: 16,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  qualityBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  instructionsContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  instructionText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
  },
  qualityText: {
    color: '#D1D5DB', // gray-300
    marginBottom: 24,
    fontSize: 12,
    fontWeight: '500',
  },
  progressContainer: {
    position: 'relative',
    width: 96,
    height: 96,
  },
  progressSvg: {
    transform: [{ rotate: '-90deg' }],
  },
  progressTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressPercentage: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  customerInfo: {
    backgroundColor: '#1F2937', // gray-800
    padding: 16,
    marginHorizontal: 24,
    marginBottom: 24,
    borderRadius: 12,
    alignItems: 'center',
  },
  enrollingText: {
    color: '#D1D5DB', // gray-300
    fontSize: 14,
  },
  customerName: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  retryText: {
    color: '#FBBF24', // yellow-400
    fontSize: 12,
    marginTop: 4,
  },
});

export default FaceCaptureScreen;