import React, { useState, useEffect } from 'react';
import { ChecklistItem } from '../types';
import { Card } from './ui/Card';

const CHECKLIST_DATA: ChecklistItem[] = [
  { id: '1', text: 'Word Count: Is the resume between 475 and 600 words?' },
  { id: '2', text: 'Bullet Point Count: Does every experience entry have strictly 3 to 5 bullet points?' },
  { id: '3', text: 'The Pivot Check: Does the summary objective match the exact role?' },
  { id: '4', text: 'LinkedIn Audit: Does your profile have a Photo, Banner, and Detailed Work Experience?' },
  { id: '5', text: 'Metric Density: Are there at least 5 measurable results ($, %, count)?' },
  { id: '6', text: 'Formula Check: Do bullets follow the Situation/Action/Role/KPI structure?' },
  { id: '7', text: 'Soft Skill Purge: Have you removed explicit words like "Team Player"?' },
  { id: '8', text: '2026 Alignment: Have you listed specific AI tools (ChatGPT/Copilot)?' },
  { id: '9', text: 'The "Menu" Test: Did you match ~60% of the job description keywords?' },
  { id: '10', text: 'Proofread: Are there zero spelling errors?' },
];

export const Checklist: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const next = new Set(checkedItems);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setCheckedItems(next);
  };

  const progress = Math.round((checkedItems.size / CHECKLIST_DATA.length) * 100);

  return (
    <Card className="bg-gradient-to-br from-slate-50 to-white">
      <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-mauve-600">Final Pre-Submission</h2>
          <p className="text-slate-500 text-sm mt-1">Ensure 100% compliance before hitting send.</p>
        </div>
        <div className="text-right">
          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lavender-400 to-rose-400">
            {progress}%
          </span>
          <p className="text-xs text-slate-400 uppercase tracking-widest">Ready</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 h-2 rounded-full mb-8 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-lavender-300 to-rose-300 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {CHECKLIST_DATA.map((item) => (
          <label 
            key={item.id}
            className={`
              flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer select-none
              ${checkedItems.has(item.id) 
                ? 'bg-lavender-50 border-lavender-200' 
                : 'bg-white border-slate-100 hover:border-lavender-200 hover:shadow-sm'}
            `}
          >
            <div className="relative flex items-center mt-0.5">
              <input 
                type="checkbox"
                className="peer sr-only"
                checked={checkedItems.has(item.id)}
                onChange={() => toggleItem(item.id)}
              />
              <div className={`
                w-5 h-5 rounded border-2 flex items-center justify-center transition-all
                ${checkedItems.has(item.id) 
                  ? 'bg-rose-300 border-rose-300 text-white' 
                  : 'border-slate-300 bg-white peer-checked:bg-rose-300 peer-checked:border-rose-300'}
              `}>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <span className={`text-sm ${checkedItems.has(item.id) ? 'text-slate-700 line-through decoration-rose-300 decoration-2' : 'text-slate-600'}`}>
              {item.text}
            </span>
          </label>
        ))}
      </div>
    </Card>
  );
};