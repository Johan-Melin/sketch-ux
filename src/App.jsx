import { useEffect } from 'react';
import ProjectMenu from './components/ProjectMenu';
import ScreenEditor from './components/ScreenEditor';
import useProjects from './hooks/useProjects';

function App() {
  const { currentScreenId, setCurrentScreenId } = useProjects();

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
      {currentScreenId === null ? (
        <ProjectMenu onScreenSelect={setCurrentScreenId} />
      ) : (
        <ScreenEditor onBackToProjects={setCurrentScreenId} />
      )}
    </div>
  );
}

export default App;