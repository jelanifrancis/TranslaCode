import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { useLanguage } from '../hooks/useLanguage';
import { supabase } from '../supabaseClient';

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
  const { currentLanguage, setLanguage } = useLanguage();  // ✅ Correct here
  
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUser() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) setUserId(user.id);
    }
    fetchUser();
  }, []);

  const slug = window.location.pathname.replace('/tutorials/', '');

  // Helper to get the right language content
  const getContent = (content: BilingualContent) => content[currentLanguage];

  const translations = {
    backToTutorials: currentLanguage === 'en' ? 'Back to Tutorials' : 'Volver a Tutoriales',
    objective: currentLanguage === 'en' ? 'Objective' : 'Objetivo',
    explanation: currentLanguage === 'en' ? 'Explanation' : 'Explicación',
    examples: currentLanguage === 'en' ? 'Examples' : 'Ejemplos',
    exploreMore: currentLanguage === 'en' ? 'Explore more tutorials' : 'Explorar más tutoriales',
    backToChallenges: currentLanguage === 'en' ? 'Back to challenges' : 'Volver a desafíos',
    markComplete: currentLanguage === 'en' ? 'Mark as Complete' : 'Marcar como Completado',
    completed: currentLanguage === 'en' ? 'Completed!' : '¡Completado!',
  };

  useEffect(() => {
    if (userId) {
      supabase
        .from('progress')
        .select('completed')
        .eq('user_id', userId)
        .eq('tutorial_slug', slug)
        .single()
        .then(({ data, error }) => {
          if (data?.completed) setCompleted(true);
        });
    }
  }, [userId, slug]);

  const handleComplete = async () => {
    if (!userId) {
      alert('Please log in to track your progress.');
      return;
    }
    setLoading(true);

    const { error } = await supabase
      .from('progress')
      .upsert({
        user_id: userId,
        tutorial_slug: slug,
        completed: true,
        completed_at: new Date(),
      }, { onConflict: 'user_id,tutorial_slug' });

    if (error) {
      console.error('Error marking complete:', error.message);
    } else {
      setCompleted(true);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Back Link */}
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

      {/* Language Switch Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setLanguage(currentLanguage === 'en' ? 'es' : 'en')} // ✅ Fixed
          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition"
        >
          {currentLanguage === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
        </button>
      </div>

      {/* Tutorial Card */}
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
          {/* Objective */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">{translations.objective}</h2>
            <p className="text-gray-700">{getContent(objective)}</p>
          </div>

          {/* Explanation */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">{translations.explanation}</h2>
            <p className="text-gray-700 whitespace-pre-line">{getContent(explanation)}</p>
          </div>

          {/* Examples */}
          {examples.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">{translations.examples}</h2>
              {examples.map((example, index) => (
                <div key={index} className="mb-4">
                  <div className="bg-gray-50 p-4 rounded-md mb-2 font-mono text-sm whitespace-pre overflow-x-auto">
                    {example.code}
                  </div>
                  <p className="text-gray-600 text-sm">{getContent(example.explanation)}</p>
                </div>
              ))}
            </div>
          )}

          {/* Mark Complete */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleComplete}
              disabled={completed || loading}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                completed
                  ? 'bg-green-500 text-white cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-yellow-400 hover:text-blue-800'
              }`}
            >
              {completed ? translations.completed : loading ? 'Loading...' : translations.markComplete}
            </button>
          </div>

          {/* Links */}
          <div className="mt-10 pt-6 border-t border-gray-100 text-center">
            <Link href="/tutorials">
              <span className="text-blue-500 hover:text-blue-700 cursor-pointer">
                {translations.exploreMore}
              </span>
            </Link>
            <Link href="/">
              <span className="ml-4 text-blue-500 hover:text-blue-700 cursor-pointer">
                {translations.backToChallenges}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}