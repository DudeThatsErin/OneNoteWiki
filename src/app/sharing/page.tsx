import { PageLayout } from '@/components/PageLayout';
import { InfoCard } from '@/components/InfoCard';
import { FeatureList } from '@/components/FeatureList';
import { Callout } from '@/components/Callout';
import { QuickStats } from '@/components/QuickStats';
import { Share2, Users, Lock, Eye, Edit, Shield, Link, Mail } from 'lucide-react';

export default function SharingPage() {
  return (
    <PageLayout
      title="Sharing & Collaboration"
      description="Learn how to share OneNote notebooks and collaborate in real-time. Master permission settings, team workflows, and collaborative note-taking strategies."
      icon={<Share2 className="w-8 h-8 text-purple-600" />}
    >
      {/* Overview */}
      <div className="flex flex-col gap-6 md:gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            OneNote Sharing & Collaboration
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            OneNote's collaboration features enable seamless teamwork and knowledge sharing. 
            From simple notebook sharing to complex team workflows, OneNote provides the tools 
            you need for effective collaborative note-taking and project management.
          </p>
        </div>

        {/* Sharing Stats */}
        <QuickStats
          title="Collaboration Features"
          stats={[
            { label: 'Real-time Editing', value: 'Supported', icon: <Edit className="w-5 h-5" /> },
            { label: 'Permission Levels', value: '3 Types', icon: <Lock className="w-5 h-5" /> },
            { label: 'Share Methods', value: 'Multiple', icon: <Share2 className="w-5 h-5" /> },
            { label: 'Version History', value: 'Automatic', icon: <Users className="w-5 h-5" /> }
          ]}
        />

        {/* Sharing Methods */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Sharing Methods
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>SCREENSHOT HERE OF:</strong> OneNote sharing dialog showing different sharing options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard
              title="Email Invitation"
              description="Send direct invitations with custom permissions"
              icon={<Mail className="w-6 h-6" />}
              variant="purple"
            />
            <InfoCard
              title="Share Link"
              description="Generate shareable links with access controls"
              icon={<Link className="w-6 h-6" />}
              variant="blue"
            />
            <InfoCard
              title="Organization Sharing"
              description="Share within your Microsoft 365 organization"
              icon={<Users className="w-6 h-6" />}
              variant="green"
            />
            <InfoCard
              title="Public Sharing"
              description="Make notebooks publicly viewable on the web"
              icon={<Eye className="w-6 h-6" />}
              variant="orange"
            />
            <InfoCard
              title="Team Integration"
              description="Share through Microsoft Teams channels"
              icon={<Shield className="w-6 h-6" />}
              variant="red"
            />
            <InfoCard
              title="Class Notebooks"
              description="Educational sharing with student/teacher roles"
              icon={<Users className="w-6 h-6" />}
              variant="indigo"
            />
          </div>
        </section>

        {/* Permission Levels */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Permission Levels & Access Control
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>SCREENSHOT HERE OF:</strong> Permission settings interface showing different access levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-blue-600" />
                <h4 className="font-semibold text-gray-900 dark:text-white">View Only</h4>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li>• Read notebook content</li>
                <li>• Search within notebooks</li>
                <li>• Print and export pages</li>
                <li>• Cannot edit or add content</li>
                <li>• Cannot see edit history</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Edit className="w-6 h-6 text-green-600" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Can Edit</h4>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li>• All view permissions</li>
                <li>• Add and edit content</li>
                <li>• Create new pages/sections</li>
                <li>• Cannot share with others</li>
                <li>• Cannot change permissions</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
                <h4 className="font-semibold text-gray-900 dark:text-white">Full Control</h4>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li>• All edit permissions</li>
                <li>• Share with others</li>
                <li>• Change permissions</li>
                <li>• Delete notebook content</li>
                <li>• Manage notebook settings</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Real-time Collaboration */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Real-time Collaboration Features
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>SCREENSHOT HERE OF:</strong> Real-time collaboration showing multiple users editing simultaneously
            </p>
          </div>

          <FeatureList
            title="Collaboration Capabilities"
            features={[
              { title: "See who's currently viewing or editing pages", description: "Track active collaborators in real-time" },
              { title: "Real-time cursor tracking and user presence", description: "See where others are working" },
              { title: "Automatic conflict resolution for simultaneous edits", description: "Seamless handling of concurrent changes" },
              { title: "Live typing indicators and user avatars", description: "Visual feedback for active collaboration" },
              { title: "Instant synchronization across all devices", description: "Changes appear immediately everywhere" },
              { title: "Version history with author attribution", description: "Track who made what changes and when" }
            ]}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Live Collaboration</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• See active collaborators</li>
                <li>• Real-time edit indicators</li>
                <li>• Automatic save and sync</li>
                <li>• Conflict-free editing</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Version Control</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Automatic version history</li>
                <li>• Author identification</li>
                <li>• Restore previous versions</li>
                <li>• Change tracking</li>
              </ul>
            </div>
          </div>

          <Callout type="tip" className="mt-4">
            <strong>Collaboration Tip:</strong> Use different colored pens or text when collaborating to easily 
            identify contributions from different team members.
          </Callout>
        </section>

        {/* Team Workflows */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Team Workflows & Best Practices
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>SCREENSHOT HERE OF:</strong> Team notebook structure with organized sections and pages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Workflow Strategies</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Create dedicated sections for each team member</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Use shared sections for collaborative content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Establish naming conventions for consistency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Regular cleanup and archiving of old content</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Communication Guidelines</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Use tags to indicate status and priority</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Add author names and dates to contributions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Create summary pages for project overviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Use comments for feedback and discussions</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Security & Privacy */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Security & Privacy Considerations
          </h3>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>SCREENSHOT HERE OF:</strong> Security settings and privacy controls for shared notebooks
            </p>
          </div>

          <FeatureList
            title="Security Features"
            features={[
              { title: "Password protection for sensitive sections", description: "Secure sensitive content with passwords" },
              { title: "Expiring share links with time limits", description: "Control access duration with automatic expiration" },
              { title: "Organization-only sharing restrictions", description: "Limit sharing to your organization members" },
              { title: "Audit logs for access and changes", description: "Track who accessed and modified content" },
              { title: "Data encryption in transit and at rest", description: "Enterprise-grade security for all data" },
              { title: "Compliance with enterprise security policies", description: "Meet organizational security requirements" }
            ]}
          />

          <Callout type="warning" className="mt-4">
            <strong>Security Reminder:</strong> Always review sharing permissions before sharing sensitive information. 
            Consider using password-protected sections for confidential content.
          </Callout>
        </section>

        {/* Common Use Cases */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Common Collaboration Use Cases
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Project Management</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li>• Meeting notes and action items</li>
                <li>• Project timelines and milestones</li>
                <li>• Resource sharing and documentation</li>
                <li>• Status updates and reports</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Education</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li>• Class notebooks for students</li>
                <li>• Collaborative research projects</li>
                <li>• Study groups and note sharing</li>
                <li>• Teacher-student feedback loops</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Knowledge Base</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li>• Team documentation and wikis</li>
                <li>• Process and procedure guides</li>
                <li>• Best practices sharing</li>
                <li>• Institutional knowledge capture</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Sharing Troubleshooting
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Common Issues</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Users can't access shared notebooks</li>
                <li>• Sync conflicts in collaborative editing</li>
                <li>• Permission changes not taking effect</li>
                <li>• Missing content after sharing</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solutions</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Verify Microsoft account access</li>
                <li>• Check internet connectivity</li>
                <li>• Refresh sharing permissions</li>
                <li>• Force sync on all devices</li>
              </ul>
            </div>
          </div>
        </section>

        <Callout type="success">
          <strong>Collaboration Success:</strong> Effective OneNote collaboration combines proper setup, 
          clear communication guidelines, and regular maintenance. Start simple and build complexity as your team grows comfortable with the tools.
        </Callout>
      </div>
    </PageLayout>
  );
}
