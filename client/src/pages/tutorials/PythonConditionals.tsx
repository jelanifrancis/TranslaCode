import React from 'react';
import Tutorial from '../../components/Tutorial';

export default function PythonConditionals() {
  return (
    <Tutorial
      title={{
        en: "Conditionals in Python",
        es: "Condicionales en Python",
      }}
      concept={{
        en: "Core Concept",
        es: "Concepto Clave",
      }}
      objective={{
        en: "Master decision-making in your code with if, elif, and else statements.",
        es: "Domina la toma de decisiones en tu código usando las instrucciones if, elif y else.",
      }}
      explanation={{
        en: `Conditional statements allow your programs to make decisions based on certain conditions. They execute different blocks of code depending on whether a condition is true or false.

Python uses if, elif (else if), and else keywords for conditional logic. The condition after if or elif is evaluated, and if it's True, the indented code block beneath it runs. If it's False, Python moves to the next condition.

Conditions typically use comparison operators like == (equal), != (not equal), > (greater than), < (less than), >= (greater than or equal to), and <= (less than or equal to). You can also combine conditions with logical operators like and, or, and not.`,
        es: `Las sentencias condicionales permiten que tus programas tomen decisiones basadas en ciertas condiciones. Ejecutan diferentes bloques de código dependiendo de si una condición es verdadera o falsa.

Python utiliza las palabras clave if, elif (else if) y else para la lógica condicional. La condición después de if o elif se evalúa, y si es True, se ejecuta el bloque de código indentado debajo. Si es False, Python pasa a la siguiente condición.

Las condiciones generalmente usan operadores de comparación como == (igual), != (diferente), > (mayor que), < (menor que), >= (mayor o igual que) y <= (menor o igual que). También puedes combinar condiciones usando operadores lógicos como and, or y not.`
      }}
      language="python"
      examples={[
        {
          code: `# Basic if statement
age = 18

if age >= 18:
    print("You are an adult.")
    
# Outputs: You are an adult.

# if-else statement
temperature = 15

if temperature > 25:
    print("It's a hot day.")
else:
    print("It's not hot today.")
    
# Outputs: It's not hot today.

# if-elif-else statement
score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
elif score >= 60:
    print("Grade: D")
else:
    print("Grade: F")
    
# Outputs: Grade: B

# Combining conditions with logical operators
is_sunny = True
is_weekend = False

if is_sunny and is_weekend:
    print("Perfect day for the beach!")
elif is_sunny and not is_weekend:
    print("Nice day, but I have to work.")
elif not is_sunny and is_weekend:
    print("At least I can relax indoors.")
else:
    print("Ordinary work day.")
    
# Outputs: Nice day, but I have to work.`,
          explanation: {
            en: "This example demonstrates different conditional structures in Python, from simple if statements to complex conditions with multiple branches and logical operators.",
            es: "Este ejemplo demuestra diferentes estructuras condicionales en Python, desde sentencias if simples hasta condiciones complejas con múltiples ramas y operadores lógicos."
          }
        }
      ]}
    />
  );
}