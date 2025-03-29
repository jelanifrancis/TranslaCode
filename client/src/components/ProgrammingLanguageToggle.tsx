import { ProgrammingLanguage } from '../lib/codeValidator';
import { useLanguage } from '../hooks/useLanguage';

interface ProgrammingLanguageToggleProps {
  selectedLanguage: ProgrammingLanguage;
  onLanguageChange: (language: ProgrammingLanguage) => void;
}

export default function ProgrammingLanguageToggle({ 
  selectedLanguage, 
  onLanguageChange 
}: ProgrammingLanguageToggleProps) {
  const { t } = useLanguage();

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {t.languageSelectLabel}
      </label>
      <div className="bg-white shadow rounded-lg p-1 inline-flex">
        <button 
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
            selectedLanguage === 'javascript' 
              ? "bg-blue-500 text-white" 
              : "text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => onLanguageChange('javascript')}
        >
          {t.progLangSelectJS}
        </button>
        <button 
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
            selectedLanguage === 'python' 
              ? "bg-blue-500 text-white" 
              : "text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => onLanguageChange('python')}
        >
          {t.progLangSelectPython}
        </button>
      </div>
    </div>
  );
}