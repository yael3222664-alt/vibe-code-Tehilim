import { List } from 'lucide-react';

interface ChapterSelectProps {
  onShowInput: () => void;
}

export function ChapterSelect({ onShowInput }: ChapterSelectProps) {
  return (
    <button
      onClick={onShowInput}
      className="w-full sm:w-auto border-2 border-sky-200 hover:border-sky-300 hover:bg-sky-50 text-sky-700 px-6 py-3 text-lg rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
    >
      <List className="w-5 h-5 ml-2" />
      בחרו פרק מסוים
    </button>
  );
}
