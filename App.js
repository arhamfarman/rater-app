import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";

console.log(StatusBar.currentHeight);

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            padding: 16,
            backgroundColor: "green",
            marginTop: StatusBar.currentHeight,
          }}
        >
          <Text>search</Text>
        </View>

        <View style={{ flex: 1, backgroundColor: "blue", padding: 16 }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}
