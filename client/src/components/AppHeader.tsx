import LanguageToggle from './LanguageToggle';

export default function AppHeader() {
  return (
    <header className="w-full max-w-3xl px-4 mb-6">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600 flex items-center mb-4 sm:mb-0">
          <span className="material-symbols-outlined mr-2">code</span>
          TranslaCode
        </h1>
        
        <LanguageToggle />
      </div>
    </header>
  );
}
