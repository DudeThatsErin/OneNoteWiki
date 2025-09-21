import Link from 'next/link';
import { ArrowLeft, ArrowRight, Cpu, Zap, Code, Settings } from 'lucide-react';

export default function CppAdvancedPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/languages/cpp/oop"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: OOP & Classes</span>
        </Link>
        <Link
          href="/languages/cpp"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Back to C++</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">⚡</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Advanced C++ Features</h1>
            <p className="text-gray-600 dark:text-gray-300">Templates, STL, modern C++ features, and performance optimization</p>
          </div>
        </div>
      </div>

      {/* Templates */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Templates and Generic Programming</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Function and Class Templates</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`#include <iostream>
#include <vector>
#include <string>

// Function template
template<typename T>
T getMax(T a, T b) {
    return (a > b) ? a : b;
}

// Template with multiple parameters
template<typename T, typename U>
auto add(T a, U b) -> decltype(a + b) {  // C++11 trailing return type
    return a + b;
}

// Class template
template<typename T>
class Stack {
private:
    std::vector<T> elements;
    
public:
    void push(const T& element) {
        elements.push_back(element);
    }
    
    void pop() {
        if (!elements.empty()) {
            elements.pop_back();
        }
    }
    
    T& top() {
        return elements.back();
    }
    
    bool empty() const {
        return elements.empty();
    }
    
    size_t size() const {
        return elements.size();
    }
};

// Template specialization
template<>
class Stack<bool> {
private:
    std::vector<char> elements;  // Use char instead of bool for efficiency
    
public:
    void push(bool element) {
        elements.push_back(element ? 1 : 0);
    }
    
    void pop() {
        if (!elements.empty()) {
            elements.pop_back();
        }
    }
    
    bool top() {
        return elements.back() != 0;
    }
    
    bool empty() const {
        return elements.empty();
    }
    
    size_t size() const {
        return elements.size();
    }
};

int main() {
    // Function template usage
    std::cout << "Max of 10, 20: " << getMax(10, 20) << std::endl;
    std::cout << "Max of 3.14, 2.71: " << getMax(3.14, 2.71) << std::endl;
    std::cout << "Max of 'a', 'z': " << getMax('a', 'z') << std::endl;
    
    // Mixed type template
    std::cout << "Add 5 + 3.14: " << add(5, 3.14) << std::endl;
    
    // Class template usage
    Stack<int> intStack;
    intStack.push(10);
    intStack.push(20);
    intStack.push(30);
    
    std::cout << "Stack size: " << intStack.size() << std::endl;
    std::cout << "Top element: " << intStack.top() << std::endl;
    
    Stack<std::string> stringStack;
    stringStack.push("Hello");
    stringStack.push("World");
    
    while (!stringStack.empty()) {
        std::cout << stringStack.top() << " ";
        stringStack.pop();
    }
    std::cout << std::endl;
    
    return 0;
}`}
          </pre>
        </div>
      </section>

      {/* STL */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Standard Template Library (STL)</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Containers, Iterators, and Algorithms</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`#include <iostream>
#include <vector>
#include <list>
#include <map>
#include <set>
#include <algorithm>
#include <iterator>
#include <numeric>

int main() {
    // Containers
    std::vector<int> vec = {5, 2, 8, 1, 9, 3};
    std::list<std::string> lst = {"apple", "banana", "cherry"};
    std::map<std::string, int> ages = {{"Alice", 25}, {"Bob", 30}, {"Charlie", 35}};
    std::set<int> uniqueNumbers = {1, 2, 3, 2, 1, 4, 5};
    
    // Iterators
    std::cout << "Vector elements: ";
    for (auto it = vec.begin(); it != vec.end(); ++it) {
        std::cout << *it << " ";
    }
    std::cout << std::endl;
    
    // Range-based for loop (C++11)
    std::cout << "List elements: ";
    for (const auto& item : lst) {
        std::cout << item << " ";
    }
    std::cout << std::endl;
    
    // Algorithms
    std::sort(vec.begin(), vec.end());
    std::cout << "Sorted vector: ";
    for (int n : vec) {
        std::cout << n << " ";
    }
    std::cout << std::endl;
    
    // Find algorithm
    auto found = std::find(vec.begin(), vec.end(), 5);
    if (found != vec.end()) {
        std::cout << "Found 5 at position: " << std::distance(vec.begin(), found) << std::endl;
    }
    
    // Transform algorithm
    std::vector<int> squared(vec.size());
    std::transform(vec.begin(), vec.end(), squared.begin(), [](int n) { return n * n; });
    
    std::cout << "Squared elements: ";
    for (int n : squared) {
        std::cout << n << " ";
    }
    std::cout << std::endl;
    
    // Accumulate
    int sum = std::accumulate(vec.begin(), vec.end(), 0);
    std::cout << "Sum: " << sum << std::endl;
    
    return 0;
}`}
          </pre>
        </div>
      </section>

      {/* Modern C++ Features */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Modern C++ Features (C++11/14/17/20)</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Lambda Functions, Auto, and More</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`#include <iostream>
#include <vector>
#include <algorithm>
#include <functional>
#include <memory>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    
    // Lambda functions (C++11)
    auto isEven = [](int n) { return n % 2 == 0; };
    auto square = [](int n) { return n * n; };
    
    // Count even numbers
    int evenCount = std::count_if(numbers.begin(), numbers.end(), isEven);
    std::cout << "Even numbers: " << evenCount << std::endl;
    
    // Lambda with capture
    int multiplier = 3;
    auto multiplyBy = [multiplier](int n) { return n * multiplier; };
    
    // Transform with lambda
    std::vector<int> multiplied(numbers.size());
    std::transform(numbers.begin(), numbers.end(), multiplied.begin(), multiplyBy);
    
    // Auto keyword (C++11)
    auto result = 42;  // int
    auto pi = 3.14159; // double
    auto name = std::string("C++");
    
    // Range-based for loop with auto
    for (const auto& num : multiplied) {
        std::cout << num << " ";
    }
    std::cout << std::endl;
    
    // Smart pointers (C++11)
    auto ptr = std::make_unique<int>(42);
    auto sharedPtr = std::make_shared<std::string>("Hello");
    
    std::cout << "Unique ptr: " << *ptr << std::endl;
    std::cout << "Shared ptr: " << *sharedPtr << std::endl;
    
    // Move semantics (C++11)
    std::vector<int> vec1 = {1, 2, 3, 4, 5};
    std::vector<int> vec2 = std::move(vec1);  // Move, don't copy
    
    std::cout << "vec1 size after move: " << vec1.size() << std::endl;
    std::cout << "vec2 size: " << vec2.size() << std::endl;
    
    return 0;
}`}
          </pre>
        </div>
      </section>

      {/* Performance Tips */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Performance Optimization</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ Best Practices</h3>
            <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
              <li>• Use const references for large objects</li>
              <li>• Prefer smart pointers over raw pointers</li>
              <li>• Use move semantics for expensive operations</li>
              <li>• Reserve vector capacity when size is known</li>
              <li>• Use algorithms instead of manual loops</li>
              <li>• Enable compiler optimizations (-O2, -O3)</li>
            </ul>
          </div>
          
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
            <h3 className="font-semibold text-red-900 dark:text-red-100 mb-3">❌ Avoid</h3>
            <ul className="space-y-2 text-red-800 dark:text-red-200 text-sm">
              <li>• Unnecessary copying of large objects</li>
              <li>• Memory leaks with raw pointers</li>
              <li>• Premature optimization</li>
              <li>• Using C-style arrays instead of std::array</li>
              <li>• Ignoring const correctness</li>
              <li>• Deep inheritance hierarchies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/languages/cpp/oop"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: OOP & Classes</span>
        </Link>
        <Link
          href="/languages/cpp"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Back to C++</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
