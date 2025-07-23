export interface DiaryEntry {
  id: string;
  timestamp: number;
  content: string;
  processed?: boolean;
  aiAnalysis?: AIAnalysis;
}

export interface AIAnalysis {
  summary: string;
  priorities: string[];
  tasks: string[];
  insights: string[];
  mathResults?: string[];
  keyPoints: string[];
  formattedContent: string;
}

export interface OpenRouterConfig {
  apiKey: string;
  baseURL: string;
  model: string;
} 