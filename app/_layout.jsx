import { Text, View } from "react-native";
import { Slot, SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

import GlobalProvider from "../context/GlobalProvider";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Alegreya-Black": require("../assets/fonts/Alegreya-Black.ttf"),
    "Alegreya-Bold": require("../assets/fonts/Alegreya-Bold.ttf"),
    "Alegreya-ExtraBold": require("../assets/fonts/Alegreya-ExtraBold.ttf"),
    "Alegreya-Medium": require("../assets/fonts/Alegreya-Medium.ttf"),
    "Alegreya-Regular": require("../assets/fonts/Alegreya-Regular.ttf"),
    "Alegreya-SemiBold": require("../assets/fonts/Alegreya-SemiBold.ttf")
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="Onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />

        {/* <Stack.Screen name="/search/[query]" options={{ headerShown: false }} /> */}
      </Stack>
    </GlobalProvider>
  );
};

export default RootLayout;
