import { Icons } from '@/components/icons';

export interface NavItem {
  title: string;
  href: string;
  icon?: keyof typeof Icons;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}
