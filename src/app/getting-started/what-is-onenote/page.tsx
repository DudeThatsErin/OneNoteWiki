import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';
import { FeatureList } from '@/components/FeatureList';
import { Callout } from '@/components/Callout';
import { FileText } from 'lucide-react';

export default function WhatIsOneNotePage() {
  return (
    <PageLayout
      title="What is OneNote?"
      description="Learn about Microsoft OneNote, the digital note-taking application that helps you organize your thoughts, ideas, and information."
      icon={<FileText className="w-8 h-8 text-purple-600" />}
    >
      <div className="flex flex-col gap-8">
        {/* Hero Section */}
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What is Microsoft OneNote?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Microsoft OneNote is a powerful digital note-taking application that allows you to capture, 
            organize, and share your notes across all your devices.
          </p>
        </div>

        {/* Quick Stats */}
        <QuickStats
          stats={[
            { label: 'Platforms Supported', value: '6+', icon: '🖥️' },
            { label: 'Years in Development', value: '20+', icon: '📅' },
            { label: 'Monthly Active Users', value: '250M+', icon: '👥' },
            { label: 'Free Storage', value: '5GB', icon: '☁️' }
          ]}
        />

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Overview</h2>
          <p>
            OneNote is Microsoft's flagship note-taking application, designed to be your digital notebook 
            for capturing and organizing information. Whether you're a student taking class notes, a 
            professional managing projects, or someone who just wants to keep their thoughts organized, 
            OneNote provides the tools you need.
          </p>

          <div className="my-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
              <strong>SCREENSHOT HERE OF OneNote main interface showing notebooks, sections, and pages in the navigation pane with a sample note containing text, images, and drawings</strong>
            </p>
          </div>

          <FeatureList
            title="Key Features"
            features={[
              {
                title: 'Free-form Canvas',
                description: 'Type, draw, or write anywhere on the page - OneNote adapts to your style',
                icon: '✏️'
              },
              {
                title: 'Cross-platform Sync',
                description: 'Access your notes on Windows, Mac, iOS, Android, and the web',
                icon: '🔄'
              },
              {
                title: 'Rich Media Support',
                description: 'Insert images, audio recordings, videos, and file attachments',
                icon: '📎'
              },
              {
                title: 'Powerful Search',
                description: 'Find text in images, handwritten notes, and audio recordings',
                icon: '🔍'
              },
              {
                title: 'Real-time Collaboration',
                description: 'Share notebooks and work together with others simultaneously',
                icon: '👥'
              },
              {
                title: 'Organizational Structure',
                description: 'Organize with notebooks, sections, and pages for perfect structure',
                icon: '📚'
              }
            ]}
          />

          <h2>OneNote vs. Traditional Note-Taking</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <InfoCard
              title="Traditional Notes"
              color="red"
            >
              <ul className="list-disc list-inside space-y-1">
                <li>Limited to paper or basic text</li>
                <li>Easy to lose or damage</li>
                <li>Difficult to search through</li>
                <li>Hard to share with others</li>
                <li>No backup or sync</li>
                <li>Limited organization options</li>
              </ul>
            </InfoCard>
            <InfoCard
              title="OneNote Digital Notes"
              color="green"
            >
              <ul className="list-disc list-inside space-y-1">
                <li>Rich media: text, images, audio, video</li>
                <li>Automatically saved and backed up</li>
                <li>Powerful search across all content</li>
                <li>Easy sharing and collaboration</li>
                <li>Syncs across all devices</li>
                <li>Flexible organization system</li>
              </ul>
            </InfoCard>
          </div>

          <h2>Who Uses OneNote?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <InfoCard
              title="Students"
              color="blue"
            >
              <ul className="list-disc list-inside space-y-1">
                <li>Class notes and lectures</li>
                <li>Research organization</li>
                <li>Study guides and flashcards</li>
                <li>Group project collaboration</li>
                <li>Assignment tracking</li>
              </ul>
            </InfoCard>
            <InfoCard
              title="Professionals"
              color="purple"
            >
              <ul className="list-disc list-inside space-y-1">
                <li>Meeting notes and minutes</li>
                <li>Project planning and tracking</li>
                <li>Client information management</li>
                <li>Team collaboration</li>
                <li>Knowledge base creation</li>
              </ul>
            </InfoCard>
            <InfoCard
              title="Personal Users"
              color="green"
            >
              <ul className="list-disc list-inside space-y-1">
                <li>Personal journaling</li>
                <li>Recipe collections</li>
                <li>Travel planning</li>
                <li>Hobby documentation</li>
                <li>Family information sharing</li>
              </ul>
            </InfoCard>
          </div>

          <Callout type="tip">
            <strong>Getting Started Tip:</strong> OneNote is completely free to use with a Microsoft account. 
            You get 5GB of free storage, which is enough for thousands of pages of notes!
          </Callout>

          <h2>OneNote Versions</h2>
          <p>
            Microsoft offers several versions of OneNote to meet different needs:
          </p>

          <div className="my-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
              <strong>SCREENSHOT HERE OF OneNote app icons showing OneNote for Windows 10, OneNote 2016, OneNote for Mac, OneNote mobile apps, and OneNote for the web</strong>
            </p>
          </div>

          <ul className="list-disc list-inside space-y-2">
            <li><strong>OneNote for Windows 10/11:</strong> Modern app with touch-friendly interface</li>
            <li><strong>OneNote 2016:</strong> Desktop version with advanced features for power users</li>
            <li><strong>OneNote for Mac:</strong> Native Mac application with macOS integration</li>
            <li><strong>OneNote Mobile:</strong> iOS and Android apps for note-taking on the go</li>
            <li><strong>OneNote for the Web:</strong> Browser-based version accessible anywhere</li>
          </ul>

          <h2>Getting Started</h2>
          <p>
            Ready to start your OneNote journey? Here's what you need to know:
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
            <h3 className="text-lg font-semibold mb-4">Quick Start Checklist</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Create a free Microsoft account (if you don't have one)
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Download OneNote on your primary device
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Create your first notebook
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Add sections and pages to organize your content
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Start taking notes and exploring features
              </li>
            </ul>
          </div>

          <Callout type="info">
            <strong>Next Steps:</strong> Continue to our <a href="/getting-started/installation" className="text-blue-600 dark:text-blue-400 hover:underline">Installation & Setup</a> guide to get OneNote installed on your devices.
          </Callout>
        </div>
      </div>
    </PageLayout>
  );
}
