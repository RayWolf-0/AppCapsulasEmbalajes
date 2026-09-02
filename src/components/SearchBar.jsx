import React from 'react';
import { Search, X } from 'lucide-react';
import './SearchBar.css';

export const SearchBar = ({ 
  value, 
  onChange, 
  onClear, 
  placeholder = "Buscar cápsula por título o tema..." 
}) => {
  return (
    <div className="search-bar-wrapper">
      <Search className="search-icon" size={18} />
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button 
          className="search-clear-btn" 
          onClick={onClear} 
          title="Borrar búsqueda"
          aria-label="Borrar búsqueda"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};
