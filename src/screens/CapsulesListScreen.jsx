import React, { useState } from 'react';
import { 
  Package, 
  ShieldCheck, 
  AlertTriangle, 
  KeyRound, 
  Film, 
  ArrowLeft,
  Filter
} from 'lucide-react';
import { CAPSULES_DATA, CATEGORIES } from '../data/capsulesData';
import { CapsuleCard } from '../components/CapsuleCard';
import { SearchBar } from '../components/SearchBar';
import './CapsulesListScreen.css';

export const CapsulesListScreen = ({ 
  categoria, 
  onSelectCapsule, 
  onSelectCategory, 
  onBack 
}) => {
  const [filterQuery, setFilterQuery] = useState('');

  const categoryMeta = CATEGORIES.find(c => c.slug === categoria) || {
    name: categoria,
    description: 'Cápsulas de aprendizaje',
    color: '#D9A542',
    icon: 'Package'
  };

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Package': return <Package size={28} />;
      case 'ShieldCheck': return <ShieldCheck size={28} />;
      case 'AlertTriangle': return <AlertTriangle size={28} />;
      case 'KeyRound': return <KeyRound size={28} />;
      default: return <Film size={28} />;
    }
  };

  const allVideos = CAPSULES_DATA[categoria] || [];
  const filteredVideos = allVideos.filter(v => 
    v.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
    v.descripcion?.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="capsules-list-container container animate-fade-in">
      {/* Category Header Banner */}
      <div 
        className="category-banner-card"
        style={{ borderLeftColor: categoryMeta.color }}
      >
        <div className="category-banner-left">
          <div 
            className="category-banner-icon"
            style={{ 
              backgroundColor: `${categoryMeta.color}20`,
              color: categoryMeta.color,
              borderColor: `${categoryMeta.color}40`
            }}
          >
            {getCategoryIcon(categoryMeta.icon)}
          </div>
          <div className="category-banner-text">
            <div className="category-banner-tag">
              <span>MÓDULO DE FORMACIÓN</span>
            </div>
            <h1 className="category-banner-title">Cápsulas - {categoria}</h1>
            <p className="category-banner-desc">{categoryMeta.description}</p>
          </div>
        </div>

        <div className="category-banner-count">
          <span className="count-number">{allVideos.length}</span>
          <span className="count-label">Videos disponibles</span>
        </div>
      </div>

      {/* Category Quick Pill Filter Bar */}
      <div className="category-tabs-row">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`category-pill-tab ${cat.slug === categoria ? 'active' : ''}`}
            onClick={() => {
              setFilterQuery('');
              onSelectCategory(cat.slug);
            }}
          >
            <span>{cat.name}</span>
            <span className="pill-badge">{cat.totalItems}</span>
          </button>
        ))}
      </div>

      {/* Local Filter Bar */}
      <div className="capsules-filter-wrapper">
        <SearchBar
          value={filterQuery}
          onChange={setFilterQuery}
          onClear={() => setFilterQuery('')}
          placeholder={`Buscar en ${categoria}...`}
        />
      </div>

      {/* Capsules Grid */}
      {filteredVideos.length > 0 ? (
        <div className="capsules-list-grid">
          {filteredVideos.map((capsule, index) => (
            <CapsuleCard
              key={capsule.id}
              capsule={capsule}
              index={index}
              onClick={onSelectCapsule}
            />
          ))}
        </div>
      ) : (
        <div className="no-videos-box">
          <Film size={40} className="no-videos-icon" />
          <h3>No se encontraron videos con ese filtro</h3>
          <p>Pruebe con otra palabra o limpie el buscador.</p>
          <button className="btn-secondary" onClick={() => setFilterQuery('')}>
            Ver todas las cápsulas de {categoria}
          </button>
        </div>
      )}
    </div>
  );
};
