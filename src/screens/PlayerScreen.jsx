import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  CheckCircle2, 
  Info, 
  Keyboard,
  Share2,
  Check
} from 'lucide-react';
import { VideoPlayer } from '../components/VideoPlayer';
import { CAPSULES_DATA } from '../data/capsulesData';
import './PlayerScreen.css';

export const PlayerScreen = ({ 
  capsule, 
  onSelectCapsule, 
  onBackToList 
}) => {
  const [copied, setCopied] = useState(false);
  const categoryVideos = CAPSULES_DATA[capsule.categoria] || [];
  
  const currentIndex = categoryVideos.findIndex(v => v.id === capsule.id || v.title === capsule.title);
  const prevCapsule = currentIndex > 0 ? categoryVideos[currentIndex - 1] : null;
  const nextCapsule = currentIndex < categoryVideos.length - 1 ? categoryVideos[currentIndex + 1] : null;

  const handleVideoEnded = () => {
    if (nextCapsule) {
      onSelectCapsule(nextCapsule);
    }
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="player-screen-container container animate-fade-in">
      {/* Top Breadcrumbs / Navigation Actions */}
      <div className="player-top-actions">
        <button className="player-back-link" onClick={onBackToList}>
          <ArrowLeft size={16} />
          <span>Volver a {capsule.categoria}</span>
        </button>

        <div className="player-seq-controls">
          <button
            className="btn-secondary player-seq-btn"
            disabled={!prevCapsule}
            onClick={() => prevCapsule && onSelectCapsule(prevCapsule)}
            title={prevCapsule ? `Anterior: ${prevCapsule.title}` : "No hay video anterior"}
          >
            <ChevronLeft size={18} />
            <span className="seq-btn-text">Anterior</span>
          </button>

          <span className="player-seq-count">
            {currentIndex + 1} de {categoryVideos.length}
          </span>

          <button
            className="btn-secondary player-seq-btn"
            disabled={!nextCapsule}
            onClick={() => nextCapsule && onSelectCapsule(nextCapsule)}
            title={nextCapsule ? `Siguiente: ${nextCapsule.title}` : "No hay video siguiente"}
          >
            <span className="seq-btn-text">Siguiente</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Main Layout: Video + Info + Playlist */}
      <div className="player-main-layout">
        {/* Left Column: Player & Meta */}
        <div className="player-video-column">
          <VideoPlayer
            src={capsule.ruta}
            title={capsule.title}
            autoPlay={true}
            onEnded={handleVideoEnded}
          />

          {/* Video Metadata Card */}
          <div className="player-meta-card">
            <div className="player-meta-header">
              <div>
                <span className="player-meta-category">{capsule.categoria}</span>
                <h1 className="player-meta-title">{capsule.title}</h1>
              </div>

              <button 
                className="btn-secondary player-share-btn" 
                onClick={handleShare}
                title="Copiar enlace"
              >
                {copied ? <Check size={16} color="#10B981" /> : <Share2 size={16} />}
                <span>{copied ? 'Copiado' : 'Compartir'}</span>
              </button>
            </div>

            {capsule.descripcion && (
              <p className="player-meta-desc">{capsule.descripcion}</p>
            )}

            {/* Keyboard Shortcuts Helper */}
            <div className="player-shortcuts-hint">
              <div className="shortcuts-title">
                <Keyboard size={15} />
                <span>Atajos de teclado:</span>
              </div>
              <div className="shortcuts-tags">
                <span className="shortcut-pill"><kbd>Espacio</kbd> Play / Pausa</span>
                <span className="shortcut-pill"><kbd>← / →</kbd> +/- 5 seg</span>
                <span className="shortcut-pill"><kbd>M</kbd> Silenciar</span>
                <span className="shortcut-pill"><kbd>F</kbd> Pantalla completa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Playlist in this Category */}
        <div className="player-playlist-column">
          <div className="playlist-card">
            <div className="playlist-header">
              <h3 className="playlist-title">Cápsulas de {capsule.categoria}</h3>
              <span className="playlist-badge">{categoryVideos.length} videos</span>
            </div>

            <div className="playlist-items-list">
              {categoryVideos.map((item, idx) => {
                const isCurrent = item.id === capsule.id || item.title === capsule.title;
                return (
                  <div
                    key={item.id || idx}
                    className={`playlist-item ${isCurrent ? 'active' : ''}`}
                    onClick={() => onSelectCapsule(item)}
                  >
                    <div className="playlist-item-index">
                      {isCurrent ? (
                        <Play size={14} className="playlist-playing-icon" fill="currentColor" />
                      ) : (
                        <span>{idx + 1}</span>
                      )}
                    </div>
                    <div className="playlist-item-info">
                      <h4 className="playlist-item-title">{item.title}</h4>
                      <span className="playlist-item-tag">{item.formato?.toUpperCase()}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
