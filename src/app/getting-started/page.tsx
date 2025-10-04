import Link from 'next/link';
import { BookOpen, Code, Users, Lightbulb, Target, Star, ArrowRight, CheckCircle } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { GettingStartedSection } from '@/components/GettingStartedSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faReddit } from '@fortawesome/free-brands-svg-icons';

const gettingStartedSteps = [
  {
    title: 'What is OneNote?',
    description: 'Understand what OneNote is and how it can transform your note-taking.',
    href: '/getting-started/what-is-onenote',
    completed: false
  },
  {
    title: 'Installation & Setup',
    description: 'Download OneNote and set up your Microsoft account for syncing.',
    href: '/getting-started/installation',
    completed: false
  },
  {
    title: 'Creating Your First Notebook',
    description: 'Learn the OneNote hierarchy and create your first organized notebook.',
    href: '/getting-started/first-notebook',
    completed: false
  },
  {
    title: 'Basic Navigation',
    description: 'Master the OneNote interface and learn essential navigation skills.',
    href: '/getting-started/navigation',
    completed: false
  }
];

export default function GettingStartedPage() {
  return (
    <PageLayout
      title="Getting Started"
      description="Welcome to your OneNote journey! This section will guide you through the basics of OneNote, from understanding what it is to creating your first organized notebook."
      icon={<BookOpen className="w-8 h-8 text-purple-600" />}
      nextLink={{
        href: "/getting-started/what-is-onenote",
        label: "Start: What is OneNote?"
      }}
    >

      {/* Learning Path */}
      <div className="flex flex-col gap-6 md:gap-8 py-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Your Learning Path
        </h2>
        <div className="flex flex-col gap-4 md:gap-6">
          {gettingStartedSteps.map((step, index) => (
            <Link
              key={step.href}
              href={step.href}
              className="block p-6 bg-gray-800 rounded-lg border border-gray-700 transition-all hover:border-gray-600"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400 font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Tips */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4">
          Tips for Success
        </h3>
        <ul className="flex flex-col gap-2 text-purple-800 dark:text-purple-200">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-500" />
            <span>Start simple - create a basic notebook structure before adding complexity</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-500" />
            <span>Use consistent naming conventions for notebooks, sections, and pages</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-500" />
            <span>Experiment with different features like tags, templates, and drawing tools</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-500" />
            <span>Join our community for tips, templates, and support</span>
          </li>
        </ul>
      </div>

      {/* Community Support */}
      <div className="my-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Need Help?
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Getting started with OneNote can be exciting! Our community is here to help you make the most of it.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://discord.gg/5kv4bDUkpc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
          >
            <FontAwesomeIcon icon={faDiscord} className="w-4 h-4 mr-2" />
            Ask on Discord
          </a>
          <a
            href="https://www.reddit.com/r/OneNote/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors"
          >
            <FontAwesomeIcon icon={faReddit} className="w-4 h-4 mr-2" />
            Post on Reddit
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
