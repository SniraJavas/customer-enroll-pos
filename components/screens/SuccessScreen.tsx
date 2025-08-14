import { CheckCircle, User } from "lucide-react-native"; // ← Use RN version
import React from "react";
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface EnrolledCustomer {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  dateOfBirth?: string;
  enrolledAt: string;
  status: string;
  faceDataQuality: number;
}

interface SuccessScreenProps {
  isOnline: boolean;
  enrolledCustomer: EnrolledCustomer | null;
  faceDataQuality: number;
  retryCount: number;
  resetEnrollment: () => void;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({
  isOnline,
  enrolledCustomer,
  faceDataQuality,
  retryCount,
  resetEnrollment,
}) => (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.content}>
      {/* Success Animation */}
      <View style={styles.successContainer}>
        <View style={styles.successCircle}>
          <CheckCircle size={64} color="#fff" />
        </View>
        <View style={styles.userIconContainer}>
          <User size={16} color="#fff" />
        </View>
      </View>

      <Text style={styles.title}>Welcome to FacePay!</Text>
      <Text style={styles.subtitle}>
        {isOnline
          ? "Your account is active and ready to use"
          : "Your enrollment is complete and will sync shortly"}
      </Text>

      {/* Customer Details Card */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>
            {enrolledCustomer?.firstName} {enrolledCustomer?.lastName}
          </Text>
          <Text style={styles.cardSub}>Customer ID: {enrolledCustomer?.id}</Text>
        </View>

        <View style={styles.cardRow}>
          <Text style={styles.label}>Status</Text>
          <View
            style={[
              styles.statusBadge,
              isOnline ? styles.statusActive : styles.statusPending,
            ]}
          >
            <Text
              style={isOnline ? styles.statusActiveText : styles.statusPendingText}
            >
              {isOnline ? "Active" : "Pending Sync"}
            </Text>
          </View>
        </View>

        <View style={styles.cardRow}>
          <Text style={styles.label}>Face Quality</Text>
          <Text style={styles.value}>{faceDataQuality}%</Text>
        </View>

        <View style={styles.cardRow}>
          <Text style={styles.label}>Enrolled</Text>
          <Text style={styles.value}>{new Date().toLocaleString()}</Text>
        </View>

        {retryCount > 0 && (
          <View style={styles.cardRow}>
            <Text style={styles.label}>Attempts</Text>
            <Text style={styles.value}>{retryCount + 1}</Text>
          </View>
        )}
      </View>

      {/* Next Steps */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>What's Next?</Text>
        <View style={styles.infoItem}>
          <View style={styles.bullet} />
          <Text style={styles.infoText}>Visit any FacePay merchant</Text>
        </View>
        <View style={styles.infoItem}>
          <View style={styles.bullet} />
          <Text style={styles.infoText}>Look at the camera to pay</Text>
        </View>
        <View style={styles.infoItem}>
          <View style={styles.bullet} />
          <Text style={styles.infoText}>Enjoy contactless payments</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <TouchableOpacity style={styles.primaryButton} onPress={resetEnrollment}>
        <Text style={styles.primaryButtonText}>Enroll Another Customer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() =>
          Alert.alert(
            "FacePay App",
            "In a real app, this would open the FacePay customer app or provide next steps."
          )
        }
      >
        <Text style={styles.secondaryButtonText}>Open FacePay App</Text>
      </TouchableOpacity>

      {/* Support Link */}
      <Text style={styles.supportText}>
        Need help? <Text style={styles.supportLink}>Contact Support</Text>
      </Text>
    </View>
  </ScrollView>
);



const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ECFDF5",
    padding: 24,
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  successContainer: {
    marginBottom: 32,
    position: "relative",
  },
  successCircle: {
    width: 128,
    height: 128,
    backgroundColor: "#22C55E",
    borderRadius: 64,
    alignItems: "center",
    justifyContent: "center",
  },
  userIconContainer: {
    position: "absolute",
    top: -8,
    right: -8,
    width: 32,
    height: 32,
    backgroundColor: "#3B82F6",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#4B5563",
    marginBottom: 32,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    width: "100%",
    maxWidth: 350,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 32,
  },
  cardHeader: {
    alignItems: "center",
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#1F2937",
  },
  cardSub: {
    fontSize: 14,
    color: "#6B7280",
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  label: {
    color: "#6B7280",
  },
  value: {
    color: "#1F2937",
    fontWeight: "600",
  },
  statusBadge: {
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  statusActive: {
    backgroundColor: "#D1FAE5",
  },
  statusPending: {
    backgroundColor: "#FEF9C3",
  },
  statusActiveText: {
    color: "#15803D",
    fontSize: 12,
    fontWeight: "500",
  },
  statusPendingText: {
    color: "#854D0E",
    fontSize: 12,
    fontWeight: "500",
  },
  infoCard: {
    backgroundColor: "#EFF6FF",
    borderRadius: 16,
    padding: 24,
    width: "100%",
    maxWidth: 350,
    marginBottom: 32,
  },
  infoTitle: {
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 12,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  bullet: {
    width: 8,
    height: 8,
    backgroundColor: "#3B82F6",
    borderRadius: 4,
    marginRight: 12,
  },
  infoText: {
    fontSize: 14,
    color: "#374151",
  },
  primaryButton: {
    backgroundColor: "#16A34A",
    paddingVertical: 16,
    borderRadius: 16,
    width: "100%",
    maxWidth: 350,
    alignItems: "center",
    marginBottom: 12,
  },
  primaryButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: "#16A34A",
    paddingVertical: 16,
    borderRadius: 16,
    width: "100%",
    maxWidth: 350,
    alignItems: "center",
    marginBottom: 24,
  },
  secondaryButtonText: {
    color: "#16A34A",
    fontWeight: "600",
    fontSize: 16,
  },
  supportText: {
    textAlign: "center",
    fontSize: 14,
    color: "#6B7280",
  },
  supportLink: {
    color: "#16A34A",
    textDecorationLine: "underline",
  },
});

export default SuccessScreen;