'use client'

import { useState, useEffect } from 'react'
import EntryInput from '../components/EntryInput'
import EntryDisplay from '../components/EntryDisplay'
import { DiaryEntry } from '../types'
import { loadEntries, addEntry, deleteEntry, updateEntry } from '../services/localStorageService'
import { processDiaryEntry } from '../services/openRouterService'

export default function Home() {
  const [entries, setEntries] = useState<DiaryEntry[]>([])
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    const savedEntries = loadEntries()
    setEntries(savedEntries)
  }, [])

  const handleSubmit = async (content: string) => {
    const newEntry: DiaryEntry = {
      id: Date.now().toString(),
      timestamp: Date.now(),
      content,
      processed: false,
    }

    // Add entry immediately to show it's being processed
    addEntry(newEntry)
    setEntries(prev => [newEntry, ...prev])
    setIsProcessing(true)

    try {
      // Process with AI
      const aiAnalysis = await processDiaryEntry(content)
      
      // Update entry with AI analysis
      const updatedEntry = {
        ...newEntry,
        processed: true,
        aiAnalysis,
      }

      updateEntry(newEntry.id, updatedEntry)
      setEntries(prev => 
        prev.map(entry => 
          entry.id === newEntry.id ? updatedEntry : entry
        )
      )
    } catch (error) {
      console.error('Error processing entry:', error)
      // Mark as processed even if AI fails
      updateEntry(newEntry.id, { processed: true })
      setEntries(prev => 
        prev.map(entry => 
          entry.id === newEntry.id 
            ? { ...entry, processed: true }
            : entry
        )
      )
    } finally {
      setIsProcessing(false)
    }
  }

  const handleDelete = (id: string) => {
    deleteEntry(id)
    setEntries(prev => prev.filter(entry => entry.id !== id))
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>AI Diary</h1>
        <p>Track your thoughts, tasks, and insights with AI analysis</p>
      </header>

      <EntryInput onSubmit={handleSubmit} isProcessing={isProcessing} />

      <main className="entries-container">
        {entries.length === 0 ? (
          <div className="empty-state">
            <h2>Start Your Journey</h2>
            <p>Write your first entry above to begin tracking your thoughts and tasks with AI analysis.</p>
          </div>
        ) : (
          entries.map(entry => (
            <EntryDisplay
              key={entry.id}
              entry={entry}
              onDelete={handleDelete}
            />
          ))
        )}
      </main>

      <style jsx>{`
        .app {
          min-height: 100vh;
          background-color: #000000;
          color: #ffffff;
          display: flex;
          flex-direction: column;
        }

        .app-header {
          text-align: center;
          padding: 24px 16px;
          background: linear-gradient(135deg, #111111 0%, #1a1a1a 100%);
          border-bottom: 1px solid #333333;
        }

        .app-header h1 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 8px;
          background: linear-gradient(135deg, #4a9eff 0%, #357abd 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .app-header p {
          color: #888888;
          font-size: 16px;
        }

        .entries-container {
          flex: 1;
          padding-bottom: 20px;
          overflow-y: auto;
        }

        .empty-state {
          text-align: center;
          padding: 60px 20px;
          color: #888888;
        }

        .empty-state h2 {
          font-size: 24px;
          margin-bottom: 16px;
          color: #cccccc;
        }

        .empty-state p {
          font-size: 16px;
          line-height: 1.6;
          max-width: 400px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .app-header {
            padding: 20px 12px;
          }

          .app-header h1 {
            font-size: 28px;
          }

          .app-header p {
            font-size: 14px;
          }

          .empty-state {
            padding: 40px 16px;
          }

          .empty-state h2 {
            font-size: 20px;
          }

          .empty-state p {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  )
} 