import Link from 'next/link';
import { ArrowLeft, ArrowRight, Layers, Smartphone, Palette, Layout } from 'lucide-react';

const coreComponents = [
  {
    name: 'View',
    description: 'The fundamental component for building UI, similar to div in web',
    icon: <Layout className="w-5 h-5" />,
    props: ['style', 'onLayout', 'pointerEvents', 'testID'],
    example: `<View style={styles.container}>
  <Text>Hello World!</Text>
</View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});`
  },
  {
    name: 'Text',
    description: 'Component for displaying text with various styling options',
    icon: <Layers className="w-5 h-5" />,
    props: ['style', 'numberOfLines', 'onPress', 'selectable'],
    example: `<Text style={styles.title}>
  Welcome to React Native
</Text>
<Text style={styles.subtitle} numberOfLines={2}>
  This is a longer text that will be truncated after 2 lines
</Text>

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
});`
  },
  {
    name: 'TextInput',
    description: 'Component for text input with various keyboard types and validation',
    icon: <Smartphone className="w-5 h-5" />,
    props: ['value', 'onChangeText', 'placeholder', 'keyboardType', 'secureTextEntry'],
    example: `const [text, setText] = useState('');
const [email, setEmail] = useState('');

<TextInput
  style={styles.input}
  value={text}
  onChangeText={setText}
  placeholder="Enter your name"
  autoCapitalize="words"
/>
<TextInput
  style={styles.input}
  value={email}
  onChangeText={setEmail}
  placeholder="Enter your email"
  keyboardType="email-address"
  autoCapitalize="none"
/>

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: 'white',
  },
});`
  },
  {
    name: 'TouchableOpacity',
    description: 'Touchable component that reduces opacity when pressed',
    icon: <Palette className="w-5 h-5" />,
    props: ['onPress', 'disabled', 'activeOpacity', 'style'],
    example: `<TouchableOpacity 
  style={styles.button} 
  onPress={() => Alert.alert('Button Pressed!')}
  activeOpacity={0.7}
>
  <Text style={styles.buttonText}>Press Me</Text>
</TouchableOpacity>

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});`
  }
];

const listComponents = [
  {
    name: 'FlatList',
    description: 'Performant list component for large datasets',
    example: `const data = [
  { id: '1', title: 'First Item' },
  { id: '2', title: 'Second Item' },
  { id: '3', title: 'Third Item' },
];

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>{item.title}</Text>
  </View>
);

<FlatList
  data={data}
  renderItem={renderItem}
  keyExtractor={item => item.id}
  showsVerticalScrollIndicator={false}
  ItemSeparatorComponent={() => <View style={styles.separator} />}
/>`
  },
  {
    name: 'ScrollView',
    description: 'Scrollable container for content that exceeds screen size',
    example: `<ScrollView 
  style={styles.scrollView}
  showsVerticalScrollIndicator={false}
  bounces={true}
>
  <View style={styles.content}>
    <Text style={styles.text}>Scrollable Content</Text>
    {/* More content here */}
  </View>
</ScrollView>

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
});`
  }
];

const stylingConcepts = [
  {
    title: 'Flexbox Layout',
    description: 'React Native uses Flexbox for layout, similar to CSS but with some differences',
    example: `const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // 'row' | 'column' | 'row-reverse' | 'column-reverse'
    justifyContent: 'center', // 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    alignItems: 'center', // 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  },
  item: {
    flex: 1, // Takes available space
    margin: 10,
    padding: 20,
  },
});`
  },
  {
    title: 'Dimensions & Positioning',
    description: 'Handle different screen sizes and position elements',
    example: `import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  fullScreen: {
    width: width,
    height: height,
  },
  centered: {
    position: 'absolute',
    top: height / 2 - 50,
    left: width / 2 - 50,
    width: 100,
    height: 100,
  },
  responsive: {
    width: '80%', // Percentage-based width
    maxWidth: 400, // Maximum width constraint
  },
});`
  },
  {
    title: 'Platform-Specific Styles',
    description: 'Apply different styles for iOS and Android',
    example: `import { Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 50 : 25,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});`
  }
];

export default function ReactNativeComponentsPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/mobile-development/react-native/setup"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Setup & Environment</span>
        </Link>
        <Link
          href="/mobile-development/react-native/navigation"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Next: Navigation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">🧩</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">React Native Components & UI</h1>
            <p className="text-gray-600 dark:text-gray-300">Master the building blocks of React Native apps</p>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          React Native provides a rich set of components for building mobile user interfaces. 
          Learn about core components, styling with Flexbox, and creating responsive layouts 
          that work across different screen sizes and platforms.
        </p>
      </div>

      {/* Core Components */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Core Components
        </h2>
        
        <div className="space-y-6">
          {coreComponents.map((component, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-blue-600">{component.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{component.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{component.description}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Common Props:</h4>
                  <div className="flex flex-wrap gap-2">
                    {component.props.map((prop, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                        {prop}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Example:</h4>
                  <pre className="text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
                    {component.example}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* List Components */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          List Components
        </h2>
        
        <div className="space-y-6">
          {listComponents.map((component, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{component.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{component.description}</p>
              <pre className="text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
                {component.example}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* Styling & Layout */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Styling & Layout
        </h2>
        
        <div className="space-y-6">
          {stylingConcepts.map((concept, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{concept.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{concept.description}</p>
              <pre className="text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
                {concept.example}
              </pre>
            </div>
          ))}
        </div>
      </section>

      {/* Complete Example */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Complete Example: User Profile Screen
        </h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';

const UserProfileScreen = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');
  const [bio, setBio] = useState('Mobile developer passionate about React Native');

  const handleSave = () => {
    Alert.alert('Success', 'Profile updated successfully!');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.changePhotoButton}>
          <Text style={styles.changePhotoText}>Change Photo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Bio</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={bio}
            onChangeText={setBio}
            placeholder="Tell us about yourself"
            multiline
            numberOfLines={4}
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  changePhotoButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  changePhotoText: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '500',
  },
  form: {
    padding: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  textArea: {
    height: 100,
    paddingTop: 15,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserProfileScreen;`}
          </pre>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Best Practices
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ Do's</h3>
            <ul className="text-green-800 dark:text-green-200 text-sm space-y-2">
              <li>• Use StyleSheet.create() for better performance</li>
              <li>• Implement proper key props for list items</li>
              <li>• Use Flexbox for responsive layouts</li>
              <li>• Test on both iOS and Android devices</li>
              <li>• Use platform-specific styles when needed</li>
              <li>• Optimize images and use appropriate formats</li>
            </ul>
          </div>
          
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
            <h3 className="font-semibold text-red-900 dark:text-red-100 mb-3">❌ Don'ts</h3>
            <ul className="text-red-800 dark:text-red-200 text-sm space-y-2">
              <li>• Don't use inline styles for complex styling</li>
              <li>• Avoid deep nesting of components</li>
              <li>• Don't ignore accessibility props</li>
              <li>• Avoid using ScrollView for large lists</li>
              <li>• Don't hardcode dimensions for different screens</li>
              <li>• Avoid blocking the main thread with heavy operations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/mobile-development/react-native/setup"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Setup & Environment</span>
        </Link>
        <Link
          href="/mobile-development/react-native/navigation"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: Navigation</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
