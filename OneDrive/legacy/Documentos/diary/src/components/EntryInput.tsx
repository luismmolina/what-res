import React, { useState } from 'react';

interface EntryInputProps {
  onSubmit: (content: string) => void;
  isProcessing: boolean;
}

const EntryInput: React.FC<EntryInputProps> = ({ onSubmit, isProcessing }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim() && !isProcessing) {
      onSubmit(content.trim());
      setContent('');
    }
  };

  return (
    <div className="entry-input-container">
      <form onSubmit={handleSubmit} className="entry-form">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your thoughts, tasks, or anything on your mind..."
          className="entry-textarea"
          disabled={isProcessing}
          rows={4}
        />
        <button
          type="submit"
          disabled={!content.trim() || isProcessing}
          className="submit-button"
        >
          {isProcessing ? 'Processing...' : 'Save & Analyze'}
        </button>
      </form>
      
      <style jsx>{`
        .entry-input-container {
          padding: 16px;
          background-color: #111111;
          border-bottom: 1px solid #333333;
        }

        .entry-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .entry-textarea {
          width: 100%;
          min-height: 120px;
          padding: 16px;
          background-color: #1a1a1a;
          border: 1px solid #333333;
          border-radius: 12px;
          color: #ffffff;
          font-size: 16px;
          font-family: inherit;
          resize: vertical;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .entry-textarea:focus {
          border-color: #4a9eff;
        }

        .entry-textarea::placeholder {
          color: #888888;
        }

        .entry-textarea:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .submit-button {
          padding: 14px 24px;
          background: linear-gradient(135deg, #4a9eff 0%, #357abd 100%);
          border: none;
          border-radius: 12px;
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          min-height: 48px;
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(74, 158, 255, 0.3);
        }

        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        @media (max-width: 768px) {
          .entry-input-container {
            padding: 12px;
          }
          
          .entry-textarea {
            min-height: 100px;
            padding: 12px;
            font-size: 16px; /* Prevents zoom on iOS */
          }
          
          .submit-button {
            padding: 16px 20px;
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default EntryInput; 