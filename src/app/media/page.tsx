import { PageLayout } from '@/components/PageLayout';
import { InfoCard } from '@/components/InfoCard';
import { FeatureList } from '@/components/FeatureList';
import { Callout } from '@/components/Callout';
import { Image, Video, Mic, Camera, FileText, Download } from 'lucide-react';

export default function MediaPage() {
  return (
    <PageLayout
      title="Media & Attachments"
      description="Learn how to work with images, audio, video, and file attachments in OneNote to create rich, multimedia notes."
      icon={<Image className="w-8 h-8 text-purple-600" />}
    >
      {/* Overview */}
      <div className="flex flex-col gap-6 md:gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Rich Media Support
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            OneNote excels at handling various types of media and attachments, making your notes more engaging and informative. 
            You can insert images, record audio, embed videos, and attach files directly into your pages.
          </p>
        </div>

        {/* Media Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoCard
            title="Images & Pictures"
            description="Insert photos, screenshots, and drawings"
            icon={<Image className="w-6 h-6" />}
            variant="purple"
          />
          <InfoCard
            title="Audio Recordings"
            description="Record voice notes and audio clips"
            icon={<Mic className="w-6 h-6" />}
            variant="blue"
          />
          <InfoCard
            title="Video Content"
            description="Embed videos and screen recordings"
            icon={<Video className="w-6 h-6" />}
            variant="green"
          />
          <InfoCard
            title="File Attachments"
            description="Attach documents, PDFs, and other files"
            icon={<FileText className="w-6 h-6" />}
            variant="orange"
          />
        </div>

        {/* Working with Images */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Working with Images
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>SCREENSHOT HERE OF:</strong> OneNote interface showing image insertion options
            </p>
          </div>
          
          <FeatureList
            title="Image Features"
            features={[
              "Insert images from files, web, or camera",
              "Drag and drop images directly into pages",
              "Resize and position images anywhere on the page",
              "Add alt text for accessibility",
              "Extract text from images (OCR)",
              "Copy text from pictures"
            ]}
          />

          <Callout type="tip" className="mt-4">
            <strong>Pro Tip:</strong> OneNote can search for text within images, making your visual content searchable!
          </Callout>
        </section>

        {/* Audio Recordings */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Audio Recordings
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>SCREENSHOT HERE OF:</strong> Audio recording interface in OneNote
            </p>
          </div>

          <FeatureList
            title="Audio Capabilities"
            features={[
              "Record audio directly in OneNote",
              "Sync audio with typed notes",
              "Playback controls with timestamps",
              "Search within audio transcriptions",
              "Export audio recordings",
              "Link audio to specific text sections"
            ]}
          />

          <Callout type="info" className="mt-4">
            Audio recordings are automatically synced across all your devices and can be played back even offline.
          </Callout>
        </section>

        {/* File Attachments */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            File Attachments
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>SCREENSHOT HERE OF:</strong> File attachment options and preview
            </p>
          </div>

          <FeatureList
            title="Supported File Types"
            features={[
              "Microsoft Office documents (Word, Excel, PowerPoint)",
              "PDF files with preview and annotation",
              "Text files and code snippets",
              "Spreadsheets with live data",
              "Presentations and slide decks",
              "Archive files (ZIP, RAR)"
            ]}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Attachment Options</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Insert as icon</li>
                <li>• Insert as printout</li>
                <li>• Attach file copy</li>
                <li>• Link to original file</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">File Management</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Open attached files</li>
                <li>• Save attachments locally</li>
                <li>• Update linked files</li>
                <li>• Version tracking</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Best Practices for Media
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Organization Tips</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Use descriptive filenames before inserting</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Group related media on dedicated pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Add captions and context to images</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Use tags to categorize media content</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Performance Tips</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Optimize image sizes for faster sync</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Use links for large files when possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Keep audio recordings concise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Monitor your OneDrive storage usage</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Callout type="warning">
          <strong>Storage Consideration:</strong> Media files count toward your OneDrive storage limit. 
          Consider using file links for very large files to save space.
        </Callout>
      </div>
    </PageLayout>
  );
}
