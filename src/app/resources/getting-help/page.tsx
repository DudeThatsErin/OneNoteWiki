import { HelpCircle, MessageSquare, Code2, ExternalLink } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';

export default function GettingHelpPage() {
  return (
    <PageLayout
      title="Getting Help Online"
      description="Learn how to ask effective questions and get the help you need from online programming communities."
      icon={<HelpCircle className="w-8 h-8 text-red-600" />}
      previousLink={{
        href: "/resources/learning-guides",
        label: "Previous: Learning Guides"
      }}
      nextLink={{
        href: "/resources/search-tips",
        label: "Next: Search Tips"
      }}
    >

      {/* How to Ask Questions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🆘 How to Ask Questions Effectively
        </h3>
        <div className="flex flex-col gap-6">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded border border-gray-200 dark:border-gray-600">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">📋 Before You Ask:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>Search for existing solutions (Google, Stack Overflow, documentation)</li>
              <li>Try to solve it yourself first - show your attempts</li>
              <li>Read the error message carefully</li>
              <li>Create a minimal reproducible example</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded border border-gray-200 dark:border-gray-600">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✅ When You Ask:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>Be specific about what you're trying to achieve</li>
              <li>Include relevant code, error messages, and context</li>
              <li>Mention what you've already tried</li>
              <li>Use proper formatting (code blocks, etc.)</li>
              <li>Be patient and respectful</li>
            </ul>
          </div>
          
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded border border-red-200 dark:border-red-800">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">🚫 Don't Ask to Ask!</h4>
            <p className="text-red-800 dark:text-red-200 text-sm mb-2">
              Instead of "Can someone help me with JavaScript?" or "Is anyone here good with Python?", 
              just ask your specific question directly.
            </p>
            <a
              href="https://dontasktoask.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-red-600 dark:text-red-400 hover:underline text-sm font-medium"
            >
              📖 Read "Don't Ask to Ask" <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Code Sharing and Communities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Code Sharing */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="w-6 h-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Code Sharing Platforms
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Quick Snippets:</h4>
              <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
                <li>
                  <a href="https://codepen.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    CodePen
                  </a> - HTML, CSS, JS playground
                </li>
                <li>
                  <a href="https://jsfiddle.net" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    JSFiddle
                  </a> - Web development testing
                </li>
                <li>
                  <a href="https://replit.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Replit
                  </a> - Full development environment
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Full Projects:</h4>
              <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
                <li>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    GitHub
                  </a> - Version control and collaboration
                </li>
                <li>
                  <a href="https://pastebin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Pastebin
                  </a> - Simple code sharing
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Best Communities */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="w-6 h-6 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Best Communities for Help
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Q&A Platforms:</h4>
              <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
                <li>
                  <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Stack Overflow
                  </a> - Programming Q&A
                </li>
                <li>
                  <a href="https://reddit.com/r/learnprogramming" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    r/learnprogramming
                  </a> - Beginner-friendly
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Real-time Chat:</h4>
              <ul className="text-gray-600 dark:text-gray-300 text-sm [&>li]:mb-1">
                <li>
                  <a href="https://discord.gg/programming" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Programming Discord
                  </a> - Live help
                </li>
                <li>
                  <a href="https://reddit.com/r/CodingHelp" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    r/CodingHelp
                  </a> - Our community!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Question Template */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
          📝 Question Template
        </h3>
        <div className="bg-white dark:bg-gray-800 p-4 rounded border border-blue-200 dark:border-blue-700">
          <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
{`**What I'm trying to do:**
[Describe your goal clearly]

**What I expected:**
[What you thought would happen]

**What actually happened:**
[What actually happened, include error messages]

**My code:**
\`\`\`javascript
// Your minimal reproducible code here
\`\`\`

**What I've tried:**
- [List your attempts]
- [Include research you've done]

**Environment:**
- Language/Framework: [e.g., JavaScript, React]
- Version: [if relevant]
- Browser/OS: [if relevant]`}
          </pre>
        </div>
      </div>

      {/* Etiquette Tips */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🤝 Community Etiquette
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Do:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>Search before asking</li>
              <li>Be specific and clear</li>
              <li>Show your code and attempts</li>
              <li>Thank people who help</li>
              <li>Mark solutions as accepted</li>
              <li>Help others when you can</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Don't:</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm [&>li]:mb-1">
              <li>Ask for complete solutions</li>
              <li>Post homework without effort</li>
              <li>Bump your questions repeatedly</li>
              <li>Be rude or impatient</li>
              <li>Cross-post to multiple places</li>
              <li>Use vague titles like "Help!"</li>
            </ul>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
