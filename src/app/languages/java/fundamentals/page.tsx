import Link from 'next/link';
import { ArrowLeft, ArrowRight, Code, Zap, BookOpen, Shield } from 'lucide-react';

export default function JavaFundamentalsPage() {
  return (
    <div className="space-y-8">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/languages/java"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Java</span>
        </Link>
        <Link
          href="/languages/java/oop"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <span>Next: OOP Concepts</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">📚</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Java Fundamentals</h1>
            <p className="text-gray-600 dark:text-gray-300">Master the core concepts of Java programming</p>
          </div>
        </div>
      </div>

      {/* Java Basics */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Java Basics</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Hello World and Basic Structure</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`// HelloWorld.java - Every Java program starts with a class
public class HelloWorld {
    // Main method - entry point of the program
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        // Variables and data types
        int age = 25;                    // Integer
        double height = 5.9;             // Double precision floating point
        char grade = 'A';                // Character
        boolean isStudent = true;        // Boolean
        String name = "Alice";           // String (reference type)
        
        // Constants (final keyword)
        final double PI = 3.14159;
        
        // Output with different methods
        System.out.println("Name: " + name);
        System.out.printf("Age: %d, Height: %.1f%n", age, height);
    }
}

// Compilation and execution:
// javac HelloWorld.java  (creates HelloWorld.class)
// java HelloWorld        (runs the program)`}
          </pre>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
          <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">💡 Java Key Concepts</h3>
          <ul className="space-y-2 text-orange-800 dark:text-orange-200 text-sm">
            <li>• <strong>Class-based:</strong> Everything is inside a class</li>
            <li>• <strong>Compiled:</strong> Java code is compiled to bytecode, then interpreted by JVM</li>
            <li>• <strong>Strongly typed:</strong> Variables must be declared with specific types</li>
            <li>• <strong>Case sensitive:</strong> <code className="bg-orange-100 dark:bg-orange-900/30 px-1 rounded">myVariable</code> and <code className="bg-orange-100 dark:bg-orange-900/30 px-1 rounded">MyVariable</code> are different</li>
          </ul>
        </div>
      </section>

      {/* Data Types and Variables */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Data Types and Variables</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Primitive Data Types</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`public class DataTypes {
    public static void main(String[] args) {
        // Integer types
        byte smallNumber = 127;          // 8-bit: -128 to 127
        short mediumNumber = 32000;      // 16-bit: -32,768 to 32,767
        int regularNumber = 2000000;     // 32-bit: -2^31 to 2^31-1
        long bigNumber = 9000000000L;    // 64-bit: -2^63 to 2^63-1
        
        // Floating point types
        float decimal = 3.14f;           // 32-bit floating point
        double preciseDecimal = 3.14159; // 64-bit floating point
        
        // Character and boolean
        char letter = 'A';               // 16-bit Unicode character
        boolean isTrue = true;           // true or false
        
        // String (reference type, not primitive)
        String text = "Hello Java";
        
        // Type casting
        int intValue = 100;
        double doubleValue = intValue;   // Implicit casting (widening)
        int backToInt = (int) doubleValue; // Explicit casting (narrowing)
        
        // Constants
        final int MAX_SIZE = 100;        // Cannot be changed after initialization
        
        System.out.println("Integer: " + regularNumber);
        System.out.println("Double: " + preciseDecimal);
        System.out.println("Character: " + letter);
        System.out.println("Boolean: " + isTrue);
        System.out.println("String: " + text);
    }
}`}
          </pre>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Arrays</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`public class Arrays {
    public static void main(String[] args) {
        // Array declaration and initialization
        int[] numbers = new int[5];           // Array of 5 integers
        int[] values = {1, 2, 3, 4, 5};      // Array with initial values
        String[] names = {"Alice", "Bob", "Charlie"};
        
        // Accessing array elements
        numbers[0] = 10;
        numbers[1] = 20;
        System.out.println("First number: " + numbers[0]);
        System.out.println("Array length: " + numbers.length);
        
        // Iterating through arrays
        System.out.println("Values array:");
        for (int i = 0; i < values.length; i++) {
            System.out.println("Index " + i + ": " + values[i]);
        }
        
        // Enhanced for loop (for-each)
        System.out.println("Names array:");
        for (String name : names) {
            System.out.println("Name: " + name);
        }
        
        // Multidimensional arrays
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        System.out.println("Matrix element [1][2]: " + matrix[1][2]); // Output: 6
    }
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
{`public class ControlFlow {
    public static void main(String[] args) {
        int score = 85;
        
        // If-else statements
        if (score >= 90) {
            System.out.println("Grade: A");
        } else if (score >= 80) {
            System.out.println("Grade: B");
        } else if (score >= 70) {
            System.out.println("Grade: C");
        } else {
            System.out.println("Grade: F");
        }
        
        // Ternary operator
        String result = (score >= 60) ? "Pass" : "Fail";
        System.out.println("Result: " + result);
        
        // Switch statement
        int dayOfWeek = 3;
        switch (dayOfWeek) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            default:
                System.out.println("Other day");
                break;
        }
        
        // For loop
        System.out.println("Counting 1 to 5:");
        for (int i = 1; i <= 5; i++) {
            System.out.print(i + " ");
        }
        System.out.println();
        
        // While loop
        int count = 0;
        System.out.println("While loop:");
        while (count < 3) {
            System.out.println("Count: " + count);
            count++;
        }
        
        // Do-while loop
        int number = 0;
        System.out.println("Do-while loop:");
        do {
            System.out.println("Number: " + number);
            number++;
        } while (number < 2);
        
        // Break and continue
        System.out.println("Break and continue example:");
        for (int i = 0; i < 10; i++) {
            if (i == 3) continue;  // Skip iteration when i is 3
            if (i == 7) break;     // Exit loop when i is 7
            System.out.print(i + " ");
        }
        System.out.println();
    }
}`}
          </pre>
        </div>
      </section>

      {/* Methods */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Methods</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Method Declaration and Usage</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`public class Methods {
    // Method with no parameters and no return value
    public static void greet() {
        System.out.println("Hello, World!");
    }
    
    // Method with parameters and return value
    public static int add(int a, int b) {
        return a + b;
    }
    
    // Method with multiple parameters
    public static double calculateArea(double length, double width) {
        return length * width;
    }
    
    // Method overloading - same name, different parameters
    public static int multiply(int a, int b) {
        return a * b;
    }
    
    public static double multiply(double a, double b) {
        return a * b;
    }
    
    public static int multiply(int a, int b, int c) {
        return a * b * c;
    }
    
    // Method with array parameter
    public static double calculateAverage(int[] numbers) {
        if (numbers.length == 0) return 0;
        
        int sum = 0;
        for (int number : numbers) {
            sum += number;
        }
        return (double) sum / numbers.length;
    }
    
    // Varargs method (variable number of arguments)
    public static int sum(int... numbers) {
        int total = 0;
        for (int number : numbers) {
            total += number;
        }
        return total;
    }
    
    public static void main(String[] args) {
        // Calling methods
        greet();
        
        int result = add(5, 3);
        System.out.println("5 + 3 = " + result);
        
        double area = calculateArea(5.0, 3.0);
        System.out.println("Area: " + area);
        
        // Method overloading examples
        System.out.println("Int multiply: " + multiply(4, 5));
        System.out.println("Double multiply: " + multiply(4.5, 2.0));
        System.out.println("Triple multiply: " + multiply(2, 3, 4));
        
        // Array method
        int[] scores = {85, 92, 78, 96, 88};
        double average = calculateAverage(scores);
        System.out.println("Average score: " + average);
        
        // Varargs method
        System.out.println("Sum of 1,2,3: " + sum(1, 2, 3));
        System.out.println("Sum of 1,2,3,4,5: " + sum(1, 2, 3, 4, 5));
    }
}`}
          </pre>
        </div>
      </section>

      {/* Exception Handling */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Exception Handling</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Try-Catch and Exception Types</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`import java.util.Scanner;
import java.io.FileReader;
import java.io.IOException;

public class ExceptionHandling {
    public static void main(String[] args) {
        // Basic try-catch
        try {
            int result = 10 / 0;  // This will throw ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Error: Division by zero!");
            System.out.println("Exception message: " + e.getMessage());
        }
        
        // Multiple catch blocks
        try {
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[5]);  // ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index out of bounds!");
        } catch (Exception e) {
            System.out.println("General exception: " + e.getMessage());
        }
        
        // Try-catch-finally
        Scanner scanner = null;
        try {
            scanner = new Scanner(System.in);
            System.out.println("Scanner created successfully");
        } catch (Exception e) {
            System.out.println("Error creating scanner: " + e.getMessage());
        } finally {
            // This block always executes
            if (scanner != null) {
                scanner.close();
                System.out.println("Scanner closed");
            }
        }
        
        // Try-with-resources (automatic resource management)
        try (Scanner autoScanner = new Scanner(System.in)) {
            System.out.println("Auto-managed scanner created");
            // Scanner will be automatically closed
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
        
        // Throwing exceptions
        try {
            validateAge(-5);
        } catch (IllegalArgumentException e) {
            System.out.println("Validation error: " + e.getMessage());
        }
    }
    
    // Method that throws an exception
    public static void validateAge(int age) throws IllegalArgumentException {
        if (age < 0) {
            throw new IllegalArgumentException("Age cannot be negative");
        }
        System.out.println("Age is valid: " + age);
    }
    
    // Method with checked exception
    public static void readFile(String filename) throws IOException {
        FileReader file = new FileReader(filename);
        // File operations here
        file.close();
    }
}`}
          </pre>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
          <h3 className="font-semibold text-red-900 dark:text-red-100 mb-3">🚨 Exception Types</h3>
          <ul className="space-y-2 text-red-800 dark:text-red-200 text-sm">
            <li>• <strong>Checked Exceptions:</strong> Must be handled or declared (IOException, SQLException)</li>
            <li>• <strong>Unchecked Exceptions:</strong> Runtime exceptions (NullPointerException, ArrayIndexOutOfBoundsException)</li>
            <li>• <strong>Errors:</strong> Serious problems that applications shouldn't catch (OutOfMemoryError)</li>
          </ul>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/languages/java"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Java</span>
        </Link>
        <Link
          href="/languages/java/oop"
          className="flex items-center space-x-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: OOP Concepts</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
