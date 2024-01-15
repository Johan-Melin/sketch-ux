import { useEffect } from 'react';
import ProjectMenu from './components/ProjectMenu';
import ScreenEditor from './components/ScreenEditor';
import useProjects from './hooks/useProjects';

function App() {
  const { projects, setProjects, currentScreenId, setCurrentScreenId, currentProjectId, setCurrentProjectId } = useProjects();

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
        <ProjectMenu projects={projects} setProjects={setProjects} setCurrentScreenId={setCurrentScreenId} setCurrentProjectId={setCurrentProjectId} currentProjectId={currentProjectId} />
      ) : (
        <ScreenEditor onBackToProjects={setCurrentScreenId} currentScreenId={currentScreenId} currentProjectId={currentProjectId} />
      )}
    </div>
  );
}

export default App;