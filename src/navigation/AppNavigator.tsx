import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailScreen } from '../screens/DetailScreen';
import { HomeScreen } from '../screens/HomeScreen';
import type { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: '#F3F0EA' },
        headerTintColor: '#1A1814',
        headerTitleStyle: { fontWeight: '600', fontSize: 17 },
        contentStyle: { backgroundColor: '#F3F0EA' },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Products' }} />
      <Stack.Screen
        name="Details"
        component={DetailScreen}
        options={{ title: 'Details' }}
      />
    </Stack.Navigator>
  );
}
