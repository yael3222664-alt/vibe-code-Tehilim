import { useState, useEffect, useMemo, useCallback } from 'react';
import { Chapter, ChapterState, ChapterStatus, TehilimStats } from '../types';
import chaptersData from '../data/chapters.json';

const STORAGE_KEY = 'tehilim-progress';
const STORAGE_VERSION = '1.0';

interface StoredData {
  version: string;
  statuses: ChapterState[];
  lastUpdated: string;
}

export function useTehilim() {
  const [chapters] = useState<Chapter[]>(chaptersData as Chapter[]);
  const [statuses, setStatuses] = useState<ChapterState[]>([]);
  const [drawnChapter, setDrawnChapter] = useState<Chapter | null>(null);
  const [viewingChapter, setViewingChapter] = useState<Chapter | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [completedBooks, setCompletedBooks] = useState(0);

  // Initialize statuses from localStorage or create new
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const data: StoredData = JSON.parse(stored);
        if (data.version === STORAGE_VERSION) {
          setStatuses(data.statuses);
          return;
        }
      } catch (error) {
        console.error('Failed to load progress:', error);
      }
    }
    
    // Initialize all chapters as available
    const initialStatuses: ChapterState[] = chapters.map((ch) => ({
      chapterId: ch.number,
      status: 'available' as ChapterStatus,
    }));
    setStatuses(initialStatuses);
  }, [chapters]);

  // Save to localStorage whenever statuses change
  useEffect(() => {
    if (statuses.length > 0) {
      const data: StoredData = {
        version: STORAGE_VERSION,
        statuses,
        lastUpdated: new Date().toISOString(),
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  }, [statuses]);

  // Calculate stats
  const stats: TehilimStats = useMemo(() => {
    const available = statuses.filter((s) => s.status === 'available').length;
    const reading = statuses.filter((s) => s.status === 'reading').length;
    const completed = statuses.filter((s) => s.status === 'completed').length;

    return {
      total: 150,
      available,
      reading,
      completed,
    };
  }, [statuses]);

  // Draw a random available chapter
  const drawChapter = useCallback(() => {
    const availableChapters = chapters.filter((ch) => {
      const status = statuses.find((s) => s.chapterId === ch.number);
      return status?.status === 'available';
    });

    if (availableChapters.length === 0) {
      return;
    }

    setIsDrawing(true);
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * availableChapters.length);
      const selected = availableChapters[randomIndex];
      setDrawnChapter(selected);
      setIsDrawing(false);
    }, 500);
  }, [chapters, statuses]);

  // Confirm the drawn chapter (move to reading)
  const confirmChapter = useCallback(() => {
    if (!drawnChapter) return;

    setStatuses((prev) =>
      prev.map((s) =>
        s.chapterId === drawnChapter.number
          ? { ...s, status: 'reading' as ChapterStatus, drawnAt: new Date().toISOString() }
          : s
      )
    );
    
    setViewingChapter(drawnChapter);
    setDrawnChapter(null);
  }, [drawnChapter]);

  // Draw another chapter (reject current)
  const drawAnother = useCallback(() => {
    setDrawnChapter(null);
    // Small delay for UX
    setTimeout(() => {
      drawChapter();
    }, 100);
  }, [drawChapter]);

  // View a specific chapter
  const viewChapter = useCallback(
    (chapterId: number) => {
      const chapter = chapters.find((ch) => ch.number === chapterId);
      if (chapter) {
        setViewingChapter(chapter);
        
        // Update drawnAt to move chapter to end of reading list
        setStatuses((prev) =>
          prev.map((s) =>
            s.chapterId === chapterId && s.status === 'reading'
              ? { ...s, drawnAt: new Date().toISOString() }
              : s
          )
        );
      }
    },
    [chapters]
  );

  // Mark chapter as completed
  const markComplete = useCallback((chapterId: number) => {
    setStatuses((prev) => {
      const updated = prev.map((s) =>
        s.chapterId === chapterId
          ? { ...s, status: 'completed' as ChapterStatus, completedAt: new Date().toISOString() }
          : s
      );
      
      // Check if all 150 chapters are completed
      const completedCount = updated.filter(s => s.status === 'completed').length;
      if (completedCount === 150) {
        // Book completed! 🎉
        setCompletedBooks(prev => prev + 1);
        
        // Reset all chapters for new book
        setTimeout(() => {
          setStatuses(chapters.map((ch) => ({
            chapterId: ch.number,
            status: 'available' as ChapterStatus,
          })));
        }, 2000); // 2 second delay to show completion
      }
      
      return updated;
    });
    
    // Clear viewing if this was the viewed chapter
    setViewingChapter((prev) => (prev?.number === chapterId ? null : prev));
  }, [chapters]);

  // Manually select a chapter (for "Select Chapter" button)
  const selectChapterManually = useCallback((chapterId: number) => {
    setStatuses((prev) =>
      prev.map((s) =>
        s.chapterId === chapterId
          ? { ...s, status: 'reading' as ChapterStatus, drawnAt: new Date().toISOString() }
          : s
      )
    );
    
    const chapter = chapters.find((ch) => ch.number === chapterId);
    if (chapter) {
      setViewingChapter(chapter);
    }
  }, [chapters]);

  // Get reading chapters
  const readingChapters = useMemo(() => {
    return chapters.filter((ch) => {
      const status = statuses.find((s) => s.chapterId === ch.number);
      return status?.status === 'reading';
    });
  }, [chapters, statuses]);

  // Close lottery modal
  const closeDrawn = useCallback(() => {
    setDrawnChapter(null);
  }, []);

  return {
    chapters,
    statuses,
    drawnChapter,
    viewingChapter,
    stats,
    readingChapters,
    isDrawing,
    completedBooks,
    drawChapter,
    confirmChapter,
    drawAnother,
    viewChapter,
    markComplete,
    selectChapterManually,
    closeDrawn,
  };
}
