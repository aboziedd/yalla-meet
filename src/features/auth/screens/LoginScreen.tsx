import { Pressable, ScrollView, Text, View } from 'react-native';

import type { RootScreenProps } from '@/app/navigation/types';
import { AppButton } from '@/components/ui/AppButton';
import { Input } from '@/components/ui/Input';

export function LoginScreen({ navigation }: RootScreenProps<'Login'>) {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="flex-grow justify-center gap-6 p-6">
      <View className="gap-2">
        <Text className="text-4xl font-bold text-primary">Yalla Meet</Text>
        <Text className="text-base text-muted">Log in to find people to go out with.</Text>
      </View>

      <View className="gap-4">
        <Input label="Email" placeholder="you@bue.edu.eg" keyboardType="email-address" autoCapitalize="none" />
        <Input label="Password" placeholder="Your password" secureTextEntry />
      </View>

      <AppButton label="Log in" onPress={() => navigation.replace('Main', { screen: 'Explore' })} />

      <Pressable onPress={() => navigation.navigate('SignUp')} className="items-center py-2">
        <Text className="text-sm text-muted">
          Don&apos;t have an account? <Text className="font-semibold text-primary">Sign up</Text>
        </Text>
      </Pressable>
    </ScrollView>
  );
}
