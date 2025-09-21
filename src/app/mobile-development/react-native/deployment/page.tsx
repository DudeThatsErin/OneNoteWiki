import Link from 'next/link';
import { ArrowLeft, ArrowRight, Upload, Smartphone, Apple, Shield, Settings } from 'lucide-react';

const deploymentSteps = [
  {
    platform: 'Android',
    icon: <Smartphone className="w-6 h-6" />,
    color: 'green',
    steps: [
      {
        title: 'Generate Signed APK/AAB',
        description: 'Create a signed build for Google Play Store',
        commands: [
          '# Generate a signing key',
          'keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000',
          '',
          '# Place keystore in android/app/',
          '# Configure gradle.properties and build.gradle',
          '',
          '# Build signed APK',
          'cd android',
          './gradlew assembleRelease',
          '',
          '# Build signed AAB (recommended for Play Store)',
          './gradlew bundleRelease'
        ]
      },
      {
        title: 'Configure Gradle Files',
        description: 'Set up signing configuration in Android project',
        commands: [
          '// android/gradle.properties',
          'MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore',
          'MYAPP_UPLOAD_KEY_ALIAS=my-key-alias',
          'MYAPP_UPLOAD_STORE_PASSWORD=*****',
          'MYAPP_UPLOAD_KEY_PASSWORD=*****',
          '',
          '// android/app/build.gradle',
          'android {',
          '    signingConfigs {',
          '        release {',
          '            if (project.hasProperty("MYAPP_UPLOAD_STORE_FILE")) {',
          '                storeFile file(MYAPP_UPLOAD_STORE_FILE)',
          '                storePassword MYAPP_UPLOAD_STORE_PASSWORD',
          '                keyAlias MYAPP_UPLOAD_KEY_ALIAS',
          '                keyPassword MYAPP_UPLOAD_KEY_PASSWORD',
          '            }',
          '        }',
          '    }',
          '    buildTypes {',
          '        release {',
          '            signingConfig signingConfigs.release',
          '        }',
          '    }',
          '}'
        ]
      }
    ]
  },
  {
    platform: 'iOS',
    icon: <Apple className="w-6 h-6" />,
    color: 'blue',
    steps: [
      {
        title: 'Configure Xcode Project',
        description: 'Set up signing and provisioning profiles',
        commands: [
          '# Open iOS project in Xcode',
          'open ios/YourApp.xcworkspace',
          '',
          '# In Xcode:',
          '1. Select your project in navigator',
          '2. Go to Signing & Capabilities',
          '3. Select your Team',
          '4. Choose Bundle Identifier',
          '5. Ensure "Automatically manage signing" is checked',
          '',
          '# Build for device',
          'npx react-native run-ios --device',
          '',
          '# Archive for App Store',
          '# Product → Archive in Xcode'
        ]
      },
      {
        title: 'App Store Connect Setup',
        description: 'Prepare app listing and metadata',
        commands: [
          '# Required assets:',
          '- App icons (various sizes)',
          '- Launch screens',
          '- Screenshots for all device sizes',
          '- App description and keywords',
          '- Privacy policy URL',
          '',
          '# Upload build using Xcode Organizer',
          '# or Application Loader',
          '',
          '# Submit for review through',
          '# App Store Connect dashboard'
        ]
      }
    ]
  }
];

const buildOptimizations = [
  {
    title: 'Bundle Size Optimization',
    description: 'Reduce app size for faster downloads',
    techniques: [
      'Enable Proguard/R8 for Android',
      'Use Hermes JavaScript engine',
      'Remove unused dependencies',
      'Optimize images and assets',
      'Use vector graphics when possible',
      'Enable app bundle splitting'
    ],
    example: `// android/app/build.gradle
android {
    buildTypes {
        release {
            minifyEnabled true
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
        }
    }
}

// Enable Hermes
project.ext.react = [
    enableHermes: true
]`
  },
  {
    title: 'Performance Optimization',
    description: 'Improve app startup and runtime performance',
    techniques: [
      'Enable Hermes JavaScript engine',
      'Use Flipper for performance profiling',
      'Optimize images and reduce bundle size',
      'Implement code splitting',
      'Use FlatList for large lists',
      'Minimize bridge calls'
    ],
    example: `// metro.config.js
module.exports = {
  transformer: {
    minifierConfig: {
      keep_fnames: true,
      mangle: {
        keep_fnames: true,
      },
    },
  },
};

// Enable RAM bundles for better startup
project.ext.react = [
    bundleInRelease: true,
    bundleInDebug: false
]`
  }
];

const cicdPipelines = [
  {
    name: 'GitHub Actions',
    description: 'Automated builds and deployments using GitHub Actions',
    example: `# .github/workflows/build.yml
name: Build and Deploy

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-android:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Setup Java
      uses: actions/setup-java@v3
      with:
        distribution: 'temurin'
        java-version: '11'
    
    - name: Build Android
      run: |
        cd android
        ./gradlew assembleRelease
    
    - name: Upload APK
      uses: actions/upload-artifact@v3
      with:
        name: app-release.apk
        path: android/app/build/outputs/apk/release/app-release.apk

  build-ios:
    runs-on: macos-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Install CocoaPods
      run: |
        cd ios
        pod install
    
    - name: Build iOS
      run: |
        npx react-native run-ios --configuration Release`
  },
  {
    name: 'Fastlane',
    description: 'Automate iOS and Android deployments',
    example: `# Gemfile
source "https://rubygems.org"
gem "fastlane"

# fastlane/Fastfile
default_platform(:ios)

platform :ios do
  desc "Build and upload to TestFlight"
  lane :beta do
    build_app(scheme: "YourApp")
    upload_to_testflight
  end
  
  desc "Deploy to App Store"
  lane :release do
    build_app(scheme: "YourApp")
    upload_to_app_store
  end
end

platform :android do
  desc "Deploy to Google Play"
  lane :deploy do
    gradle(task: "bundleRelease")
    upload_to_play_store
  end
end`
  }
];

export default function ReactNativeDeploymentPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/mobile-development/react-native/navigation"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Navigation</span>
        </Link>
        <Link
          href="/mobile-development/react-native"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Back to React Native</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">🚀</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">React Native Deployment</h1>
            <p className="text-gray-600 dark:text-gray-300">Deploy your React Native apps to app stores</p>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Learn how to build, sign, and deploy your React Native applications to Google Play Store 
          and Apple App Store. This guide covers the complete deployment process, optimization 
          techniques, and CI/CD setup.
        </p>
      </div>

      {/* Pre-deployment Checklist */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Pre-deployment Checklist
        </h2>
        
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-4">
            📋 Before You Deploy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">App Configuration</h4>
              <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
                <li>• Update app version and build number</li>
                <li>• Configure app icons for all sizes</li>
                <li>• Set up launch screens/splash screens</li>
                <li>• Update app name and bundle identifier</li>
                <li>• Configure app permissions properly</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Testing & Quality</h4>
              <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
                <li>• Test on real devices (iOS and Android)</li>
                <li>• Verify all features work in release mode</li>
                <li>• Check performance and memory usage</li>
                <li>• Test offline functionality</li>
                <li>• Validate app store guidelines compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platform-specific Deployment */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Platform-specific Deployment
        </h2>
        
        <div className="space-y-8">
          {deploymentSteps.map((platform, index) => (
            <div key={index} className={`bg-${platform.color}-50 dark:bg-${platform.color}-900/20 rounded-lg border border-${platform.color}-200 dark:border-${platform.color}-800 overflow-hidden`}>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`text-${platform.color}-600`}>{platform.icon}</div>
                  <h3 className={`text-2xl font-semibold text-${platform.color}-900 dark:text-${platform.color}-100`}>
                    {platform.platform} Deployment
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {platform.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {step.description}
                      </p>
                      <pre className="text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
                        {step.commands.join('\n')}
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Build Optimization */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Build Optimization
        </h2>
        
        <div className="space-y-6">
          {buildOptimizations.map((optimization, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {optimization.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {optimization.description}
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Techniques:</h4>
                  <ul className="space-y-2">
                    {optimization.techniques.map((technique, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Shield className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{technique}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Configuration:</h4>
                  <pre className="text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
                    {optimization.example}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CI/CD Pipelines */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          CI/CD Automation
        </h2>
        
        <div className="space-y-6">
          {cicdPipelines.map((pipeline, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {pipeline.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {pipeline.description}
              </p>
              <pre className="text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
                {pipeline.example}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* App Store Guidelines */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          App Store Guidelines
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
              🍎 Apple App Store
            </h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-2">
              <li>• Follow Human Interface Guidelines</li>
              <li>• Implement proper privacy policies</li>
              <li>• Use only approved APIs and frameworks</li>
              <li>• Provide clear app descriptions</li>
              <li>• Include proper age ratings</li>
              <li>• Test on multiple iOS versions</li>
              <li>• Avoid duplicate functionality</li>
            </ul>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">
              🤖 Google Play Store
            </h3>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-2">
              <li>• Follow Material Design guidelines</li>
              <li>• Implement proper permissions</li>
              <li>• Provide clear privacy policy</li>
              <li>• Use appropriate content ratings</li>
              <li>• Test on various Android versions</li>
              <li>• Optimize for different screen sizes</li>
              <li>• Follow security best practices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Monitoring & Analytics */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Post-deployment Monitoring
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Crash Reporting</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
              <li>• Crashlytics (Firebase)</li>
              <li>• Sentry</li>
              <li>• Bugsnag</li>
              <li>• App Center Crashes</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Analytics</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
              <li>• Google Analytics</li>
              <li>• Firebase Analytics</li>
              <li>• Mixpanel</li>
              <li>• Amplitude</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Performance</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
              <li>• Firebase Performance</li>
              <li>• New Relic</li>
              <li>• Datadog</li>
              <li>• App Center Analytics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Deployment Checklist */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          🎯 Final Deployment Checklist
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Technical</h4>
            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
              <li>✅ App builds successfully in release mode</li>
              <li>✅ All features tested on real devices</li>
              <li>✅ Performance optimizations applied</li>
              <li>✅ Crash reporting and analytics integrated</li>
              <li>✅ App signed with proper certificates</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Store Submission</h4>
            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
              <li>✅ App store listings completed</li>
              <li>✅ Screenshots and metadata uploaded</li>
              <li>✅ Privacy policy and terms of service ready</li>
              <li>✅ Age ratings and content warnings set</li>
              <li>✅ Release notes prepared</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/mobile-development/react-native/navigation"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Navigation</span>
        </Link>
        <Link
          href="/mobile-development/react-native"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Back to React Native</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
