import { useLanguage } from '../hooks/useLanguage';
import { cn } from '@/lib/utils';

export default function LanguageToggle() {
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <div className="bg-white shadow rounded-lg p-1 inline-flex" id="language-toggle">
      <button 
        className={cn(
          "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200",
          currentLanguage === 'en' 
            ? "bg-blue-500 text-white" 
            : "text-gray-700 hover:bg-gray-100"
        )}
        onClick={() => setLanguage('en')}
      >
        English
      </button>
      <button 
        className={cn(
          "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200",
          currentLanguage === 'es' 
            ? "bg-blue-500 text-white" 
            : "text-gray-700 hover:bg-gray-100"
        )}
        onClick={() => setLanguage('es')}
      >
        Español
      </button>
    </div>
  );
}
