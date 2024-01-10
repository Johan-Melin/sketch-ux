import ProjectMenu from './components/ProjectMenu';
import ScreenEditor from './components/ScreenEditor';
import useProjectManager from './hooks/useProjectManager';

function App() {
  const { currentScreen, selectScreen, handleBackToProjects } = useProjectManager();

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