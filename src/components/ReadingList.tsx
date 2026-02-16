import { Eye, CheckCircle, BookOpen } from 'lucide-react';
import { Chapter } from '../types';

interface ReadingListProps {
  chapters: Chapter[];
  onView: (chapterId: number) => void;
  onComplete: (chapterId: number) => void;
}

export function ReadingList({ chapters, onView, onComplete }: ReadingListProps) {
  if (chapters.length === 0) {
    return (
      <div className="p-8 text-center border-2 border-dashed border-stone-200 bg-stone-50/50 rounded-2xl">
        <BookOpen className="w-12 h-12 text-stone-300 mx-auto mb-4" />
        <p className="text-stone-500">
          עדיין לא התחלתם לקרוא
        </p>
        <p className="text-sm text-stone-400 mt-1">
          הגרילו פרק או בחרו פרק מסוים להתחלה
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-5 h-5 text-sky-600" />
        <h3 className="text-lg font-semibold text-stone-800">פרקים בקריאה</h3>
        <span className="px-2 py-0.5 bg-sky-100 text-sky-700 text-sm rounded-full">
          {chapters.length}
        </span>
      </div>
      
      <div className="grid gap-3">
        {chapters.map((chapter, index) => {
          const isActive = index === chapters.length - 1;
          
          return (
            <div
              key={chapter.number}
              className={`p-4 border-2 rounded-xl transition-all duration-300 ${
                isActive
                  ? 'border-sky-300 bg-sky-50 shadow-md'
                  : 'border-stone-100 bg-white hover:border-stone-200 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg ${
                    isActive
                      ? 'bg-sky-500 text-white'
                      : 'bg-stone-100 text-stone-600'
                  }`}>
                    {chapter.hebrewNumber}
                  </div>
                  <p className="font-medium text-stone-700">{chapter.name}</p>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => onView(chapter.number)}
                    className="text-sky-600 hover:text-sky-700 hover:bg-sky-50 px-3 py-2 rounded-lg transition-all text-sm flex items-center gap-1"
                  >
                    <Eye className="w-4 h-4 ml-1" />
                    צפייה
                  </button>
                  <button
                    onClick={() => onComplete(chapter.number)}
                    className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 px-3 py-2 rounded-lg transition-all text-sm flex items-center gap-1"
                  >
                    <CheckCircle className="w-4 h-4 ml-1" />
                    סיימתי
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
