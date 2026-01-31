import React from 'react';

export interface ChecklistItem {
  id: string;
  text: string;
  isHeader?: boolean;
}

export interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export enum NavigationTab {
  OVERVIEW = 'overview',
  PREP = 'prep',
  STRUCTURE = 'structure',
  TOOLS = 'tools', // For the AI generator
  CHECKLIST = 'checklist'
}