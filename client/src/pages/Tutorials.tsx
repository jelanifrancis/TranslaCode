import React from 'react';
import { Link } from 'wouter';
import { useLanguage } from '../hooks/useLanguage';

export default function Tutorials() {
  const { currentLanguage } = useLanguage();
  
  // Tutorial data with translations
  const pythonTutorials = [
    {
      id: 'variables',
      title: currentLanguage === 'en' ? 'Variables in Python' : 'Variables en Python',
      description: currentLanguage === 'en' 
        ? 'Learn how to store and manipulate data using variables in Python.'
        : 'Aprende a almacenar y manipular datos usando variables en Python.',
    },
    {
      id: 'functions',
      title: currentLanguage === 'en' ? 'Functions in Python' : 'Funciones en Python',
      description: currentLanguage === 'en'
        ? 'Discover how to create reusable blocks of code with Python functions.'
        : 'Descubre cómo crear bloques de código reutilizables con funciones de Python.',
    },
    {
      id: 'conditionals',
      title: currentLanguage === 'en' ? 'Conditionals in Python' : 'Condicionales en Python',
      description: currentLanguage === 'en'
        ? 'Master decision-making in your code with if, elif, and else statements.'
        : 'Domina la toma de decisiones en tu código con declaraciones if, elif y else.',
    },
    {
      id: 'loops',
      title: currentLanguage === 'en' ? 'Loops in Python' : 'Bucles en Python',
      description: currentLanguage === 'en'
        ? 'Explore how to repeat actions efficiently with for and while loops.'
        : 'Explora cómo repetir acciones eficientemente con bucles for y while.',
    },
    {
      id: 'lists',
      title: currentLanguage === 'en' ? 'Lists in Python' : 'Listas en Python',
      description: currentLanguage === 'en'
        ? 'Learn to store collections of items in organized, indexed lists.'
        : 'Aprende a almacenar colecciones de elementos en listas organizadas e indexadas.',
    }
  ];
  
  const javascriptTutorials = [
    {
      id: 'variables',
      title: currentLanguage === 'en' ? 'Variables in JavaScript' : 'Variables en JavaScript',
      description: currentLanguage === 'en'
        ? 'Learn how to store and manipulate data using variables in JavaScript.'
        : 'Aprende a almacenar y manipular datos usando variables en JavaScript.',
    },
    {
      id: 'functions',
      title: currentLanguage === 'en' ? 'Functions in JavaScript' : 'Funciones en JavaScript',
      description: currentLanguage === 'en'
        ? 'Discover how to create reusable blocks of code with JavaScript functions.'
        : 'Descubre cómo crear bloques de código reutilizables con funciones de JavaScript.',
    },
    {
      id: 'conditionals',
      title: currentLanguage === 'en' ? 'Conditionals in JavaScript' : 'Condicionales en JavaScript',
      description: currentLanguage === 'en'
        ? 'Master decision-making in your code with if, else if, and else statements.'
        : 'Domina la toma de decisiones en tu código con declaraciones if, else if y else.',
    },
    {
      id: 'loops',
      title: currentLanguage === 'en' ? 'Loops in JavaScript' : 'Bucles en JavaScript',
      description: currentLanguage === 'en'
        ? 'Explore how to repeat actions efficiently with for, while, and do-while loops.'
        : 'Explora cómo repetir acciones eficientemente con bucles for, while y do-while.',
    },
    {
      id: 'arrays',
      title: currentLanguage === 'en' ? 'Arrays in JavaScript' : 'Arrays en JavaScript',
      description: currentLanguage === 'en'
        ? 'Learn to store collections of items in organized, indexed arrays.'
        : 'Aprende a almacenar colecciones de elementos en arrays organizados e indexados.',
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          {currentLanguage === 'en' ? 'Programming Tutorials' : 'Tutoriales de Programación'}
        </h1>
        <p className="text-gray-600">
          {currentLanguage === 'en'
            ? 'Learn essential programming concepts to help you solve coding challenges.'
            : 'Aprende conceptos esenciales de programación para ayudarte a resolver desafíos de código.'}
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Python Tutorials */}
        <div>
          <div className="bg-blue-600 text-white px-4 py-3 rounded-t-lg flex items-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" 
              alt="Python" 
              className="w-8 h-8 mr-3"
            />
            <h2 className="text-xl font-bold">
              {currentLanguage === 'en' ? 'Python Tutorials' : 'Tutoriales de Python'}
            </h2>
          </div>
          <div className="bg-white shadow-md rounded-b-lg overflow-hidden">
            <div className="divide-y divide-gray-100">
              {pythonTutorials.map((tutorial) => (
                <Link key={tutorial.id} href={`/tutorials/python/${tutorial.id}`}>
                  <div className="block px-4 py-3 hover:bg-blue-50 transition-colors cursor-pointer">
                    <h3 className="font-medium text-lg text-blue-700">{tutorial.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{tutorial.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* JavaScript Tutorials */}
        <div>
          <div className="bg-yellow-500 text-white px-4 py-3 rounded-t-lg flex items-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" 
              alt="JavaScript" 
              className="w-8 h-8 mr-3"
            />
            <h2 className="text-xl font-bold">
              {currentLanguage === 'en' ? 'JavaScript Tutorials' : 'Tutoriales de JavaScript'}
            </h2>
          </div>
          <div className="bg-white shadow-md rounded-b-lg overflow-hidden">
            <div className="divide-y divide-gray-100">
              {javascriptTutorials.map((tutorial) => (
                <Link key={tutorial.id} href={`/tutorials/javascript/${tutorial.id}`}>
                  <div className="block px-4 py-3 hover:bg-yellow-50 transition-colors cursor-pointer">
                    <h3 className="font-medium text-lg text-yellow-700">{tutorial.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{tutorial.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <Link href="/">
          <span className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
            {currentLanguage === 'en' ? 'Return to Coding Challenges' : 'Volver a los Desafíos de Código'}
          </span>
        </Link>
      </div>
    </div>
  );
}