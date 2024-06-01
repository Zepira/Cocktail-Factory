import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function BackButton() {
  return (
    <TouchableOpacity onPress={() => router.back()}>
      <Ionicons name="chevron-back-outline" size={20} color="#ffd28d" />
    </TouchableOpacity>
  );
}
