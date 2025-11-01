"use client";

import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../app/theme-context';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-10 w-10 bg-muted text-muted-foreground hover:bg-muted/80 cursor-pointer"
    >
      {theme === 'light' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ThemeToggle;
