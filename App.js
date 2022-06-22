import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreens } from "./src/features/restaurants/screens/restaurant.screen";

export default function App() {
  return (
    <>
      <RestaurantsScreens />
      <ExpoStatusBar style="auto" />
    </>
  );
}
