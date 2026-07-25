import React from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ id, isDark, toggleTheme, className }) {
  return (
    <button
      id={id}
      onClick={toggleTheme}
      className={className || "p-2 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-all text-indigo-600 dark:text-yellow-400"}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-[18px] h-[18px]" />
      ) : (
        <Moon className="w-[18px] h-[18px]" />
      )}
    </button>
  );
}
