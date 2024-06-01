import { Stack } from "expo-router/stack";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaWrapper } from "../components/safeAreaWrapper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <View style={{ height: "100%", backgroundColor: "#232428" }}>
      <SafeAreaWrapper>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaWrapper>
      <StatusBar style="light" />
    </View>
  );
}
