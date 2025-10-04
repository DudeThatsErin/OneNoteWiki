import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';
import { FeatureList } from '@/components/FeatureList';

export default function TemplatesPage() {
  return (
    <PageLayout
      title="OneNote Templates"
      description="Discover and use professional templates to jumpstart your note-taking for academic, business, and personal use."
    >
      <div className="flex flex-col gap-8">
        {/* Hero Section */}
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            OneNote Templates
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Save time and maintain consistency with professionally designed templates for every use case.
          </p>
        </div>

        {/* Quick Stats */}
        <QuickStats
          stats={[
            { label: 'Built-in Templates', value: '50+', icon: '📋' },
            { label: 'Template Categories', value: '10+', icon: '📂' },
            { label: 'Custom Templates', value: 'Unlimited', icon: '🎨' },
            { label: 'Template Sharing', value: 'Yes', icon: '🤝' }
          ]}
        />

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>What are OneNote Templates?</h2>
          <p>
            OneNote templates are pre-designed page layouts that provide structure and formatting for specific types of notes. They help you maintain consistency and save time by providing ready-made formats for common note-taking scenarios.
          </p>

          <div className="my-8 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
              <strong>SCREENSHOT HERE OF OneNote's template gallery showing various template categories and preview thumbnails</strong>
            </p>
          </div>

          <h2>Template Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <InfoCard
              title="Academic Templates"
              variant="blue"
            >
              <ul className="list-disc list-inside space-y-2">
                <li>Lecture Notes</li>
                <li>Research Papers</li>
                <li>Study Guides</li>
                <li>Assignment Planners</li>
                <li>Lab Reports</li>
                <li>Reading Notes</li>
              </ul>
            </InfoCard>
            
            <InfoCard
              title="Business Templates"
              variant="purple"
            >
              <ul className="list-disc list-inside space-y-2">
                <li>Meeting Minutes</li>
                <li>Project Planning</li>
                <li>Status Reports</li>
                <li>Client Notes</li>
                <li>Budget Tracking</li>
                <li>Team Collaboration</li>
              </ul>
            </InfoCard>
            
            <InfoCard
              title="Personal Templates"
              variant="green"
            >
              <ul className="list-disc list-inside space-y-2">
                <li>Daily Journal</li>
                <li>Travel Planning</li>
                <li>Recipe Collection</li>
                <li>Goal Setting</li>
                <li>Health Tracking</li>
                <li>Event Planning</li>
              </ul>
            </InfoCard>
          </div>

          <h2>Using Built-in Templates</h2>
          <p>
            OneNote comes with dozens of professionally designed templates that you can use immediately.
          </p>

          <div className="my-8 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
              <strong>SCREENSHOT HERE OF the process of inserting a template: Insert tab &gt; Page Templates &gt; choosing a template from the gallery</strong>
            </p>
          </div>

          <FeatureList
            title="How to Apply Templates"
            features={[
              {
                title: 'Insert Tab Method',
                description: 'Go to Insert > Page Templates and choose from the gallery',
                icon: '📋'
              },
              {
                title: 'New Page with Template',
                description: 'Right-click in page list and select "New Page with Template"',
                icon: '➕'
              },
              {
                title: 'Template Search',
                description: 'Search for specific template types using keywords',
                icon: '🔍'
              },
              {
                title: 'Template Preview',
                description: 'Preview templates before applying to see the layout',
                icon: '👁️'
              }
            ]}
          />

          <h2>Creating Custom Templates</h2>
          <p>
            Design your own templates to match your specific needs and workflow requirements.
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
            <h3 className="text-lg font-semibold mb-4">Steps to Create a Custom Template</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Create a new page with your desired layout and formatting</li>
              <li>Add placeholder text, tables, or other elements</li>
              <li>Go to Insert &gt; Page Templates &gt; "Save current page as template"</li>
              <li>Give your template a name and description</li>
              <li>Choose whether to make it available to all notebooks</li>
              <li>Your template is now available in the template gallery</li>
            </ol>
          </div>

          <div className="my-8 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
              <strong>SCREENSHOT HERE OF the "Save as Template" dialog showing name field, description, and scope options</strong>
            </p>
          </div>

          <h2>Popular Template Examples</h2>
          
          <div className="space-y-6 my-8">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">📝 Meeting Minutes Template</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded font-mono text-sm">
                <div>Meeting: [Meeting Name]</div>
                <div>Date: [Date]</div>
                <div>Attendees: [Names]</div>
                <div>Agenda Items:</div>
                <div>• [Item 1]</div>
                <div>• [Item 2]</div>
                <div>Action Items:</div>
                <div>□ [Task] - [Owner] - [Due Date]</div>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">📚 Lecture Notes Template</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded font-mono text-sm">
                <div>Course: [Course Name]</div>
                <div>Date: [Date]</div>
                <div>Topic: [Lecture Topic]</div>
                <div>Key Points:</div>
                <div>• [Point 1]</div>
                <div>• [Point 2]</div>
                <div>Questions:</div>
                <div>? [Question 1]</div>
                <div>Follow-up: [Action items]</div>
              </div>
            </div>
          </div>

          <h2>Template Best Practices</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Keep it Simple:</strong> Don't overcomplicate templates with too many elements</li>
            <li><strong>Use Placeholders:</strong> Include [bracketed] placeholder text for easy replacement</li>
            <li><strong>Consistent Formatting:</strong> Use consistent fonts, colors, and spacing</li>
            <li><strong>Test Before Saving:</strong> Make sure the template works as expected</li>
            <li><strong>Regular Updates:</strong> Refine templates based on actual usage</li>
            <li><strong>Share with Team:</strong> Make useful templates available to colleagues</li>
          </ul>

          <div className="my-8 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
              <strong>SCREENSHOT HERE OF a custom template being created, showing the design process and placeholder elements</strong>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
