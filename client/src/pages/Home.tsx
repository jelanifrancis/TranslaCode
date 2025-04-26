import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { challenges } from '../data/challenges';
import { ProgrammingLanguage } from '../lib/codeValidator';
import AppHeader from '../components/AppHeader';
import ChallengeCard from '../components/ChallengeCard';
import CodeEditor from '../components/CodeEditor';
import ActionButton from '../components/ActionButton';
import ResultMessage from '../components/ResultMessage';
import Footer from '../components/Footer';
import LanguageToggle from '../components/LanguageToggle';
import ProgrammingLanguageToggle from '../components/ProgrammingLanguageToggle';
import ChallengeLibrary from '../components/ChallengeLibrary';
import { supabase } from '../supabaseClient';

export default function Home() {
  const { t, currentLanguage } = useLanguage();
  const [currentChallengeKey, setCurrentChallengeKey] = useState('addNumbers');
  const [completedChallenges, setCompletedChallenges] = useState<string[]>([]);
  const [programmingLanguage, setProgrammingLanguage] = useState<ProgrammingLanguage>('javascript');
  const [showLibrary, setShowLibrary] = useState(false);

  const [code, setCode] = useState(challenges['addNumbers'].defaultCode['javascript']);
  const [resultStatus, setResultStatus] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    setCode(challenges[currentChallengeKey].defaultCode[programmingLanguage]);
    setResultStatus(null);
  }, [programmingLanguage, currentChallengeKey]);

  const currentChallengeData = challenges[currentChallengeKey]; // <-- MOVE IT HERE
  const currentChallengeLocalized = currentChallengeData[currentLanguage]; // <-- AND THIS

  // (the rest of your code stays exactly the same)
  useEffect(() => {
    setCode(currentChallengeData.defaultCode[programmingLanguage]);
    setResultStatus(null);
  }, [programmingLanguage, currentChallengeKey]);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };
  const markChallengeComplete = async (challengeKey: string) => {
    const { data: { user } } = await supabase.auth.getUser();
  
    if (!user) {
      alert('Please log in to track your challenge progress.');
      return;
    }
    console.log('Inside markChallengeComplete', { userId: user.id, challengeKey, programmingLanguage });

    const { error } = await supabase
      .from('challenge_progress') // <-- name of your new Supabase table
      .upsert({
        user_id: user.id,
        challenge_key: challengeKey,
        programming_language: programmingLanguage, //
        completed: true,
        completed_at: new Date()
      }, { onConflict: 'user_id,challenge_key,programming_language' });
  
    if (error) {
      console.error('Error updating challenge progress:', error.message);
    } else {
      console.log('Challenge progress saved!');
    }
  };

  const handleSubmitCode = async () => {
    const isCorrect = challenges[currentChallengeKey].validator(code, programmingLanguage);
    console.log('Validator result:', isCorrect); //
    console.log('Current Challenge Key:', currentChallengeKey);
    console.log('Programming Language:', programmingLanguage);

    setResultStatus(isCorrect ? 'success' : 'error');
  
    if (isCorrect && !completedChallenges.includes(currentChallengeKey)) {
      setCompletedChallenges([...completedChallenges, currentChallengeKey]);
      await markChallengeComplete(currentChallengeKey); // now await is valid
    }
  
    setTimeout(() => {
      document.getElementById('result-container')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest' 
      });
    }, 100);
  };

  const handleNextChallenge = () => {
    const challengeKeys = Object.keys(challenges);
    const currentIndex = challengeKeys.indexOf(currentChallengeKey);

    if (currentIndex < challengeKeys.length - 1) {
      setCurrentChallengeKey(challengeKeys[currentIndex + 1]);
      setResultStatus(null);
    }
  };

  const hasMoreChallenges = () => {
    const challengeKeys = Object.keys(challenges);
    const currentIndex = challengeKeys.indexOf(currentChallengeKey);
    return currentIndex < challengeKeys.length - 1;
  };

  const toggleLibrary = () => {
    setShowLibrary(!showLibrary);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center pt-8 pb-16">
      <AppHeader />
      
      <main className="w-full max-w-3xl px-4">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4 items-center">
            <p className="text-sm text-gray-600">
              {t.completedChallengesLabel} <span className="font-medium">{completedChallenges.length}/{Object.keys(challenges).length}</span>
            </p>
            <button 
              onClick={toggleLibrary}
              className="px-4 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              {t.libraryButton}
            </button>
          </div>
          <LanguageToggle />
        </div>
        
        <ChallengeCard challenge={currentChallengeLocalized} />

        <div className="my-4">
          <ProgrammingLanguageToggle
            selectedLanguage={programmingLanguage}
            onLanguageChange={setProgrammingLanguage}
          />
        </div>

        <CodeEditor code={code} onCodeChange={handleCodeChange} />
        <ActionButton onClick={handleSubmitCode} />

        <div id="result-container">
          <ResultMessage status={resultStatus} />

          {resultStatus === 'success' && hasMoreChallenges() && (
            <div className="mt-4">
              <button
                className="px-6 py-2 bg-green-500 text-white rounded-md font-medium hover:bg-green-600 transition-colors duration-200"
                onClick={handleNextChallenge}
              >
                {t.nextChallengeButton}
              </button>
            </div>
          )}

          {resultStatus === 'success' && !hasMoreChallenges() && completedChallenges.length === Object.keys(challenges).length && (
            <div className="mt-4 p-4 bg-yellow-100 text-yellow-800 rounded-md">
              {t.noMoreChallenges}
            </div>
          )}
        </div>
      </main>

      <Footer />

      {showLibrary && (
        <ChallengeLibrary
          completedChallenges={completedChallenges}
          currentChallengeKey={currentChallengeKey}
          onSelectChallenge={setCurrentChallengeKey}
          onClose={toggleLibrary}
        />
      )}
    </div>
  );
}