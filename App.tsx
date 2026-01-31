import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Card } from './components/ui/Card';
import { Checklist } from './components/Checklist';
import { MetricGenerator } from './components/MetricGenerator';
import { NavigationTab } from './types';
import { Button } from './components/ui/Button';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavigationTab>(NavigationTab.OVERVIEW);

  const renderContent = () => {
    switch (activeTab) {
      case NavigationTab.OVERVIEW:
        return (
          <div className="space-y-8 animate-fadeIn">
            <div className="text-center py-10 lg:py-20">
              <span className="inline-block py-1 px-3 rounded-full bg-lavender-100 text-mauve-600 text-xs font-bold tracking-widest uppercase mb-6">
                Optimization Strategy
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-slate-800">
                The Resume Cheat Code <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-400 to-rose-400">That Feels Illegal</span>
              </h1>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Recruiters spend 6 seconds on your CV. Stop writing for humans who read, and start designing for skimmers who scan.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                 <Button onClick={() => setActiveTab(NavigationTab.TOOLS)}>Try AI Generator</Button>
                 <Button variant="outline" onClick={() => setActiveTab(NavigationTab.PREP)}>Start Guide</Button>
              </div>
            </div>

            <Card highlight title="The '6-Second' Scan Reality">
              <p className="text-slate-600 mb-4">
                Recruiters and hiring managers spend approximately six to seven seconds glancing at your CV.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-rose-300 font-bold">✦</span>
                  <div>
                    <strong className="text-mauve-600 block text-sm uppercase tracking-wide mb-1">Why it matters</strong>
                    <span className="text-slate-600 text-sm">They are looking for "plug and play" candidates. If they don't see relevant keywords or transferable skills in those first few seconds, they move on.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-rose-300 font-bold">✦</span>
                  <div>
                    <strong className="text-mauve-600 block text-sm uppercase tracking-wide mb-1">Implication</strong>
                    <span className="text-slate-600 text-sm">Your layout must be clean and your most relevant information (titles, companies, key metrics) must be visible at a glance.</span>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        );

      case NavigationTab.PREP:
        return (
          <div className="space-y-8 animate-fadeIn">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Phase 1: Strategic Preparation</h2>
              <p className="text-mauve-500 font-medium">The "Menu" & The Tools</p>
            </div>
            
            <p className="text-slate-600 leading-relaxed">
              You cannot serve a "dish" (skill) that isn't on the "menu" (job description). Most candidates fail because they sell "utensils" (basic expectations like "hard worker") instead of the "sizzle" (specific impact).
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card title="1. Word Cloud Audit">
                <div className="mb-4">
                  <div className="w-full h-32 bg-slate-50 rounded-lg flex items-center justify-center text-slate-300 mb-4 border border-slate-100">
                     <span className="text-4xl opacity-20 font-bold">CLOUD</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-2">
                  <strong className="text-mauve-600">The Data:</strong> Average candidates only capture 51% of JD keywords.
                </p>
                <p className="text-sm text-slate-600">
                  <strong className="text-mauve-600">Strategy:</strong> Copy the JD into a word cloud tool. If "Stakeholder Management" is huge, and it's missing from your CV, you will fail the ATS.
                </p>
              </Card>

              <Card title="2. The Pattern Scraper">
                <div className="mb-4">
                  <div className="w-full h-32 bg-slate-50 rounded-lg flex items-center justify-center text-slate-300 mb-4 border border-slate-100">
                     <span className="text-4xl opacity-20 font-bold">LINKEDIN</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-2">
                  <strong className="text-mauve-600">Source:</strong> LinkedIn Job Postings.
                </p>
                <p className="text-sm text-slate-600">
                  <strong className="text-mauve-600">Strategy:</strong> Look at multiple postings for your desired role to find "through points"—recurring themes or specific technical vocabulary.
                </p>
              </Card>
            </div>

            <Card highlight title="3. Generative AI (The Secret Weapon)">
               <p className="text-slate-600 mb-4">
                 36% of resumes lack metrics. We've integrated this directly into the app.
               </p>
               <Button onClick={() => setActiveTab(NavigationTab.TOOLS)} className="w-full sm:w-auto">
                 Go to Metric Generator
               </Button>
            </Card>
          </div>
        );

      case NavigationTab.STRUCTURE:
        return (
          <div className="space-y-8 animate-fadeIn">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Phase 2: Architecture</h2>
              <p className="text-mauve-500 font-medium">Top to Bottom Structural Rules</p>
            </div>

            <div className="space-y-6">
                <div className="border-l-2 border-lavender-200 pl-6 space-y-2">
                    <h3 className="text-xl font-bold text-slate-700">1. Header & LinkedIn Rule</h3>
                    <p className="text-slate-600 text-sm">Include a link to your profile ONLY if it is comprehensive (Photo, Banner, Detailed History). A barebones profile hurts you.</p>
                </div>

                <div className="border-l-2 border-rose-200 pl-6 space-y-2">
                    <h3 className="text-xl font-bold text-slate-700">2. The Pivot (Summary)</h3>
                    <p className="text-slate-600 text-sm">Modify your objective for every application. Do not ask for what you want; state what you contribute.</p>
                    <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-600 font-mono mt-2 border border-slate-200">
                        Formula: Identity + Value Prop + Differentiation + The Pivot (Goal)
                    </div>
                </div>

                <div className="border-l-2 border-lavender-200 pl-6 space-y-2">
                    <h3 className="text-xl font-bold text-slate-700">3. Experience (Engine Room)</h3>
                    <ul className="text-sm text-slate-600 list-disc list-inside space-y-1">
                        <li><strong>One Page Rule:</strong> L'Oréal recruiters prefer a single page.</li>
                        <li><strong>3-to-5 Bullets:</strong> Less implies low impact, more implies no prioritization.</li>
                    </ul>
                    <Card className="mt-4 bg-white border border-rose-100">
                        <span className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-2 block">The Golden Formula</span>
                        <p className="text-slate-700 font-medium">"Accomplished [KPI/Result] in [Situation] by taking [Action] as [Role]."</p>
                    </Card>
                </div>

                <div className="border-l-2 border-rose-200 pl-6 space-y-2">
                    <h3 className="text-xl font-bold text-slate-700">4. Skills & AI Fluency</h3>
                    <p className="text-slate-600 text-sm"><strong>Strict Rule:</strong> No soft skills here (e.g., "Leadership"). Only hard skills. </p>
                    <p className="text-slate-600 text-sm"><strong>2026 Imperative:</strong> You MUST list AI tools (ChatGPT, Copilot, Agentic AI) to signal digital literacy.</p>
                </div>
            </div>
          </div>
        );

      case NavigationTab.TOOLS:
        return (
          <div className="space-y-8 animate-fadeIn">
             <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">AI Metric Generator</h2>
              <p className="text-mauve-500 font-medium">Turn "duties" into "achievements" instantly.</p>
            </div>
            <MetricGenerator />
          </div>
        );

      case NavigationTab.CHECKLIST:
        return (
          <div className="space-y-8 animate-fadeIn">
            <Checklist />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-lavender-50/50 font-sans text-slate-800">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="lg:ml-64 min-h-screen transition-all duration-300">
        <div className="max-w-4xl mx-auto px-6 py-20 lg:py-12">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;