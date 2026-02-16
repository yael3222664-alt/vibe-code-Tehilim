import { useState } from 'react';
import { Sparkles, Shuffle, Check, RefreshCw } from 'lucide-react';
import { ChapterSelect } from './ChapterSelect';
import { ChapterInput } from './ChapterInput';
import { Chapter, ChapterState } from '../types';

interface ActionSectionProps {
  onDrawChapter: () => void;
  onSelectChapter: (chapterNumber: number) => void;
  availableCount: number;
  isDrawing: boolean;
  drawnChapter: Chapter | null;
  onConfirmChapter: () => void;
  onDrawAnother: () => void;
  statuses: ChapterState[];
}

export function ActionSection({ 
  onDrawChapter, 
  onSelectChapter, 
  availableCount, 
  isDrawing,
  drawnChapter,
  onConfirmChapter,
  onDrawAnother,
  statuses
}: ActionSectionProps) {
  const [showSelectInput, setShowSelectInput] = useState(false);

  return (
    <div className="p-6 md:p-8 bg-gradient-to-br from-amber-50/80 via-white to-sky-50/50 border-2 border-amber-100/60 rounded-2xl">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-100/60 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span className="text-sm font-medium text-amber-700">הגרלת פרקים</span>
        </div>
        
        {!drawnChapter ? (
          <>
            <p className="text-stone-600 mb-6">
              לחצו להגרלת פרק תהילים אקראי או בחרו פרק מסוים
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button
                onClick={onDrawChapter}
                disabled={availableCount === 0 || isDrawing}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 text-lg rounded-xl shadow-lg shadow-amber-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-300/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Shuffle className={`w-5 h-5 ${isDrawing ? 'animate-spin' : ''}`} />
                הגרילו פרק
              </button>
              
              <ChapterSelect onShowInput={() => setShowSelectInput(true)} />
            </div>

            {showSelectInput && (
              <ChapterInput 
                onSelect={onSelectChapter}
                onHide={() => setShowSelectInput(false)}
                statuses={statuses}
              />
            )}
          </>
        ) : (
          <div className="py-6 transition-all duration-300">
            <p className="text-sm text-stone-500 mb-2" dir="rtl">
              הפרק שהוגרל:
            </p>
            
            <div className="inline-block bg-white px-8 py-4 rounded-2xl shadow-sm border-2 border-amber-200 mb-8">
              <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                {drawnChapter.name}
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button
                onClick={onConfirmChapter}
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-xl hover:shadow-emerald-200/50"
              >
                <Check className="w-5 h-5" />
                אני לוקח את הפרק
              </button>
              
              <button
                onClick={onDrawAnother}
                className="bg-white text-stone-700 px-6 py-3 rounded-xl font-semibold border-2 border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                הגרילו פרק אחר
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
