import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';
import { FeatureList } from '@/components/FeatureList';
import { CodeBlock } from '@/components/CodeBlock';
import { FileText } from 'lucide-react';

export default function TemplatesPage() {
  return (
    <PageLayout
      title="OneNote Templates"
      description="Discover and use professional templates to jumpstart your note-taking for academic, business, and personal use."
      icon={<FileText className="w-8 h-8 text-purple-600" />}
    >
      <div className="flex flex-col gap-8">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 suppressHydrationWarning>What are OneNote Templates?</h2>
          <p>
            OneNote templates are pre-designed page layouts that provide structure and formatting for specific types of notes. They help you maintain consistency and save time by providing ready-made formats for common note-taking scenarios.
          </p>

          <div className="my-8 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
              <img src="/screenshots/onenote_template_gallery.png" alt="OneNote Template Gallery" />
            </p>
          </div>

          <h2 suppressHydrationWarning>Template Categories</h2>
          
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


          <FeatureList
            title="How to Apply Templates"
            columns={3}
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
            ]}
          />

          <h2 suppressHydrationWarning>Steps to Create a Custom Template</h2>

            <ol className="list-decimal list-inside ml-4 space-y-2">
              <li>Create a new page with your desired layout and formatting</li>
              <li>Add placeholder text, tables, or other elements</li>
              <li>Go to Insert &gt; Page Templates &gt; "Save current page as template"</li>
              <li>Give your template a name and description</li>
              <li>Choose whether to make it available to all notebooks</li>
              <li>Your template is now available in the template gallery</li>
            </ol>

          <div className="my-8 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
              <img src="/screenshots/onenote_current_page_template.png" alt="OneNote Save Template" />
            </p>
          </div>

          <h2 suppressHydrationWarning>Popular Template Examples</h2>
          
          <div className="space-y-6 my-8">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">📝 Meeting Minutes Template</h3>
              <CodeBlock
                code={`Meeting: [Meeting Name]
Date: [Date]
Attendees: [Names]
Agenda Items:
• [Item 1]
• [Item 2]
Action Items:
□ [Task] - [Owner] - [Due Date]`}
                language="text"
              />
            </div>

            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">📚 Lecture Notes Template</h3>
              <CodeBlock
                code={`Course: [Course Name]
Date: [Date]
Topic: [Lecture Topic]
Key Points:
• [Point 1]
• [Point 2]
Questions:
? [Question 1]
Follow-up: [Action items]`}
                language="text"
              />
            </div>
          </div>

          <h2 suppressHydrationWarning>Template Best Practices</h2>
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
