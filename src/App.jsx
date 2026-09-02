import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ExitModal } from './components/ExitModal';
import { HomeScreen } from './screens/HomeScreen';
import { MenuScreen } from './screens/MenuScreen';
import { CapsulesListScreen } from './screens/CapsulesListScreen';
import { PlayerScreen } from './screens/PlayerScreen';
import { DocumentViewerScreen } from './screens/DocumentViewerScreen';
import { MANUALS, CAPSULES_DATA } from './data/capsulesData';
import './App.css';

export function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('Embalador');
  const [selectedCapsule, setSelectedCapsule] = useState(null);
  const [selectedManual, setSelectedManual] = useState(MANUALS[0]);
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);

  // Scroll to top on screen change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen, selectedCategory, selectedCapsule, selectedManual]);

  // Navigation Handlers
  const handleNavigate = (screen) => {
    setCurrentScreen(screen);
  };

  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
    setCurrentScreen('capsules_list');
  };

  const handleSelectCapsule = (capsule) => {
    setSelectedCapsule(capsule);
    setSelectedCategory(capsule.categoria);
    setCurrentScreen('player');
  };

  const handleSelectManual = (manual) => {
    setSelectedManual(manual);
    setCurrentScreen('doc_viewer');
  };

  const handleBack = () => {
    if (currentScreen === 'player') {
      setCurrentScreen('capsules_list');
    } else if (currentScreen === 'capsules_list' || currentScreen === 'doc_viewer') {
      setCurrentScreen('menu');
    } else if (currentScreen === 'menu') {
      setCurrentScreen('home');
    }
  };

  // Compute Navbar Titles
  const getNavInfo = () => {
    switch (currentScreen) {
      case 'home':
        return { title: 'Cápsulas Embalaje', subtitle: 'Mamut' };
      case 'menu':
        return { title: 'Menú de Cápsulas', subtitle: 'Seleccionar Categoría' };
      case 'capsules_list':
        return { title: `Cápsulas - ${selectedCategory}`, subtitle: 'Módulo de Capacitación' };
      case 'player':
        return { title: selectedCapsule?.title || 'Reproductor', subtitle: selectedCapsule?.categoria || 'Video' };
      case 'doc_viewer':
        return { title: selectedManual?.title || 'Manual PDF', subtitle: 'Documentación Oficial' };
      default:
        return { title: 'Cápsulas Embalaje', subtitle: 'Mamut' };
    }
  };

  const navInfo = getNavInfo();

  return (
    <div className="app-container">
      {/* Top Navigation Bar */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onBack={handleBack}
        title={navInfo.title}
        subtitle={navInfo.subtitle}
        onOpenExitModal={() => setIsExitModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="main-content">
        {currentScreen === 'home' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onOpenExitModal={() => setIsExitModalOpen(true)}
          />
        )}

        {currentScreen === 'menu' && (
          <MenuScreen
            onSelectCategory={handleSelectCategory}
            onSelectManual={handleSelectManual}
            onSelectCapsule={handleSelectCapsule}
          />
        )}

        {currentScreen === 'capsules_list' && (
          <CapsulesListScreen
            categoria={selectedCategory}
            onSelectCapsule={handleSelectCapsule}
            onSelectCategory={setSelectedCategory}
            onBack={handleBack}
          />
        )}

        {currentScreen === 'player' && selectedCapsule && (
          <PlayerScreen
            capsule={selectedCapsule}
            onSelectCapsule={handleSelectCapsule}
            onBackToList={() => setCurrentScreen('capsules_list')}
          />
        )}

        {currentScreen === 'doc_viewer' && selectedManual && (
          <DocumentViewerScreen
            manual={selectedManual}
            onSelectManual={setSelectedManual}
            onBackToMenu={() => setCurrentScreen('menu')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Exit Confirmation Modal */}
      <ExitModal
        isOpen={isExitModalOpen}
        onClose={() => setIsExitModalOpen(false)}
        onConfirm={() => {
          setIsExitModalOpen(false);
          setCurrentScreen('home');
        }}
      />
    </div>
  );
}

export default App;
