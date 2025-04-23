import React from 'react';
import Tutorial from '../../components/Tutorial';

export default function PythonVariables() {
  return (
    <Tutorial
      title={{
        en: "Variables in Python",
        es: "Variables en Python"
      }}
      concept={{
        en: "Core Concept",
        es: "Concepto Fundamental"
      }}
      objective={{
        en: "Learn how to store and manipulate data using variables in Python.",
        es: "Aprende a almacenar y manipular datos usando variables en Python."
      }}
      explanation={{
        en: `Variables are containers for storing data values in your programs. In Python, you don't need to declare variable types explicitly - Python automatically determines the type based on the value you assign.

Think of variables like labeled boxes where you can put different types of information. You can later access or change what's inside the box by referring to its label (the variable name).

Python variables can store different types of data, including numbers, text (strings), lists, and more. You can assign values to variables using the equals sign (=).`,
        es: `Las variables son contenedores para almacenar valores de datos en tus programas. En Python, no necesitas declarar los tipos de variables explícitamente - Python determina automáticamente el tipo basándose en el valor que asignas.

Piensa en las variables como cajas etiquetadas donde puedes colocar diferentes tipos de información. Más tarde puedes acceder o cambiar lo que hay dentro de la caja refiriéndote a su etiqueta (el nombre de la variable).

Las variables de Python pueden almacenar diferentes tipos de datos, incluyendo números, texto (cadenas), listas y más. Puedes asignar valores a variables usando el signo igual (=).`
      }}
      language="python"
      examples={[
        {
          code: `# Assigning values to variables (Asignando valores a variables)
nombre = "Alex"  # A string variable (Una variable de texto)
edad = 25        # An integer variable (Una variable entera)
altura = 1.75    # A floating-point variable (Una variable decimal)
es_estudiante = True  # A boolean variable (Una variable booleana)

# Using variables (Usando variables)
print(nombre)  # Outputs: Alex (Muestra: Alex)
print(edad)    # Outputs: 25 (Muestra: 25)

# You can change variable values (Puedes cambiar los valores de las variables)
edad = 26
print(edad)    # Outputs: 26 (Muestra: 26)

# Variables can be used in expressions (Las variables pueden usarse en expresiones)
año_nacimiento = 2023 - edad
print("Año de nacimiento:", año_nacimiento)  # Outputs: Año de nacimiento: 1997`,
          explanation: {
            en: "This example shows how to create variables with different data types, access their values, modify them, and use them in calculations.",
            es: "Este ejemplo muestra cómo crear variables con diferentes tipos de datos, acceder a sus valores, modificarlos y usarlos en cálculos."
          }
        }
      ]}
    />
  );
}