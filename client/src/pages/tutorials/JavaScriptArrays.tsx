import React from 'react';
import Tutorial from '../../components/Tutorial';

export default function JavaScriptArrays() {
  return (
    <Tutorial
      title="Arrays in JavaScript"
      concept="Core Concept"
      objective="Learn to store collections of items in organized, indexed arrays."
      explanation={`Arrays are one of JavaScript's core data structures. They allow you to store multiple values in a single variable. Arrays are ordered (items have a specific order), mutable (can be changed after creation), and can contain values of different data types.

In JavaScript, arrays are created using square brackets [ ], with items separated by commas. Each item in an array has an index, starting from 0 for the first item. You can access, add, remove, or modify array items using these indices.

Arrays are extremely useful for storing related data together - like a collection of user names, a set of scores, or any group of items that belong together. JavaScript provides many built-in methods to manipulate arrays efficiently, including modern methods for functional programming.`}
      language="javascript"
      examples={[
        {
          code: `// Creating arrays
const fruits = ["apple", "banana", "cherry"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "hello", true, 3.14];

// Accessing array items by index
console.log(fruits[0]);        // Outputs: apple
console.log(fruits[1]);        // Outputs: banana
console.log(fruits[fruits.length - 1]);  // Outputs: cherry (last item)

// Slicing arrays
console.log(numbers.slice(1, 4));  // Outputs: [2, 3, 4] (items from index 1 to 3)
console.log(numbers.slice(0, 3));  // Outputs: [1, 2, 3] (items from start to index 2)
console.log(numbers.slice(2));     // Outputs: [3, 4, 5] (items from index 2 to end)

// Modifying arrays
fruits[1] = "orange";    // Replace an item
console.log(fruits);     // Outputs: ['apple', 'orange', 'cherry']

// Adding items
fruits.push("kiwi");     // Add an item to the end
console.log(fruits);     // Outputs: ['apple', 'orange', 'cherry', 'kiwi']

fruits.unshift("mango"); // Add an item to the beginning
console.log(fruits);     // Outputs: ['mango', 'apple', 'orange', 'cherry', 'kiwi']

fruits.splice(2, 0, "grape");  // Insert at specific position
console.log(fruits);     // Outputs: ['mango', 'apple', 'grape', 'orange', 'cherry', 'kiwi']

// Removing items
fruits.pop();            // Remove and return the last item
console.log(fruits);     // Outputs: ['mango', 'apple', 'grape', 'orange', 'cherry']

fruits.shift();          // Remove and return the first item
console.log(fruits);     // Outputs: ['apple', 'grape', 'orange', 'cherry']

fruits.splice(1, 1);     // Remove item at specific index
console.log(fruits);     // Outputs: ['apple', 'orange', 'cherry']

// Array operations
const combined = fruits.concat(numbers);  // Concatenation
console.log(combined);   // Outputs: ['apple', 'orange', 'cherry', 1, 2, 3, 4, 5]

// Checking if item exists
console.log(fruits.includes("apple"));  // Outputs: true
console.log(fruits.indexOf("banana"));  // Outputs: -1 (not found)

// Modern array methods
// forEach - execute function for each element
fruits.forEach(fruit => console.log(fruit));

// map - create new array by transforming each element
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);  // Outputs: ['APPLE', 'ORANGE', 'CHERRY']

// filter - create new array with elements that pass a test
const filtered = numbers.filter(num => num > 2);
console.log(filtered);     // Outputs: [3, 4, 5]

// reduce - reduce array to a single value
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);          // Outputs: 15 (1+2+3+4+5)

// Sorting arrays
const sortedNumbers = [...numbers].sort((a, b) => b - a);  // Descending
console.log(sortedNumbers);  // Outputs: [5, 4, 3, 2, 1]`,
          explanation: "This example shows various operations you can perform with JavaScript arrays, including creating arrays, accessing elements, modifying arrays, and using both traditional and modern functional array methods."
        }
      ]}
    />
  );
}