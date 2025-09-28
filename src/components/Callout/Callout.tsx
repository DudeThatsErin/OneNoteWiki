import { Info, AlertTriangle, AlertCircle, CheckCircle, Lightbulb } from 'lucide-react';
import { CalloutProps } from './types';

const calloutStyles = {
  info: {
    container: 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800',
    icon: 'text-blue-600 dark:text-blue-400',
    title: 'text-blue-900 dark:text-blue-100',
    content: 'text-blue-800 dark:text-blue-200'
  },
  warning: {
    container: 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800',
    icon: 'text-yellow-600 dark:text-yellow-400',
    title: 'text-yellow-900 dark:text-yellow-100',
    content: 'text-yellow-800 dark:text-yellow-200'
  },
  error: {
    container: 'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800',
    icon: 'text-red-600 dark:text-red-400',
    title: 'text-red-900 dark:text-red-100',
    content: 'text-red-800 dark:text-red-200'
  },
  success: {
    container: 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800',
    icon: 'text-green-600 dark:text-green-400',
    title: 'text-green-900 dark:text-green-100',
    content: 'text-green-800 dark:text-green-200'
  },
  tip: {
    container: 'bg-purple-50 border-purple-200 dark:bg-purple-900/20 dark:border-purple-800',
    icon: 'text-purple-600 dark:text-purple-400',
    title: 'text-purple-900 dark:text-purple-100',
    content: 'text-purple-800 dark:text-purple-200'
  }
};

const defaultIcons = {
  info: Info,
  warning: AlertTriangle,
  error: AlertCircle,
  success: CheckCircle,
  tip: Lightbulb
};

export function Callout({
  type,
  title,
  children,
  icon,
  className = ''
}: CalloutProps) {
  const styles = calloutStyles[type];
  const IconComponent = defaultIcons[type];
  const displayIcon = icon || <IconComponent className="w-5 h-5" />;

  return (
    <div className={`rounded-lg border p-4 ${styles.container} ${className}`}>
      <div className="flex gap-3">
        <div className={`flex-shrink-0 ${styles.icon}`}>
          {displayIcon}
        </div>
        <div className="flex-1">
          {title && (
            <h4 className={`font-semibold mb-2 ${styles.title}`}>
              {title}
            </h4>
          )}
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
