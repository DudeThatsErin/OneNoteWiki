import Link from 'next/link';
import { ArrowLeft, ArrowRight, Code, Zap, BookOpen, Cpu } from 'lucide-react';

export default function CppFundamentalsPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/languages/cpp"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to C++</span>
        </Link>
        <Link
          href="/languages/cpp/oop"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Next: OOP & Classes</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">📚</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">C++ Fundamentals</h1>
            <p className="text-gray-600 dark:text-gray-300">Master the core concepts of C++ programming</p>
          </div>
        </div>
      </div>

      {/* Basic Syntax */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Basic Syntax and Structure</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Hello World and Basic Structure</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`#include <iostream>  // Preprocessor directive
#include <string>
#include <vector>

using namespace std;  // Using directive (optional)

// Function declaration
void greetUser(const string& name);

int main() {
    // Output to console
    cout << "Hello, World!" << endl;
    
    // Variables and data types
    int age = 25;                    // Integer
    double height = 5.9;             // Double precision floating point
    char grade = 'A';                // Character
    bool isStudent = true;           // Boolean
    string name = "Alice";           // String (C++ string class)
    
    // Constants
    const double PI = 3.14159;       // Compile-time constant
    const int MAX_SIZE = 100;
    
    // Auto keyword (C++11) - type deduction
    auto temperature = 98.6;         // Deduced as double
    auto count = 42;                 // Deduced as int
    
    // Input from user
    cout << "Enter your name: ";
    string userName;
    getline(cin, userName);          // Read entire line including spaces
    
    // Function call
    greetUser(userName);
    
    return 0;  // Return success status
}

// Function definition
void greetUser(const string& name) {
    cout << "Welcome to C++, " << name << "!" << endl;
}

// Compilation commands:
// g++ -o program program.cpp        (basic compilation)
// g++ -std=c++17 -o program program.cpp  (with C++17 standard)`}
          </pre>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">💡 C++ Key Concepts</h3>
          <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
            <li>• <strong>Compiled Language:</strong> C++ code is compiled to machine code for fast execution</li>
            <li>• <strong>Header Files:</strong> Use <code className="bg-blue-100 dark:bg-blue-900/30 px-1 rounded">#include</code> to include libraries and declarations</li>
            <li>• <strong>Namespaces:</strong> Organize code and avoid naming conflicts</li>
            <li>• <strong>Strong Typing:</strong> Variables must be declared with specific types</li>
          </ul>
        </div>
      </section>

      {/* Data Types and Variables */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Data Types and Variables</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Fundamental Data Types</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`#include <iostream>
#include <climits>  // For type limits
#include <string>

int main() {
    // Integer types
    short shortNum = 32767;          // 16-bit: -32,768 to 32,767
    int regularNum = 2000000;        // 32-bit: -2^31 to 2^31-1
    long longNum = 9000000000L;      // 64-bit on most systems
    long long bigNum = 9000000000LL; // At least 64-bit
    
    // Unsigned integers (only positive values)
    unsigned int positiveNum = 4000000000U;
    unsigned char byte = 255;        // 0 to 255
    
    // Floating point types
    float decimal = 3.14f;           // 32-bit floating point
    double preciseDecimal = 3.14159; // 64-bit floating point
    long double extendedDecimal = 3.141592653589793L; // Extended precision
    
    // Character types
    char letter = 'A';               // Single character
    wchar_t wideChar = L'Ω';         // Wide character
    char16_t utf16Char = u'€';       // UTF-16 character (C++11)
    char32_t utf32Char = U'🚀';       // UTF-32 character (C++11)
    
    // Boolean
    bool isTrue = true;              // true or false
    
    // String types
    string cppString = "Hello C++";  // C++ string class
    const char* cString = "Hello C"; // C-style string (null-terminated)
    
    // Type information
    cout << "Size of int: " << sizeof(int) << " bytes" << endl;
    cout << "Size of double: " << sizeof(double) << " bytes" << endl;
    cout << "Max int value: " << INT_MAX << endl;
    cout << "Min int value: " << INT_MIN << endl;
    
    // Type casting
    int intValue = 100;
    double doubleValue = static_cast<double>(intValue);  // Safe casting
    int backToInt = static_cast<int>(3.14);              // Explicit casting
    
    // C-style casting (not recommended)
    double oldStyleCast = (double)intValue;
    
    // Const and constexpr
    const int ARRAY_SIZE = 10;       // Runtime constant
    constexpr int COMPILE_TIME = 20; // Compile-time constant (C++11)
    
    return 0;
}`}
          </pre>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Arrays and Pointers</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`#include <iostream>
#include <array>    // For std::array (C++11)
#include <vector>   // For std::vector

int main() {
    // C-style arrays
    int numbers[5] = {1, 2, 3, 4, 5};        // Fixed size array
    int matrix[3][3] = {{1,2,3}, {4,5,6}, {7,8,9}}; // 2D array
    
    // Array access
    cout << "First element: " << numbers[0] << endl;
    cout << "Array size: " << sizeof(numbers)/sizeof(numbers[0]) << endl;
    
    // C++11 std::array (safer alternative)
    array<int, 5> modernArray = {10, 20, 30, 40, 50};
    cout << "Modern array size: " << modernArray.size() << endl;
    
    // Dynamic arrays with std::vector
    vector<int> dynamicArray = {100, 200, 300};
    dynamicArray.push_back(400);  // Add element
    dynamicArray.pop_back();      // Remove last element
    
    cout << "Vector size: " << dynamicArray.size() << endl;
    
    // Iterating through arrays
    cout << "C-style array: ";
    for (int i = 0; i < 5; i++) {
        cout << numbers[i] << " ";
    }
    cout << endl;
    
    // Range-based for loop (C++11)
    cout << "Modern array: ";
    for (const auto& value : modernArray) {
        cout << value << " ";
    }
    cout << endl;
    
    // Pointers
    int value = 42;
    int* ptr = &value;           // Pointer to int
    
    cout << "Value: " << value << endl;
    cout << "Address: " << &value << endl;
    cout << "Pointer: " << ptr << endl;
    cout << "Dereferenced: " << *ptr << endl;
    
    // Pointer arithmetic
    int arr[] = {10, 20, 30, 40, 50};
    int* arrPtr = arr;           // Points to first element
    
    cout << "First element: " << *arrPtr << endl;
    cout << "Second element: " << *(arrPtr + 1) << endl;
    cout << "Third element: " << arrPtr[2] << endl;  // Array notation
    
    // Null pointers
    int* nullPtr = nullptr;      // C++11 null pointer
    if (nullPtr == nullptr) {
        cout << "Pointer is null" << endl;
    }
    
    // References (aliases)
    int original = 100;
    int& ref = original;         // Reference to original
    ref = 200;                   // Changes original
    cout << "Original after reference change: " << original << endl;
    
    return 0;
}`}
          </pre>
        </div>
      </section>

      {/* Control Flow */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Control Flow</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Conditionals and Loops</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`#include <iostream>
#include <vector>
#include <string>

int main() {
    int score = 85;
    
    // If-else statements
    if (score >= 90) {
        cout << "Grade: A" << endl;
    } else if (score >= 80) {
        cout << "Grade: B" << endl;
    } else if (score >= 70) {
        cout << "Grade: C" << endl;
    } else {
        cout << "Grade: F" << endl;
    }
    
    // Ternary operator
    string result = (score >= 60) ? "Pass" : "Fail";
    cout << "Result: " << result << endl;
    
    // Switch statement
    char grade = 'B';
    switch (grade) {
        case 'A':
            cout << "Excellent!" << endl;
            break;
        case 'B':
            cout << "Good job!" << endl;
            break;
        case 'C':
            cout << "Average" << endl;
            break;
        default:
            cout << "Need improvement" << endl;
            break;
    }
    
    // For loops
    cout << "Counting 1 to 5: ";
    for (int i = 1; i <= 5; i++) {
        cout << i << " ";
    }
    cout << endl;
    
    // Range-based for loop (C++11)
    vector<string> fruits = {"apple", "banana", "orange"};
    cout << "Fruits: ";
    for (const auto& fruit : fruits) {
        cout << fruit << " ";
    }
    cout << endl;
    
    // While loop
    int count = 0;
    cout << "While loop: ";
    while (count < 3) {
        cout << count << " ";
        count++;
    }
    cout << endl;
    
    // Do-while loop
    int number = 0;
    cout << "Do-while loop: ";
    do {
        cout << number << " ";
        number++;
    } while (number < 2);
    cout << endl;
    
    // Break and continue
    cout << "Break and continue example: ";
    for (int i = 0; i < 10; i++) {
        if (i == 3) continue;  // Skip iteration when i is 3
        if (i == 7) break;     // Exit loop when i is 7
        cout << i << " ";
    }
    cout << endl;
    
    // Nested loops
    cout << "Multiplication table (3x3):" << endl;
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 3; j++) {
            cout << i * j << "\t";
        }
        cout << endl;
    }
    
    return 0;
}`}
          </pre>
        </div>
      </section>

      {/* Functions */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Functions</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Function Declaration and Definition</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`#include <iostream>
#include <vector>
#include <string>

using namespace std;

// Function declarations (prototypes)
void printMessage();
int add(int a, int b);
double calculateArea(double length, double width);
void printArray(const int arr[], int size);
void modifyValue(int& value);           // Pass by reference
void printVector(const vector<int>& vec); // Pass by const reference

// Function overloading - same name, different parameters
int multiply(int a, int b);
double multiply(double a, double b);
int multiply(int a, int b, int c);

// Default parameters
void greet(const string& name, const string& greeting = "Hello");

// Template function (generic programming)
template<typename T>
T getMax(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    // Function calls
    printMessage();
    
    int result = add(5, 3);
    cout << "5 + 3 = " << result << endl;
    
    double area = calculateArea(5.0, 3.0);
    cout << "Area: " << area << endl;
    
    // Array parameter
    int numbers[] = {1, 2, 3, 4, 5};
    printArray(numbers, 5);
    
    // Pass by reference
    int value = 10;
    cout << "Before modification: " << value << endl;
    modifyValue(value);
    cout << "After modification: " << value << endl;
    
    // Vector parameter
    vector<int> vec = {10, 20, 30, 40};
    printVector(vec);
    
    // Function overloading
    cout << "Int multiply: " << multiply(4, 5) << endl;
    cout << "Double multiply: " << multiply(4.5, 2.0) << endl;
    cout << "Triple multiply: " << multiply(2, 3, 4) << endl;
    
    // Default parameters
    greet("Alice");                    // Uses default greeting
    greet("Bob", "Good morning");      // Custom greeting
    
    // Template function
    cout << "Max of 10, 20: " << getMax(10, 20) << endl;
    cout << "Max of 3.14, 2.71: " << getMax(3.14, 2.71) << endl;
    cout << "Max of 'a', 'z': " << getMax('a', 'z') << endl;
    
    return 0;
}

// Function definitions
void printMessage() {
    cout << "Hello from a function!" << endl;
}

int add(int a, int b) {
    return a + b;
}

double calculateArea(double length, double width) {
    return length * width;
}

void printArray(const int arr[], int size) {
    cout << "Array elements: ";
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

void modifyValue(int& value) {
    value *= 2;  // Modify the original variable
}

void printVector(const vector<int>& vec) {
    cout << "Vector elements: ";
    for (const auto& element : vec) {
        cout << element << " ";
    }
    cout << endl;
}

// Function overloading implementations
int multiply(int a, int b) {
    return a * b;
}

double multiply(double a, double b) {
    return a * b;
}

int multiply(int a, int b, int c) {
    return a * b * c;
}

void greet(const string& name, const string& greeting) {
    cout << greeting << ", " << name << "!" << endl;
}`}
          </pre>
        </div>
      </section>

      {/* Memory Management */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Memory Management</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Dynamic Memory Allocation</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`#include <iostream>
#include <memory>  // For smart pointers (C++11)

using namespace std;

int main() {
    // Stack vs Heap
    int stackVariable = 42;        // Stored on stack (automatic cleanup)
    
    // Dynamic allocation with new/delete (C-style, not recommended)
    int* heapVariable = new int(42);  // Stored on heap
    cout << "Heap value: " << *heapVariable << endl;
    delete heapVariable;              // Manual cleanup required
    heapVariable = nullptr;           // Avoid dangling pointer
    
    // Dynamic array allocation
    int size = 5;
    int* dynamicArray = new int[size]{1, 2, 3, 4, 5};
    
    cout << "Dynamic array: ";
    for (int i = 0; i < size; i++) {
        cout << dynamicArray[i] << " ";
    }
    cout << endl;
    
    delete[] dynamicArray;  // Use delete[] for arrays
    dynamicArray = nullptr;
    
    // Smart Pointers (C++11) - Automatic memory management
    
    // unique_ptr - Exclusive ownership
    unique_ptr<int> uniquePtr = make_unique<int>(100);
    cout << "Unique ptr value: " << *uniquePtr << endl;
    // Automatically deleted when uniquePtr goes out of scope
    
    // unique_ptr with arrays
    unique_ptr<int[]> uniqueArray = make_unique<int[]>(5);
    for (int i = 0; i < 5; i++) {
        uniqueArray[i] = i * 10;
    }
    
    cout << "Unique array: ";
    for (int i = 0; i < 5; i++) {
        cout << uniqueArray[i] << " ";
    }
    cout << endl;
    
    // shared_ptr - Shared ownership
    shared_ptr<int> sharedPtr1 = make_shared<int>(200);
    shared_ptr<int> sharedPtr2 = sharedPtr1;  // Share ownership
    
    cout << "Shared ptr value: " << *sharedPtr1 << endl;
    cout << "Reference count: " << sharedPtr1.use_count() << endl;
    
    // weak_ptr - Non-owning observer
    weak_ptr<int> weakPtr = sharedPtr1;
    
    if (auto locked = weakPtr.lock()) {  // Check if still valid
        cout << "Weak ptr value: " << *locked << endl;
    }
    
    // Memory leaks example (what NOT to do)
    /*
    void memoryLeak() {
        int* ptr = new int(42);
        // Forgot to call delete - MEMORY LEAK!
        return;  // ptr goes out of scope, memory not freed
    }
    */
    
    // RAII (Resource Acquisition Is Initialization) principle
    // Resources are automatically managed by constructors/destructors
    
    return 0;
}

// Custom class demonstrating RAII
class RAIIExample {
private:
    int* data;
    size_t size;
    
public:
    // Constructor - acquire resource
    RAIIExample(size_t s) : size(s) {
        data = new int[size];
        cout << "Resource acquired" << endl;
    }
    
    // Destructor - release resource
    ~RAIIExample() {
        delete[] data;
        cout << "Resource released" << endl;
    }
    
    // Copy constructor (Rule of 3/5)
    RAIIExample(const RAIIExample& other) : size(other.size) {
        data = new int[size];
        for (size_t i = 0; i < size; i++) {
            data[i] = other.data[i];
        }
    }
    
    // Assignment operator
    RAIIExample& operator=(const RAIIExample& other) {
        if (this != &other) {
            delete[] data;  // Clean up existing resource
            size = other.size;
            data = new int[size];
            for (size_t i = 0; i < size; i++) {
                data[i] = other.data[i];
            }
        }
        return *this;
    }
    
    // Move constructor (C++11)
    RAIIExample(RAIIExample&& other) noexcept 
        : data(other.data), size(other.size) {
        other.data = nullptr;
        other.size = 0;
    }
    
    // Move assignment operator (C++11)
    RAIIExample& operator=(RAIIExample&& other) noexcept {
        if (this != &other) {
            delete[] data;
            data = other.data;
            size = other.size;
            other.data = nullptr;
            other.size = 0;
        }
        return *this;
    }
};`}
          </pre>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
          <h3 className="font-semibold text-red-900 dark:text-red-100 mb-3">⚠️ Memory Management Best Practices</h3>
          <ul className="space-y-2 text-red-800 dark:text-red-200 text-sm">
            <li>• <strong>Prefer smart pointers</strong> over raw pointers for dynamic allocation</li>
            <li>• <strong>Follow RAII principle</strong> - resources managed by constructors/destructors</li>
            <li>• <strong>Every new must have a delete</strong> (if not using smart pointers)</li>
            <li>• <strong>Use containers</strong> like vector instead of raw arrays when possible</li>
            <li>• <strong>Set pointers to nullptr</strong> after deletion to avoid dangling pointers</li>
          </ul>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/languages/cpp"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to C++</span>
        </Link>
        <Link
          href="/languages/cpp/oop"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: OOP & Classes</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
