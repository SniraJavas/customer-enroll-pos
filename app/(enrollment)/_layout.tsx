 // app/(enrollment)/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';

export default function EnrollmentLayout() {
  return (
    <Stack 
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        gestureEnabled: true,
        gestureDirection: 'horizontal'
      }}
    >
      <Stack.Screen 
        name="welcome" 
        options={{ 
          title: 'Welcome',
          gestureEnabled: false // First screen shouldn't allow back gesture
        }} 
      />
      <Stack.Screen 
        name="personal-info" 
        options={{ title: 'Personal Information' }} 
      />
      <Stack.Screen 
        name="instructions" 
        options={{ title: 'Face Capture Instructions' }} 
      />
      <Stack.Screen 
        name="face-capture" 
        options={{ 
          title: 'Face Capture',
          gestureEnabled: false // Prevent accidental navigation during capture
        }} 
      />
      <Stack.Screen 
        name="retry-capture" 
        options={{ title: 'Retry Face Capture' }} 
      />
      <Stack.Screen 
        name="review" 
        options={{ title: 'Review & Confirm' }} 
      />
      <Stack.Screen 
        name="success" 
        options={{ 
          title: 'Enrollment Complete',
          gestureEnabled: false // Final screen shouldn't allow back
        }} 
      />
    </Stack>
  );
}