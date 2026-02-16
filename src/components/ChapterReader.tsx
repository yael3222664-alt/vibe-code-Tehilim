import { Chapter } from '../types';
import { ScrollText, CheckCircle } from 'lucide-react';

interface ChapterReaderProps {
  chapter: Chapter | null;
  onComplete?: (chapterId: number) => void;
}

export function ChapterReader({ chapter, onComplete }: ChapterReaderProps) {
  if (!chapter) {
    return (
      <div className="p-12 text-center border-2 border-sky-100 rounded-2xl bg-white">
        <ScrollText className="w-12 h-12 text-sky-300 mx-auto mb-4" />
        <p className="text-stone-500">
          בחרו פרק לקריאה
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border-2 border-stone-100 overflow-hidden shadow-sm">
      <div className="bg-gradient-to-r from-sky-50 to-teal-50 px-6 py-5 border-b border-sky-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white rounded-xl shadow-sm">
              <ScrollText className="w-5 h-5 text-sky-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-stone-800">{chapter.name}</h3>
              <p className="text-sm text-stone-500">ספר תהילים</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 bg-gradient-to-b from-white to-stone-50/50">
        <div className="prose prose-stone max-w-none">
          {chapter.verses.map((verse, index) => (
            <p
              key={index}
              className="text-lg md:text-xl text-stone-700 mb-4 last:mb-0 font-serif leading-[2]"
            >
              {verse}
            </p>
          ))}
        </div>
      </div>

      <div className="px-6 py-5 bg-stone-50 border-t border-stone-100">
        <button 
          onClick={() => onComplete?.(chapter.number)}
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-5 rounded-xl shadow-lg shadow-emerald-200/50 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2"
        >
          <CheckCircle className="w-5 h-5" />
          סיימתי לקרוא
        </button>
      </div>
    </div>
  );
}
