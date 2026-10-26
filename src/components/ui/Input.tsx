import { Text, TextInput, View, type TextInputProps } from 'react-native';

import { colors } from '@/theme/tokens';

export function Input({ label, ...inputProps }: TextInputProps & { label: string }) {
  return (
    <View className="gap-2">
      <Text className="text-sm font-medium text-muted">{label}</Text>
      <TextInput
        placeholderTextColor={colors.muted}
        className="rounded-2xl border border-line bg-surface px-4 py-3 text-base text-ink"
        {...inputProps}
      />
    </View>
  );
}
