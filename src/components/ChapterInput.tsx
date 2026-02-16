import { useState, useMemo, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import chaptersData from '../data/chapters.json';
import { ChapterState } from '../types';

interface ChapterInputProps {
  onSelect: (chapterNumber: number) => void;
  onHide: () => void;
  statuses: ChapterState[];
}

export function ChapterInput({ onSelect, onHide, statuses }: ChapterInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<number | null>(null);

  const availableChapters = useMemo(() => {
    return chaptersData.filter((chapter) => {
      const status = statuses.find((s) => s.chapterId === chapter.number);
      return status?.status === 'available';
    });
  }, [statuses]);

  const handleSelect = (chapterNumber: number) => {
    onSelect(chapterNumber);
    onHide();
    setIsOpen(false);
  };

  const startScrollUp = () => {
    if (scrollRef.current) {
      scrollIntervalRef.current = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({ top: -10, behavior: 'auto' });
        }
      }, 20);
    }
  };

  const startScrollDown = () => {
    if (scrollRef.current) {
      scrollIntervalRef.current = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({ top: 10, behavior: 'auto' });
        }
      }, 20);
    }
  };

  const stopScroll = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };

  return (
    <div className="relative pt-4 max-w-xs mx-auto" style={{ animation: 'fadeIn 0.3s ease-in-out' }}>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute bottom-full mb-2 w-full bg-white rounded-xl shadow-lg z-50 overflow-hidden border border-stone-200">
            <button 
              onMouseEnter={startScrollUp}
              onMouseLeave={stopScroll}
              className="flex items-center justify-center py-2 border-b border-stone-100 w-full transition-colors"
            >
              <ChevronUp className="w-4 h-4 text-stone-400" />
            </button>
            <div ref={scrollRef} className="max-h-60 overflow-y-auto scrollbar-hide">
              {availableChapters.length === 0 ? (
                <div className="px-4 py-8 text-center text-stone-500">
                  כל הפרקים כבר נקראו! 🎉
                </div>
              ) : (
                availableChapters.map((chapter) => (
                  <button
                    key={chapter.number}
                    onClick={() => handleSelect(chapter.number)}
                    className="w-full px-4 py-2.5 text-right hover:bg-stone-50 transition-colors text-stone-700"
                  >
{chapter.name}
                  </button>
                ))
              )}
            </div>
            <button 
              onMouseEnter={startScrollDown}
              onMouseLeave={stopScroll}
              className="flex items-center justify-center py-2 border-t border-stone-100 w-full transition-colors"
            >
              <ChevronDown className="w-4 h-4 text-stone-400" />
            </button>
          </div>
        </>
      )}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full px-4 py-3 border-2 border-sky-200 rounded-xl text-right text-stone-400 bg-white cursor-pointer hover:border-sky-300 transition-all duration-300"
      >
        ...בחרו פרק מהרשימה
      </div>
    </div>
  );
}
