import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreens } from "./src/features/restaurants/screens/restaurant.screen";
import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from "styled-components/native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Cabin_400Regular } from "@expo-google-fonts/cabin";
import { ShipporiMincho_400Regular } from "@expo-google-fonts/shippori-mincho";

export default function App() {
  const [fontsLoadCabin] = useFonts({ Cabin_400Regular });
  const [fontsLoadShipporiMincho] = useFonts({ ShipporiMincho_400Regular });
  if (!fontsLoadCabin || !fontsLoadShipporiMincho) {
    return <AppLoading />;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreens />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
