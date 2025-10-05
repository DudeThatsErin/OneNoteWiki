import { PageLayout } from '@/components/PageLayout';
import { InfoCard } from '@/components/InfoCard';
import { FeatureList } from '@/components/FeatureList';
import { Callout } from '@/components/Callout';
import { QuickStats } from '@/components/QuickStats';
import { Search, FileText, Image, Mic, Tag, Filter, Zap } from 'lucide-react';

export default function SearchPage() {
  return (
    <PageLayout
      title="Search & Organization"
      description="Master OneNote's powerful search capabilities. Learn to find information quickly across notebooks, including text in images, handwritten notes, and audio recordings."
      icon={<Search className="w-8 h-8 text-purple-600" />}
    >
      {/* Overview */}
      <div className="flex flex-col gap-6 md:gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            OneNote Search & Organization
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            OneNote's search functionality goes far beyond simple text matching. With OCR technology, 
            handwriting recognition, and audio transcription, you can find information in any format 
            across all your notebooks instantly.
          </p>
        </div>

        {/* Search Capabilities */}
        <QuickStats
          title="Search Capabilities"
          stats={[
            { label: 'Text Search', value: 'Instant', icon: <FileText className="w-5 h-5" /> },
            { label: 'Image OCR', value: 'Supported', icon: <Image className="w-5 h-5" /> },
            { label: 'Handwriting', value: 'Recognized', icon: <Search className="w-5 h-5" /> },
            { label: 'Audio Content', value: 'Transcribed', icon: <Mic className="w-5 h-5" /> }
          ]}
        />

        {/* Search Types */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Types of Search
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>SCREENSHOT HERE OF:</strong> OneNote search interface showing different search options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard
              title="Text Search"
              icon={<FileText className="w-6 h-6" />}
              variant="purple"
            >
              Find typed text across all notebooks and pages
            </InfoCard>
            <InfoCard
              title="Image Text (OCR)"
              icon={<Image className="w-6 h-6" />}
              variant="blue"
            >
              Search for text within images and screenshots
            </InfoCard>
            <InfoCard
              title="Handwriting Recognition"
              icon={<Search className="w-6 h-6" />}
              variant="green"
            >
              Find handwritten notes and drawings
            </InfoCard>
            <InfoCard
              title="Audio Transcription"
              icon={<Mic className="w-6 h-6" />}
              variant="orange"
            >
              Search within audio recording transcripts
            </InfoCard>
            <InfoCard
              title="Tag-Based Search"
              icon={<Tag className="w-6 h-6" />}
              variant="red"
            >
              Filter content by custom tags and categories
            </InfoCard>
            <InfoCard
              title="Advanced Filters"
              icon={<Filter className="w-6 h-6" />}
              variant="indigo"
            >
              Narrow results by date, author, and notebook
            </InfoCard>
          </div>
        </section>

        {/* Search Techniques */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Advanced Search Techniques
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>SCREENSHOT HERE OF:</strong> Advanced search filters and operators in action
            </p>
          </div>

          <FeatureList
            title="Search Operators & Filters"
            features={[
              { title: 'Use quotes for exact phrases: "project meeting"', description: 'Search for exact phrase matches' },
              { title: 'Wildcard searches with asterisk: proj* finds project, projects, etc.', description: 'Use wildcards for partial matches' },
              { title: 'Boolean operators: AND, OR, NOT for complex queries', description: 'Combine search terms with logical operators' },
              { title: 'Date filters: created:today, modified:last week', description: 'Filter results by creation or modification date' },
              { title: 'Author filters: author:"John Smith"', description: 'Find content by specific authors' },
              { title: 'Notebook filters: notebook:"Work Notes"', description: 'Limit search to specific notebooks' }
            ]}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Quick Search Tips</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Use Ctrl+F for page-level search</li>
                <li>• Use Ctrl+E for global search</li>
                <li>• Search results show context snippets</li>
                <li>• Recent searches are saved</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Search Scope Options</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Current page only</li>
                <li>• Current section</li>
                <li>• Current notebook</li>
                <li>• All notebooks</li>
              </ul>
            </div>
          </div>
        </section>

        {/* OCR and Handwriting */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            OCR & Handwriting Recognition
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>SCREENSHOT HERE OF:</strong> Search results showing text found in images and handwritten notes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">OCR Capabilities</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Text extraction from photos and screenshots</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Document and whiteboard text recognition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Multiple language support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Automatic text indexing for search</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Handwriting Search</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Handwritten text recognition and search</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Shape and drawing recognition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Mathematical equation search</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Ink-to-text conversion for better search</span>
                </li>
              </ul>
            </div>
          </div>

          <Callout type="tip" className="mt-4">
            <strong>Pro Tip:</strong> OneNote's handwriting recognition improves over time as it learns your writing style. 
            The more you write, the better it gets at recognizing your handwriting!
          </Callout>
        </section>

        {/* Organization with Tags */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Organization with Tags
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>SCREENSHOT HERE OF:</strong> Tag interface showing custom tags and tag search
            </p>
          </div>

          <FeatureList
            title="Tag System Features"
            features={[
              { title: "Create custom tags for categorizing content", description: "Design your own organizational system" },
              { title: "Built-in tags: To Do, Important, Question, Remember", description: "Use predefined tags for common needs" },
              { title: "Tag summary pages for quick overview", description: "View all tagged content in one place" },
              { title: "Search and filter by specific tags", description: "Find content by tag categories" },
              { title: "Tag-based task management", description: "Organize tasks with tag systems" },
              { title: "Color-coded tag organization", description: "Visual organization with colored tags" }
            ]}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Common Tag Uses</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Project categorization</li>
                <li>• Priority levels</li>
                <li>• Action items</li>
                <li>• Review reminders</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tag Best Practices</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Use consistent naming</li>
                <li>• Create tag hierarchies</li>
                <li>• Regular tag cleanup</li>
                <li>• Color coordination</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tag Shortcuts</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Ctrl+1: To Do tag</li>
                <li>• Ctrl+2: Important tag</li>
                <li>• Ctrl+3: Question tag</li>
                <li>• Ctrl+0: Remove tags</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Search Performance Tips */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Search Performance & Tips
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Optimization Tips</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Keep notebooks synced for faster search</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Use specific terms rather than generic words</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Organize content with clear headings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Regular cleanup of unused notebooks</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Search Strategies</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Start broad, then narrow with filters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Use synonyms if initial search fails</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Search by context and related terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Leverage recent search history</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Search Limitations */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Search Limitations & Workarounds
          </h3>
          
          <Callout type="warning" className="mb-4">
            <strong>Important:</strong> While OneNote's search is powerful, understanding its limitations 
            helps you organize content for better discoverability.
          </Callout>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Known Limitations</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Password-protected sections aren't searchable</li>
                <li>• Some file attachments may not be indexed</li>
                <li>• Handwriting recognition varies by language</li>
                <li>• Audio transcription requires internet connection</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Workarounds</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Add text descriptions to images</li>
                <li>• Use consistent naming conventions</li>
                <li>• Create index pages for complex topics</li>
                <li>• Duplicate important content in searchable format</li>
              </ul>
            </div>
          </div>
        </section>

        <Callout type="success">
          <strong>Search Mastery:</strong> Effective search in OneNote combines understanding the technology 
          with good organization habits. The better you organize, the easier it becomes to find what you need!
        </Callout>
      </div>
    </PageLayout>
  );
}
