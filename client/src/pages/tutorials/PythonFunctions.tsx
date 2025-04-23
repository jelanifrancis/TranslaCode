import React from 'react';
import Tutorial from '../../components/Tutorial';

export default function PythonFunctions() {
  return (
    <Tutorial
      title="Functions in Python"
      concept="Core Concept"
      objective="Learn how to create reusable blocks of code with Python functions."
      explanation={`Functions are reusable blocks of code that perform specific tasks. They help organize your code, avoid repetition, and make your programs more modular and easier to understand.

In Python, you define functions using the def keyword, followed by the function name, parentheses containing any parameters, and a colon. The function body is indented below this line.

Functions can take inputs (parameters), process them, and return outputs using the return statement. They can be called multiple times from different parts of your program, making your code more efficient and maintainable.`}
      language="python"
      examples={[
        {
          code: `# Defining a simple function
def greet():
    print("Hello, world!")
    
# Calling the function
greet()  # Outputs: Hello, world!

# Function with parameters
def personal_greeting(name):
    print(f"Hello, {name}!")
    
personal_greeting("Alice")  # Outputs: Hello, Alice!
personal_greeting("Bob")    # Outputs: Hello, Bob!

# Function with return value
def add(a, b):
    return a + b
    
result = add(5, 3)
print(result)  # Outputs: 8

# Function with default parameter
def greet_with_title(name, title="Mr."):
    print(f"Hello, {title} {name}!")
    
greet_with_title("Smith")           # Outputs: Hello, Mr. Smith!
greet_with_title("Johnson", "Dr.")  # Outputs: Hello, Dr. Johnson!`,
          explanation: "This example shows different ways to create and use functions in Python, including functions with no parameters, with parameters, with return values, and with default parameter values."
        }
      ]}
    />
  );
}