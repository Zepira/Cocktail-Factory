import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Page() {
  return (
    <View>
      <Text>Home page</Text>
      <Link href="/settings">Hello</Link>
    </View>
  );
}
