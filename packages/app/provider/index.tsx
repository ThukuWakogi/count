import { CustomToast, TamaguiProvider, TamaguiProviderProps, ToastProvider, config } from '@my/ui';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastViewport } from './ToastViewport';
import { NavigationProvider } from './navigation';

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const scheme = useColorScheme();
  return (
    <>
      <SafeAreaProvider>
        <NavigationProvider>
          <TamaguiProvider
            config={config}
            disableInjectCSS
            defaultTheme={scheme === 'dark' ? 'dark' : 'light'}
            {...rest}
          >
            <ToastProvider swipeDirection="horizontal" duration={6000} native={['mobile']}>
              {children}
              <CustomToast />
              <ToastViewport />
            </ToastProvider>
          </TamaguiProvider>
        </NavigationProvider>
      </SafeAreaProvider>
    </>
  );
}
