import { Trophy, Shuffle, CircleCheckBig, BookOpen } from 'lucide-react';
import { StatCard } from './StatCard';
import { TehilimStats } from '../types';

interface StatsGridProps {
  stats: TehilimStats;
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
      <StatCard
        icon={BookOpen}
        label="פרקים בקריאה"
        value={stats.reading}
        theme="blue"
      />
      <StatCard
        icon={CircleCheckBig}
        label="פרקים שנקראו"
        value={`${stats.completed} מתוך 150`}
        theme="green"
      />
      <StatCard
        icon={Shuffle}
        label="נשארו להגרלה"
        value={stats.available}
        theme="orange"
      />
      <StatCard
        icon={Trophy}
        label="ספרים שהושלמו"
        value={0}
        theme="purple"
      />
    </div>
  );
}
