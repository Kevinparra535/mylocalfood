import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";

import "react-native-gesture-handler";

// Estilos
import Colors from "./src/assets/styles/Colors";

// Navigations
import RootNavigation from "./src/navigations/RootNavigation";

export default function App() {
  // Estados
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Hooks
  const scheme = useColorScheme();

  // Funciones
  const DefaultTheme = {
    dark: false,
    colors: {
      primary: Colors.brand.primary,
      card: Colors.claro,
      text: Colors.oscuro,
      border: Colors.brand.secondary,
      notification: Colors.alerts.error,
      background: Colors.bg.claro,
    },
  };

  // UseEffects
  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          "poppins-black": require("./src/assets/fonts/Poppins/Poppins-Black.ttf"),
          "poppins-blackitalic": require("./src/assets/fonts/Poppins/Poppins-BlackItalic.ttf"),
          "poppins-bold": require("./src/assets/fonts/Poppins/Poppins-Bold.ttf"),
          "poppins-bolditalic": require("./src/assets/fonts/Poppins/Poppins-BoldItalic.ttf"),
          "poppins-extrabold": require("./src/assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
          "poppins-extrabolditalic": require("./src/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf"),
          "poppins-extralight": require("./src/assets/fonts/Poppins/Poppins-ExtraLight.ttf"),
          "poppins-extralightitalic": require("./src/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf"),
          "poppins-italic": require("./src/assets/fonts/Poppins/Poppins-Italic.ttf"),
          "poppins-light": require("./src/assets/fonts/Poppins/Poppins-Light.ttf"),
          "poppins-lightitalic": require("./src/assets/fonts/Poppins/Poppins-LightItalic.ttf"),
          "poppins-medium": require("./src/assets/fonts/Poppins/Poppins-Medium.ttf"),
          "poppins-mediumitalic": require("./src/assets/fonts/Poppins/Poppins-MediumItalic.ttf"),
          poppins: require("./src/assets/fonts/Poppins/Poppins-Regular.ttf"),
          "poppins-semibold": require("./src/assets/fonts/Poppins/Poppins-SemiBold.ttf"),
          "poppins-semibolditalic": require("./src/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf"),
          "poppins-thin": require("./src/assets/fonts/Poppins/Poppins-Thin.ttf"),
          "poppins-thinitalic": require("./src/assets/fonts/Poppins/Poppins-ThinItalic.ttf"),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    }
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <RootNavigation />
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}