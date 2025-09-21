import Link from 'next/link';
import { ArrowLeft, Users, Zap, Trophy, Apple, Smartphone, DollarSign, AlertCircle } from 'lucide-react';

const beginnerProjects = [
  {
    title: 'Hello World App',
    description: 'Your first iOS app with basic UI elements and user interaction',
    skills: ['UIKit Basics', 'Storyboard', 'IBOutlet', 'IBAction'],
    difficulty: 'Easy',
    timeEstimate: '1 day'
  },
  {
    title: 'Tip Calculator',
    description: 'Calculate tips and split bills with a clean, user-friendly interface',
    skills: ['Text Fields', 'Labels', 'Basic Math', 'User Input Validation'],
    difficulty: 'Easy',
    timeEstimate: '2 days'
  },
  {
    title: 'Unit Converter',
    description: 'Convert between different units (temperature, length, weight)',
    skills: ['Picker Views', 'Conversion Logic', 'Multiple View Controllers', 'Segmented Controls'],
    difficulty: 'Easy',
    timeEstimate: '2-3 days'
  },
  {
    title: 'Simple To-Do List',
    description: 'Basic task management with add, delete, and mark complete functionality',
    skills: ['Table Views', 'Core Data', 'CRUD Operations', 'User Defaults'],
    difficulty: 'Easy',
    timeEstimate: '3-4 days'
  },
  {
    title: 'Flashcard App',
    description: 'Study app with flip animations and progress tracking',
    skills: ['Animations', 'Data Persistence', 'Gesture Recognizers', 'Progress Tracking'],
    difficulty: 'Easy',
    timeEstimate: '3 days'
  },
  {
    title: 'BMI Calculator',
    description: 'Health app to calculate Body Mass Index with recommendations',
    skills: ['Health Calculations', 'Result Interpretation', 'UI Design', 'Input Validation'],
    difficulty: 'Easy',
    timeEstimate: '2 days'
  },
  {
    title: 'Color Picker',
    description: 'App to create and save custom color palettes',
    skills: ['Color Theory', 'Collection Views', 'Custom Cells', 'Color Persistence'],
    difficulty: 'Easy',
    timeEstimate: '3 days'
  },
  {
    title: 'Simple Calculator',
    description: 'Basic calculator with arithmetic operations and history',
    skills: ['Button Actions', 'Mathematical Operations', 'Display Logic', 'Operation History'],
    difficulty: 'Easy',
    timeEstimate: '2-3 days'
  },
  {
    title: 'Password Generator',
    description: 'Generate secure passwords with customizable options',
    skills: ['Random Generation', 'String Manipulation', 'Security Concepts', 'Settings Screen'],
    difficulty: 'Easy',
    timeEstimate: '2 days'
  },
  {
    title: 'Simple Weather Display',
    description: 'Show current weather conditions for a fixed location',
    skills: ['API Calls', 'JSON Parsing', 'URLSession', 'Error Handling'],
    difficulty: 'Easy',
    timeEstimate: '3-4 days'
  }
];

const intermediateProjects = [
  {
    title: 'Personal Finance Tracker',
    description: 'Track expenses and income with categories and visual charts',
    skills: ['Core Data', 'Charts Framework', 'Data Analysis', 'Category Management'],
    difficulty: 'Medium',
    timeEstimate: '1-2 weeks'
  },
  {
    title: 'Recipe Book',
    description: 'Store and organize recipes with photos and shopping lists',
    skills: ['Image Picker', 'Photo Library', 'Search Functionality', 'Data Relationships'],
    difficulty: 'Medium',
    timeEstimate: '1-2 weeks'
  },
  {
    title: 'Habit Tracker',
    description: 'Track daily habits with streaks and progress visualization',
    skills: ['Calendar Integration', 'Streak Logic', 'Progress Charts', 'Notifications'],
    difficulty: 'Medium',
    timeEstimate: '1-2 weeks'
  },
  {
    title: 'Music Player',
    description: 'Play local music files with playlists and controls',
    skills: ['AVAudioPlayer', 'Media Library', 'Playlist Management', 'Background Audio'],
    difficulty: 'Medium',
    timeEstimate: '2 weeks'
  },
  {
    title: 'Location-based Notes',
    description: 'Create notes tied to specific locations with map integration',
    skills: ['Core Location', 'MapKit', 'Location Services', 'Geofencing'],
    difficulty: 'Medium',
    timeEstimate: '1-2 weeks'
  },
  {
    title: 'QR Code Scanner',
    description: 'Scan QR codes and handle different content types',
    skills: ['AVFoundation', 'Camera Access', 'QR Code Processing', 'URL Handling'],
    difficulty: 'Medium',
    timeEstimate: '1 week'
  },
  {
    title: 'Workout Timer',
    description: 'Interval timer for workouts with custom routines',
    skills: ['Timer Management', 'Audio Feedback', 'Custom Workouts', 'Progress Tracking'],
    difficulty: 'Medium',
    timeEstimate: '1-2 weeks'
  },
  {
    title: 'Photo Journal',
    description: 'Daily photo diary with captions and mood tracking',
    skills: ['Photo Capture', 'Image Processing', 'Journal Entries', 'Mood Analytics'],
    difficulty: 'Medium',
    timeEstimate: '2 weeks'
  },
  {
    title: 'Language Learning Cards',
    description: 'Spaced repetition flashcards for language learning',
    skills: ['Spaced Repetition Algorithm', 'Audio Playback', 'Progress Analytics', 'Card Deck Management'],
    difficulty: 'Medium',
    timeEstimate: '2-3 weeks'
  },
  {
    title: 'Expense Splitter',
    description: 'Split bills among friends with payment tracking',
    skills: ['Contact Integration', 'Bill Splitting Logic', 'Payment Tracking', 'Group Management'],
    difficulty: 'Medium',
    timeEstimate: '1-2 weeks'
  }
];

const advancedProjects = [
  {
    title: 'Social Media App',
    description: 'Full-featured social platform with posts, comments, and messaging',
    skills: ['Firebase Integration', 'Real-time Database', 'User Authentication', 'Image Upload'],
    difficulty: 'Hard',
    timeEstimate: '4-6 weeks'
  },
  {
    title: 'E-commerce App',
    description: 'Shopping app with product catalog, cart, and payment processing',
    skills: ['Payment Integration', 'Shopping Cart Logic', 'Product Management', 'Order Processing'],
    difficulty: 'Hard',
    timeEstimate: '4-6 weeks'
  },
  {
    title: 'Fitness Tracking App',
    description: 'Comprehensive fitness app with workout tracking and health integration',
    skills: ['HealthKit', 'Workout Detection', 'Health Data', 'Activity Tracking'],
    difficulty: 'Hard',
    timeEstimate: '3-4 weeks'
  },
  {
    title: 'Augmented Reality App',
    description: 'AR experience with object detection and virtual object placement',
    skills: ['ARKit', '3D Graphics', 'Object Detection', 'Spatial Computing'],
    difficulty: 'Hard',
    timeEstimate: '4-5 weeks'
  },
  {
    title: 'Real-time Chat App',
    description: 'Messaging app with real-time communication and media sharing',
    skills: ['WebSocket', 'Real-time Messaging', 'Media Sharing', 'Push Notifications'],
    difficulty: 'Hard',
    timeEstimate: '3-4 weeks'
  },
  {
    title: 'Investment Portfolio Tracker',
    description: 'Track stock investments with real-time data and analytics',
    skills: ['Stock APIs', 'Real-time Data', 'Portfolio Analytics', 'Financial Charts'],
    difficulty: 'Hard',
    timeEstimate: '3-4 weeks'
  },
  {
    title: 'AI-Powered Photo Editor',
    description: 'Photo editing app with machine learning filters and effects',
    skills: ['Core ML', 'Image Processing', 'Machine Learning', 'Custom Filters'],
    difficulty: 'Hard',
    timeEstimate: '4-5 weeks'
  },
  {
    title: 'Ride Sharing App',
    description: 'Transportation app with real-time tracking and payment integration',
    skills: ['Real-time Location', 'Route Optimization', 'Payment Processing', 'Driver Matching'],
    difficulty: 'Hard',
    timeEstimate: '5-6 weeks'
  },
  {
    title: 'Smart Home Controller',
    description: 'Control IoT devices with HomeKit integration and automation',
    skills: ['HomeKit', 'IoT Integration', 'Device Control', 'Automation Rules'],
    difficulty: 'Hard',
    timeEstimate: '4-5 weeks'
  },
  {
    title: 'Language Translation App',
    description: 'Real-time translation with camera text recognition and speech',
    skills: ['Vision Framework', 'Speech Recognition', 'Translation APIs', 'Camera Integration'],
    difficulty: 'Hard',
    timeEstimate: '4-5 weeks'
  }
];

export default function SwiftProjectsPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center space-x-2">
        <Link
          href="/project-ideas"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Project Ideas</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">🍎</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Swift & iOS Project Ideas</h1>
            <p className="text-gray-600 dark:text-gray-300">30 iPhone app projects to master iOS development</p>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Swift is Apple's powerful programming language for iOS, macOS, watchOS, and tvOS development. 
          These projects will help you master UIKit, SwiftUI, Core Data, and the iOS ecosystem to build amazing iPhone apps.
        </p>
      </div>

      {/* iPhone Development Requirements */}
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <div className="flex items-start space-x-4">
          <AlertCircle className="w-6 h-6 text-yellow-600 mt-1" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              iPhone App Development Requirements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Financial Requirements
                </h4>
                <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                  <li>• <strong>Apple Developer Program:</strong> $99/year (required for App Store)</li>
                  <li>• <strong>Mac Computer:</strong> $600+ (MacBook Air minimum)</li>
                  <li>• <strong>iPhone for Testing:</strong> $400+ (highly recommended)</li>
                  <li>• <strong>Total Initial Investment:</strong> ~$1,100+</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Apple className="w-4 h-4 mr-2" />
                  Technical Requirements
                </h4>
                <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                  <li>• <strong>macOS:</strong> Required for iOS development</li>
                  <li>• <strong>Xcode:</strong> Free IDE from Apple (Mac App Store)</li>
                  <li>• <strong>Swift:</strong> Apple's modern programming language</li>
                  <li>• <strong>iOS Simulator:</strong> Built into Xcode for testing</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                💡 Getting Started Steps:
              </h4>
              <ol className="text-yellow-800 dark:text-yellow-200 text-sm space-y-1">
                <li>1. Get a Mac computer (MacBook Air/Pro, iMac, or Mac Mini)</li>
                <li>2. Download Xcode from the Mac App Store (free)</li>
                <li>3. Learn Swift programming language fundamentals</li>
                <li>4. Start with simple apps using iOS Simulator</li>
                <li>5. Join Apple Developer Program when ready to test on devices</li>
                <li>6. Submit your app to the App Store for review</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">10</div>
          <div className="text-sm text-green-700 dark:text-green-300">Beginner Projects</div>
        </div>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">10</div>
          <div className="text-sm text-yellow-700 dark:text-yellow-300">Intermediate Projects</div>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">10</div>
          <div className="text-sm text-red-700 dark:text-red-300">Advanced Projects</div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">30</div>
          <div className="text-sm text-blue-700 dark:text-blue-300">Total Projects</div>
        </div>
      </div>

      {/* Beginner Projects */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3">
          <Users className="w-6 h-6 text-green-600" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Beginner Projects
          </h2>
          <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full text-sm font-medium">
            Perfect for learning iOS basics
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {beginnerProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full">
                    {project.difficulty}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{project.timeEstimate}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Skills you'll learn:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intermediate Projects */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3">
          <Zap className="w-6 h-6 text-yellow-600" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Intermediate Projects
          </h2>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 rounded-full text-sm font-medium">
            More complex iOS features
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {intermediateProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 rounded-full">
                    {project.difficulty}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{project.timeEstimate}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Skills you'll learn:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advanced Projects */}
      <section className="space-y-6">
        <div className="flex items-center space-x-3">
          <Trophy className="w-6 h-6 text-red-600" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Advanced Projects
          </h2>
          <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 rounded-full text-sm font-medium">
            Professional iOS apps
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advancedProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-xs px-2 py-1 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 rounded-full">
                    {project.difficulty}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{project.timeEstimate}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Skills you'll learn:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          iOS Development Resources
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Official Resources</h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-2">
              <li>• <a href="https://developer.apple.com/swift/" className="hover:underline">Swift.org</a></li>
              <li>• <a href="https://developer.apple.com/documentation/" className="hover:underline">Apple Developer Docs</a></li>
              <li>• <a href="https://developer.apple.com/tutorials/swiftui" className="hover:underline">SwiftUI Tutorials</a></li>
              <li>• <a href="https://developer.apple.com/design/human-interface-guidelines/" className="hover:underline">HIG Guidelines</a></li>
            </ul>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">Learning Platforms</h3>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-2">
              <li>• <a href="https://www.hackingwithswift.com/" className="hover:underline">Hacking with Swift</a></li>
              <li>• <a href="https://www.raywenderlich.com/" className="hover:underline">Ray Wenderlich</a></li>
              <li>• <a href="https://www.udemy.com/topic/ios-development/" className="hover:underline">Udemy iOS Courses</a></li>
              <li>• <a href="https://cs193p.sites.stanford.edu/" className="hover:underline">Stanford CS193p</a></li>
            </ul>
          </div>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Tools & Libraries</h3>
            <ul className="text-purple-800 dark:text-purple-200 text-sm space-y-2">
              <li>• <a href="https://developer.apple.com/xcode/" className="hover:underline">Xcode IDE</a></li>
              <li>• <a href="https://github.com/Alamofire/Alamofire" className="hover:underline">Alamofire (Networking)</a></li>
              <li>• <a href="https://github.com/realm/realm-swift" className="hover:underline">Realm Database</a></li>
              <li>• <a href="https://firebase.google.com/docs/ios/setup" className="hover:underline">Firebase iOS</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🚀 Ready to Build Your First iPhone App?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Getting Started:</h4>
            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
              <li>• Start with "Hello World App" project</li>
              <li>• Learn Swift fundamentals first</li>
              <li>• Practice with iOS Simulator</li>
              <li>• Join Apple Developer Program when ready</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Alternative Options:</h4>
            <div className="flex flex-wrap gap-2">
              <Link href="/project-ideas/javascript" className="text-xs px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 rounded-full hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-colors">
                React Native
              </Link>
              <Link href="/mobile-development/flutter" className="text-xs px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                Flutter
              </Link>
              <Link href="/mobile-development/expo" className="text-xs px-3 py-1 bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors">
                Expo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
