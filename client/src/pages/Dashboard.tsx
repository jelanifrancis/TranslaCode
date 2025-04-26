import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { Link } from 'wouter';
import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';

interface RecentActivityItem {
  type: string;
  name: string;
  completedAt: string;
  language?: string;
}

export default function Dashboard() {
  const { currentLanguage } = useLanguage();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [progressData, setProgressData] = useState<any[]>([]);
  const [challengeData, setChallengeData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserEmail(user.email ?? null);

        const { data: tutorials, error: tutorialsError } = await supabase
          .from('progress')
          .select('*')
          .eq('user_id', user.id);

        const { data: challenges, error: challengesError } = await supabase
          .from('challenge_progress')
          .select('*')
          .eq('user_id', user.id);

        if (tutorialsError) console.error(tutorialsError);
        else setProgressData(tutorials);

        if (challengesError) console.error(challengesError);
        else setChallengeData(challenges);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  const completedTutorials = progressData.filter(item => item.completed).length;
  const totalTutorials = 10; // Update if you add more tutorials
  const tutorialProgressPercentage = Math.round((completedTutorials / totalTutorials) * 100);

  const completedChallenges = challengeData.filter(item => item.completed).length;
  const totalChallenges = 10; // Update if you add more challenges
  const challengeProgressPercentage = Math.round((completedChallenges / totalChallenges) * 100);

  const recentActivity: RecentActivityItem[] = [
    ...progressData.filter(p => p.completed).map(p => ({
      type: 'Tutorial',
      name: p.tutorial_slug,
      completedAt: p.completed_at
    })),
    ...challengeData.filter(c => c.completed).map(c => ({
      type: 'Challenge',
      name: c.challenge_key,
      completedAt: c.completed_at,
      language: c.programming_language
    }))
  ].sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
    .slice(0, 5);

  const getAchievement = () => {
    if (completedChallenges >= 8) return "🏆 Master Coder!";
    if (completedChallenges >= 5) return "🚀 Rising Star!";
    if (completedChallenges >= 2) return "🌟 Beginner Champion!";
    return null;
  };

  if (loading) {
    return <div className="text-center p-8">Loading dashboard...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-10">
      <div className="max-w-5xl mx-auto">

        {/* Welcome Message */}
        <h1 className="text-4xl font-extrabold mb-2 text-center text-blue-700">
          Welcome back{userEmail ? `, ${userEmail}` : ''}!
        </h1>
        <p className="text-center text-gray-600 mb-8 italic">
          {currentLanguage === 'en'
            ? '"Learning to code is learning to create and innovate."'
            : '"Aprender a programar es aprender a crear e innovar."'}
        </p>

        {/* Tutorial Progress */}
<div className="mb-10">
  <h2 className="text-2xl font-bold mb-2 text-gray-800">Tutorial Progress</h2>
  <div className="bg-gray-200 rounded-full h-6 overflow-hidden shadow-inner">
    <motion.div 
      className="bg-blue-500 h-6 text-xs text-white flex items-center justify-center"
      initial={{ width: 0 }}
      animate={{ width: `${tutorialProgressPercentage}%` }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {tutorialProgressPercentage}%
    </motion.div>
  </div>
  <p className="text-sm text-gray-700 mt-2 text-center">{completedTutorials} of {totalTutorials} tutorials completed</p>
</div>

{/* Challenge Progress */}
<div className="mb-10">
  <h2 className="text-2xl font-bold mb-2 text-gray-800">Coding Challenges Progress</h2>
  <div className="bg-gray-200 rounded-full h-6 overflow-hidden shadow-inner">
    <motion.div 
      className="bg-yellow-500 h-6 text-xs text-white flex items-center justify-center"
      initial={{ width: 0 }}
      animate={{ width: `${challengeProgressPercentage}%` }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {challengeProgressPercentage}%
    </motion.div>
  </div>
  <p className="text-sm text-gray-700 mt-2 text-center">{completedChallenges} of {totalChallenges} challenges completed</p>
</div>

{/* Achievements */}
{getAchievement() && (
  <motion.div 
    className="mb-10 text-center"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
      {getAchievement()}
    </div>
  </motion.div>
)}

{/* Recent Activity */}
<div className="max-w-4xl mx-auto mt-10">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activity</h2>

  <div className="grid gap-4">
    {recentActivity.length === 0 ? (
      <p className="text-gray-500">No recent activity. Go crush some challenges 💪</p>
    ) : (
      recentActivity.map((item, index) => (
        <motion.div
          key={index}
          className="flex justify-between items-center bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md transition"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div>
            <p className="text-gray-700 font-medium">
              {item.type === 'Challenge' ? '🧩 Challenge Completed' : '📘 Tutorial Completed'}
            </p>
            <p className="text-sm text-gray-500 capitalize">
              {item.name.replace(/-/g, ' ')} {item.language ? `(${item.language})` : ''}
            </p>
          </div>
          <span className="text-sm text-gray-400">
            {new Date(item.completedAt).toLocaleDateString()}
          </span>
        </motion.div>
      ))
    )}
  </div>
</div>
</div>
</div>
  );
}