import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { RestaurantsScreens } from "./src/features/restaurants/screens/restaurant.screen";
import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from "styled-components/native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Cabin_400Regular } from "@expo-google-fonts/cabin";
import { Cambay_400Regular } from "@expo-google-fonts/cambay";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/components/utils/safe-area.component";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const HomeScreen = () => {
  return <RestaurantsScreens />;
};

const MapScreen = () => {
  return (
    <SafeArea>
      <Text>Map Screen!</Text>
    </SafeArea>
  );
};

const SettingsScreen = () => {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoadCabin] = useFonts({ Cabin_400Regular });
  const [fontsLoadCambay] = useFonts({ Cambay_400Regular });
  if (!fontsLoadCabin || !fontsLoadCambay) {
    return <AppLoading />;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = "home";
                } else if (route.name === "Map") {
                  iconName = "map";
                } else if (route.name === "Settings") {
                  iconName = "settings";
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
