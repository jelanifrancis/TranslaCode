import { useLanguage } from '../hooks/useLanguage';
import { Challenge } from '../data/challenges';

interface ChallengeCardProps {
  challenge: Challenge;
}

export default function ChallengeCard({ challenge }: ChallengeCardProps) {
  const { t } = useLanguage();

  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-6" data-testid="challenge-container">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        {t.challengeTitle}
      </h2>
      
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-700 mb-2">
          {challenge.title}
        </h3>
        <p className="text-gray-600">
          {challenge.description}
        </p>
      </div>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4 rounded-r">
        <h4 className="text-sm font-medium text-yellow-800 mb-1">
          {t.lessonHeader}
        </h4>
        <p className="text-sm text-yellow-700">
          {challenge.lesson}
        </p>
      </div>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-2 rounded-r">
        <h4 className="text-sm font-medium text-blue-700 mb-1">
          {t.exampleHeader}
        </h4>
        <p className="text-sm text-blue-800 font-mono">
          <span>{t.exampleTest}</span> sum(3, 5)<br />
          <span>{t.exampleResult}</span> 8
        </p>
      </div>
    </section>
  );
}
