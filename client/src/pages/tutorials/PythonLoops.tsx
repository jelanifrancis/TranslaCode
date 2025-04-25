import React from 'react';
import Tutorial from '../../components/Tutorial';

export default function PythonLoops() {
  return (
    <Tutorial
      title={{
        en: "Loops in Python",
        es: "Bucles en Python",
      }}
      concept={{
        en: "Core Concept",
        es: "Concepto Clave",
      }}
      objective={{
        en: "Explore how to repeat actions efficiently with for and while loops.",
        es: "Explora cómo repetir acciones de manera eficiente usando bucles for y while.",
      }}
      explanation={{
        en: `Loops are used to repeat a block of code multiple times. They're essential for processing collections of data, performing repeated calculations, or continuing actions until a certain condition is met.

Python has two main types of loops: for loops and while loops. A for loop iterates over a sequence (like a list, tuple, or string) for a predetermined number of times. A while loop continues as long as a specified condition remains true.

Using loops can dramatically reduce code duplication and make your programs more efficient and readable. Python's loop syntax is clean and straightforward, making it easy to understand how the repetition works.`,
        es: `Los bucles se utilizan para repetir un bloque de código múltiples veces. Son esenciales para procesar colecciones de datos, realizar cálculos repetidos o continuar acciones hasta que se cumpla una condición determinada.

Python tiene dos tipos principales de bucles: los bucles for y los bucles while. Un bucle for itera sobre una secuencia (como una lista, tupla o cadena) un número determinado de veces. Un bucle while continúa ejecutándose mientras una condición especificada siga siendo verdadera.

Usar bucles puede reducir drásticamente la duplicación de código y hacer que tus programas sean más eficientes y legibles. La sintaxis de bucles en Python es limpia y sencilla, lo que facilita entender cómo funciona la repetición.`
      }}
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
          explanation: {
            en: "This example showcases different types of loops in Python, including for loops with ranges and lists, while loops, and how to control loop flow with break and continue statements.",
            es: "Este ejemplo muestra diferentes tipos de bucles en Python, incluyendo bucles for con rangos y listas, bucles while, y cómo controlar el flujo de los bucles usando las instrucciones break y continue."
          }
        }
      ]}
    />
  );
}