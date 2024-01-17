import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { NativeNavigation } from 'app/navigation';
import { Provider } from 'app/provider';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';

export default function App() {
  const scheme = useColorScheme();

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider>
      <ThemeProvider value={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <NativeNavigation />
      </ThemeProvider>
      <StatusBar style="auto" />
    </Provider>
  );
}
