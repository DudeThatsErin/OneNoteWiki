import { ReactNode } from 'react';

export type CalloutType = 'info' | 'warning' | 'error' | 'success' | 'tip';

export interface CalloutProps {
  type: CalloutType;
  title?: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}
