import Link from 'next/link';
import { ArrowLeft, ArrowRight, Monitor, Smartphone, Download, Settings, CheckCircle, AlertCircle } from 'lucide-react';

const setupSteps = [
  {
    title: 'Install Node.js',
    description: 'React Native requires Node.js 16 or newer',
    icon: <Download className="w-5 h-5" />,
    steps: [
      'Download Node.js from nodejs.org (LTS version recommended)',
      'Run the installer and follow the setup wizard',
      'Verify installation: node --version && npm --version',
      'Should show Node.js 16+ and npm 8+'
    ],
    code: `# Verify Node.js installation
node --version  # Should be 16.0.0 or higher
npm --version   # Should be 8.0.0 or higher

# Alternative: Use Node Version Manager (nvm)
# Windows: Install nvm-windows
# macOS/Linux: Install nvm
nvm install 18
nvm use 18`
  },
  {
    title: 'Install React Native CLI',
    description: 'Command line interface for React Native development',
    icon: <Settings className="w-5 h-5" />,
    steps: [
      'Install React Native CLI globally',
      'This provides the react-native command',
      'Alternative: Use npx for one-time usage',
      'Verify installation with version check'
    ],
    code: `# Install React Native CLI globally
npm install -g @react-native-community/cli

# Verify installation
npx react-native --version

# Alternative: Use npx (no global install needed)
npx react-native init MyProject`
  },
  {
    title: 'Android Development Setup',
    description: 'Set up Android Studio and SDK for Android development',
    icon: <Smartphone className="w-5 h-5" />,
    steps: [
      'Download and install Android Studio',
      'Install Android SDK (API level 31 or higher)',
      'Set up Android Virtual Device (AVD)',
      'Configure environment variables'
    ],
    code: `# Environment Variables (add to ~/.bashrc or ~/.zshrc)
export ANDROID_HOME=$HOME/Library/Android/sdk  # macOS
export ANDROID_HOME=%LOCALAPPDATA%\\Android\\Sdk  # Windows

export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools

# Verify Android setup
adb --version
emulator -list-avds`
  },
  {
    title: 'iOS Development Setup (macOS only)',
    description: 'Set up Xcode and iOS Simulator for iOS development',
    icon: <Monitor className="w-5 h-5" />,
    steps: [
      'Install Xcode from Mac App Store',
      'Install Xcode Command Line Tools',
      'Install CocoaPods for dependency management',
      'Accept Xcode license agreement'
    ],
    code: `# Install Xcode Command Line Tools
xcode-select --install

# Install CocoaPods
sudo gem install cocoapods

# Alternative: Install via Homebrew
brew install cocoapods

# Verify iOS setup
xcodebuild -version
pod --version

# Accept Xcode license
sudo xcodebuild -license accept`
  }
];

const troubleshooting = [
  {
    issue: 'Metro bundler fails to start',
    solution: 'Clear Metro cache and restart',
    code: `npx react-native start --reset-cache
# or
rm -rf node_modules && npm install`
  },
  {
    issue: 'Android build fails',
    solution: 'Check Android SDK and environment variables',
    code: `# Verify Android environment
echo $ANDROID_HOME
adb devices

# Clean and rebuild
cd android && ./gradlew clean && cd ..
npx react-native run-android`
  },
  {
    issue: 'iOS build fails',
    solution: 'Clean iOS build and reinstall pods',
    code: `# Clean iOS build
cd ios && rm -rf build && cd ..
cd ios && pod install && cd ..

# Clean Xcode derived data
rm -rf ~/Library/Developer/Xcode/DerivedData`
  },
  {
    issue: 'Port 8081 already in use',
    solution: 'Kill existing Metro process or use different port',
    code: `# Kill process on port 8081
lsof -ti:8081 | xargs kill -9

# Or start on different port
npx react-native start --port 8082`
  }
];

export default function ReactNativeSetupPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/mobile-development/react-native"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to React Native</span>
        </Link>
        <Link
          href="/mobile-development/react-native/components"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Next: Components & UI</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">⚙️</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">React Native Setup & Environment</h1>
            <p className="text-gray-600 dark:text-gray-300">Complete development environment setup guide</p>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Setting up React Native development environment properly is crucial for a smooth development experience. 
          This guide covers everything from Node.js installation to platform-specific setup for both Android and iOS.
        </p>
      </div>

      {/* Prerequisites */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
          📋 Prerequisites
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">System Requirements</h4>
            <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
              <li>• Windows 10+, macOS 10.15+, or Linux</li>
              <li>• 8GB RAM minimum (16GB recommended)</li>
              <li>• 50GB free disk space</li>
              <li>• Stable internet connection</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Knowledge Prerequisites</h4>
            <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
              <li>• JavaScript fundamentals</li>
              <li>• React basics (components, props, state)</li>
              <li>• Command line/terminal usage</li>
              <li>• Basic understanding of mobile development</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Setup Steps */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Development Environment Setup
        </h2>
        
        <div className="space-y-8">
          {setupSteps.map((step, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  <div className="text-blue-600">{step.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Step-by-step instructions:</h4>
                    <ol className="space-y-2">
                      {step.steps.map((instruction, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Commands:</h4>
                    <pre className="text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
                      {step.code}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Create First Project */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Create Your First React Native Project
        </h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Start Commands</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`# Create a new React Native project
npx react-native init AwesomeProject

# Navigate to project directory
cd AwesomeProject

# Start Metro bundler (keep this running)
npx react-native start

# In another terminal, run on Android
npx react-native run-android

# Or run on iOS (macOS only)
npx react-native run-ios

# Run on specific iOS simulator
npx react-native run-ios --simulator="iPhone 14 Pro"`}
          </pre>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
          <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">
            ✅ Verify Your Setup
          </h3>
          <p className="text-green-800 dark:text-green-200 text-sm mb-3">
            After running the commands above, you should see:
          </p>
          <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
            <li>• Metro bundler running on http://localhost:8081</li>
            <li>• Your app running on Android emulator or iOS simulator</li>
            <li>• "Welcome to React Native" screen displayed</li>
            <li>• Hot reloading working when you save changes</li>
          </ul>
        </div>
      </section>

      {/* Development Tools */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Recommended Development Tools
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Code Editors</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
              <li>• <strong>VS Code</strong> - Most popular, great extensions</li>
              <li>• <strong>WebStorm</strong> - Full-featured IDE</li>
              <li>• <strong>Atom</strong> - Lightweight and customizable</li>
              <li>• <strong>Sublime Text</strong> - Fast and minimal</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">VS Code Extensions</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
              <li>• <strong>React Native Tools</strong> - Debugging support</li>
              <li>• <strong>ES7+ React/Redux/RN snippets</strong> - Code snippets</li>
              <li>• <strong>Prettier</strong> - Code formatting</li>
              <li>• <strong>ESLint</strong> - Code linting</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Debugging Tools</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
              <li>• <strong>React DevTools</strong> - Component inspection</li>
              <li>• <strong>Flipper</strong> - Advanced debugging platform</li>
              <li>• <strong>Reactotron</strong> - Real-time inspection</li>
              <li>• <strong>Chrome DevTools</strong> - Network and console</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Common Issues & Troubleshooting
        </h2>
        
        <div className="space-y-4">
          {troubleshooting.map((item, index) => (
            <div key={index} className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <div className="flex items-start space-x-3 mb-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-yellow-900 dark:text-yellow-100">{item.issue}</h3>
                  <p className="text-yellow-800 dark:text-yellow-200 text-sm">{item.solution}</p>
                </div>
              </div>
              <pre className="text-sm text-yellow-700 dark:text-yellow-300 bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded overflow-x-auto">
                {item.code}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🎉 Setup Complete! What's Next?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Learn the Basics</h4>
            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
              <li>• Understand React Native components</li>
              <li>• Learn about styling with StyleSheet</li>
              <li>• Practice with basic UI elements</li>
              <li>• Explore navigation patterns</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Build Your First App</h4>
            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
              <li>• Start with a simple to-do list</li>
              <li>• Add navigation between screens</li>
              <li>• Implement data persistence</li>
              <li>• Test on real devices</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/mobile-development/react-native"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to React Native</span>
        </Link>
        <Link
          href="/mobile-development/react-native/components"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: Components & UI</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
