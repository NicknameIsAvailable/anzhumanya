import '../tamagui-web.css'
import { useEffect } from 'react'
import { useFonts } from 'expo-font'
import { useColorScheme } from 'react-native'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { SplashScreen, Stack } from 'expo-router'
import { PortalProvider, TamaguiProvider, Theme } from 'tamagui'
import { config } from '../tamagui.config'
import { ToastProvider } from '@tamagui/toast'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '/',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  useEffect(() => {
    if (interLoaded || interError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync()
    }
  }, [interLoaded, interError])

  if (!interLoaded && !interError) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  return (
    <TamaguiProvider config={config} defaultTheme={colorScheme as any}>
      <ThemeProvider value={DefaultTheme}>
        <Theme name="green">
          <ToastProvider swipeDirection="horizontal" duration={3000}>
            <PortalProvider shouldAddRootHost>
                <Stack>
                  <Stack.Screen
                    name="(tabs)"
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="index"
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="(auth)"
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="(user-info)"
                    options={{ headerShown: false }}
                  />
                </Stack>
            </PortalProvider>
          </ToastProvider>
        </Theme>
      </ThemeProvider>
    </TamaguiProvider>
  )
}
