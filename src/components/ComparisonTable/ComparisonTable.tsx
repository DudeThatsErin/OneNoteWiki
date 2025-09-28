import { ComparisonTableProps } from './types';
import { Tag } from '../Tag';

const difficultyColors = {
  'Beginner': 'success' as const,
  'Intermediate': 'warning' as const,
  'Advanced': 'danger' as const
};

const popularityColors = {
  'Low': 'secondary' as const,
  'Medium': 'primary' as const,
  'High': 'success' as const,
  'Very High': 'success' as const
};

export function ComparisonTable({
  title,
  items,
  showDifficulty = true,
  showPopularity = true,
  className = ''
}: ComparisonTableProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden ${className}`}>
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Description
              </th>
              {showDifficulty && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Difficulty
                </th>
              )}
              {showPopularity && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Popularity
                </th>
              )}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Use Case
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {items.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium text-gray-900 dark:text-white">
                    {item.name}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-600 dark:text-gray-300 max-w-xs">
                    {item.description}
                  </div>
                </td>
                {showDifficulty && (
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Tag variant={difficultyColors[item.difficulty]} size="sm">
                      {item.difficulty}
                    </Tag>
                  </td>
                )}
                {showPopularity && (
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Tag variant={popularityColors[item.popularity]} size="sm">
                      {item.popularity}
                    </Tag>
                  </td>
                )}
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-600 dark:text-gray-300 max-w-xs">
                    {item.useCase}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
