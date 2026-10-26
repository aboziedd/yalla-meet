import { Pressable, Text } from 'react-native';

type Props = {
  label: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary';
};

export function AppButton({ label, onPress, variant = 'primary' }: Props) {
  const primary = variant === 'primary';

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      className={`items-center rounded-2xl px-5 py-4 active:opacity-70 ${
        primary ? 'bg-primary' : 'border border-line bg-raised'
      }`}
    >
      <Text className={`text-base font-semibold ${primary ? 'text-on-primary' : 'text-ink'}`}>{label}</Text>
    </Pressable>
  );
}
