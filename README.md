# System Design Examples

This repository contains examples related to system design principles and design patterns.

## 1. SOLID Principles

This section provides JavaScript examples for each of the five SOLID principles.

*   **[Single Responsibility Principle (SRP)](./1.solid_principle_example/singleResponsibilityPrinciple.js)**: A class should have only one reason to change. The example separates user data, validation, and order logic into distinct classes.
*   **[Open/Closed Principle (OCP)](./1.solid_principle_example/openClosePrinciple.js)**: Software entities should be open for extension but closed for modification. The example demonstrates how to add new payment methods without changing the core payment processing logic.
*   **[Liskov Substitution Principle (LSP)](./1.solid_principle_example/LiskovSubstitutionPrinciple.js)**: Subtypes must be substitutable for their base types. The example illustrates this with `Course` and `Payment` classes.
*   **[Interface Segregation Principle (ISP)](./1.solid_principle_example/InterfaceSegregationPrinciple.js)**: No client should be forced to depend on methods it does not use. The example shows how to segregate a `Course` interface into smaller, more specific interfaces.
*   **[Dependency Inversion Principle (DIP)](./1.solid_principle_example/DependencyInversionPrinciple.js)**: High-level modules should not depend on low-level modules. Both should depend on abstractions. The example uses a `Database` abstraction to decouple the `UserService` from concrete database implementations.

## 2. Google Doc System Design

This section contains a simplified example of designing a document editor, similar to Google Docs.

*   **[Bad Design](./2.GoogleDocSystemDesign/badDesign.js)**: A single `DocumentEditor` class handles everything: content management, rendering, and saving. This violates SRP and is difficult to extend.
*   **[Good Design](./2.GoogleDocSystemDesign/goodDesign.js)**: This example refactors the bad design by applying SOLID principles. It separates concerns into distinct classes:
    *   `DocumentElement`: An abstraction for document components.
    *   `TextElement`, `ImageElement`: Concrete element classes.
    *   `Renderer`: A class responsible for rendering elements.
    *   `Document`: Manages the collection of elements.
    *   `FileStorage`: Handles saving the document to a file.
    *   `DocumentEditor`: The main entry point that coordinates the other classes.

## 3. Strategy Patterns

This section demonstrates the Strategy design pattern.

*   **[Sort Strategy](./3.Strategy%20Patterns/SortStrategy.js)**: This example implements a `Sorter` class that can use different sorting algorithms (Bubble Sort, Quick Sort, Merge Sort) interchangeably. The sorting algorithms are defined as separate "strategies."
*   **[Payment Strategy](./3.Strategy%20Patterns/StrategyPattern.js)**: A `PaymentService` can be configured with different payment methods (UPI, Card, Bank) at runtime.

## 4. Factory Patterns

This section provides examples of creational Factory design patterns.

*   **[Simple Factory](./4.Factory/1.SimpleFactory.js)**: A single factory class creates different types of `Course` objects based on an input string. This is a common idiom, but not an official Gang of Four (GoF) pattern.
*   **[Factory Method](./4.Factory/2.FactoryMethod.js)**: This pattern defines an interface for creating an object, but lets subclasses decide which class to instantiate. The example has different factory classes (`JsCourseFactory`, `SqlCourseFactory`) for creating different types of courses.
*   **[Abstract Factory](./4.Factory/3.AbstractFactory.js)**: This pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes. The example shows how to create families of `FrontendCourse` and `BackendCourse` objects for different platforms (Web and Mobile).