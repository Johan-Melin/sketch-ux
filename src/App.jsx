import { useState, useCallback } from 'react';
import ProjectMenu from './components/ProjectMenu';
import ScreenEditor from './components/ScreenEditor';

function App() {
  const [currentScreen, setCurrentScreen] = useState(null);

  const handleScreenSelect = useCallback((screen) => {
    setCurrentScreen(screen);
  }, []);

  const handleBackToProjects = useCallback(() => {
    setCurrentScreen(null);
  }, []);

  return (
    <div>
      {currentScreen === null ? (
        <ProjectMenu onScreenSelect={handleScreenSelect} />
      ) : (
        <ScreenEditor screen={currentScreen} onBackToProjects={handleBackToProjects} />
      )}
    </div>
  );
}

export default App;