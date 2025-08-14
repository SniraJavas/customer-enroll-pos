// app/+not-found.tsx
import { Link, Stack } from 'expo-router';
import { AlertCircle } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <View style={styles.iconWrapper}>
          <AlertCircle size={64} color="#F97316" />
        </View>
        <Text style={styles.title}>404</Text>
        <Text style={styles.subtitle}>Oops! The page you’re looking for doesn’t exist.</Text>

        <Link href="/(enrollment)/welcome" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Go to Enrollment Screen</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEF3C7', // soft yellow-orange for friendly feel
  },
  iconWrapper: {
    marginBottom: 24,
    backgroundColor: '#FFEDD5',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 24,
    maxWidth: 280,
  },
  button: {
    backgroundColor: '#16A34A',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
