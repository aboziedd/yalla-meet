import { Ionicons } from '@expo/vector-icons';

export type IconName = keyof typeof Ionicons.glyphMap;

export type Activity = {
  id: string;
  icon: IconName;
  title: string;
  venue: string;
  time: string;
  distance: string;
  spots: string;
  host: string;
  members: string[];
  description: string;
};
