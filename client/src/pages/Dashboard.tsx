import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { Link } from 'wouter';

export default function Dashboard() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [progressData, setProgressData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserEmail(user.email ?? null);  // <-- FIX: fallback to null if undefined
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
  const totalTutorials = 10; // Update this if you add more tutorials
  const progressPercentage = Math.round((completedCount / totalTutorials) * 100);

  if (loading) {
    return <div className="text-center p-8">Loading dashboard...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome back{userEmail ? `, ${userEmail}` : ''}!</h1>

      <div className="mb-6">
        <div className="bg-gray-100 rounded-full h-6 overflow-hidden">
          <div 
            className="bg-blue-500 h-6 text-xs text-white flex items-center justify-center"
            style={{ width: `${progressPercentage}%` }}
          >
            {progressPercentage}%
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-2">{completedCount} of {totalTutorials} tutorials completed</p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Your Completed Tutorials</h2>
        {completedCount === 0 ? (
          <p className="text-gray-500">You haven't completed any tutorials yet!</p>
        ) : (
          <ul className="list-disc list-inside space-y-2">
            {progressData
              .filter(item => item.completed)
              .map((item, idx) => (
                <li key={idx} className="text-gray-700">
                  {item.tutorial_slug}
                </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-8 text-center">
        <Link href="/">
          <span className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
            Return to Coding Challenges
          </span>
        </Link>
      </div>
    </div>
  );
}