import { X, Check, RefreshCw } from 'lucide-react';
import { Chapter } from '../types';

interface LotteryModalProps {
  chapter: Chapter;
  onConfirm: () => void;
  onDrawAnother: () => void;
  onClose: () => void;
}

export function LotteryModal({ chapter, onConfirm, onDrawAnother, onClose }: LotteryModalProps) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative border-2 border-amber-200 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-stone-400 hover:text-stone-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <p className="text-sm text-stone-500 mb-3">
            :הפרק שהוגרל
          </p>
          <div className="inline-block bg-white px-8 py-4 rounded-2xl shadow-sm border-2 border-amber-200 mb-6">
            <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
              פרק {chapter.hebrewNumber}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={onConfirm}
            className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-5 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-xl hover:shadow-emerald-200/50"
          >
            <Check className="w-5 h-5" />
            אני לוקח את הפרק
          </button>
          <button
            onClick={onDrawAnother}
            className="w-full bg-white text-stone-700 px-6 py-5 rounded-xl font-semibold border-2 border-stone-200 hover:border-stone-300 hover:bg-stone-50 transition-all flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            הגריל פרק אחר
          </button>
        </div>
      </div>
    </div>
  );
}
