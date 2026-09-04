import React from 'react';
import { Play, BookOpen, Layers, ShieldCheck, ChevronRight, LogOut } from 'lucide-react';
import './HomeScreen.css';

export const HomeScreen = ({ onNavigate, onOpenExitModal }) => {
  return (
    <div className="home-screen-container">
      <div className="home-hero-card animate-fade-in">
        {/* Logo Container with Glowing Badge */}
        <div className="home-logo-wrapper">
          <div className="home-logo-glow" />
          <img 
            src="/assets/images/mamut.png" 
            onError={(e) => {
              if (!e.target.src.includes('/Capsulas/')) {
                e.target.src = '/Capsulas/assets/images/mamut.png';
              }
            }}
            alt="Logo Mamut" 
            className="home-logo-img" 
          />
        </div>

        {/* Titles & Tagline */}
        <div className="home-text-block">
          <div className="home-pill-badge">
            <span>PLATAFORMA DE CAPACITACIÓN</span>
          </div>
          <h1 className="home-title">Cápsulas Embalaje</h1>
          <p className="home-subtitle">
            Aprende los procesos de Órdenes de Entrega (OE), asignación de mesones y resolución de errores paso a paso.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="home-stats-grid">
          <div className="home-stat-item">
            <span className="stat-number">21</span>
            <span className="stat-label">Cápsulas en Video</span>
          </div>
          <div className="home-stat-divider" />
          <div className="home-stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">Módulos de Rol</span>
          </div>
          <div className="home-stat-divider" />
          <div className="home-stat-item">
            <span className="stat-number">2</span>
            <span className="stat-label">Manuales PDF</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="home-actions-group">
          <button 
            className="btn-primary home-btn-main" 
            onClick={() => onNavigate('menu')}
          >
            <span>Ver Cápsulas</span>
            <ChevronRight size={20} />
          </button>

          <button 
            className="home-btn-exit"
            onClick={onOpenExitModal}
          >
            <LogOut size={16} />
            <span>Salir</span>
          </button>
        </div>

        {/* Footer info inside card */}
        <div className="home-footer-note">
          <span>© {new Date().getFullYear()} Mamut. Todos los derechos reservados.</span>
        </div>
      </div>
    </div>
  );
};
