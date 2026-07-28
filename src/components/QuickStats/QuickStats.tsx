import { QuickStatsProps } from './types';

export function QuickStats({ 
  stats, 
  title, 
  columns = 4,
  variant = 'default'
}: QuickStatsProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3', 
    4: 'grid-cols-2 md:grid-cols-4'
  };

  const padding = variant === 'compact' ? 'p-4' : 'p-6';

  return (
    <section className="flex flex-col gap-4 md:gap-6">
      {title && (
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
      )}
      <div className={`grid ${gridCols[columns]} gap-6`}>
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${padding} bg-purple-50/50 dark:bg-purple-950/40 rounded-lg border border-purple-200/50 dark:border-purple-800/50 text-center`}
          >
            {stat.icon && (
              <div className="flex justify-center mb-2 text-purple-600 dark:text-purple-400">
                {stat.icon}
              </div>
            )}
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
