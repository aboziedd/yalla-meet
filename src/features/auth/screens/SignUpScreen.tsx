import { Pressable, ScrollView, Text, View } from 'react-native';
import type { RootScreenProps } from '@/app/navigation/types';
import { AppButton } from '@/components/ui/AppButton';
import { Input } from '@/components/ui/Input';

export function SignUpScreen({ navigation }: RootScreenProps<'SignUp'>) {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="flex-grow justify-center gap-6 p-6">
      <View className="gap-2">
        <Text className="text-3xl font-bold text-ink">Create account</Text>
        <Text className="text-base text-muted">Join Yalla Meet and start meeting people.</Text>
      </View>

      <View className="gap-4">
        <Input label="Full name" placeholder="Your name" />
        <Input label="Email" placeholder="you@bue.edu.eg" keyboardType="email-address" autoCapitalize="none" />
        <Input label="Phone number" placeholder="01xxxxxxxxx" keyboardType="phone-pad" />
        <Input label="Password" placeholder="At least 8 characters" secureTextEntry />
        <Input label="Confirm password" placeholder="Repeat your password" secureTextEntry />
      </View>

      <AppButton label="Create account" onPress={() => navigation.replace('Main', { screen: 'Explore' })} />

      <Pressable onPress={() => navigation.goBack()} className="items-center py-2">
        <Text className="text-sm text-muted">
          Already have an account? <Text className="font-semibold text-primary">Log in</Text>
        </Text>
      </Pressable>
    </ScrollView>
  );
}
