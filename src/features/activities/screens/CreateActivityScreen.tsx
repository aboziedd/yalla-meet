import { ScrollView, Text, View } from 'react-native';

import type { RootScreenProps } from '@/app/navigation/types';
import { AppButton } from '@/components/ui/AppButton';
import { Chip } from '@/components/ui/Chip';
import { Input } from '@/components/ui/Input';

import { CATEGORIES } from '../data';

export function CreateActivityScreen({ navigation }: RootScreenProps<'CreateActivity'>) {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="gap-5 p-5 pb-10">
      <Input label="Title" placeholder="e.g. Coffee after lectures" />

      <View className="gap-2">
        <Text className="text-sm font-medium text-muted">Category</Text>
        <View className="flex-row flex-wrap gap-2">
          {CATEGORIES.map((category, index) => (
            <Chip key={category} label={category} selected={index === 0} />
          ))}
        </View>
      </View>

      <Input label="Public venue" placeholder="Search a café, gym, library…" />
      <Input label="Date & time" placeholder="e.g. Today, 6:00 PM" />
      <Input label="Max people" placeholder="4" keyboardType="number-pad" />

      <View className="gap-2">
        <Text className="text-sm font-medium text-muted">Who can join?</Text>
        <View className="flex-row gap-2">
          <Chip label="Anyone" selected />
          <Chip label="Women only" />
          <Chip label="Men only" />
        </View>
      </View>

      <Input label="Description" placeholder="Anything people should know?" multiline />

      <AppButton label="Create activity" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
}
