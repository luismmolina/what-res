import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY || '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',
  defaultHeaders: {
    'HTTP-Referer': 'https://ai-diary.vercel.app',
    'X-Title': 'AI Diary',
  },
})

export async function POST(request: NextRequest) {
  try {
    const { content } = await request.json()

    if (!content) {
      return NextResponse.json(
        { error: 'Content is required' },
        { status: 400 }
      )
    }

    const prompt = `Analyze this diary entry and extract the most important information. Format your response as a JSON object with the following structure:

{
  "summary": "A concise 2-3 sentence summary of the main points",
  "priorities": ["List of high-priority items or concerns"],
  "tasks": ["List of actionable tasks mentioned"],
  "insights": ["Key insights or observations"],
  "mathResults": ["Any mathematical calculations or results found"],
  "keyPoints": ["Important points to remember"],
  "formattedContent": "A well-formatted, easy-to-read version of the content in markdown format, organized by sections"
}

Focus on:
- Extracting actionable tasks
- Identifying priorities and deadlines
- Finding mathematical expressions and calculating results
- Highlighting important insights
- Creating a clean, readable format

Diary entry: "${content}"

Respond only with the JSON object, no additional text.`

    const completion = await openai.chat.completions.create({
      model: 'moonshotai/kimi-k2:nitro',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.3,
    })

    const response = completion.choices[0]?.message?.content

    if (!response) {
      throw new Error('No response from AI')
    }

    // Try to parse the JSON response
    try {
      const analysis = JSON.parse(response)
      return NextResponse.json(analysis)
    } catch (parseError) {
      // If JSON parsing fails, create a basic analysis
      return NextResponse.json({
        summary: "Unable to process entry automatically",
        priorities: [],
        tasks: [],
        insights: [],
        keyPoints: [],
        formattedContent: content
      })
    }
  } catch (error) {
    console.error('Error processing diary entry:', error)
    return NextResponse.json(
      { error: 'Failed to process entry' },
      { status: 500 }
    )
  }
} 