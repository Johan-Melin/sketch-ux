import { useEffect } from 'react';
import ProjectMenu from './components/ProjectMenu';
import ScreenEditor from './components/ScreenEditor';
import useProjects from './hooks/useProjects';
import { ProjectsContext } from "./context/ProjectsContext";

function App() {
  const projectsData = useProjects();
  const { currentScreenId } = projectsData;

  useEffect(() => {
    //prevent refresh page on swipe down
    const preventDefault = (e) => e.preventDefault();
    document.addEventListener('touchmove', preventDefault, { passive: false });
  
    return () => {
      document.removeEventListener('touchmove', preventDefault);
    };
  }, []);

  return (
    <ProjectsContext.Provider value={projectsData}>
      {currentScreenId === null ? (
        <ProjectMenu />
      ) : (
        <ScreenEditor />
      )}
    </ProjectsContext.Provider>
  );
}

export default App;