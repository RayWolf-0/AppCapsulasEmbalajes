import React from 'react';
import { ArrowLeft, Home, BookOpen, Layers, Search, LogOut } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import './Navbar.css';

export const Navbar = ({ 
  currentScreen, 
  onNavigate, 
  onBack, 
  title, 
  subtitle, 
  onOpenExitModal 
}) => {
  const isHome = currentScreen === 'home';

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Left Area: Back Button or Brand Logo */}
        <div className="navbar-left">
          {!isHome ? (
            <button 
              className="nav-btn-back" 
              onClick={onBack}
              title="Volver"
              aria-label="Volver a la pantalla anterior"
            >
              <ArrowLeft size={20} />
              <span className="nav-back-text">Volver</span>
            </button>
          ) : (
            <div className="nav-brand" onClick={() => onNavigate('home')}>
              <img 
                src="/assets/images/mamut.png" 
                alt="Mamut Logo" 
                className="nav-brand-logo" 
              />
              <span className="nav-brand-name">MAMUT</span>
            </div>
          )}
        </div>

        {/* Center Area: Title & Breadcrumbs */}
        <div className="navbar-center">
          <div className="nav-title-group">
            <h1 className="nav-main-title">{title || 'Cápsulas Embalaje'}</h1>
            {subtitle && <span className="nav-subtitle">{subtitle}</span>}
          </div>
        </div>

        {/* Right Area: Navigation Shortcuts, Theme Toggle & Exit */}
        <div className="navbar-right">
          {!isHome && (
            <button 
              className="nav-icon-btn" 
              onClick={() => onNavigate('home')}
              title="Ir al Inicio"
              aria-label="Ir al inicio"
            >
              <Home size={18} />
            </button>
          )}

          {!isHome && currentScreen !== 'menu' && (
            <button 
              className="nav-icon-btn" 
              onClick={() => onNavigate('menu')}
              title="Menú de Cápsulas"
              aria-label="Menú principal"
            >
              <Layers size={18} />
            </button>
          )}

          <div className="nav-divider" />

          {/* Theme Switcher */}
          <ThemeToggle />

          {/* Exit Action Modal Trigger */}
          {onOpenExitModal && (
            <button
              className="nav-icon-btn nav-exit-btn"
              onClick={onOpenExitModal}
              title="Salir de la aplicación"
              aria-label="Salir"
            >
              <LogOut size={18} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
