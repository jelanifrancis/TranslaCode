import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { challenges } from '../data/challenges';
import AppHeader from '../components/AppHeader';
import ChallengeCard from '../components/ChallengeCard';
import CodeEditor from '../components/CodeEditor';
import ActionButton from '../components/ActionButton';
import ResultMessage from '../components/ResultMessage';
import Footer from '../components/Footer';

export default function Home() {
  const { currentLanguage } = useLanguage();
  const [currentChallengeKey] = useState('addNumbers');
  const currentChallenge = challenges[currentChallengeKey];
  
  const [code, setCode] = useState(currentChallenge.defaultCode);
  const [resultStatus, setResultStatus] = useState<'success' | 'error' | null>(null);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const handleSubmitCode = () => {
    const isCorrect = currentChallenge.validator(code);
    setResultStatus(isCorrect ? 'success' : 'error');
    
    // Scroll to the result message
    setTimeout(() => {
      document.getElementById('result-container')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'nearest' 
      });
    }, 100);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center pt-8 pb-16">
      <AppHeader />
      
      <main className="w-full max-w-3xl px-4">
        <ChallengeCard challenge={currentChallenge[currentLanguage]} />
        <CodeEditor code={code} onCodeChange={handleCodeChange} />
        <ActionButton onClick={handleSubmitCode} />
        <ResultMessage status={resultStatus} />
      </main>
      
      <Footer />
    </div>
  );
}
