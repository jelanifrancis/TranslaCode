import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { Link } from 'wouter';
import { useLanguage } from '../hooks/useLanguage';

export default function Dashboard() {
  const { currentLanguage } = useLanguage();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [progressData, setProgressData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserEmail(user.email ?? null);
        const { data, error } = await supabase
          .from('progress')
          .select('*')
          .eq('user_id', user.id);

        if (error) console.error(error);
        else setProgressData(data);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  const completedCount = progressData.filter(item => item.completed).length;
  const totalTutorials = 10; // Update if you add more
  const progressPercentage = Math.round((completedCount / totalTutorials) * 100);

  if (loading) {
    return <div className="text-center p-8">Loading dashboard...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-10">
      <div className="max-w-4xl mx-auto">

        {/* Welcome Message */}
        <h1 className="text-4xl font-extrabold mb-2 text-center text-blue-700">
          Welcome back{userEmail ? `, ${userEmail}` : ''}!
        </h1>

        {/* Inspiring Quote */}
        <p className="text-center text-gray-600 mb-8 italic">
          {currentLanguage === 'en'
            ? '"Learning to code is learning to create and innovate."'
            : '"Aprender a programar es aprender a crear e innovar."'}
        </p>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="bg-gray-200 rounded-full h-6 overflow-hidden shadow-inner">
            <div
              className="bg-blue-500 h-6 text-xs text-white flex items-center justify-center transition-all duration-500 ease-in-out"
              style={{ width: `${progressPercentage}%` }}
            >
              {progressPercentage}%
            </div>
          </div>
          <p className="text-sm text-gray-700 mt-2 text-center">
            {completedCount} of {totalTutorials} tutorials completed
          </p>

          {/* Achievement Badge */}
          {progressPercentage >= 100 ? (
            <div className="mt-4 text-center text-green-600 font-bold text-lg">
              🥇 Congratulations! You completed all tutorials!
            </div>
          ) : progressPercentage >= 75 ? (
            <div className="mt-4 text-center text-blue-600 font-semibold">
              🌟 Almost there! You're a pro coder!
            </div>
          ) : progressPercentage >= 50 ? (
            <div className="mt-4 text-center text-yellow-600 font-semibold">
              🚀 Great progress! Keep going!
            </div>
          ) : progressPercentage >= 25 ? (
            <div className="mt-4 text-center text-purple-600 font-semibold">
              🔥 Strong start! You're doing amazing!
            </div>
          ) : null}
        </div>

        {/* Completed Tutorials Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Your Completed Tutorials
          </h2>

          {completedCount === 0 ? (
            <p className="text-gray-500 text-center">
              You haven't completed any tutorials yet. Start learning today!
            </p>
          ) : (
            <ul className="list-disc list-inside space-y-3">
              {progressData
                .filter(item => item.completed)
                .map((item, idx) => (
                  <li key={idx} className="text-gray-700 capitalize">
                    {item.tutorial_slug.replace(/-/g, ' ')}
                  </li>
                ))}
            </ul>
          )}
        </div>

        {/* Return to Challenges Button */}
        <div className="mt-10 flex justify-center">
          <Link href="/">
            <span className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-yellow-400 hover:text-blue-800 transition">
              Return to Coding Challenges
            </span>
          </Link>
        </div>

      </div>
    </div>
  );
}