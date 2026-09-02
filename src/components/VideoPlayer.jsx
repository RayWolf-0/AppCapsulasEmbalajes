import React, { useRef, useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize, 
  RotateCcw, 
  RotateCw, 
  Gauge, 
  PictureInPicture2,
  AlertTriangle,
  RefreshCw
} from 'lucide-react';
import './VideoPlayer.css';

export const VideoPlayer = ({ src, title, autoPlay = true, onEnded }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const hideControlsTimeout = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Format seconds to mm:ss
  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds)) return '00:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Reset states when src changes
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    setCurrentTime(0);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [src]);

  // Video Listeners
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      setIsLoading(false);
      if (autoPlay) {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {
          setIsPlaying(false);
        });
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.buffered.length > 0) {
        const buffEnd = videoRef.current.buffered.end(videoRef.current.buffered.length - 1);
        setBuffered((buffEnd / videoRef.current.duration) * 100);
      }
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(e => console.error(e));
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (e) => {
    const seekTo = (Number(e.target.value) / 100) * duration;
    if (videoRef.current) {
      videoRef.current.currentTime = seekTo;
      setCurrentTime(seekTo);
    }
  };

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      videoRef.current.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    if (isMuted) {
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.volume = volume > 0 ? volume : 0.5;
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
    setShowSpeedMenu(false);
  };

  const skipTime = (seconds) => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.min(Math.max(videoRef.current.currentTime + seconds, 0), duration);
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => console.error(err));
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(err => console.error(err));
      setIsFullscreen(false);
    }
  };

  const togglePiP = async () => {
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else if (videoRef.current && document.pictureInPictureEnabled) {
        await videoRef.current.requestPictureInPicture();
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === ' ' || e.key === 'k') {
        e.preventDefault();
        togglePlay();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        skipTime(5);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        skipTime(-5);
      } else if (e.key === 'm') {
        e.preventDefault();
        toggleMute();
      } else if (e.key === 'f') {
        e.preventDefault();
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [duration, volume, isMuted]);

  // Controls auto-hide on mouse movement
  const handleMouseMove = () => {
    setShowControls(true);
    if (hideControlsTimeout.current) clearTimeout(hideControlsTimeout.current);
    if (isPlaying) {
      hideControlsTimeout.current = setTimeout(() => {
        setShowControls(false);
        setShowSpeedMenu(false);
      }, 2500);
    }
  };

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div 
      ref={containerRef}
      className={`video-player-container ${isFullscreen ? 'fullscreen' : ''} ${!showControls && isPlaying ? 'hide-cursor' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      {/* HTML5 Video Element */}
      <video
        ref={videoRef}
        src={src}
        className="video-element"
        onClick={togglePlay}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onWaiting={() => setIsLoading(true)}
        onPlaying={() => { setIsLoading(false); setIsPlaying(true); }}
        onPause={() => setIsPlaying(false)}
        onEnded={() => { setIsPlaying(false); onEnded && onEnded(); }}
        onError={() => {
          setIsLoading(false);
          setError('Error al reproducir el video. Verifique el formato o intente recargar.');
        }}
        playsInline
      />

      {/* Loading Spinner */}
      {isLoading && (
        <div className="video-overlay-state">
          <div className="video-spinner" />
          <span>Cargando cápsula...</span>
        </div>
      )}

      {/* Error Fallback */}
      {error && (
        <div className="video-overlay-state error">
          <AlertTriangle size={36} color="#EF4444" />
          <p>{error}</p>
          <button 
            className="btn-primary" 
            onClick={() => {
              setError(null);
              setIsLoading(true);
              if (videoRef.current) videoRef.current.load();
            }}
          >
            <RefreshCw size={16} /> Reintentar
          </button>
        </div>
      )}

      {/* Big Play Button Overlay on Pause */}
      {!isPlaying && !isLoading && !error && (
        <div className="video-center-play-overlay" onClick={togglePlay}>
          <div className="video-big-play-btn">
            <Play size={36} fill="currentColor" />
          </div>
        </div>
      )}

      {/* Controls Overlay */}
      <div className={`video-controls-overlay ${showControls || !isPlaying ? 'visible' : ''}`}>
        {/* Top Header inside fullscreen / video */}
        <div className="video-controls-top">
          <h2 className="video-current-title">{title}</h2>
        </div>

        {/* Bottom Control Bar */}
        <div className="video-controls-bottom">
          {/* Progress / Seekbar */}
          <div className="video-progress-container">
            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={progressPercent}
              onChange={handleSeek}
              className="video-progress-bar"
              style={{
                background: `linear-gradient(to right, var(--primary-gold) 0%, var(--primary-gold) ${progressPercent}%, rgba(255, 255, 255, 0.3) ${progressPercent}%, rgba(255, 255, 255, 0.3) 100%)`
              }}
            />
          </div>

          <div className="video-controls-row">
            {/* Left Controls: Play/Pause, Rewind, Fast Forward, Volume, Time */}
            <div className="video-controls-left">
              <button 
                className="video-ctrl-btn" 
                onClick={togglePlay}
                title={isPlaying ? "Pausar (Espacio)" : "Reproducir (Espacio)"}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} fill="currentColor" />}
              </button>

              <button 
                className="video-ctrl-btn" 
                onClick={() => skipTime(-10)} 
                title="Retroceder 10 segundos"
              >
                <RotateCcw size={18} />
              </button>

              <button 
                className="video-ctrl-btn" 
                onClick={() => skipTime(10)} 
                title="Avanzar 10 segundos"
              >
                <RotateCw size={18} />
              </button>

              {/* Volume Group */}
              <div className="video-volume-group">
                <button 
                  className="video-ctrl-btn" 
                  onClick={toggleMute}
                  title={isMuted ? "Activar sonido (M)" : "Silenciar (M)"}
                >
                  {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="video-volume-slider"
                  title="Ajustar volumen"
                />
              </div>

              {/* Time Counter */}
              <div className="video-time-display">
                <span>{formatTime(currentTime)}</span>
                <span className="time-sep">/</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Right Controls: Speed, PiP, Fullscreen */}
            <div className="video-controls-right">
              {/* Playback Speed Menu */}
              <div className="video-speed-wrapper">
                <button
                  className="video-ctrl-btn speed-btn"
                  onClick={() => setShowSpeedMenu(!showSpeedMenu)}
                  title="Velocidad de reproducción"
                >
                  <Gauge size={18} />
                  <span>{playbackSpeed}x</span>
                </button>
                {showSpeedMenu && (
                  <div className="video-speed-menu">
                    {[0.75, 1, 1.25, 1.5, 2].map((s) => (
                      <button
                        key={s}
                        className={`speed-option ${playbackSpeed === s ? 'active' : ''}`}
                        onClick={() => handleSpeedChange(s)}
                      >
                        {s}x
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Picture-in-Picture */}
              <button 
                className="video-ctrl-btn" 
                onClick={togglePiP} 
                title="Ventana flotante (PiP)"
              >
                <PictureInPicture2 size={18} />
              </button>

              {/* Fullscreen Toggle */}
              <button 
                className="video-ctrl-btn" 
                onClick={toggleFullscreen}
                title={isFullscreen ? "Salir de pantalla completa (F)" : "Pantalla completa (F)"}
              >
                {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
