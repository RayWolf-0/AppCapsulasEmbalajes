import React from 'react';
import { AlertCircle, X, LogOut } from 'lucide-react';
import './ExitModal.css';

export const ExitModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card animate-fade-in" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-icon-badge">
            <AlertCircle size={24} />
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar modal">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <h3 className="modal-title">¿Desea salir de la aplicación?</h3>
          <p className="modal-desc">
            Se cerrará la sesión de consulta de cápsulas y volverá a la pantalla inicial.
          </p>
        </div>

        <div className="modal-actions">
          <button className="btn-secondary modal-cancel-btn" onClick={onClose}>
            Cancelar
          </button>
          <button className="btn-primary modal-confirm-btn" onClick={onConfirm}>
            <LogOut size={16} />
            <span>Salir</span>
          </button>
        </div>
      </div>
    </div>
  );
};
