import { HomeIcon, ImportIcon, LucideIcon } from 'lucide-react';

export type NavItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
};

export const data = {
  user: {
    name: 'Ricardo',
    email: 'ricardo.soares@plexit.pt',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Home',
      url: '/',
      icon: HomeIcon,
    },
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: ImportIcon,
    },
  ],
};
