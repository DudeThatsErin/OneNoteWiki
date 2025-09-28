import { ReactNode } from 'react';

export interface GettingStartedStep {
  title: string;
  description: string;
  icon?: ReactNode;
  code?: string;
  language?: string;
}

export interface GettingStartedSectionProps {
  title: string;
  description?: string;
  steps: GettingStartedStep[];
  className?: string;
}
