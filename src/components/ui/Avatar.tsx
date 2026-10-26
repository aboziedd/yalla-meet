import { Text, View } from 'react-native';

export function Avatar({ name, large = false }: { name: string; large?: boolean }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);

  return (
    <View
      className={`items-center justify-center rounded-full border border-line bg-raised ${large ? 'h-24 w-24' : 'h-9 w-9'}`}
    >
      <Text className={`font-bold text-primary ${large ? 'text-3xl' : 'text-sm'}`}>{initials}</Text>
    </View>
  );
}
