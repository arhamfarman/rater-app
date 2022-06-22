import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Searchbar } from "react-native-paper";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import { RestaurantInfo } from "../components/restaurant-info.component";

export const RestaurantsScreens = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Searchbar placeholder="Search" />
      </View>

      <View style={styles.searchbar}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: StatusBar.currentHeight,
  },
  searchbar: { flex: 1, backgroundColor: "blue", padding: 16 },
});
