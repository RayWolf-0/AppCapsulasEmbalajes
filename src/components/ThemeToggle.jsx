import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

export const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      title={isDark ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
      aria-label="Cambiar tema"
    >
      <div className={`theme-toggle-track ${isDark ? 'dark' : 'light'}`}>
        <div className="theme-toggle-thumb">
          {isDark ? (
            <Moon size={14} className="theme-icon moon" />
          ) : (
            <Sun size={14} className="theme-icon sun" />
          )}
        </div>
      </div>
    </button>
  );
};
