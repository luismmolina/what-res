import { AIAnalysis } from '../types'

export const processDiaryEntry = async (content: string): Promise<AIAnalysis> => {
  try {
    const response = await fetch('/api/process-entry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const analysis = await response.json()
    return analysis as AIAnalysis
  } catch (error) {
    console.error('Error processing diary entry:', error)
    throw error
  }
} 