import { createStackNavigator } from '@react-navigation/stack';
import { ArrowLeft } from '@tamagui/lucide-icons';
import { HomeScreen } from 'app/features/home/screen';
import { UserDetailScreen } from 'app/features/user/detail-screen';

const Stack = createStackNavigator<{
  home: undefined;
  'user-detail': {
    id: string;
  };
}>();

export function NativeNavigation() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#FFFFFF',
          headerBackImage: ({ tintColor, ...props }) => <ArrowLeft color={tintColor} {...props} />,
        }}
      >
        <Stack.Screen name="home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="user-detail" component={UserDetailScreen} options={{ title: 'User' }} />
      </Stack.Navigator>
    </>
  );
}
