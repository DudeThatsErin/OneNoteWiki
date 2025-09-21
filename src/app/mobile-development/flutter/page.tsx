import Link from 'next/link';
import { ArrowLeft, ArrowRight, Smartphone, Code, Zap, Globe } from 'lucide-react';

const flutterFeatures = [
  {
    title: 'Single Codebase',
    description: 'Write once, run on iOS, Android, web, and desktop',
    icon: <Code className="w-5 h-5" />,
    details: 'Flutter allows you to build apps for multiple platforms from a single codebase'
  },
  {
    title: 'Fast Development',
    description: 'Hot reload for instant code changes and rapid iteration',
    icon: <Zap className="w-5 h-5" />,
    details: 'See changes instantly without losing app state during development'
  },
  {
    title: 'Native Performance',
    description: 'Compiled to native ARM code for optimal performance',
    icon: <Smartphone className="w-5 h-5" />,
    details: 'Flutter apps compile to native code, providing excellent performance'
  },
  {
    title: 'Rich UI Widgets',
    description: 'Extensive library of customizable Material and Cupertino widgets',
    icon: <Globe className="w-5 h-5" />,
    details: 'Build beautiful UIs with Flutter\'s comprehensive widget library'
  }
];

export default function FlutterPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/mobile-development"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Mobile Development</span>
        </Link>
        <Link
          href="/mobile-development/java-android"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Next: Java Android</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">🐦</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Flutter</h1>
            <p className="text-gray-600 dark:text-gray-300">Google's UI toolkit for building beautiful apps</p>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, 
          web, and desktop from a single codebase. Using the Dart programming language, Flutter provides 
          fast development cycles and expressive UIs.
        </p>
      </div>

      {/* Key Features */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Why Choose Flutter?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {flutterFeatures.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-3">
                <div className="text-blue-600">{feature.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{feature.description}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">{feature.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Getting Started */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Getting Started</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Installation</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`# Install Flutter SDK
# Download from https://flutter.dev/docs/get-started/install

# Verify installation
flutter doctor

# Create a new Flutter project
flutter create my_app

# Navigate to project directory
cd my_app

# Run the app
flutter run`}
          </pre>
        </div>
      </section>

      {/* Basic Example */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Basic Flutter App</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key? key, required this.title}) : super(key: key);
  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'You have pushed the button this many times:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ),
    );
  }
}`}
          </pre>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Learning Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Official Resources</h3>
            <ul className="text-blue-800 dark:text-blue-200 text-sm space-y-2">
              <li>• <a href="https://flutter.dev/" className="hover:underline">Flutter Official Site</a></li>
              <li>• <a href="https://flutter.dev/docs" className="hover:underline">Flutter Documentation</a></li>
              <li>• <a href="https://dart.dev/" className="hover:underline">Dart Language</a></li>
              <li>• <a href="https://flutter.dev/docs/cookbook" className="hover:underline">Flutter Cookbook</a></li>
            </ul>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">Popular Packages</h3>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-2">
              <li>• <a href="https://pub.dev/packages/http" className="hover:underline">HTTP (Networking)</a></li>
              <li>• <a href="https://pub.dev/packages/provider" className="hover:underline">Provider (State Management)</a></li>
              <li>• <a href="https://pub.dev/packages/shared_preferences" className="hover:underline">Shared Preferences</a></li>
              <li>• <a href="https://pub.dev/packages/sqflite" className="hover:underline">SQLite Database</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Project Ideas */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Project Ideas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Beginner Projects</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
              <li>• Counter App with State Management</li>
              <li>• To-Do List with Local Storage</li>
              <li>• Weather App with API Integration</li>
              <li>• Calculator with Custom UI</li>
              <li>• Simple Quiz App</li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Advanced Projects</h3>
            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
              <li>• E-commerce App with Payment Integration</li>
              <li>• Social Media App with Real-time Chat</li>
              <li>• Fitness Tracker with Health Integration</li>
              <li>• Photo Editing App with Custom Widgets</li>
              <li>• Multi-platform Desktop App</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/mobile-development"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Mobile Development</span>
        </Link>
        <Link
          href="/mobile-development/java-android"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: Java Android</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
