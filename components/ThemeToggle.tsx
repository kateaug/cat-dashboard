'use client';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="border rounded-lg px-3 py-2"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}