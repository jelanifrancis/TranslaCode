import { useLanguage } from '../hooks/useLanguage';

interface ActionButtonProps {
  onClick: () => void;
}

export default function ActionButton({ onClick }: ActionButtonProps) {
  const { t } = useLanguage();

  return (
    <div className="flex justify-center mb-6">
      <button 
        id="submit-button"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-colors duration-200 flex items-center"
        onClick={onClick}
      >
        <span className="material-symbols-outlined mr-2">send</span>
        <span>{t.submitButton}</span>
      </button>
    </div>
  );
}
