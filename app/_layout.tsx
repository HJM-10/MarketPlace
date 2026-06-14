import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="WEB" />
        <Stack.Screen name="Moblie" />
        <Stack.Screen name="Design" />
        <Stack.Screen name="Repair" />
      </Stack>
    </SafeAreaProvider>
  );
}
