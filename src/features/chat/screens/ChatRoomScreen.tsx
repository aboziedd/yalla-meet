import Ionicons from '@expo/vector-icons/Ionicons';
import { ScrollView, Text, TextInput, View } from 'react-native';

import { colors } from '@/theme/tokens';

import { MESSAGES } from '../data';

export function ChatRoomScreen() {
  return (
    <View className="flex-1 bg-background">
      <ScrollView contentContainerClassName="gap-3 p-5">
        {MESSAGES.map((message) => (
          <View key={message.id} className={`max-w-[80%] gap-1 ${message.mine ? 'self-end' : 'self-start'}`}>
            {message.mine ? null : <Text className="text-xs font-semibold text-primary">{message.sender}</Text>}
            <View className={`rounded-2xl px-4 py-3 ${message.mine ? 'bg-primary' : 'border border-line bg-surface'}`}>
              <Text className={`text-base ${message.mine ? 'text-on-primary' : 'text-ink'}`}>{message.text}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View className="flex-row items-center gap-2 border-t border-line bg-surface p-3 pb-8">
        <TextInput
          placeholder="Message the group…"
          placeholderTextColor={colors.muted}
          className="flex-1 rounded-2xl border border-line bg-background px-4 py-3 text-base text-ink"
        />
        <View className="h-12 w-12 items-center justify-center rounded-full bg-primary">
          <Ionicons name="send" size={20} color={colors.background} />
        </View>
      </View>
    </View>
  );
}
