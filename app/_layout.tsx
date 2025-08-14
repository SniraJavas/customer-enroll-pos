import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="personal-info" />
      <Stack.Screen name="instructions" />
      <Stack.Screen name="face-capture" />
      <Stack.Screen name="retry-capture" />
      <Stack.Screen name="review" />
      <Stack.Screen name="success" />
      <Stack.Screen name="+not-found" 
        options={{ 
          title: 'Oops!',
          presentation: 'modal'
        }} 
      />
    </Stack>
  );
}
