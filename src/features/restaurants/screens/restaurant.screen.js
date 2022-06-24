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
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreens = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Searchbar placeholder="Search" />
      </View>

      <View style={styles.searchbar}>
        <RestaurantInfoCard />
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
