import Ionicons from '@expo/vector-icons/Ionicons';
import { ScrollView, Text, View } from 'react-native';

import type { RootScreenProps } from '@/app/navigation/types';
import { AppButton } from '@/components/ui/AppButton';
import { Avatar } from '@/components/ui/Avatar';
import { Card } from '@/components/ui/Card';
import { colors } from '@/theme/tokens';

import { ACTIVITIES } from '../data';
import type { IconName } from '../types';

function InfoRow({ icon, text }: { icon: IconName; text: string }) {
  return (
    <View className="flex-row items-center gap-3">
      <Ionicons name={icon} size={20} color={colors.muted} />
      <Text className="text-base text-ink">{text}</Text>
    </View>
  );
}

export function ActivityDetailsScreen({ route, navigation }: RootScreenProps<'ActivityDetails'>) {
  const activity = ACTIVITIES.find((a) => a.id === route.params.activityId) ?? ACTIVITIES[0];

  return (
    <View className="flex-1 bg-background">
      <ScrollView contentContainerClassName="gap-4 p-5">
        <View className="items-center gap-3 py-4">
          <View className="h-20 w-20 items-center justify-center rounded-3xl bg-raised">
            <Ionicons name={activity.icon} size={38} color={colors.primary} />
          </View>
          <Text className="text-center text-2xl font-bold text-ink">{activity.title}</Text>
        </View>

        <Card className="gap-3">
          <InfoRow icon="time-outline" text={activity.time} />
          <InfoRow icon="location-outline" text={activity.venue} />
          <InfoRow icon="navigate-outline" text={`${activity.distance} away`} />
        </Card>

        <Card className="gap-2">
          <Text className="text-sm font-semibold uppercase text-muted">About</Text>
          <Text className="text-base leading-6 text-ink">{activity.description}</Text>
        </Card>

        <Card className="gap-3">
          <Text className="text-sm font-semibold uppercase text-muted">Going · {activity.spots}</Text>
          {activity.members.map((member) => (
            <View key={member} className="flex-row items-center gap-3">
              <Avatar name={member} />
              <Text className="text-base text-ink">{member}</Text>
              {member === activity.host ? <Text className="text-xs text-primary">Host</Text> : null}
            </View>
          ))}
        </Card>
      </ScrollView>

      <View className="gap-2 border-t border-line bg-surface p-5 pb-8">
        <AppButton label="Request to join" />
        <AppButton
          label="Open group chat"
          variant="secondary"
          onPress={() => navigation.navigate('ChatRoom', { chatId: 'c1' })}
        />
      </View>
    </View>
  );
}
