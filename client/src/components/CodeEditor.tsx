import { useLanguage } from '../hooks/useLanguage';

interface CodeEditorProps {
  code: string;
  onCodeChange: (code: string) => void;
}

export default function CodeEditor({ code, onCodeChange }: CodeEditorProps) {
  const { t } = useLanguage();

  return (
    <section className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold text-gray-800">
          {t.codeEditorTitle}
        </h2>
        <div className="text-sm text-gray-500">
          <span className="material-symbols-outlined text-sm align-middle">help_outline</span>
          <span>{t.languageIndicator}</span>
        </div>
      </div>
      
      <div className="relative bg-gray-900 rounded-lg shadow-md overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-10 flex items-center px-4 bg-gray-800">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        
        <textarea
          id="code-editor"
          className="w-full bg-gray-900 text-gray-100 font-mono p-4 pt-12 min-h-[240px] focus:outline-none resize-y"
          spellCheck="false"
          value={code}
          onChange={(e) => onCodeChange(e.target.value)}
        ></textarea>
      </div>
    </section>
  );
}
