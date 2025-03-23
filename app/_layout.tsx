import { Redirect, SplashScreen, Stack, useRouter } from 'expo-router'
import '../global.css'
import { useFonts } from "expo-font"
import { useEffect } from 'react';
import { UserContextProvider } from '../hooks/UserContextProvider';


SplashScreen.preventAutoHideAsync();

const RootLayout = () => {

  const [fontsLoaded, error] = useFonts({
    "Inter-Bold": require("../assets/fonts/Inter_18pt-Bold.ttf"),
    "Inter-ExtraBold": require("../assets/fonts/Inter_18pt-ExtraBold.ttf")
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) return null;

  return (
    <UserContextProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </UserContextProvider>
  )
}

export default RootLayout;