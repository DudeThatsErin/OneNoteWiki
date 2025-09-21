import Link from 'next/link';
import { ArrowLeft, ArrowRight, Navigation, Layers, Menu, ArrowUpDown } from 'lucide-react';

const navigationTypes = [
  {
    name: 'Stack Navigation',
    description: 'Navigate between screens in a stack-like manner',
    icon: <Layers className="w-5 h-5" />,
    useCase: 'Perfect for hierarchical navigation like Settings → Profile → Edit Profile',
    installation: 'npm install @react-navigation/native @react-navigation/native-stack',
    example: `import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen}
          options={{ title: 'Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}`
  },
  {
    name: 'Tab Navigation',
    description: 'Bottom tab navigation for main app sections',
    icon: <Menu className="w-5 h-5" />,
    useCase: 'Main app navigation like Home, Search, Profile, Settings tabs',
    installation: 'npm install @react-navigation/bottom-tabs',
    example: `import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}`
  },
  {
    name: 'Drawer Navigation',
    description: 'Side drawer navigation for additional options',
    icon: <ArrowUpDown className="w-5 h-5" />,
    useCase: 'Secondary navigation, user menu, or app settings access',
    installation: 'npm install @react-navigation/drawer react-native-gesture-handler react-native-reanimated',
    example: `import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
        drawerActiveTintColor: '#e91e63',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}`
  }
];

const navigationHooks = [
  {
    name: 'useNavigation',
    description: 'Access navigation object from any component',
    example: `import { useNavigation } from '@react-navigation/native';

function MyComponent() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', { itemId: 86 })}
    >
      <Text>Go to Details</Text>
    </TouchableOpacity>
  );
}`
  },
  {
    name: 'useRoute',
    description: 'Access route object and parameters',
    example: `import { useRoute } from '@react-navigation/native';

function DetailsScreen() {
  const route = useRoute();
  const { itemId, otherParam } = route.params;

  return (
    <View>
      <Text>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
      <Text>Other Param: {otherParam}</Text>
    </View>
  );
}`
  },
  {
    name: 'useFocusEffect',
    description: 'Run side effects when screen comes into focus',
    example: `import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

function ProfileScreen() {
  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      console.log('Screen is focused');
      
      return () => {
        // Do something when the screen is unfocused
        console.log('Screen is unfocused');
      };
    }, [])
  );

  return <View>{/* Screen content */}</View>;
}`
  }
];

export default function ReactNativeNavigationPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/mobile-development/react-native/components"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Components & UI</span>
        </Link>
        <Link
          href="/mobile-development/react-native/deployment"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Next: Deployment</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">🧭</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">React Native Navigation</h1>
            <p className="text-gray-600 dark:text-gray-300">Master navigation patterns in React Native apps</p>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Navigation is crucial for mobile apps. React Navigation is the most popular navigation library 
          for React Native, providing stack, tab, and drawer navigation patterns with smooth animations 
          and gesture support.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Getting Started with React Navigation
        </h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Installation</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`# Install core navigation library
npm install @react-navigation/native

# Install required dependencies
npm install react-native-screens react-native-safe-area-context

# For iOS, run pod install
cd ios && pod install && cd ..

# For Expo projects, install Expo-compatible versions
npx expo install react-native-screens react-native-safe-area-context`}
          </pre>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Basic Setup</h3>
          <pre className="text-sm text-blue-800 dark:text-blue-200 overflow-x-auto bg-blue-100 dark:bg-blue-900/30 p-4 rounded">
{`// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      {/* Your navigators go here */}
    </NavigationContainer>
  );
}`}
          </pre>
        </div>
      </section>

      {/* Navigation Types */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Navigation Types
        </h2>
        
        <div className="space-y-8">
          {navigationTypes.map((nav, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-blue-600">{nav.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{nav.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{nav.description}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    <strong>Use Case:</strong> {nav.useCase}
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm">
                    <code className="text-gray-800 dark:text-gray-200">{nav.installation}</code>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Example Implementation:</h4>
                  <pre className="text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
                    {nav.example}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Hooks */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Navigation Hooks
        </h2>
        
        <div className="space-y-6">
          {navigationHooks.map((hook, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{hook.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{hook.description}</p>
              <pre className="text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
                {hook.example}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* Complete Navigation Example */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Complete Navigation Example
        </h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
            App with Stack + Tab Navigation
          </h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Screen Components
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Details', { 
          itemId: 86, 
          otherParam: 'anything you want here' 
        })}
      >
        <Text style={styles.buttonText}>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Text>Item ID: {JSON.stringify(itemId)}</Text>
      <Text>Other Param: {JSON.stringify(otherParam)}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings Screen</Text>
    </View>
  );
}

// Stack Navigator for Home flow
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeMain" 
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen 
        name="Details" 
        component={DetailsScreen}
        options={{ title: 'Details' }}
      />
    </Stack.Navigator>
  );
}

// Tab Navigator
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

// Main App Component
export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});`}
          </pre>
        </div>
      </section>

      {/* Advanced Navigation Patterns */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Advanced Navigation Patterns
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Deep Linking</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              Handle URLs that open specific screens in your app
            </p>
            <pre className="text-xs text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-3 rounded overflow-x-auto">
{`const linking = {
  prefixes: ['myapp://'],
  config: {
    screens: {
      Home: 'home',
      Profile: 'profile/:userId',
    },
  },
};

<NavigationContainer linking={linking}>
  {/* navigators */}
</NavigationContainer>`}
            </pre>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Authentication Flow</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              Conditional navigation based on authentication state
            </p>
            <pre className="text-xs text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-3 rounded overflow-x-auto">
{`function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <MainTabNavigator />
      ) : (
        <AuthStackNavigator />
      )}
    </NavigationContainer>
  );
}`}
            </pre>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Modal Screens</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              Present screens as modals with custom animations
            </p>
            <pre className="text-xs text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-3 rounded overflow-x-auto">
{`<Stack.Navigator>
  <Stack.Group>
    <Stack.Screen name="Home" component={Home} />
  </Stack.Group>
  <Stack.Group screenOptions={{ presentation: 'modal' }}>
    <Stack.Screen name="MyModal" component={Modal} />
  </Stack.Group>
</Stack.Navigator>`}
            </pre>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Custom Transitions</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
              Create custom screen transition animations
            </p>
            <pre className="text-xs text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-3 rounded overflow-x-auto">
{`<Stack.Screen
  name="Profile"
  component={Profile}
  options={{
    transitionSpec: {
      open: { animation: 'timing', config: { duration: 500 } },
      close: { animation: 'timing', config: { duration: 500 } },
    },
  }}
/>`}
            </pre>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Navigation Best Practices
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ Best Practices</h3>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-2">
              <li>• Use TypeScript for type-safe navigation</li>
              <li>• Implement proper deep linking</li>
              <li>• Handle navigation state persistence</li>
              <li>• Use appropriate navigation patterns for your app</li>
              <li>• Test navigation flows thoroughly</li>
              <li>• Implement proper loading and error states</li>
            </ul>
          </div>
          
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
            <h3 className="font-semibold text-red-900 dark:text-red-100 mb-3">❌ Common Mistakes</h3>
            <ul className="text-red-800 dark:text-red-200 text-sm space-y-2">
              <li>• Don't nest navigators unnecessarily</li>
              <li>• Avoid complex navigation hierarchies</li>
              <li>• Don't ignore platform-specific navigation patterns</li>
              <li>• Avoid passing large objects as route params</li>
              <li>• Don't forget to handle back button on Android</li>
              <li>• Avoid blocking navigation with heavy operations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/mobile-development/react-native/components"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Components & UI</span>
        </Link>
        <Link
          href="/mobile-development/react-native/deployment"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: Deployment</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
