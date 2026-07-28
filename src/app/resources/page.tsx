import { PageLayout } from '@/components/PageLayout';
import { InfoCard } from '@/components/InfoCard';
import { FeatureList } from '@/components/FeatureList';
import { Package } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <PageLayout
      title="Resources"
      description="Extra references for getting the most out of OneNote: version differences, keyboard shortcuts, third-party tools, and communities to join."
      icon={<Package className="w-8 h-8 text-purple-600" />}
    >
      <div className="flex flex-col gap-8">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 suppressHydrationWarning>OneNote Versions</h2>
          <p>
            Microsoft ships a few different versions of OneNote, and which one you have affects
            which features are available to you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <InfoCard title="OneNote for Windows 10 / Microsoft 365" variant="purple">
              <p>
                The actively developed, modern version bundled with Windows and Microsoft 365.
                Gets new features first and syncs across all platforms.
              </p>
            </InfoCard>

            <InfoCard title="OneNote 2016" variant="purple">
              <p>
                The legacy desktop version with a few power-user features (like custom tags and
                the classic ribbon) that haven&apos;t made it to the modern app yet.
              </p>
            </InfoCard>

            <InfoCard title="OneNote for the web / mobile" variant="purple">
              <p>
                Browser and mobile apps that mirror the modern app&apos;s feature set, letting you
                read and edit notebooks from anywhere.
              </p>
            </InfoCard>
          </div>

          <h2 suppressHydrationWarning>Keyboard Shortcuts</h2>
          <p>A handful of the shortcuts people reach for most often:</p>

          <FeatureList
            title="Common Shortcuts"
            columns={3}
            features={[
              { title: 'Ctrl + N', description: 'Create a new page', icon: '📄' },
              { title: 'Ctrl + Shift + M', description: 'Create a quick note', icon: '📝' },
              { title: 'Ctrl + Alt + N', description: 'Create a new notebook', icon: '📓' },
              { title: 'Ctrl + 1 / 2 / 3', description: 'Apply a tag (To Do, Important, Question)', icon: '🏷️' },
              { title: 'Ctrl + E', description: 'Jump to search', icon: '🔍' },
              { title: 'Ctrl + Alt + D', description: 'Insert the current date and time', icon: '📅' },
            ]}
          />

          <h2 suppressHydrationWarning>Third-Party Tools</h2>
          <p>
            Tools built by the community that extend or connect to OneNote:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>OneTastic:</strong> A macro and add-in framework for OneNote 2016.</li>
            <li><strong>Power Automate:</strong> Automate workflows that read from or write to OneNote notebooks.</li>
            <li><strong>Notion / Obsidian importers:</strong> Community scripts for migrating OneNote exports into other note-taking apps.</li>
          </ul>

          <h2 suppressHydrationWarning>Communities</h2>
          <p>
            Places to ask questions, share templates, and see how other people organize their
            notebooks:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <a href="https://www.reddit.com/r/OneNote/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                r/OneNote
              </a>
              {' '}&mdash; the largest OneNote community on Reddit.
            </li>
            <li>
              <a href="https://discord.gg/5kv4bDUkpc" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                OneNote Wiki Discord
              </a>
              {' '}&mdash; chat in real time and get help from this site&apos;s community.
            </li>
            <li>
              <a href="https://techcommunity.microsoft.com/t5/onenote/ct-p/OneNote" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                Microsoft OneNote Tech Community
              </a>
              {' '}&mdash; official forums moderated by Microsoft staff.
            </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
