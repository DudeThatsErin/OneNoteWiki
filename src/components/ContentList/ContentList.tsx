import { ContentListProps } from './types';

export function ContentList({ 
  items, 
  type = 'disc', 
  className = ""
}: ContentListProps) {
  const listStyles = {
    disc: 'list-disc list-inside',
    decimal: 'list-decimal list-inside',
    none: 'list-none'
  };

  const baseClasses = `text-gray-700 dark:text-gray-300 text-sm ${listStyles[type]} [&>li]:mb-1 ${className}`;

  if (type === 'decimal') {
    return (
      <ol className={baseClasses}>
        {items.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ul className={baseClasses}>
      {items.map((item, index) => (
        <li key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}
