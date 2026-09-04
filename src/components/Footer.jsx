import React from 'react';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-brand-info">
          <img 
            src="/assets/images/mamut.png" 
            onError={(e) => {
              if (!e.target.src.includes('/Capsulas/')) {
                e.target.src = '/Capsulas/assets/images/mamut.png';
              }
            }}
            alt="Mamut" 
            className="footer-logo" 
          />
          <span className="footer-text">
            © {currentYear} Mamut. Todos los derechos reservados.
          </span>
        </div>
        <div className="footer-tag">
          <span>Sistema de Capacitación de Procesos de Embalaje</span>
        </div>
      </div>
    </footer>
  );
};
