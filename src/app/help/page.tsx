import { PageLayout } from '@/components/PageLayout';
import { InfoCard } from '@/components/InfoCard';
import { Callout } from '@/components/Callout';
import { HelpCircle } from 'lucide-react';

export default function HelpPage() {
  return (
    <PageLayout
      title="Help & Support"
      description="Get help with OneNote, find answers to common questions, and connect with the OneNote community."
      icon={<HelpCircle className="w-8 h-8 text-purple-600" />}
    >
      <div className="flex flex-col gap-8">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-default">Getting Help</h2>
          <p className="text-muted">
            Whether you're new to OneNote or an experienced user, there are many resources available to help you succeed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <InfoCard
              title="Official Microsoft Support"
              variant="gray"
            >
              <ul className="list-disc list-inside space-y-2 text-muted">
                <li><a href="https://support.microsoft.com/onenote" className="accent-purple hover:underline">Microsoft OneNote Help Center</a></li>
                <li><a href="https://techcommunity.microsoft.com/t5/onenote/ct-p/OneNote" className="accent-purple hover:underline">OneNote Tech Community</a></li>
                <li><a href="https://www.microsoft.com/en-us/microsoft-365/onenote/digital-note-taking-app" className="accent-purple hover:underline">OneNote Product Page</a></li>
                <li>In-app help and tutorials</li>
              </ul>
            </InfoCard>
            <InfoCard
              title="Community Resources"
              variant="purple"
            >
              <ul className="list-disc list-inside space-y-2 text-muted">
                <li><a href="https://www.reddit.com/r/OneNote/" className="accent-purple hover:underline">r/OneNote Subreddit</a></li>
                <li><a href="https://discord.gg/5kv4bDUkpc" className="accent-purple hover:underline">OneNote Discord Community</a></li>
                <li>YouTube tutorials and guides</li>
                <li>OneNote user forums and blogs</li>
              </ul>
            </InfoCard>
          </div>

          <h2 className="text-default">Common Issues & Solutions</h2>
          <p className="text-muted">
            Here are solutions to the most frequently encountered OneNote problems:
          </p>

          <div className="space-y-6 my-8">
            <Callout type="info">
              <strong>Sync Issues:</strong> If your notes aren't syncing across devices, check your internet connection, ensure you're signed in to the same Microsoft account, and try manually syncing by pressing Ctrl+S (Windows) or Cmd+S (Mac).
            </Callout>

            <Callout type="warning">
              <strong>Missing Notes:</strong> If notes appear to be missing, check the OneNote Recycle Bin (File &gt; History &gt; Notebook Recycle Bin) and verify you're looking in the correct notebook and section.
            </Callout>

            <Callout type="tip">
              <strong>Performance Issues:</strong> If OneNote is running slowly, try closing other applications, restarting OneNote, or clearing the OneNote cache through the application settings.
            </Callout>

            <Callout type="error">
              <strong>Can't Open Notebooks:</strong> If you can't access a notebook, ensure you have the correct permissions, check if the notebook is shared properly, and verify your Microsoft account has access.
            </Callout>
          </div>

          <h2 className="text-default">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <details className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <summary className="text-xl font-extrabold cursor-pointer text-default py-3 px-2">How much does OneNote cost?</summary>
              <p className="mt-4 text-muted px-2">
                OneNote is completely free to use with a Microsoft account. You get 5GB of free storage with OneDrive, which is typically enough for thousands of pages of notes.
              </p>
            </details>

            <details className="accent-purple-bg p-6 rounded-lg border">
              <summary className="text-xl font-extrabold cursor-pointer text-default py-3 px-2">Can I use OneNote offline?</summary>
              <p className="mt-4 text-muted px-2">
                Yes! OneNote works offline and will sync your changes when you reconnect to the internet. However, some features like real-time collaboration require an internet connection.
              </p>
            </details>

            <details className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <summary className="text-xl font-extrabold cursor-pointer text-default py-3 px-2">What's the difference between OneNote versions?</summary>
              <p className="mt-4 text-muted px-2">
                There are several OneNote versions: OneNote for Windows 10/11 (modern app), OneNote 2016 (desktop version), OneNote for Mac, mobile apps, and the web version. Each has slightly different features, but all sync to the same notebooks.
              </p>
            </details>

            <details className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <summary className="text-xl font-extrabold cursor-pointer text-default py-3 px-2">How do I backup my OneNote data?</summary>
              <p className="mt-4 text-muted px-2">
                OneNote automatically backs up your data to OneDrive. For additional backup, you can export notebooks to PDF or use the File &gt; Export feature to save local copies.
              </p>
            </details>

            <details className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <summary className="text-xl font-extrabold cursor-pointer text-default py-3 px-2">Can I import notes from other apps?</summary>
              <p className="mt-4 text-muted px-2">
                Yes! OneNote can import from many sources including Evernote, PDF files, Word documents, and more. Use the File &gt; Export feature or the OneNote Importer tool.
              </p>
            </details>
          </div>

          <h2 className="text-default">Contact Support</h2>
          <p className="text-muted">
            If you can't find the answer to your question, here are ways to get additional help:
          </p>

          <ul className="list-disc list-inside space-y-2 text-muted">
            <li><strong className="text-default">Microsoft Support:</strong> Use the built-in help in OneNote or visit the Microsoft Support website</li>
            <li><strong className="text-default">Community Forums:</strong> Post questions in the OneNote subreddit or Discord community</li>
            <li><strong className="text-default">Social Media:</strong> Follow @msonenote on Twitter for updates and tips</li>
            <li><strong className="text-default">Feedback:</strong> Use the feedback option in OneNote to report bugs or suggest features</li>
          </ul>

          <div className="my-8 p-4 accent-purple-bg rounded-lg">
            <p className="text-center text-sm text-subtle mb-2">
              <strong>SCREENSHOT HERE OF OneNote's Help menu showing options like "Help", "What's New", "Send Feedback", and "Contact Support"</strong>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
