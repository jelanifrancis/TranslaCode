import { useLanguage } from '../hooks/useLanguage';

interface ResultMessageProps {
  status: 'success' | 'error' | null;
}

export default function ResultMessage({ status }: ResultMessageProps) {
  const { t } = useLanguage();
  
  if (!status) return null;

  return (
    <div id="result-container" className="mb-8">
      {status === 'success' ? (
        <div id="success-message" className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <span className="material-symbols-outlined text-green-500">check_circle</span>
            </div>
            <div className="ml-3">
              <h3 className="text-green-800 font-medium">{t.successTitle}</h3>
              <p className="text-green-700 text-sm">{t.successMessage}</p>
            </div>
          </div>
        </div>
      ) : (
        <div id="error-message" className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <span className="material-symbols-outlined text-red-500">error</span>
            </div>
            <div className="ml-3">
              <h3 className="text-red-800 font-medium">{t.errorTitle}</h3>
              <p className="text-red-700 text-sm">{t.errorMessage}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
