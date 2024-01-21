import ProjectMenu from './components/ProjectMenu';
import ScreenEditor from './components/ScreenEditor';
import useProjects from './hooks/useProjects';
import { ProjectsContext } from "./context/ProjectsContext";
import usePreventRefresh from './hooks/usePreventRefresh';

function App() {
  const projectsData = useProjects();
  const { currentScreenId } = projectsData;
  usePreventRefresh();

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