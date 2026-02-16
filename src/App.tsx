import { Header } from './components/Header';
import { StatsGrid } from './components/StatsGrid';
import { ActionSection } from './components/ActionSection';
import { ChapterReader } from './components/ChapterReader';
import { ReadingList } from './components/ReadingList';
import { useTehilim } from './hooks/useTehilim';

// Updated styling to match teacher's design
function App() {
  const {
    stats,
    statuses,
    drawnChapter,
    viewingChapter,
    readingChapters,
    isDrawing,
    completedBooks,
    drawChapter,
    confirmChapter,
    drawAnother,
    viewChapter,
    markComplete,
    selectChapterManually,
  } = useTehilim();

  const handleDrawChapter = () => {
    drawChapter();
  };

  const handleSelectChapter = (chapterNumber: number) => {
    selectChapterManually(chapterNumber);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/50 via-white to-sky-50/30" dir="rtl">
      <Header />
      
      <main className="max-w-5xl mx-auto px-4 py-6 md:py-8 space-y-6 md:space-y-8">
        <StatsGrid stats={stats} completedBooks={completedBooks} />
        
        <ActionSection
          onDrawChapter={handleDrawChapter}
          onSelectChapter={handleSelectChapter}
          availableCount={stats.available}
          isDrawing={isDrawing}
          drawnChapter={drawnChapter}
          onConfirmChapter={confirmChapter}
          onDrawAnother={drawAnother}
          statuses={statuses}
        />

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          <div className="order-1 lg:order-2">
            <ChapterReader chapter={viewingChapter} onComplete={markComplete} />
          </div>
          
          <div className="order-2 lg:order-1">
            <ReadingList
              chapters={readingChapters}
              onView={viewChapter}
              onComplete={markComplete}
            />
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;
