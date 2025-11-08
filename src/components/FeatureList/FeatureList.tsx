import { FeatureListProps } from './types';

export function FeatureList({ 
  features, 
  title, 
  columns = 2, 
  variant = 'default'
}: FeatureListProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 lg:grid-cols-3'
  };

  const padding = variant === 'compact' ? 'p-2' : 'p-4';

  return (
    <section className="flex flex-col">
      {title && (
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
      )}
      <div className={`grid ${gridCols[columns]} gap-2`}>
        {features.map((feature, index) => (
          <div key={index} className={`bg-white dark:bg-gray-800 ${padding} rounded-lg border border-gray-200 dark:border-gray-700`}>
            <div className="flex items-center gap-3">
              {feature.icon && (
                <div className="text-blue-600 dark:text-blue-400">{feature.icon}</div>
              )}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white !m-2">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
            {feature.details && variant === 'detailed' && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {feature.details}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
