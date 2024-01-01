import { useState, useCallback } from 'react';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [screens, setScreens] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);

  const promptForName = (type, items) => {
    let name = prompt(`Enter ${type} name`);
    if (name.trim() === "") {
      name = `${type} ${items.length + 1}`;
    }
    return name;
  }

  const addProject = () => {
    const projectName = promptForName("project", projects);
    if (projectName !== null) {
      setProjects(prevProjects => [...prevProjects, { id: Date.now(), name: projectName }]);
    }
  };
  
  const addScreen = () => {
    const screenName = promptForName("screen", screens);
    if (screenName !== null) {
      setScreens(prevScreens => [...prevScreens, { id: Date.now(), name: screenName }]);
    }
  };

  const selectProject = useCallback((project) => {
    setCurrentProject(project);
     // Reset screens when a new project is selected
     setScreens([]);
  }, []);

  const deleteProject = useCallback((id, event) => {
    event.stopPropagation();
    setProjects(projects => projects.filter((project) => project.id !== id));
  }, []);
  
  const deleteScreen = useCallback((id, event) => {
    event.stopPropagation();
    setScreens(screens => screens.filter((screen) => screen.id !== id));
  }, []);

  return (
    <div>
      {currentProject === null ? (
        <>
          <h2>Projects</h2>
          <ol className="list-item">
            {projects.map((project) => (
              <li key={project.id} onClick={() => selectProject(project)}>
                {project.name}
                <button onClick={(event) => deleteProject(project.id, event)}>Delete</button>
              </li>
            ))}
          </ol>
          <button onClick={addProject}>Add Project</button>
        </>
      ) : (
        <>
          <button onClick={() => setCurrentProject(null)}>&lt;</button>
          <h2>{currentProject.name}</h2>
          <ol className="list-item">
            {screens.map((screen) => (
              <li key={screen.id}>
                {screen.name}
                <button onClick={(event) => deleteScreen(screen.id, event)}>Delete</button>
              </li>
            ))}
          </ol>
          <button onClick={addScreen}>Add Screen</button>
        </>
      )}
    </div>
  );
}

export default App;