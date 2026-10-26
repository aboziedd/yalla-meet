import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, Text, View } from 'react-native';

import { colors } from '@/theme/tokens';

import type { Activity } from '../types';

type Props = {
  activity: Activity;
  onPress: () => void;
};

export function ActivityCard({ activity, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row gap-4 rounded-2xl border border-line bg-surface p-4 active:opacity-70"
    >
      <View className="h-14 w-14 items-center justify-center rounded-2xl bg-raised">
        <Ionicons name={activity.icon} size={26} color={colors.primary} />
      </View>

      <View className="flex-1 gap-1">
        <Text className="text-base font-semibold text-ink">{activity.title}</Text>
        <Text className="text-sm text-muted">
          {activity.venue} · {activity.distance}
        </Text>
        <View className="mt-1 flex-row justify-between">
          <Text className="text-sm text-muted">{activity.time}</Text>
          <Text className="text-sm font-semibold text-primary">{activity.spots} spots</Text>
        </View>
      </View>
    </Pressable>
  );
}
