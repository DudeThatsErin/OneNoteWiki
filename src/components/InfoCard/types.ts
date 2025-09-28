import { ReactNode } from 'react';

export type InfoCardVariant = 
  | 'blue' 
  | 'green' 
  | 'purple' 
  | 'orange' 
  | 'red' 
  | 'yellow' 
  | 'pink' 
  | 'indigo' 
  | 'gray';

export interface InfoCardProps {
  title: string;
  variant?: InfoCardVariant;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}
