import { Pressable, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CHATS } from '../data';

export function ChatsScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="gap-3 p-5">
      {CHATS.map((chat) => (
        <Pressable
          key={chat.id}
          onPress={() => navigation.navigate('ChatRoom', { chatId: chat.id })}
          className="gap-1 rounded-2xl border border-line bg-surface p-4 active:opacity-70"
        >
          <Text className="text-base font-semibold text-ink">{chat.title}</Text>
          <Text className="text-sm text-muted">
            {chat.lastMessage} · {chat.time}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}
