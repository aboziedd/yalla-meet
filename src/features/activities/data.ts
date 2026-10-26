import type { Activity } from './types';

export const CATEGORIES = ['Food', 'Gaming', 'Sports', 'Study', 'Outings'];

export const ACTIVITIES: Activity[] = [
  {
    id: 'a1',
    icon: 'cafe-outline',
    title: 'Coffee after lectures',
    venue: 'Campus Café',
    time: 'Today, 6:00 PM',
    distance: '0.4 km',
    spots: '2/4',
    host: 'Omar',
    members: ['Omar', 'Nour'],
    description: 'Grabbing coffee after the 4 PM lecture. Come say hi.',
  },
  {
    id: 'a2',
    icon: 'tennisball-outline',
    title: 'Padel doubles',
    venue: 'Padel Courts, El Shorouk',
    time: 'Today, 8:30 PM',
    distance: '2.1 km',
    spots: '3/4',
    host: 'Youssef',
    members: ['Youssef', 'Karim', 'Ali'],
    description: 'Need one more player for a friendly match. All levels welcome.',
  },
  {
    id: 'a3',
    icon: 'book-outline',
    title: 'Revision for the mobile exam',
    venue: 'BUE Library',
    time: 'Tomorrow, 11:00 AM',
    distance: '0.2 km',
    spots: '3/6',
    host: 'Adam',
    members: ['Adam', 'Salma', 'Mariam'],
    description: 'Going through the labs and past questions together.',
  },
  {
    id: 'a4',
    icon: 'game-controller-outline',
    title: 'Arcade night',
    venue: 'Arcade Zone, Madinaty',
    time: 'Friday, 7:00 PM',
    distance: '6.5 km',
    spots: '2/5',
    host: 'Hana',
    members: ['Hana', 'Adam'],
    description: 'Air hockey, racing games and bowling.',
  },
];
