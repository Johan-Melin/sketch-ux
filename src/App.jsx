import { useState } from 'react';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [screens, setScreens] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);

  const addProject = () => {
    let projectName = prompt("Enter project name");
    if (projectName.trim() === "") {
      projectName = `Project ${projects.length + 1}`;
    }
    setProjects([...projects, projectName]);
  };
  
  const addScreen = () => {
    let screenName = prompt("Enter screen name");
    if (screenName.trim() === "") {
      screenName = `Screen ${screens.length + 1}`;
    }
    setScreens([...screens, screenName]);
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
                {project}
              </li>
            ))}
          </ol>
          <button onClick={addProject}>Add Project</button>
        </>
      ) : (
        <>
          <h2>{currentProject}</h2>
          <ol className="list-item">
            {screens.map((screen, index) => (
              <li key={index}>{screen}</li>
            ))}
          </ol>
          <button onClick={addScreen}>Add Screen</button>
          <button onClick={() => setCurrentProject(null)}>Back to Projects</button>
        </>
      )}
    </div>
  );
}

export default App;