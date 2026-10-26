import { DarkTheme, NavigationContainer, type Theme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ActivityDetailsScreen } from '@/features/activities/screens/ActivityDetailsScreen';
import { CreateActivityScreen } from '@/features/activities/screens/CreateActivityScreen';
import { LoginScreen } from '@/features/auth/screens/LoginScreen';
import { SignUpScreen } from '@/features/auth/screens/SignUpScreen';
import { ChatRoomScreen } from '@/features/chat/screens/ChatRoomScreen';
import { colors } from '@/theme/tokens';

import { MainTabs } from './MainTabs';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const theme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.background,
    card: colors.background,
    text: colors.ink,
    border: colors.line,
    primary: colors.primary,
  },
};

export function RootNavigator() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.ink,
          headerShadowVisible: false,
          headerBackButtonDisplayMode: 'minimal',
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: '' }} />
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="ActivityDetails" component={ActivityDetailsScreen} options={{ title: '' }} />
        <Stack.Screen
          name="CreateActivity"
          component={CreateActivityScreen}
          options={{ title: 'New activity', presentation: 'modal' }}
        />
        <Stack.Screen name="ChatRoom" component={ChatRoomScreen} options={{ title: 'Group chat' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
