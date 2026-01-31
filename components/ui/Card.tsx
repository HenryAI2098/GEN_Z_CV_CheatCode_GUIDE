import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  highlight?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', title, highlight = false }) => {
  return (
    <div className={`
      relative overflow-hidden rounded-2xl p-6 sm:p-8 transition-all duration-300
      ${highlight 
        ? 'bg-gradient-to-br from-lavender-50 to-rose-50 border-l-4 border-rose-300 shadow-sm' 
        : 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100'}
      ${className}
    `}>
      {title && (
        <h3 className={`text-xl font-semibold mb-4 ${highlight ? 'text-rose-400' : 'text-mauve-600'}`}>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};