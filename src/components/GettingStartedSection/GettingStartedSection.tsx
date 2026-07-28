import { GettingStartedSectionProps } from './types';

export function GettingStartedSection({ 
  title = "🚀 Getting Started",
  description,
  steps,
  className = ""
}: GettingStartedSectionProps) {
  return (
    <div className={`bg-purple-950/40 rounded-lg p-6 border border-purple-800/50 ${className}`}>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-gray-200 text-sm">
            {description}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4 md:gap-6">
        {steps.map((step, index) => (
          <div key={index}>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-purple-600 dark:bg-purple-700 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <div className="flex items-center gap-2">
                {step.icon && (
                  <div className="text-purple-300">
                    {step.icon}
                  </div>
                )}
                <h4 className="font-semibold text-white">
                  {step.title}
                </h4>
              </div>
            </div>
            <div className="ml-12">
              <p className="text-gray-200 text-sm mt-2 mb-3">
                {step.description}
              </p>
              {step.code && (
                <div className="group bg-gray-800 dark:bg-gray-950 rounded-md p-3 overflow-x-auto border border-gray-300 dark:border-gray-700 relative">
                  <code className="text-gray-100 text-sm block">
                    {step.code}
                  </code>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
