import type Ionicons from '@expo/vector-icons/Ionicons';
import type { ComponentProps } from 'react';

export type IconName = ComponentProps<typeof Ionicons>['name'];

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
