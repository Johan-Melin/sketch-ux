import { useEffect } from 'react';
import ProjectMenu from './components/ProjectMenu';
import ScreenEditor from './components/ScreenEditor';
import useProjectManager from './hooks/useProjectManager';

function App() {
  const { currentScreen, selectScreen, handleBackToProjects } = useProjectManager();

  useEffect(() => {
    //prevent refresh page on swipe down
    const preventDefault = (e) => e.preventDefault();
    document.addEventListener('touchmove', preventDefault, { passive: false });
  
    return () => {
      document.removeEventListener('touchmove', preventDefault);
    };
  }, []);

  return (
    <div>
      {currentScreen === null ? (
        <ProjectMenu onScreenSelect={selectScreen} />
      ) : (
        <ScreenEditor onBackToProjects={handleBackToProjects} />
      )}
    </div>
  );
}

export default App;