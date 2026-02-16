import { BookOpen, Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-amber-100 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 py-4 md:py-5">
        <div className="flex items-center justify-center gap-3">
          <div className="p-2.5 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl shadow-lg shadow-amber-200/50">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 bg-clip-text text-transparent">
              תהילים ביחד
            </h1>
            <p className="text-xs md:text-sm text-stone-500 flex items-center justify-center gap-1">
              <Sparkles className="w-3 h-3" />
              הגרלת פרקי תהילים
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
