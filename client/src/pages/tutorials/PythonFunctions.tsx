import React from 'react';
import Tutorial from '../../components/Tutorial';

export default function PythonFunctions() {
  return (
    <Tutorial
      title={{
        en: "Functions in Python",
        es: "Funciones en Python",
      }}
      concept={{
        en: "Core Concept",
        es: "Concepto Clave",
      }}
      objective={{
        en: "Learn how to create reusable blocks of code with Python functions.",
        es: "Aprende a crear bloques de código reutilizables con funciones en Python.",
      }}
      explanation={{
        en: `Functions are reusable blocks of code that perform specific tasks. They help organize your code, avoid repetition, and make your programs more modular and easier to understand.

In Python, you define functions using the def keyword, followed by the function name, parentheses containing any parameters, and a colon. The function body is indented below this line.

Functions can take inputs (parameters), process them, and return outputs using the return statement. They can be called multiple times from different parts of your program, making your code more efficient and maintainable.`,
        es: `Las funciones son bloques de código reutilizables que realizan tareas específicas. Ayudan a organizar tu código, evitar la repetición y hacer que tus programas sean más modulares y fáciles de entender.

En Python, defines funciones usando la palabra clave def, seguida del nombre de la función, paréntesis que contienen cualquier parámetro, y dos puntos. El cuerpo de la función se indenta debajo de esta línea.

Las funciones pueden recibir entradas (parámetros), procesarlas y devolver salidas utilizando la instrucción return. Pueden ser llamadas múltiples veces desde diferentes partes de tu programa, haciendo que tu código sea más eficiente y mantenible.`
      }}
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
          explanation: {
            en: "This example shows different ways to create and use functions in Python, including functions with no parameters, with parameters, with return values, and with default parameter values.",
            es: "Este ejemplo muestra diferentes maneras de crear y usar funciones en Python, incluyendo funciones sin parámetros, con parámetros, con valores de retorno y con valores de parámetros predeterminados."
          }
        }
      ]}
    />
  );
}