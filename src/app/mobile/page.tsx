import { PageLayout } from '@/components/PageLayout';
import { InfoCard } from '@/components/InfoCard';
import { FeatureList } from '@/components/FeatureList';
import { Callout } from '@/components/Callout';
import { QuickStats } from '@/components/QuickStats';
import { Smartphone, Tablet, Wifi, WifiOff, Camera, Mic, Pen } from 'lucide-react';

export default function MobilePage() {
  return (
    <PageLayout
      title="Mobile OneNote"
      description="Master OneNote on your mobile devices. Learn about mobile-specific features, offline capabilities, and tips for productive note-taking on the go."
      icon={<Smartphone className="w-8 h-8 text-purple-600" />}
    >
      {/* Overview */}
      <div className="flex flex-col gap-6 md:gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            OneNote on Mobile Devices
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            OneNote mobile apps bring the full power of digital note-taking to your smartphone and tablet. 
            Whether you're capturing ideas on the go, reviewing notes offline, or using touch and pen input, 
            mobile OneNote keeps you productive anywhere.
          </p>
        </div>

        {/* Platform Support */}
        <QuickStats
          title="Platform Availability"
          stats={[
            { label: 'iOS App Store', value: 'Available', icon: <Smartphone className="w-5 h-5" /> },
            { label: 'Google Play Store', value: 'Available', icon: <Smartphone className="w-5 h-5" /> },
            { label: 'iPad Optimized', value: 'Yes', icon: <Tablet className="w-5 h-5" /> },
            { label: 'Android Tablets', value: 'Supported', icon: <Tablet className="w-5 h-5" /> }
          ]}
        />

        {/* Key Mobile Features */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Mobile-Specific Features
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>SCREENSHOT HERE OF:</strong> OneNote mobile app interface showing key features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard
              title="Camera Integration"
              description="Capture documents, whiteboards, and business cards"
              icon={<Camera className="w-6 h-6" />}
              variant="purple"
            />
            <InfoCard
              title="Voice Recording"
              description="Record audio notes with automatic transcription"
              icon={<Mic className="w-6 h-6" />}
              variant="blue"
            />
            <InfoCard
              title="Touch & Pen Input"
              description="Draw, sketch, and handwrite with finger or stylus"
              icon={<Pen className="w-6 h-6" />}
              variant="green"
            />
            <InfoCard
              title="Offline Access"
              description="View and edit notes without internet connection"
              icon={<WifiOff className="w-6 h-6" />}
              variant="orange"
            />
            <InfoCard
              title="Quick Capture"
              description="Fast note creation with widgets and shortcuts"
              icon={<Smartphone className="w-6 h-6" />}
              variant="red"
            />
            <InfoCard
              title="Cross-Device Sync"
              description="Seamless synchronization across all devices"
              icon={<Wifi className="w-6 h-6" />}
              variant="indigo"
            />
          </div>
        </section>

        {/* Camera Features */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Camera & Document Capture
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>SCREENSHOT HERE OF:</strong> Camera capture interface with document detection
            </p>
          </div>

          <FeatureList
            title="Camera Capabilities"
            features={[
              { title: "Document scanning with automatic edge detection", description: "Professional document capture with smart cropping" },
              { title: "Whiteboard capture with enhancement", description: "Clear whiteboard photos with automatic enhancement" },
              { title: "Business card scanning and contact extraction", description: "Automatically extract contact information" },
              { title: "Photo insertion with automatic optimization", description: "Smart photo processing for better quality" },
              { title: "Multi-page document scanning", description: "Scan multiple pages into a single note" },
              { title: "Text extraction from captured images (OCR)", description: "Make text in images searchable" }
            ]}
          />

          <Callout type="tip" className="mt-4">
            <strong>Pro Tip:</strong> Use the Office Lens integration for professional document scanning with automatic cropping and enhancement.
          </Callout>
        </section>

        {/* Handwriting & Drawing */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Handwriting & Drawing
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>SCREENSHOT HERE OF:</strong> Drawing tools and handwriting interface
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Drawing Tools</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Multiple pen types and colors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Highlighter and marker tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Eraser with selective deletion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Shape recognition and correction</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Handwriting Features</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Handwriting-to-text conversion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Search within handwritten notes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Math equation recognition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Ink replay for reviewing writing process</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Offline Capabilities */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Offline Capabilities
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>SCREENSHOT HERE OF:</strong> Offline indicator and sync status
            </p>
          </div>

          <FeatureList
            title="What Works Offline"
            features={[
              { title: "View and edit recently accessed notebooks", description: "Access your most recent content without internet" },
              { title: "Create new pages and sections", description: "Continue organizing your notes offline" },
              { title: "Add text, drawings, and voice recordings", description: "Full note-taking capabilities offline" },
              { title: "Search within cached content", description: "Find information in downloaded notebooks" },
              { title: "Take photos and add to notes", description: "Capture and attach images offline" },
              { title: "Automatic sync when connection returns", description: "Seamless synchronization when back online" }
            ]}
          />

          <Callout type="info" className="mt-4">
            OneNote automatically downloads your most recent notebooks for offline access. 
            You can also manually download specific notebooks for guaranteed offline availability.
          </Callout>
        </section>

        {/* Mobile Tips & Tricks */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Mobile Productivity Tips
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Quick Capture</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Use widgets for instant note creation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Set up voice shortcuts for hands-free notes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Pin frequently used notebooks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Use templates for consistent formatting</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Organization</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Use tags for easy mobile searching</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Create location-based reminders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Organize with consistent naming</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Use recent notes for quick access</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Device-Specific Features */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Device-Specific Features
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-purple-600" />
                iOS Features
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li>• Siri integration for voice commands</li>
                <li>• Apple Pencil support on iPad</li>
                <li>• Shortcuts app integration</li>
                <li>• Files app integration</li>
                <li>• Spotlight search integration</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-green-600" />
                Android Features
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li>• Google Assistant integration</li>
                <li>• S Pen support on Samsung devices</li>
                <li>• Android widgets and shortcuts</li>
                <li>• Share menu integration</li>
                <li>• Notification quick actions</li>
              </ul>
            </div>
          </div>
        </section>

        <Callout type="success">
          <strong>Mobile First:</strong> OneNote mobile apps are designed to be just as powerful as the desktop version, 
          with many features specifically optimized for touch and mobile workflows.
        </Callout>
      </div>
    </PageLayout>
  );
}
