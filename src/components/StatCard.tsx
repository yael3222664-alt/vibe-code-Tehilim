import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: number | string;
  theme: 'purple' | 'orange' | 'green' | 'blue';
}

const themeClasses = {
  purple: {
    bg: 'bg-violet-50',
    border: 'border-violet-100',
    icon: 'text-violet-600',
  },
  orange: {
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    icon: 'text-amber-600',
  },
  green: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    icon: 'text-emerald-600',
  },
  blue: {
    bg: 'bg-sky-50',
    border: 'border-sky-100',
    icon: 'text-sky-600',
  },
};

export function StatCard({ icon: Icon, label, value, theme }: StatCardProps) {
  const colors = themeClasses[theme];
  
  return (
    <div className={`p-4 md:p-5 bg-white border-2 ${colors.border} rounded-xl transition-all duration-300 hover:shadow-md`}>
      <div className="flex items-start gap-3">
        <div className={`p-2.5 ${colors.bg} rounded-xl`}>
          <Icon className={`w-5 h-5 ${colors.icon}`} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs md:text-sm text-stone-500 mb-1">{label}</p>
          <p className="text-xl md:text-2xl font-bold text-stone-800">{value}</p>
        </div>
      </div>
    </div>
  );
}
