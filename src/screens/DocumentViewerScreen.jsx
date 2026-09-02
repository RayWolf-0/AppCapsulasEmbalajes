import React from 'react';
import { ArrowLeft, BookOpen, FileText } from 'lucide-react';
import { PdfViewer } from '../components/PdfViewer';
import { MANUALS } from '../data/capsulesData';
import './DocumentViewerScreen.css';

export const DocumentViewerScreen = ({ manual, onSelectManual, onBackToMenu }) => {
  return (
    <div className="doc-viewer-screen container animate-fade-in">
      {/* Top Breadcrumb & Switcher */}
      <div className="doc-top-bar">
        <button className="btn-secondary doc-back-btn" onClick={onBackToMenu}>
          <ArrowLeft size={16} />
          <span>Volver al Menú</span>
        </button>

        {/* Quick Switch between Manuals */}
        <div className="doc-switcher-tabs">
          {MANUALS.map(m => (
            <button
              key={m.id}
              className={`doc-pill-tab ${m.id === manual.id ? 'active' : ''}`}
              onClick={() => onSelectManual(m)}
            >
              <FileText size={14} />
              <span>{m.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* PDF Viewer Component */}
      <PdfViewer
        pdfUrl={manual.file}
        title={manual.title}
      />
    </div>
  );
};
