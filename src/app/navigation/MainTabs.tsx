import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ExploreScreen } from '@/features/activities/screens/ExploreScreen';
import { MyActivitiesScreen } from '@/features/activities/screens/MyActivitiesScreen';
import { ChatsScreen } from '@/features/chat/screens/ChatsScreen';
import { ProfileScreen } from '@/features/profile/screens/ProfileScreen';
import { colors } from '@/theme/tokens';
import type { MainTabParamList } from './types';

const ICONS: Record<keyof MainTabParamList, keyof typeof Ionicons.glyphMap> = {
  Explore: 'compass-outline',
  MyActivities: 'calendar-outline',
  Chats: 'chatbubbles-outline',
  Profile: 'person-circle-outline',
};

const Tab = createBottomTabNavigator<MainTabParamList>();

export function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.ink,
        headerShadowVisible: false,
        tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.line },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarIcon: ({ color, size }) => <Ionicons name={ICONS[route.name]} color={color} size={size} />,
      })}
    >
      <Tab.Screen name="Explore" component={ExploreScreen} options={{ headerShown: false }} />
      <Tab.Screen name="MyActivities" component={MyActivitiesScreen} options={{ title: 'My Activities' }} />
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
