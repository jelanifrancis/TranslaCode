import React from 'react';
import { Link } from 'wouter';
import { useLanguage } from '../hooks/useLanguage';

interface BilingualContent {
  en: string;
  es: string;
}

interface BilingualExample {
  code: string;
  explanation: BilingualContent;
}

interface TutorialProps {
  title: BilingualContent;
  objective: BilingualContent;
  explanation: BilingualContent;
  language: 'python' | 'javascript';
  concept: BilingualContent;
  examples?: BilingualExample[];
  backLink?: string;
}

export default function Tutorial({
  title,
  objective,
  explanation,
  language,
  concept,
  examples = [],
  backLink = '/tutorials'
}: TutorialProps) {
  const { currentLanguage } = useLanguage();
  
  // Get content based on current language
  const getContent = (content: BilingualContent) => content[currentLanguage];
  
  // Translate some fixed UI elements
  const translations = {
    backToTutorials: currentLanguage === 'en' ? 'Back to Tutorials' : 'Volver a Tutoriales',
    objective: currentLanguage === 'en' ? 'Objective' : 'Objetivo',
    explanation: currentLanguage === 'en' ? 'Explanation' : 'Explicación',
    examples: currentLanguage === 'en' ? 'Examples' : 'Ejemplos',
    exploreMore: currentLanguage === 'en' ? 'Explore more tutorials' : 'Explorar más tutoriales',
    backToChallenges: currentLanguage === 'en' ? 'Back to challenges' : 'Volver a desafíos'
  };
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6 flex items-center">
        <Link href={backLink}>
          <span className="flex items-center text-blue-500 hover:text-blue-700 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            {translations.backToTutorials}
          </span>
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
        <div className={`py-4 px-6 ${language === 'python' ? 'bg-blue-600' : 'bg-yellow-500'} text-white`}>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">{getContent(title)}</h1>
            <span className="px-3 py-1 text-sm rounded-full bg-white text-gray-800 font-medium">
              {language === 'python' ? 'Python' : 'JavaScript'}
            </span>
          </div>
          <p className="mt-1 text-white/90 font-light">{getContent(concept)}</p>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">{translations.objective}</h2>
            <p className="text-gray-700">{getContent(objective)}</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">{translations.explanation}</h2>
            <p className="text-gray-700 whitespace-pre-line">{getContent(explanation)}</p>
          </div>
          
          {examples.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">{translations.examples}</h2>
              {examples.map((example, index) => (
                <div key={index} className="mb-4">
                  <div className="bg-gray-50 p-4 rounded-md mb-2 font-mono text-sm whitespace-pre">
                    {example.code}
                  </div>
                  <p className="text-gray-600 text-sm">{getContent(example.explanation)}</p>
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-8 pt-4 border-t border-gray-100">
            <Link href="/tutorials">
              <span className="text-blue-500 hover:text-blue-700 cursor-pointer">{translations.exploreMore}</span>
            </Link>
            <Link href="/">
              <span className="ml-4 text-blue-500 hover:text-blue-700 cursor-pointer">{translations.backToChallenges}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}