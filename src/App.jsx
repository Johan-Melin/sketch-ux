import { useState } from 'react';
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

  const selectProject = (project) => {
    setCurrentProject(project);
    // Reset screens when a new project is selected
    setScreens([]);
  };

  return (
    <div>
      {currentProject === null ? (
        <>
          <h2>Projects</h2>
          <ol className="list-item">
            {projects.map((project, index) => (
              <li key={index} onClick={() => selectProject(project)}>
                {project.name}
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
            {screens.map((screen, index) => (
              <li key={index}>{screen.name}</li>
            ))}
          </ol>
          <button onClick={addScreen}>Add Screen</button>
        </>
      )}
    </div>
  );
}

export default App;