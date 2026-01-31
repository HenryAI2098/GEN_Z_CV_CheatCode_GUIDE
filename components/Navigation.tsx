import React, { useState } from 'react';
import { NavigationTab } from '../types';

interface NavigationProps {
  activeTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
}

const NAV_ITEMS = [
  { id: NavigationTab.OVERVIEW, label: 'Overview', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { id: NavigationTab.PREP, label: 'Strategic Prep', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
  { id: NavigationTab.STRUCTURE, label: 'Structure', icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' },
  { id: NavigationTab.TOOLS, label: 'AI Tools', icon: 'M13 10V3L4 14h7v7l9-11h-7z' }, // Lightning bolt for tools
  { id: NavigationTab.CHECKLIST, label: 'Final Checklist', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
];

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = (id: NavigationTab) => {
    onTabChange(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-lavender-100 z-50 px-4 py-3 flex justify-between items-center">
        <span className="font-bold text-mauve-600 tracking-wider text-sm">RESUME 2026</span>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-mauve-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Sidebar / Drawer */}
      <nav className={`
        fixed top-0 left-0 h-full bg-white border-r border-lavender-100 w-64 z-40 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:block
      `}>
        <div className="p-8 hidden lg:block">
          <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-lavender-400 to-rose-400">
            Resume<br/>Cheat Code
          </h1>
          <p className="text-xs text-mauve-500 mt-2 tracking-widest uppercase font-semibold">2026 Edition</p>
        </div>

        <div className="mt-20 lg:mt-4 px-4 space-y-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                ${activeTab === item.id 
                  ? 'bg-lavender-50 text-mauve-600 shadow-sm border border-lavender-100' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'}
              `}
            >
              <svg className={`w-5 h-5 ${activeTab === item.id ? 'text-rose-300' : 'text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              {item.label}
            </button>
          ))}
        </div>

        <div className="absolute bottom-8 left-0 w-full px-8">
            <div className="p-4 rounded-xl bg-gradient-to-br from-lavender-100 to-rose-50 border border-white/50">
                <p className="text-xs text-mauve-600 font-semibold mb-1">Status</p>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-xs text-slate-500">Gemini AI Active</span>
                </div>
            </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};