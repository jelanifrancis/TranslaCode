import { Link } from 'wouter';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../hooks/useLanguage';

export default function AppHeader() {
  const { t } = useLanguage();
  
  return (
    <header className="w-full max-w-3xl px-4 mb-6">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="flex flex-col sm:flex-row items-center">
          <Link href="/">
            <span className="text-3xl font-bold text-blue-600 flex items-center mb-2 sm:mb-0 cursor-pointer">
              <span className="material-symbols-outlined mr-2">code</span>
              TranslaCode
            </span>
          </Link>
          
          <div className="ml-0 sm:ml-8 flex space-x-4">
            <Link href="/tutorials">
              <span className="text-blue-600 hover:text-blue-800 font-medium flex items-center cursor-pointer">
                <span className="material-symbols-outlined mr-1">school</span>
                Tutorials
              </span>
            </Link>
          </div>
        </div>
        
        <LanguageToggle />
      </div>
    </header>
  );
}
