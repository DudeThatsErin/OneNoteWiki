import { ReactNode } from 'react';

export interface StatItem {
  value: string;
  label: string;
  icon?: ReactNode;
}

export interface QuickStatsProps {
  title?: string;
  stats: StatItem[];
  columns?: 2 | 3 | 4;
  variant?: 'default' | 'compact';
}
