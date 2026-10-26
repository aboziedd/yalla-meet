import { useNavigation } from '@react-navigation/native';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Chip } from '@/components/ui/Chip';

import { ActivityCard } from '../components/ActivityCard';
import { ACTIVITIES, CATEGORIES } from '../data';

export function ExploreScreen() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-background" style={{ paddingTop: insets.top }}>
      <ScrollView contentContainerClassName="gap-4 pb-28 pt-4">
        <View className="gap-1 px-5">
          <Text className="text-3xl font-bold text-ink">{"Yalla, let's go out 👋"}</Text>
          <Text className="text-base text-muted">People near you who want to do something today</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="gap-2 px-5">
          <Chip label="All" selected />
          {CATEGORIES.map((category) => (
            <Chip key={category} label={category} />
          ))}
        </ScrollView>

        <View className="gap-3 px-5">
          {ACTIVITIES.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              onPress={() => navigation.navigate('ActivityDetails', { activityId: activity.id })}
            />
          ))}
        </View>
      </ScrollView>

      <Pressable
        onPress={() => navigation.navigate('CreateActivity')}
        className="absolute bottom-6 right-5 rounded-full bg-primary px-6 py-4 active:opacity-70"
      >
        <Text className="text-base font-semibold text-on-primary">＋ Create</Text>
      </Pressable>
    </View>
  );
}
