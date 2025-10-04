import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { FeatureList } from '@/components/FeatureList';

export default function FeaturesPage() {
  return (
    <PageLayout
      title="Note-Taking Features"
      description="Discover OneNote's powerful features for creating rich, interactive notes with text, drawings, and multimedia content."
    >
      <div className="flex flex-col gap-8">
        {/* Hero Section */}
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Note-Taking Features
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore OneNote's comprehensive set of tools for creating rich, multimedia notes that go far beyond simple text.
          </p>
        </div>

        {/* Quick Stats */}
        <QuickStats
          stats={[
            { label: 'Text Formatting Options', value: '50+', icon: '✏️' },
            { label: 'Drawing Tools', value: '15+', icon: '🎨' },
            { label: 'Supported File Types', value: '100+', icon: '📎' },
            { label: 'Handwriting Languages', value: '25+', icon: '✍️' }
          ]}
        />

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Text Formatting & Styling</h2>
          <p>
            OneNote offers extensive text formatting options to make your notes visually appealing and well-organized.
          </p>

          <div className="my-8 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
              <strong>SCREENSHOT HERE OF OneNote's formatting toolbar showing font options, colors, highlighting, and text styles</strong>
            </p>
          </div>

          <FeatureList
            title="Text Formatting Features"
            features={[
              {
                title: 'Rich Text Formatting',
                description: 'Bold, italic, underline, strikethrough, and more',
                icon: '📝'
              },
              {
                title: 'Font Customization',
                description: 'Choose from hundreds of fonts and adjust sizes',
                icon: '🔤'
              },
              {
                title: 'Color & Highlighting',
                description: 'Apply text colors and background highlights',
                icon: '🎨'
              },
              {
                title: 'Lists & Bullets',
                description: 'Create numbered lists, bullet points, and checklists',
                icon: '📋'
              },
              {
                title: 'Paragraph Styles',
                description: 'Apply heading styles and paragraph formatting',
                icon: '📄'
              },
              {
                title: 'Text Alignment',
                description: 'Left, center, right, and justified alignment options',
                icon: '↔️'
              }
            ]}
          />

          <h2>Drawing & Handwriting</h2>
          <p>
            OneNote's digital ink features allow you to draw, sketch, and write by hand, making it perfect for visual learners and creative note-taking.
          </p>

          <div className="my-8 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
              <strong>SCREENSHOT HERE OF OneNote's Draw tab showing pen tools, colors, shapes, and handwriting recognition options</strong>
            </p>
          </div>

          <FeatureList
            title="Drawing & Ink Features"
            features={[
              {
                title: 'Digital Pens',
                description: 'Multiple pen types with customizable colors and thickness',
                icon: '🖊️'
              },
              {
                title: 'Shape Recognition',
                description: 'Convert hand-drawn shapes into perfect geometric forms',
                icon: '🔺'
              },
              {
                title: 'Handwriting Recognition',
                description: 'Convert handwritten text to typed text automatically',
                icon: '✍️'
              },
              {
                title: 'Ink to Math',
                description: 'Convert handwritten equations to formatted math',
                icon: '🧮'
              },
              {
                title: 'Lasso Selection',
                description: 'Select and move handwritten content easily',
                icon: '🎯'
              },
              {
                title: 'Ruler & Protractor',
                description: 'Drawing aids for precise measurements and angles',
                icon: '📐'
              }
            ]}
          />

          <h2>Tables & Structured Content</h2>
          <p>
            Organize information effectively using OneNote's table features and structured content options.
          </p>

          <div className="my-8 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
              <strong>SCREENSHOT HERE OF OneNote table creation and formatting options, showing a sample table with data</strong>
            </p>
          </div>

          <h2>Tags & Organization</h2>
          <p>
            Use OneNote's tagging system to categorize and quickly find important information in your notes.
          </p>

          <div className="my-8 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
              <strong>SCREENSHOT HERE OF OneNote's tag gallery showing different tag types like Important, Question, Remember for later, etc.</strong>
            </p>
          </div>

          <FeatureList
            title="Tagging & Organization"
            features={[
              {
                title: 'Built-in Tags',
                description: 'Pre-made tags for common use cases like Important, To Do, Question',
                icon: '🏷️'
              },
              {
                title: 'Custom Tags',
                description: 'Create your own tags with custom icons and colors',
                icon: '🎨'
              },
              {
                title: 'Tag Search',
                description: 'Find all notes with specific tags across notebooks',
                icon: '🔍'
              },
              {
                title: 'Tag Summary',
                description: 'Generate summaries of tagged content for quick review',
                icon: '📊'
              }
            ]}
          />
        </div>
      </div>
    </PageLayout>
  );
}
