import React from 'react';
import Tutorial from '../../components/Tutorial';

export default function PythonLists() {
  return (
    <Tutorial
      title="Lists in Python"
      concept="Core Concept"
      objective="Learn to store collections of items in organized, indexed lists."
      explanation={`Lists are one of Python's most versatile data structures. They allow you to store collections of items in a single variable. Lists are ordered (items have a specific order), mutable (can be changed after creation), and can contain items of different data types.

In Python, lists are created using square brackets [ ], with items separated by commas. Each item in a list has an index, starting from 0 for the first item. You can access, add, remove, or modify list items using these indices.

Lists are extremely useful for storing related data together - like a collection of user names, a series of temperature readings, or any group of items that belong together. Python provides many built-in methods to manipulate lists efficiently.`}
      language="python"
      examples={[
        {
          code: `# Creating lists
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]

# Accessing list items by index
print(fruits[0])        # Outputs: apple
print(fruits[1])        # Outputs: banana
print(fruits[-1])       # Outputs: cherry (negative indices count from the end)

# Slicing lists
print(numbers[1:4])     # Outputs: [2, 3, 4] (items from index 1 to 3)
print(numbers[:3])      # Outputs: [1, 2, 3] (items from start to index 2)
print(numbers[2:])      # Outputs: [3, 4, 5] (items from index 2 to end)

# Modifying lists
fruits[1] = "orange"    # Replace an item
print(fruits)           # Outputs: ['apple', 'orange', 'cherry']

# Adding items
fruits.append("kiwi")   # Add an item to the end
print(fruits)           # Outputs: ['apple', 'orange', 'cherry', 'kiwi']

fruits.insert(1, "mango")  # Insert at specific position
print(fruits)           # Outputs: ['apple', 'mango', 'orange', 'cherry', 'kiwi']

# Removing items
fruits.remove("orange") # Remove by value
print(fruits)           # Outputs: ['apple', 'mango', 'cherry', 'kiwi']

popped = fruits.pop()   # Remove and return the last item
print(popped)           # Outputs: kiwi
print(fruits)           # Outputs: ['apple', 'mango', 'cherry']

del fruits[0]           # Remove by index
print(fruits)           # Outputs: ['mango', 'cherry']

# List operations
combined = fruits + numbers  # Concatenation
print(combined)         # Outputs: ['mango', 'cherry', 1, 2, 3, 4, 5]

repeated = fruits * 2   # Repetition
print(repeated)         # Outputs: ['mango', 'cherry', 'mango', 'cherry']

# List methods
sorted_list = sorted([3, 1, 4, 2])
print(sorted_list)      # Outputs: [1, 2, 3, 4]

numbers.reverse()
print(numbers)          # Outputs: [5, 4, 3, 2, 1]

print(len(numbers))     # Outputs: 5 (number of items)`,
          explanation: "This example shows various operations you can perform with Python lists, including creating lists, accessing elements, modifying lists, and using common list methods."
        }
      ]}
    />
  );
}