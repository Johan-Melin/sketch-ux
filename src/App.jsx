import { useState } from 'react';
import ProjectMenu from './components/ProjectMenu';
import ScreenEditor from './components/ScreenEditor';
import "./App.css";

function App() {
  const [currentScreen, setCurrentScreen] = useState(null);

  const handleScreenSelect = (screen) => {
    setCurrentScreen(screen);
  };

  const handleBackToProjects = () => {
    setCurrentScreen(null);
  };

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