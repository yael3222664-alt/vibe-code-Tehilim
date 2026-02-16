export interface Chapter {
  number: number;
  hebrewNumber: string;
  name: string;
  verses: string[];
}

export type ChapterStatus = 'available' | 'reading' | 'completed';

export interface ChapterState {
  chapterId: number;
  status: ChapterStatus;
  drawnAt?: string;
  completedAt?: string;
}

export interface TehilimStats {
  total: number;
  available: number;
  reading: number;
  completed: number;
}

export interface TehilimState {
  chapters: Chapter[];
  statuses: ChapterState[];
  drawnChapter: Chapter | null;
  viewingChapter: Chapter | null;
  stats: TehilimStats;
}
