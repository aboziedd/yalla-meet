import { Text, View } from 'react-native';

export function Chip({ label, selected = false }: { label: string; selected?: boolean }) {
  return (
    <View className={`rounded-full border px-4 py-2 ${selected ? 'border-primary bg-primary' : 'border-line bg-surface'}`}>
      <Text className={`text-sm font-medium ${selected ? 'text-on-primary' : 'text-ink'}`}>{label}</Text>
    </View>
  );
}
