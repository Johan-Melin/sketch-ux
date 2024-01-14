import { useEffect } from 'react';
import ProjectMenu from './components/ProjectMenu';
import ScreenEditor from './components/ScreenEditor';
import useScreens from './hooks/useScreens';
import { ProjectsProvider } from './hooks/ProjectsProvider';

function App() {
  const { currentScreen, selectScreen, handleBackToProjects } = useScreens();

  useEffect(() => {
    //prevent refresh page on swipe down
    const preventDefault = (e) => e.preventDefault();
    document.addEventListener('touchmove', preventDefault, { passive: false });
  
    return () => {
      document.removeEventListener('touchmove', preventDefault);
    };
  }, []);

  return (
    <ProjectsProvider>
      <div>
        {currentScreen === null ? (
          <ProjectMenu onScreenSelect={selectScreen} />
        ) : (
          <ScreenEditor onBackToProjects={handleBackToProjects} />
        )}
      </div>
    </ProjectsProvider>
  );
}

export default App;