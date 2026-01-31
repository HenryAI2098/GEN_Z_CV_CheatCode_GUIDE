import React, { useState } from 'react';
import { generateResumeMetrics } from '../services/geminiService';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

export const MetricGenerator: React.FC = () => {
  const [role, setRole] = useState('');
  const [duties, setDuties] = useState('');
  const [metrics, setMetrics] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!role.trim() || !duties.trim()) {
      setError("Please fill in both fields.");
      return;
    }

    setLoading(true);
    setError(null);
    setMetrics([]);

    try {
      const results = await generateResumeMetrics(role, duties);
      setMetrics(results);
    } catch (err) {
      setError("Something went wrong. Please check your internet or API key.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-6">
      <Card title="AI Metric Extractor (Gemini Power)" className="border border-lavender-200">
        <p className="text-slate-600 mb-6 text-sm">
          36% of resumes lack a single quantifiable metric. Use our built-in Gemini AI tool to convert your daily duties into hard-hitting, quantifiable achievements.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-mauve-500 mb-2">Target Role</label>
            <input 
              type="text" 
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g. Marketing Manager"
              className="w-full p-3 rounded-lg border border-slate-200 focus:border-lavender-400 focus:ring-2 focus:ring-lavender-200 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-mauve-500 mb-2">Your Responsibilities / Duties</label>
            <textarea 
              value={duties}
              onChange={(e) => setDuties(e.target.value)}
              rows={4}
              placeholder="e.g. Managed the company Instagram, posted daily content, replied to DMs..."
              className="w-full p-3 rounded-lg border border-slate-200 focus:border-lavender-400 focus:ring-2 focus:ring-lavender-200 outline-none transition-all resize-none"
            />
          </div>

          {error && <p className="text-rose-500 text-sm">{error}</p>}

          <div className="pt-2">
            <Button onClick={handleGenerate} isLoading={loading} className="w-full sm:w-auto">
              Generate Metrics
            </Button>
          </div>
        </div>
      </Card>

      {metrics.length > 0 && (
        <Card title="Generated Results" highlight>
          <div className="space-y-3">
            {metrics.map((metric, idx) => (
              <div key={idx} className="group flex items-start justify-between gap-4 p-3 bg-white/60 rounded-lg hover:bg-white transition-colors border border-transparent hover:border-lavender-200">
                <div className="flex gap-3">
                  <span className="text-rose-400 font-bold">✦</span>
                  <p className="text-slate-700 text-sm leading-relaxed">{metric}</p>
                </div>
                <button 
                  onClick={() => copyToClipboard(metric)}
                  className="opacity-0 group-hover:opacity-100 text-xs text-mauve-500 hover:text-lavender-600 font-medium transition-opacity"
                  title="Copy to clipboard"
                >
                  COPY
                </button>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};