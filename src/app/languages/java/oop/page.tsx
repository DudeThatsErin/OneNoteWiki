import Link from 'next/link';
import { Coffee, Code, BookOpen, Layers, Users, Star, ArrowRight, ExternalLink, ArrowLeft } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { QuickStats } from '@/components/QuickStats';
import { InfoCard } from '@/components/InfoCard';
import { FeatureList } from '@/components/FeatureList';

export default function JavaOOPPage() {
  return (
    <PageLayout
      title="Object-Oriented Programming in Java"
      description="Learn object-oriented programming principles in Java including classes, objects, inheritance, polymorphism, encapsulation, and abstraction."
      icon={<div className="text-4xl">☕</div>}
      previousLink={{
        href: "/languages/java/fundamentals",
        label: "Previous: Java Fundamentals"
      }}
      nextLink={{
        href: "/languages/java/frameworks",
        label: "Next: Java Frameworks"
      }}
    >
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">🏗️</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Object-Oriented Programming</h1>
            <p className="text-gray-600 dark:text-gray-300">Master classes, objects, inheritance, and polymorphism</p>
          </div>
        </div>
      </div>

      {/* Classes and Objects */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Classes and Objects</h2>
        
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Creating Classes and Objects</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`// Student.java - A simple class definition
public class Student {
    // Instance variables (attributes/fields)
    private String name;
    private int age;
    private double gpa;
    private String[] courses;
    
    // Static variable (shared by all instances)
    private static int totalStudents = 0;
    
    // Default constructor
    public Student() {
        this.name = "Unknown";
        this.age = 0;
        this.gpa = 0.0;
        this.courses = new String[0];
        totalStudents++;
    }
    
    // Parameterized constructor
    public Student(String name, int age, double gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
        this.courses = new String[5]; // Max 5 courses
        totalStudents++;
    }
    
    // Constructor overloading
    public Student(String name, int age) {
        this(name, age, 0.0); // Calls the other constructor
    }
    
    // Getter methods (accessors)
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
    
    public double getGpa() {
        return gpa;
    }
    
    // Setter methods (mutators)
    public void setName(String name) {
        if (name != null && !name.trim().isEmpty()) {
            this.name = name;
        }
    }
    
    public void setAge(int age) {
        if (age >= 0 && age <= 120) {
            this.age = age;
        }
    }
    
    public void setGpa(double gpa) {
        if (gpa >= 0.0 && gpa <= 4.0) {
            this.gpa = gpa;
        }
    }
    
    // Instance methods
    public void addCourse(String course) {
        for (int i = 0; i < courses.length; i++) {
            if (courses[i] == null) {
                courses[i] = course;
                break;
            }
        }
    }
    
    public void displayInfo() {
        System.out.println("Student: " + name);
        System.out.println("Age: " + age);
        System.out.println("GPA: " + gpa);
        System.out.print("Courses: ");
        for (String course : courses) {
            if (course != null) {
                System.out.print(course + " ");
            }
        }
        System.out.println();
    }
    
    // Static method
    public static int getTotalStudents() {
        return totalStudents;
    }
    
    // toString method override
    @Override
    public String toString() {
        return "Student{name='" + name + "', age=" + age + ", gpa=" + gpa + "}";
    }
}

// Using the Student class
public class StudentDemo {
    public static void main(String[] args) {
        // Creating objects
        Student student1 = new Student();
        Student student2 = new Student("Alice", 20, 3.8);
        Student student3 = new Student("Bob", 19);
        
        // Using setter methods
        student1.setName("Charlie");
        student1.setAge(21);
        student1.setGpa(3.5);
        
        // Using instance methods
        student2.addCourse("Math");
        student2.addCourse("Physics");
        student2.addCourse("Chemistry");
        
        // Display information
        student1.displayInfo();
        student2.displayInfo();
        
        // Using static method
        System.out.println("Total students: " + Student.getTotalStudents());
        
        // Using toString
        System.out.println(student3);
    }
}`}
          </pre>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="font-semibold text-white mb-3">🔑 Key OOP Concepts</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• <strong>Class:</strong> Blueprint or template for creating objects</li>
            <li>• <strong>Object:</strong> Instance of a class with specific values</li>
            <li>• <strong>Constructor:</strong> Special method to initialize objects</li>
            <li>• <strong>this keyword:</strong> Refers to the current object instance</li>
            <li>• <strong>static:</strong> Belongs to the class, not to any specific instance</li>
          </ul>
        </div>
      </section>

      {/* Encapsulation */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Encapsulation</h2>
        
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Access Modifiers and Data Hiding</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`public class BankAccount {
    // Private fields - cannot be accessed directly from outside
    private String accountNumber;
    private double balance;
    private String ownerName;
    
    // Protected field - accessible in same package and subclasses
    protected String bankName;
    
    // Package-private field (no modifier) - accessible in same package
    String accountType;
    
    // Public constructor
    public BankAccount(String accountNumber, String ownerName, String bankName) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.bankName = bankName;
        this.balance = 0.0;
        this.accountType = "Checking";
    }
    
    // Public methods to access private fields (getters)
    public String getAccountNumber() {
        return accountNumber;
    }
    
    public double getBalance() {
        return balance;
    }
    
    public String getOwnerName() {
        return ownerName;
    }
    
    // Controlled access to modify balance
    public boolean deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
            return true;
        } else {
            System.out.println("Invalid deposit amount");
            return false;
        }
    }
    
    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
            return true;
        } else {
            System.out.println("Invalid withdrawal amount or insufficient funds");
            return false;
        }
    }
    
    // Private helper method - only accessible within this class
    private boolean validateTransaction(double amount) {
        return amount > 0 && amount <= 10000; // Max transaction limit
    }
    
    public void displayAccountInfo() {
        System.out.println("Account: " + accountNumber);
        System.out.println("Owner: " + ownerName);
        System.out.println("Bank: " + bankName);
        System.out.println("Balance: $" + balance);
        System.out.println("Type: " + accountType);
    }
}

// Usage example
public class BankDemo {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("12345", "John Doe", "ABC Bank");
        
        // These work - public methods
        account.deposit(1000);
        account.withdraw(200);
        account.displayAccountInfo();
        
        // This would cause compilation error - private field
        // account.balance = 5000; // Error!
        
        // This works - public getter
        System.out.println("Current balance: $" + account.getBalance());
        
        // This works - protected field (if in same package or subclass)
        account.bankName = "XYZ Bank";
        
        // This works - package-private field (if in same package)
        account.accountType = "Savings";
    }
}`}
          </pre>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <h4 className="font-semibold text-white mb-2 text-sm">Access Modifiers</h4>
            <ul className="space-y-1 text-gray-300 text-xs">
              <li>• <code className="bg-gray-700 px-1 rounded">public</code>: Accessible everywhere</li>
              <li>• <code className="bg-gray-700 px-1 rounded">protected</code>: Same package + subclasses</li>
              <li>• <code className="bg-gray-700 px-1 rounded">default</code>: Same package only</li>
              <li>• <code className="bg-gray-700 px-1 rounded">private</code>: Same class only</li>
            </ul>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
            <h4 className="font-semibold text-white mb-2 text-sm">Benefits of Encapsulation</h4>
            <ul className="space-y-1 text-gray-300 text-xs">
              <li>• Data protection and validation</li>
              <li>• Controlled access to class members</li>
              <li>• Easier maintenance and debugging</li>
              <li>• Implementation hiding</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Inheritance */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Inheritance</h2>
        
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Extending Classes</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`// Base class (Parent/Superclass)
public class Animal {
    protected String name;
    protected int age;
    protected String species;
    
    public Animal(String name, int age, String species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    
    public void eat() {
        System.out.println(name + " is eating");
    }
    
    public void sleep() {
        System.out.println(name + " is sleeping");
    }
    
    public void makeSound() {
        System.out.println(name + " makes a sound");
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Species: " + species);
    }
}

// Derived class (Child/Subclass)
public class Dog extends Animal {
    private String breed;
    private boolean isVaccinated;
    
    public Dog(String name, int age, String breed) {
        super(name, age, "Canine"); // Call parent constructor
        this.breed = breed;
        this.isVaccinated = false;
    }
    
    // Method overriding - providing specific implementation
    @Override
    public void makeSound() {
        System.out.println(name + " barks: Woof! Woof!");
    }
    
    // Additional methods specific to Dog
    public void wagTail() {
        System.out.println(name + " is wagging tail");
    }
    
    public void fetch() {
        System.out.println(name + " is fetching the ball");
    }
    
    public void setVaccinated(boolean vaccinated) {
        this.isVaccinated = vaccinated;
    }
    
    // Override displayInfo to include Dog-specific information
    @Override
    public void displayInfo() {
        super.displayInfo(); // Call parent method
        System.out.println("Breed: " + breed);
        System.out.println("Vaccinated: " + isVaccinated);
    }
}

// Another derived class
public class Cat extends Animal {
    private boolean isIndoor;
    
    public Cat(String name, int age, boolean isIndoor) {
        super(name, age, "Feline");
        this.isIndoor = isIndoor;
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " meows: Meow! Meow!");
    }
    
    public void climb() {
        System.out.println(name + " is climbing");
    }
    
    public void purr() {
        System.out.println(name + " is purring");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Indoor cat: " + isIndoor);
    }
}

// Usage example
public class InheritanceDemo {
    public static void main(String[] args) {
        // Create objects
        Animal genericAnimal = new Animal("Generic", 5, "Unknown");
        Dog myDog = new Dog("Buddy", 3, "Golden Retriever");
        Cat myCat = new Cat("Whiskers", 2, true);
        
        // Common methods (inherited)
        myDog.eat();
        myDog.sleep();
        myCat.eat();
        myCat.sleep();
        
        // Overridden methods
        genericAnimal.makeSound(); // Generic sound
        myDog.makeSound();         // Barks
        myCat.makeSound();         // Meows
        
        // Specific methods
        myDog.wagTail();
        myDog.fetch();
        myCat.climb();
        myCat.purr();
        
        // Display information
        System.out.println("\\n--- Dog Info ---");
        myDog.displayInfo();
        
        System.out.println("\\n--- Cat Info ---");
        myCat.displayInfo();
        
        // Polymorphism - treating subclass objects as parent class
        Animal[] animals = {genericAnimal, myDog, myCat};
        
        System.out.println("\\n--- All Animals Making Sounds ---");
        for (Animal animal : animals) {
            animal.makeSound(); // Calls appropriate overridden method
        }
    }
}`}
          </pre>
        </div>
      </section>

      {/* Polymorphism */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Polymorphism</h2>
        
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Method Overriding and Dynamic Binding</h3>
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded">
{`// Abstract base class
abstract class Shape {
    protected String color;
    
    public Shape(String color) {
        this.color = color;
    }
    
    // Abstract method - must be implemented by subclasses
    public abstract double calculateArea();
    public abstract double calculatePerimeter();
    
    // Concrete method - can be inherited or overridden
    public void displayColor() {
        System.out.println("Color: " + color);
    }
    
    // Template method pattern
    public final void displayShapeInfo() {
        displayColor();
        System.out.println("Area: " + calculateArea());
        System.out.println("Perimeter: " + calculatePerimeter());
    }
}

class Circle extends Shape {
    private double radius;
    
    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }
    
    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }
    
    @Override
    public double calculatePerimeter() {
        return 2 * Math.PI * radius;
    }
    
    @Override
    public void displayColor() {
        System.out.println("Circle Color: " + color);
    }
}

class Rectangle extends Shape {
    private double length;
    private double width;
    
    public Rectangle(String color, double length, double width) {
        super(color);
        this.length = length;
        this.width = width;
    }
    
    @Override
    public double calculateArea() {
        return length * width;
    }
    
    @Override
    public double calculatePerimeter() {
        return 2 * (length + width);
    }
}

class Triangle extends Shape {
    private double side1, side2, side3;
    
    public Triangle(String color, double side1, double side2, double side3) {
        super(color);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    
    @Override
    public double calculateArea() {
        // Using Heron's formula
        double s = (side1 + side2 + side3) / 2;
        return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    }
    
    @Override
    public double calculatePerimeter() {
        return side1 + side2 + side3;
    }
}

// Interface for drawable objects
interface Drawable {
    void draw();
    void erase();
}

// Class implementing interface
class DrawableCircle extends Circle implements Drawable {
    public DrawableCircle(String color, double radius) {
        super(color, radius);
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a " + color + " circle with radius " + 
                         (calculatePerimeter() / (2 * Math.PI)));
    }
    
    @Override
    public void erase() {
        System.out.println("Erasing the circle");
    }
}

public class PolymorphismDemo {
    public static void main(String[] args) {
        // Polymorphism - different objects, same interface
        Shape[] shapes = {
            new Circle("Red", 5.0),
            new Rectangle("Blue", 4.0, 6.0),
            new Triangle("Green", 3.0, 4.0, 5.0)
        };
        
        System.out.println("=== Shape Information ===");
        for (Shape shape : shapes) {
            shape.displayShapeInfo(); // Calls appropriate overridden methods
            System.out.println("---");
        }
        
        // Interface polymorphism
        Drawable drawable = new DrawableCircle("Yellow", 3.0);
        drawable.draw();
        drawable.erase();
        
        // Method overloading example
        Calculator calc = new Calculator();
        System.out.println("\\n=== Calculator Results ===");
        System.out.println("Add integers: " + calc.add(5, 3));
        System.out.println("Add doubles: " + calc.add(5.5, 3.2));
        System.out.println("Add three integers: " + calc.add(1, 2, 3));
    }
}

// Method overloading example
class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    public String add(String a, String b) {
        return a + b;
    }
}`}
          </pre>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="font-semibold text-white mb-3">🔄 Types of Polymorphism</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• <strong>Compile-time Polymorphism:</strong> Method overloading, operator overloading</li>
            <li>• <strong>Runtime Polymorphism:</strong> Method overriding, dynamic method dispatch</li>
            <li>• <strong>Interface Polymorphism:</strong> Multiple classes implementing same interface</li>
            <li>• <strong>Abstract Classes:</strong> Partial implementation with abstract methods</li>
          </ul>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link
          href="/languages/java/fundamentals"
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous: Fundamentals</span>
        </Link>
        <Link
          href="/languages/java/frameworks"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>Next: Frameworks</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </PageLayout>
  );
}
