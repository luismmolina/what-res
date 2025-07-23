import { DiaryEntry } from '../types';

const STORAGE_KEY = 'ai-diary-entries';

export const saveEntries = (entries: DiaryEntry[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch (error) {
    console.error('Error saving entries to localStorage:', error);
  }
};

export const loadEntries = (): DiaryEntry[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading entries from localStorage:', error);
  }
  return [];
};

export const addEntry = (entry: DiaryEntry): void => {
  const entries = loadEntries();
  entries.unshift(entry); // Add to beginning
  saveEntries(entries);
};

export const updateEntry = (id: string, updates: Partial<DiaryEntry>): void => {
  const entries = loadEntries();
  const index = entries.findIndex(entry => entry.id === id);
  if (index !== -1) {
    entries[index] = { ...entries[index], ...updates };
    saveEntries(entries);
  }
};

export const deleteEntry = (id: string): void => {
  const entries = loadEntries();
  const filtered = entries.filter(entry => entry.id !== id);
  saveEntries(filtered);
}; 