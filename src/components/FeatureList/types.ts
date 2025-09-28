import { ReactNode } from 'react';

export interface FeatureItem {
  title: string;
  description: string;
  icon?: ReactNode;
  details?: string;
}

export interface FeatureListProps {
  title: string;
  features: FeatureItem[];
  columns?: 1 | 2 | 3;
  variant?: 'default' | 'compact' | 'detailed';
}
