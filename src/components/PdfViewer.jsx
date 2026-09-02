import React, { useState } from 'react';
import { Download, ExternalLink, Maximize2, Minimize2, FileText, Printer } from 'lucide-react';
import './PdfViewer.css';

export const PdfViewer = ({ pdfUrl, title }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handlePrint = () => {
    window.open(pdfUrl, '_blank')?.print();
  };

  return (
    <div className={`pdf-viewer-wrapper ${isFullscreen ? 'pdf-fullscreen' : ''}`}>
      {/* Top Toolbar */}
      <div className="pdf-toolbar">
        <div className="pdf-toolbar-info">
          <FileText size={18} className="pdf-doc-icon" />
          <span className="pdf-doc-title">{title}</span>
        </div>

        <div className="pdf-toolbar-actions">
          <a
            href={pdfUrl}
            download
            className="btn-secondary pdf-btn-action"
            title="Descargar archivo PDF"
          >
            <Download size={16} />
            <span className="pdf-btn-label">Descargar</span>
          </a>

          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary pdf-btn-action"
            title="Abrir en pestaña nueva"
          >
            <ExternalLink size={16} />
            <span className="pdf-btn-label">Pestaña Nueva</span>
          </a>

          <button
            className="btn-secondary pdf-btn-action"
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
          >
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        </div>
      </div>

      {/* Embedded Document Frame */}
      <div className="pdf-frame-container">
        <iframe
          src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
          title={title}
          className="pdf-iframe"
        />
      </div>
    </div>
  );
};
