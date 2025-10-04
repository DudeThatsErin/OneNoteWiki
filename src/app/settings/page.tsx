import { PageLayout } from '@/components/PageLayout';
import { InfoCard } from '@/components/InfoCard';
import { FeatureList } from '@/components/FeatureList';
import { Callout } from '@/components/Callout';
import { Settings, Shield, RefreshCw, Cloud, User, Bell, Palette } from 'lucide-react';

export default function SettingsPage() {
  return (
    <PageLayout
      title="Settings & Configuration"
      description="Configure OneNote to work perfectly for your needs. Learn about account settings, sync options, backup strategies, and customization features."
      icon={<Settings className="w-8 h-8 text-purple-600" />}
    >
      {/* Overview */}
      <div className="flex flex-col gap-6 md:gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            OneNote Settings & Configuration
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Customize OneNote to match your workflow and preferences. From sync settings to privacy controls, 
            proper configuration ensures OneNote works exactly how you need it to across all your devices.
          </p>
        </div>

        {/* Settings Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoCard
            title="Account & Profile"
            icon={<User className="w-6 h-6" />}
            variant="purple"
          >
            Microsoft account settings and profile management
          </InfoCard>
          <InfoCard
            title="Sync & Storage"
            icon={<RefreshCw className="w-6 h-6" />}
            variant="blue"
          >
            OneDrive sync settings and storage management
          </InfoCard>
          <InfoCard
            title="Privacy & Security"
            icon={<Shield className="w-6 h-6" />}
            variant="green"
          >
            Data protection and sharing permissions
          </InfoCard>
          <InfoCard
            title="Notifications"
            icon={<Bell className="w-6 h-6" />}
            variant="orange"
          >
            Alert preferences and reminder settings
          </InfoCard>
          <InfoCard
            title="Appearance"
            icon={<Palette className="w-6 h-6" />}
            variant="red"
          >
            Theme, layout, and display customization
          </InfoCard>
          <InfoCard
            title="Backup & Export"
            icon={<Cloud className="w-6 h-6" />}
            variant="indigo"
          >
            Data backup and export options
          </InfoCard>
        </div>

        {/* Account Settings */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Account & Profile Settings
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>SCREENSHOT HERE OF:</strong> OneNote account settings page showing profile options
            </p>
          </div>

          <FeatureList
            title="Account Management"
            features={[
              { title: "Microsoft account integration and sign-in options", description: "Connect and manage your Microsoft account for seamless sync" },
              { title: "Profile information and display name settings", description: "Customize your profile and display preferences" },
              { title: "Connected services and app permissions", description: "Manage third-party integrations and permissions" },
              { title: "Account storage usage and upgrade options", description: "Monitor storage usage and upgrade plans" },
              { title: "Family sharing and organization accounts", description: "Set up sharing for family or work accounts" },
              { title: "Two-factor authentication setup", description: "Enhance security with 2FA protection" }
            ]}
          />

          <Callout type="info" className="mt-4">
            Your Microsoft account is the key to OneNote sync across devices. Ensure it's properly secured with two-factor authentication.
          </Callout>
        </section>

        {/* Sync Settings */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Sync & Storage Configuration
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>SCREENSHOT HERE OF:</strong> Sync settings interface with OneDrive options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Sync Options</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Automatic sync frequency settings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>WiFi-only sync for mobile devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Offline notebook downloads</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Sync conflict resolution preferences</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Storage Management</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>OneDrive storage usage monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Notebook location management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Cache size and cleanup options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Storage optimization settings</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Privacy & Security */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Privacy & Security Settings
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>SCREENSHOT HERE OF:</strong> Privacy settings panel with sharing and security options
            </p>
          </div>

          <FeatureList
            title="Security Features"
            features={[
              { title: "Password protection for individual sections", description: "Secure sensitive content with passwords" },
              { title: "Sharing permissions and access controls", description: "Control who can access your notebooks" },
              { title: "Data encryption and privacy settings", description: "Protect your data with encryption" },
              { title: "Activity monitoring and access logs", description: "Track access and changes to your content" },
              { title: "Third-party app permissions", description: "Manage external app access" },
              { title: "GDPR compliance and data export options", description: "Export data and comply with privacy regulations" }
            ]}
          />

          <Callout type="warning" className="mt-4">
            <strong>Security Tip:</strong> Use section-level password protection for sensitive information, 
            but remember that passwords cannot be recovered if forgotten.
          </Callout>
        </section>

        {/* Appearance & Customization */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Appearance & Customization
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>SCREENSHOT HERE OF:</strong> Appearance settings showing theme and layout options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Visual Settings</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Light, dark, and system theme options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Font size and family preferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Page color and background options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Ruler and grid display settings</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Interface Layout</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Navigation pane visibility and size</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Ribbon interface customization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Quick access toolbar setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Page tabs and section organization</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Backup & Export */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Backup & Export Options
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>SCREENSHOT HERE OF:</strong> Export dialog showing backup and export format options
            </p>
          </div>

          <FeatureList
            title="Backup Strategies"
            features={[
              { title: "Automatic OneDrive cloud backup", description: "Continuous cloud backup of all notebooks" },
              { title: "Manual notebook export to local files", description: "Export notebooks for local storage" },
              { title: "PDF export for archival purposes", description: "Create PDF archives of your notes" },
              { title: "OneNote package (.onepkg) backups", description: "Export in OneNote's native format" },
              { title: "Scheduled backup automation", description: "Set up automatic backup schedules" },
              { title: "Version history and recovery options", description: "Recover previous versions of content" }
            ]}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Export Formats</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• OneNote Package (.onepkg)</li>
                <li>• PDF with annotations</li>
                <li>• Microsoft Word document</li>
                <li>• Web page (HTML)</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Recovery Options</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Notebook recycle bin</li>
                <li>• Version history access</li>
                <li>• Deleted page recovery</li>
                <li>• Sync conflict resolution</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Platform-Specific Settings */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Platform-Specific Configuration
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Windows Settings</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li>• Windows Hello integration</li>
                <li>• Taskbar and system tray options</li>
                <li>• File association preferences</li>
                <li>• Print to OneNote settings</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Mac Settings</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li>• Touch ID authentication</li>
                <li>• Menu bar integration</li>
                <li>• Spotlight search settings</li>
                <li>• Share menu configuration</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Mobile Settings</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li>• Widget configuration</li>
                <li>• Camera and microphone access</li>
                <li>• Notification preferences</li>
                <li>• Battery optimization settings</li>
              </ul>
            </div>
          </div>
        </section>

        <Callout type="success">
          <strong>Configuration Complete:</strong> Take time to properly configure OneNote settings for your workflow. 
          Well-configured settings can significantly improve your productivity and ensure data security.
        </Callout>
      </div>
    </PageLayout>
  );
}
