import { ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppButton } from '@/components/ui/AppButton';
import { Avatar } from '@/components/ui/Avatar';
import { Card } from '@/components/ui/Card';
import { Chip } from '@/components/ui/Chip';

const INTERESTS = ['Padel', 'Coffee', 'Gaming', 'Study groups'];

const STATS = [
  { value: '4.8', label: 'Rating' },
  { value: '12', label: 'Meetups' },
  { value: '0', label: 'No-shows' },
];

export function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="gap-4 p-5">
      <View className="items-center gap-2 py-4">
        <Avatar name="Adam Abozied" large />
        <Text className="text-2xl font-bold text-ink">Adam Abozied</Text>
        <Text className="text-sm text-muted">British University in Egypt</Text>
        <Text className="rounded-full bg-raised px-3 py-1 text-xs font-semibold text-primary">Verified</Text>
      </View>

      <Card className="flex-row">
        {STATS.map((stat) => (
          <View key={stat.label} className="flex-1 items-center gap-1">
            <Text className="text-2xl font-bold text-ink">{stat.value}</Text>
            <Text className="text-xs text-muted">{stat.label}</Text>
          </View>
        ))}
      </Card>

      <Card className="gap-2">
        <Text className="text-sm font-semibold uppercase text-muted">About me</Text>
        <Text className="text-base leading-6 text-ink">
          Cyber security student. Always up for padel, coffee or a study session.
        </Text>
      </Card>

      <Card className="gap-3">
        <Text className="text-sm font-semibold uppercase text-muted">Interests</Text>
        <View className="flex-row flex-wrap gap-2">
          {INTERESTS.map((interest) => (
            <Chip key={interest} label={interest} />
          ))}
        </View>
      </Card>

      <AppButton label="Edit profile" variant="secondary" />
      <AppButton
        label="Log out"
        variant="secondary"
        onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Login' }] })}
      />
    </ScrollView>
  );
}
