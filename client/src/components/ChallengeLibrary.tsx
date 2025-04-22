import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { challenges, DifficultyLevel } from '../data/challenges';

interface ChallengeLibraryProps {
  completedChallenges: string[];
  currentChallengeKey: string;
  onSelectChallenge: (challengeKey: string) => void;
  onClose: () => void;
}

export default function ChallengeLibrary({
  completedChallenges,
  currentChallengeKey,
  onSelectChallenge,
  onClose
}: ChallengeLibraryProps) {
  const { t, currentLanguage } = useLanguage();
  const [filter, setFilter] = useState<DifficultyLevel | 'all'>('all');
  
  // Function to get a nice label for the difficulty level
  const getDifficultyLabel = (difficulty: DifficultyLevel) => {
    switch(difficulty) {
      case 'beginner':
        return t.difficultyBeginner;
      case 'intermediate':
        return t.difficultyIntermediate;
      case 'advanced':
        return t.difficultyAdvanced;
    }
  };
  
  // Get color class based on difficulty
  const getDifficultyColorClass = (difficulty: DifficultyLevel) => {
    switch(difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
    }
  };
  
  // Filter challenges based on selected difficulty
  const filteredChallenges = Object.entries(challenges).filter(([_, challenge]) => {
    return filter === 'all' || challenge.difficulty === filter;
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{t.libraryTitle}</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <p className="text-gray-600 mb-4">{t.libraryDescription}</p>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.difficultyLabel}
            </label>
            <div className="flex space-x-2">
              <button
                className={`px-3 py-1 rounded-md text-sm ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button
                className={`px-3 py-1 rounded-md text-sm ${filter === 'beginner' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setFilter('beginner')}
              >
                {t.difficultyBeginner}
              </button>
              <button
                className={`px-3 py-1 rounded-md text-sm ${filter === 'intermediate' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setFilter('intermediate')}
              >
                {t.difficultyIntermediate}
              </button>
              <button
                className={`px-3 py-1 rounded-md text-sm ${filter === 'advanced' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                onClick={() => setFilter('advanced')}
              >
                {t.difficultyAdvanced}
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            {filteredChallenges.map(([key, challenge]) => (
              <div 
                key={key} 
                className={`p-4 border rounded-lg ${key === currentChallengeKey ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-800">{challenge[currentLanguage].title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{challenge[currentLanguage].description}</p>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColorClass(challenge.difficulty)}`}>
                      {getDifficultyLabel(challenge.difficulty)}
                    </span>
                    
                    {completedChallenges.includes(key) && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Completed
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="mt-3 flex justify-end">
                  {key === currentChallengeKey ? (
                    <button
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-md"
                      onClick={onClose}
                    >
                      {t.backToCurrentButton}
                    </button>
                  ) : (
                    <button
                      className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md"
                      onClick={() => {
                        onSelectChallenge(key);
                        onClose();
                      }}
                    >
                      {t.selectChallengeButton}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}