import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';
import { GettingStartedSection } from '@/components/GettingStartedSection';
import { Callout } from '@/components/Callout';

export default function FirstNotebookPage() {
  return (
    <PageLayout
      title="Creating Your First Notebook"
      description="Learn how to create and set up your first OneNote notebook with step-by-step instructions and best practices."
    >
      <div className="flex flex-col gap-8">
        {/* Hero Section */}
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Creating Your First Notebook
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get started with OneNote by creating your first notebook. We'll walk you through the process 
            step-by-step and share best practices for organizing your notes.
          </p>
        </div>

        {/* Quick Overview */}
        <QuickStats
          stats={[
            { label: 'Steps to Create', value: '3', icon: '📝' },
            { label: 'Time Required', value: '2 min', icon: '⏱️' },
            { label: 'Difficulty', value: 'Easy', icon: '🟢' },
            { label: 'Platforms', value: 'All', icon: '🌐' }
          ]}
        />

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>What is a Notebook?</h2>
          <p>
            In OneNote, a <strong>notebook</strong> is the top-level container for all your notes. Think of it 
            as a digital binder that contains sections (like divider tabs) and pages (like sheets of paper). 
            You can create multiple notebooks for different purposes - one for work, one for personal use, 
            one for a specific project, etc.
          </p>

          <div className="my-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
              <strong>SCREENSHOT HERE OF OneNote interface showing the notebook hierarchy: Notebook > Section > Page structure in the navigation pane</strong>
            </p>
          </div>

          <h2>Creating Your First Notebook</h2>
          
          <GettingStartedSection
            title="Method 1: Creating a Notebook in OneNote Desktop"
            steps={[
              {
                title: "Open OneNote",
                description: "Launch OneNote on your computer. If this is your first time, you'll see a welcome screen.",
                code: "File > New > Notebook"
              },
              {
                title: "Click 'Create Notebook'",
                description: "Look for the 'Create Notebook' or 'New' button, usually found in the File menu or on the start screen."
              },
              {
                title: "Choose a Name",
                description: "Enter a descriptive name for your notebook. Good examples: 'Work Notes', 'Personal Journal', 'Project Alpha'."
              },
              {
                title: "Select Storage Location",
                description: "Choose where to store your notebook - OneDrive (recommended for sync) or locally on your computer."
              },
              {
                title: "Create and Start Using",
                description: "Click 'Create' and your notebook will be ready to use with a default section and page."
              }
            ]}
          />

          <div className="my-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
              <strong>SCREENSHOT HERE OF the "Create Notebook" dialog box showing name field, storage location options (OneDrive vs This PC), and Create button</strong>
            </p>
          </div>

          <GettingStartedSection
            title="Method 2: Creating a Notebook on OneNote Web"
            steps={[
              {
                title: "Go to OneNote.com",
                description: "Open your web browser and navigate to onenote.com. Sign in with your Microsoft account."
              },
              {
                title: "Click 'New Notebook'",
                description: "Look for the '+ New notebook' button on the main page or in the notebooks list."
              },
              {
                title: "Enter Notebook Details",
                description: "Provide a name for your notebook. Web version automatically saves to OneDrive."
              },
              {
                title: "Start Taking Notes",
                description: "Your notebook opens immediately with a blank page ready for your first notes."
              }
            ]}
          />

          <div className="my-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
              <strong>SCREENSHOT HERE OF OneNote.com interface showing the "New notebook" button and the notebook creation form</strong>
            </p>
          </div>

          <h2>Notebook Naming Best Practices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <InfoCard
              title="Good Notebook Names"
              color="green"
              items={[
                'Work Projects 2024',
                'Personal Journal',
                'Marketing Campaign Notes',
                'Study Notes - Biology',
                'Home Renovation Planning',
                'Meeting Notes - Team Alpha'
              ]}
            />
            <InfoCard
              title="Avoid These Names"
              color="red"
              items={[
                'Notebook1, Notebook2',
                'Notes (too generic)',
                'Untitled',
                'asdfgh (random characters)',
                'New Notebook',
                'Temporary'
              ]}
            />
          </div>

          <Callout type="tip">
            <strong>Pro Tip:</strong> Use descriptive names that will make sense to you months later. Include the year or project name to keep things organized as you create more notebooks.
          </Callout>

          <h2>Understanding Notebook Structure</h2>
          <p>
            Once you create your notebook, you'll see the three-level hierarchy that makes OneNote so powerful:
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h4 className="font-semibold">Notebook Level</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">The main container (e.g., "Work Notes")</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h4 className="font-semibold">Section Level</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Categories within the notebook (e.g., "Meetings", "Projects")</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h4 className="font-semibold">Page Level</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Individual notes within sections (e.g., "Weekly Team Meeting - Jan 15")</p>
                </div>
              </div>
            </div>
          </div>

          <div className="my-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
              <strong>SCREENSHOT HERE OF a newly created notebook showing the default "New Section 1" and "Untitled page" with the three-level structure clearly visible in the navigation</strong>
            </p>
          </div>

          <h2>Setting Up Your First Sections</h2>
          <p>
            After creating your notebook, you'll want to add sections to organize your content. Here are some common section structures:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <InfoCard
              title="Work Notebook"
              color="blue"
              items={[
                'Daily Notes',
                'Meeting Minutes',
                'Project Planning',
                'Ideas & Brainstorming',
                'Reference Materials'
              ]}
            />
            <InfoCard
              title="Student Notebook"
              color="purple"
              items={[
                'Lecture Notes',
                'Assignments',
                'Study Guides',
                'Research',
                'Class Schedule'
              ]}
            />
            <InfoCard
              title="Personal Notebook"
              color="green"
              items={[
                'Daily Journal',
                'Goals & Plans',
                'Recipes',
                'Travel Planning',
                'Health & Fitness'
              ]}
            />
          </div>

          <h2>Adding Your First Section</h2>
          
          <GettingStartedSection
            title="Creating a New Section"
            steps={[
              {
                title: "Right-click on Sections Area",
                description: "In the navigation pane, right-click in the sections area (where you see 'New Section 1')."
              },
              {
                title: "Select 'New Section'",
                description: "Choose 'New Section' from the context menu that appears."
              },
              {
                title: "Name Your Section",
                description: "Type a descriptive name for your section (e.g., 'Meeting Notes', 'Daily Tasks')."
              },
              {
                title: "Press Enter",
                description: "Press Enter to confirm the section name. Your new section is now ready to use."
              }
            ]}
          />

          <div className="my-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
              <strong>SCREENSHOT HERE OF the right-click context menu showing "New Section" option and the process of renaming a section</strong>
            </p>
          </div>

          <Callout type="success">
            <strong>Congratulations!</strong> You've successfully created your first OneNote notebook and learned the basic structure. You're now ready to start taking notes and exploring more advanced features.
          </Callout>

          <h2>Next Steps</h2>
          <p>
            Now that you have your first notebook set up, here's what to explore next:
          </p>

          <ul className="list-disc list-inside space-y-2 my-6">
            <li><a href="/getting-started/navigation" className="text-blue-600 dark:text-blue-400 hover:underline">Learn Basic Navigation</a> - Master moving around OneNote efficiently</li>
            <li><a href="/features/text-formatting" className="text-blue-600 dark:text-blue-400 hover:underline">Text Formatting</a> - Make your notes look professional</li>
            <li><a href="/notebooks/organization" className="text-blue-600 dark:text-blue-400 hover:underline">Organization Tips</a> - Best practices for keeping notes organized</li>
            <li><a href="/features/drawing" className="text-blue-600 dark:text-blue-400 hover:underline">Drawing & Handwriting</a> - Add visual elements to your notes</li>
          </ul>

          <Callout type="info">
            <strong>Remember:</strong> OneNote automatically saves your work, so you never have to worry about losing your notes. Everything syncs across your devices when connected to the internet.
          </Callout>
        </div>
      </div>
    </PageLayout>
  );
}
