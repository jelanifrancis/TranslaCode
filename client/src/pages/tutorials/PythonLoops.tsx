import React from 'react';
import Tutorial from '../../components/Tutorial';

export default function PythonLoops() {
  return (
    <Tutorial
      title="Loops in Python"
      concept="Core Concept"
      objective="Explore how to repeat actions efficiently with for and while loops."
      explanation={`Loops are used to repeat a block of code multiple times. They're essential for processing collections of data, performing repeated calculations, or continuing actions until a certain condition is met.

Python has two main types of loops: for loops and while loops. A for loop iterates over a sequence (like a list, tuple, or string) for a predetermined number of times. A while loop continues as long as a specified condition remains true.

Using loops can dramatically reduce code duplication and make your programs more efficient and readable. Python's loop syntax is clean and straightforward, making it easy to understand how the repetition works.`}
      language="python"
      examples={[
        {
          code: `# For loop with a range
for i in range(5):
    print(i)
    
# Outputs:
# 0
# 1
# 2
# 3
# 4

# For loop with a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
    
# Outputs:
# apple
# banana
# cherry

# While loop
count = 0
while count < 5:
    print(count)
    count += 1
    
# Outputs:
# 0
# 1
# 2
# 3
# 4

# Break statement to exit a loop early
for i in range(10):
    if i == 5:
        break
    print(i)
    
# Outputs:
# 0
# 1
# 2
# 3
# 4

# Continue statement to skip to the next iteration
for i in range(10):
    if i % 2 == 0:  # Skip even numbers
        continue
    print(i)
    
# Outputs:
# 1
# 3
# 5
# 7
# 9`,
          explanation: "This example showcases different types of loops in Python, including for loops with ranges and lists, while loops, and how to control loop flow with break and continue statements."
        }
      ]}
    />
  );
}