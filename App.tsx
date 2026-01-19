import React, { useState } from 'react';
import NavBar from './components/NavBar';
import WorkArea from './components/WorkArea';
import ControlPanel from './components/ControlPanel';
import WelcomeScreen from './components/WelcomeScreen';
import { AppState, ControlSettings } from './types';
import { Menu, Settings, X } from 'lucide-react';

const App: React.FC = () => {
  // UI State
  const [showWelcome, setShowWelcome] = useState(true);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMobileSettingsOpen, setIsMobileSettingsOpen] = useState(false);

  // Application State
  const [appState, setAppState] = useState<AppState>({
    currentView: 'GRID',
    selectedTool: null,
    activeCategory: 'ARCH',
    transferredImage: null,
    searchQuery: '',
  });

  // Global Control Settings State
  const [controlSettings, setControlSettings] = useState<ControlSettings>({
    style: 'Photorealistic',
    environment: 'Daylight (Clear Sky)',
    weather: 'None (Mặc định)',
    architectStyle: 'None (Mặc định)',
    aspectRatio: '16:9',
    quality: 5, // Default to 1K (Standard)
    cfgScale: 7.5,
    seed: '',
    negativePrompt: true,
  });

  const updateControlSettings = (key: keyof ControlSettings, value: any) => {
    setControlSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleCategoryChange = (category: string) => {
    setAppState(prev => ({ 
      ...prev, 
      activeCategory: category, 
      currentView: 'GRID', 
      selectedTool: null,
      searchQuery: '' 
    }));
    setIsMobileNavOpen(false); // Close mobile nav on selection
  };

  const handleSearch = (query: string) => {
    setAppState(prev => ({
      ...prev,
      searchQuery: query,
      currentView: 'GRID',
      selectedTool: null
    }));
  };

  if (showWelcome) {
    return <WelcomeScreen onEnter={() => setShowWelcome(false)} />;
  }

  return (
    <div className="flex w-full h-screen overflow-hidden bg-[#121212] text-gray-200 font-sans animate-fade-in relative">
      
      {/* --- MOBILE HEADER (< 1024px) --- */}
      <header className="lg:hidden fixed top-0 w-full h-14 bg-[#121212] border-b border-[#333] z-40 flex items-center justify-between px-4 shadow-md">
         <button 
           onClick={() => setIsMobileNavOpen(true)}
           className="p-2 text-gray-300 hover:text-white hover:bg-[#1E1E1E] rounded-lg transition-colors"
         >
           <Menu className="w-5 h-5" />
         </button>
         
         <div className="flex flex-col items-center">
            <span className="text-[#BB86FC] font-bold tracking-widest text-sm neon-text">DMP AI</span>
         </div>

         <button 
           onClick={() => setIsMobileSettingsOpen(true)}
           className="p-2 text-gray-300 hover:text-white hover:bg-[#1E1E1E] rounded-lg transition-colors"
         >
           <Settings className="w-5 h-5" />
         </button>
      </header>

      {/* --- LEFT NAVIGATION BAR --- */}
      {/* Desktop: Static Block | Mobile: Fixed Drawer */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-[280px] lg:w-[280px] h-full bg-[#121212] border-r border-[#333] transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static flex-shrink-0 shadow-2xl lg:shadow-none
        ${isMobileNavOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <NavBar 
          activeCategory={appState.activeCategory}
          onSelectCategory={handleCategoryChange}
          searchQuery={appState.searchQuery}
          onSearch={handleSearch}
          onClose={() => setIsMobileNavOpen(false)}
        />
      </div>

      {/* --- MAIN WORK AREA --- */}
      <main className="flex-1 h-full relative flex flex-col pt-14 lg:pt-0 min-w-0 bg-[#121212]">
        <WorkArea 
          appState={appState} 
          setAppState={setAppState} 
          controlSettings={controlSettings} 
        />
      </main>

      {/* --- RIGHT CONTROL PANEL --- */}
      {/* Desktop: Static Block | Mobile: Fixed Drawer */}
      <div className={`
        fixed inset-y-0 right-0 z-50 w-[300px] lg:w-[320px] h-full bg-[#121212] border-l border-[#333] transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static flex-shrink-0 shadow-2xl lg:shadow-none
        ${isMobileSettingsOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <ControlPanel 
          settings={controlSettings} 
          updateSettings={updateControlSettings} 
          onClose={() => setIsMobileSettingsOpen(false)}
        />
      </div>

      {/* --- MOBILE OVERLAY BACKDROP --- */}
      {(isMobileNavOpen || isMobileSettingsOpen) && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
          onClick={() => {
            setIsMobileNavOpen(false);
            setIsMobileSettingsOpen(false);
          }}
        />
      )}

    </div>
  );
};

export default App;