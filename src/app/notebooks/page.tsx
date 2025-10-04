import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';

export default function NotebooksPage() {
  return (
    <PageLayout
      title="Notebooks & Organization"
      description="Master the art of organizing your digital notes with OneNote's powerful notebook structure."
    >
      <div className="flex flex-col gap-8">
        {/* Hero Section */}
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Notebooks & Organization
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Learn how to create, organize, and manage your OneNote notebooks for maximum productivity.
          </p>
        </div>

        {/* Quick Stats */}
        <QuickStats
          stats={[
            { label: 'Max Notebooks', value: 'Unlimited', icon: '📚' },
            { label: 'Sections per Notebook', value: '999+', icon: '📂' },
            { label: 'Pages per Section', value: 'Unlimited', icon: '📄' },
            { label: 'Storage per Account', value: '5GB Free', icon: '☁️' }
          ]}
        />

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Understanding OneNote Structure</h2>
          <p>
            OneNote uses a three-level hierarchy that mimics physical notebooks:
          </p>

          <div className="my-8 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
              <strong>SCREENSHOT HERE OF OneNote interface showing the three-level hierarchy: Notebook tabs at top, Section tabs on the right, and Page list on the left</strong>
            </p>
          </div>

          <h2>Creating Your First Notebook</h2>
          <p>
            Getting started with OneNote begins with creating your first notebook. This will serve as the main container for all your notes on a particular topic or project.
          </p>

          <div className="my-8 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
              <strong>SCREENSHOT HERE OF the "New Notebook" dialog showing name field, location selection, and create button</strong>
            </p>
          </div>

          <h2>Organization Best Practices</h2>
          <p>
            Effective organization is key to getting the most out of OneNote. Here are proven strategies for keeping your notes organized and easily accessible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <InfoCard
              title="Academic Organization"
              variant="blue"
            >
              <ul className="list-disc list-inside space-y-2">
                <li>One notebook per subject/course</li>
                <li>Sections for different topics or units</li>
                <li>Pages for individual lectures or assignments</li>
                <li>Use consistent naming conventions</li>
              </ul>
            </InfoCard>
            <InfoCard
              title="Professional Organization"
              variant="purple"
            >
              <ul className="list-disc list-inside space-y-2">
                <li>Separate notebooks for different projects</li>
                <li>Sections for meetings, planning, resources</li>
                <li>Date-based page naming for meetings</li>
                <li>Shared notebooks for team collaboration</li>
              </ul>
            </InfoCard>
          </div>

          <h2>Advanced Organization Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Color Coding:</strong> Use section colors to categorize content visually</li>
            <li><strong>Tags:</strong> Apply consistent tags for easy searching and filtering</li>
            <li><strong>Templates:</strong> Create page templates for recurring note types</li>
            <li><strong>Linking:</strong> Use internal links to connect related content</li>
          </ul>

          <div className="my-8 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
              <strong>SCREENSHOT HERE OF a well-organized notebook showing color-coded sections, consistent naming, and proper hierarchy</strong>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
