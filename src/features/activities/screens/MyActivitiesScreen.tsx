import { useNavigation } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';

import { Chip } from '@/components/ui/Chip';

import { ActivityCard } from '../components/ActivityCard';
import { ACTIVITIES } from '../data';

export function MyActivitiesScreen() {
  const navigation = useNavigation();
  const myActivities = ACTIVITIES.filter((a) => a.members.includes('Adam'));

  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="gap-3 p-5">
      <View className="flex-row gap-2 pb-2">
        <Chip label="Joined" selected />
        <Chip label="Hosting" />
      </View>

      {myActivities.map((activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          onPress={() => navigation.navigate('ActivityDetails', { activityId: activity.id })}
        />
      ))}
    </ScrollView>
  );
}
