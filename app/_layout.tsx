// app/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="(enrollment)" 
        options={{ 
          headerShown: false,
          title: 'Customer Enrollment'
        }} 
      />
      <Stack.Screen 
        name="+not-found" 
        options={{ 
          title: 'Oops!',
          presentation: 'modal'
        }} 
      />
    </Stack>
  );
}