import React from 'react';
import { DiaryEntry } from '../types';

interface EntryDisplayProps {
  entry: DiaryEntry;
  onDelete: (id: string) => void;
}

const EntryDisplay: React.FC<EntryDisplayProps> = ({ entry, onDelete }) => {
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  const renderMarkdown = (text: string) => {
    // Simple markdown rendering for basic formatting
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/\n/g, '<br />');
  };

  return (
    <div className="entry-card">
      <div className="entry-header">
        <span className="entry-date">{formatDate(entry.timestamp)}</span>
        <button
          onClick={() => onDelete(entry.id)}
          className="delete-button"
          aria-label="Delete entry"
        >
          ×
        </button>
      </div>

      {entry.processed && entry.aiAnalysis ? (
        <div className="ai-analysis">
          <div className="analysis-section">
            <h3>Summary</h3>
            <p>{entry.aiAnalysis.summary}</p>
          </div>

          {entry.aiAnalysis.priorities.length > 0 && (
            <div className="analysis-section">
              <h3>Priorities</h3>
              <ul>
                {entry.aiAnalysis.priorities.map((priority, index) => (
                  <li key={index}>{priority}</li>
                ))}
              </ul>
            </div>
          )}

          {entry.aiAnalysis.tasks.length > 0 && (
            <div className="analysis-section">
              <h3>Tasks</h3>
              <ul>
                {entry.aiAnalysis.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
          )}

          {entry.aiAnalysis.insights.length > 0 && (
            <div className="analysis-section">
              <h3>Insights</h3>
              <ul>
                {entry.aiAnalysis.insights.map((insight, index) => (
                  <li key={index}>{insight}</li>
                ))}
              </ul>
            </div>
          )}

          {entry.aiAnalysis.mathResults && entry.aiAnalysis.mathResults.length > 0 && (
            <div className="analysis-section">
              <h3>Calculations</h3>
              <ul>
                {entry.aiAnalysis.mathResults.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
          )}

          {entry.aiAnalysis.keyPoints.length > 0 && (
            <div className="analysis-section">
              <h3>Key Points</h3>
              <ul>
                {entry.aiAnalysis.keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="analysis-section">
            <h3>Formatted Content</h3>
            <div 
              className="formatted-content"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(entry.aiAnalysis.formattedContent) }}
            />
          </div>
        </div>
      ) : (
        <div className="processing-status">
          <p>Processing with AI...</p>
        </div>
      )}

      <div className="original-content">
        <h4>Original Entry</h4>
        <p>{entry.content}</p>
      </div>

      <style jsx>{`
        .entry-card {
          background-color: #1a1a1a;
          border: 1px solid #333333;
          border-radius: 16px;
          margin: 16px;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .entry-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .entry-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          background-color: #111111;
          border-bottom: 1px solid #333333;
        }

        .entry-date {
          color: #888888;
          font-size: 14px;
        }

        .delete-button {
          background: none;
          border: none;
          color: #ff6b6b;
          font-size: 24px;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 4px;
          transition: background-color 0.2s ease;
        }

        .delete-button:hover {
          background-color: rgba(255, 107, 107, 0.1);
        }

        .ai-analysis {
          padding: 20px;
        }

        .analysis-section {
          margin-bottom: 24px;
        }

        .analysis-section h3 {
          color: #4a9eff;
          margin-bottom: 8px;
          font-size: 18px;
          font-weight: 600;
        }

        .analysis-section p {
          color: #cccccc;
          line-height: 1.6;
          margin-bottom: 8px;
        }

        .analysis-section ul {
          list-style: none;
          padding: 0;
        }

        .analysis-section li {
          color: #cccccc;
          padding: 8px 0;
          border-bottom: 1px solid #333333;
          line-height: 1.5;
        }

        .analysis-section li:last-child {
          border-bottom: none;
        }

        .formatted-content {
          color: #cccccc;
          line-height: 1.6;
        }

        .formatted-content h1,
        .formatted-content h2,
        .formatted-content h3 {
          color: #4a9eff;
          margin: 16px 0 8px 0;
        }

        .formatted-content strong {
          color: #ffffff;
          font-weight: 600;
        }

        .formatted-content em {
          color: #888888;
          font-style: italic;
        }

        .processing-status {
          padding: 40px 20px;
          text-align: center;
          color: #888888;
        }

        .original-content {
          padding: 20px;
          background-color: #111111;
          border-top: 1px solid #333333;
        }

        .original-content h4 {
          color: #888888;
          margin-bottom: 12px;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .original-content p {
          color: #cccccc;
          line-height: 1.6;
          white-space: pre-wrap;
        }

        @media (max-width: 768px) {
          .entry-card {
            margin: 12px;
            border-radius: 12px;
          }

          .entry-header {
            padding: 12px 16px;
          }

          .ai-analysis {
            padding: 16px;
          }

          .original-content {
            padding: 16px;
          }

          .analysis-section h3 {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default EntryDisplay; 