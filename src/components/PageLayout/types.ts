import { ReactNode } from 'react';

export interface NavigationLink {
  href: string;
  label: string;
}

export interface PageLayoutProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  previousLink?: NavigationLink;
  nextLink?: NavigationLink;
  children: ReactNode;
}
