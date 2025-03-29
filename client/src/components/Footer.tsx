import { useLanguage } from '../hooks/useLanguage';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full max-w-3xl px-4 mt-auto">
      <div className="border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
        <p>{t.footerText}</p>
      </div>
    </footer>
  );
}
