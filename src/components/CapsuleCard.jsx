import React from 'react';
import { Play, Film } from 'lucide-react';
import './CapsuleCard.css';

export const CapsuleCard = ({ capsule, onClick, index = 0 }) => {
  return (
    <div 
      className="capsule-card" 
      onClick={() => onClick(capsule)}
      style={{ animationDelay: `${index * 0.04}s` }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(capsule);
        }
      }}
    >
      {/* Video Thumbnail Simulation / Preview Frame */}
      <div className="capsule-thumb-wrapper">
        <div className="capsule-thumb-bg">
          <div className="capsule-play-circle">
            <Play size={24} className="capsule-play-icon" fill="currentColor" />
          </div>
          <div className="capsule-format-badge">
            <Film size={12} />
            <span>{capsule.formato?.toUpperCase() || 'VIDEO'}</span>
          </div>
        </div>
        <div className="capsule-thumb-overlay" />
      </div>

      {/* Card Info */}
      <div className="capsule-card-body">
        <div className="capsule-card-header">
          <span className="capsule-category-tag">{capsule.categoria}</span>
        </div>
        <h3 className="capsule-title" title={capsule.title}>
          {capsule.title}
        </h3>
        {capsule.descripcion && (
          <p className="capsule-desc">{capsule.descripcion}</p>
        )}
      </div>
    </div>
  );
};
