import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#ffd28d" }}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232428",
    color: "#ffd28d",
    alignItems: "center",
    justifyContent: "center",
  },
});

// dark #26252B
// gold #C1935C
//green #8C8464
// #grey #847C6C
// l;oghter gold #ffd28d
