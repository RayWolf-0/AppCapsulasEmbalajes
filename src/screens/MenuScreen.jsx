import React, { useState } from 'react';
import { 
  Package, 
  ShieldCheck, 
  AlertTriangle, 
  KeyRound, 
  FileText, 
  BookOpen, 
  ChevronRight, 
  Film,
  Sparkles 
} from 'lucide-react';
import { CATEGORIES, MANUALS, ALL_CAPSULES } from '../data/capsulesData';
import { SearchBar } from '../components/SearchBar';
import { CapsuleCard } from '../components/CapsuleCard';
import './MenuScreen.css';

export const MenuScreen = ({ onSelectCategory, onSelectManual, onSelectCapsule }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Icon Resolver
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Package': return <Package size={26} />;
      case 'ShieldCheck': return <ShieldCheck size={26} />;
      case 'AlertTriangle': return <AlertTriangle size={26} />;
      case 'KeyRound': return <KeyRound size={26} />;
      default: return <Film size={26} />;
    }
  };

  // Filtered capsules if user searches
  const filteredCapsules = searchQuery.trim()
    ? ALL_CAPSULES.filter(c => 
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.categoria.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.descripcion?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="menu-screen-container container">
      {/* Top Search & Filter Bar */}
      <div className="menu-search-section">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onClear={() => setSearchQuery('')}
          placeholder="Buscar cápsula (ej. 'Asignar OE', 'Pausa', 'Cierre')..."
        />
      </div>

      {/* If Search is active, show search results */}
      {searchQuery.trim() ? (
        <div className="menu-search-results animate-fade-in">
          <div className="section-header">
            <h2 className="section-title">
              Resultados de búsqueda ({filteredCapsules.length})
            </h2>
            <span className="section-subtitle">
              Coincidencias para "{searchQuery}"
            </span>
          </div>

          {filteredCapsules.length > 0 ? (
            <div className="capsules-grid">
              {filteredCapsules.map((capsule, index) => (
                <CapsuleCard
                  key={capsule.id}
                  capsule={capsule}
                  index={index}
                  onClick={onSelectCapsule}
                />
              ))}
            </div>
          ) : (
            <div className="no-results-box">
              <AlertTriangle size={40} className="no-results-icon" />
              <h3>No se encontraron cápsulas</h3>
              <p>Intente con otro término o explore las categorías del menú.</p>
              <button 
                className="btn-secondary" 
                onClick={() => setSearchQuery('')}
              >
                Limpiar búsqueda
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Normal Menu Categories & Manuals View */
        <div className="menu-content-grid animate-fade-in">
          {/* Main Training Categories Section */}
          <div className="menu-section">
            <div className="section-header">
              <div className="section-title-wrap">
                <Sparkles size={20} className="section-accent-icon" />
                <h2 className="section-title">Cápsulas de Aprendizaje</h2>
              </div>
              <span className="section-subtitle">
                Selecciona un rol o tema para ver sus videos explicativos
              </span>
            </div>

            <div className="categories-grid">
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  className="category-card"
                  onClick={() => onSelectCategory(cat.slug)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') onSelectCategory(cat.slug);
                  }}
                >
                  <div className="category-card-top">
                    <div 
                      className="category-icon-box"
                      style={{ 
                        backgroundColor: `${cat.color}20`,
                        color: cat.color,
                        borderColor: `${cat.color}40`
                      }}
                    >
                      {getCategoryIcon(cat.icon)}
                    </div>
                    <div className="category-badge">
                      <Film size={12} />
                      <span>{cat.totalItems} videos</span>
                    </div>
                  </div>

                  <div className="category-card-content">
                    <h3 className="category-name">{cat.name}</h3>
                    <p className="category-desc">{cat.description}</p>
                  </div>

                  <div className="category-card-footer">
                    <span className="category-action-text">Ver Cápsulas</span>
                    <ChevronRight size={18} className="category-arrow" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PDF Manuals Section */}
          <div className="menu-section manuals-section">
            <div className="section-header">
              <div className="section-title-wrap">
                <BookOpen size={20} className="section-accent-icon" />
                <h2 className="section-title">Manuales y Documentación Oficial</h2>
              </div>
              <span className="section-subtitle">
                Guías escritas detalladas en formato PDF
              </span>
            </div>

            <div className="manuals-grid">
              {MANUALS.map((manual) => (
                <div
                  key={manual.id}
                  className="manual-card"
                  onClick={() => onSelectManual(manual)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') onSelectManual(manual);
                  }}
                >
                  <div className="manual-card-left">
                    <div className="manual-icon-box">
                      <FileText size={28} />
                    </div>
                  </div>

                  <div className="manual-card-center">
                    <div className="manual-header-row">
                      <span className="manual-badge-pdf">{manual.badge}</span>
                      <span className="manual-size">{manual.size}</span>
                    </div>
                    <h3 className="manual-title">{manual.title}</h3>
                    <p className="manual-desc">{manual.description}</p>
                  </div>

                  <div className="manual-card-right">
                    <span className="manual-action-btn">
                      Abrir <ChevronRight size={16} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
