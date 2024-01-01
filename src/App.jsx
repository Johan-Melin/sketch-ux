import { useState } from 'react';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);

  const addProject = () => {
    const projectName = prompt("Enter project name");
    setProjects([...projects, projectName]);
  };

  return (
    <div>
      <h1>Projects</h1>
      <ul className="project-list">
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
      <button onClick={addProject}>Add Project</button>
    </div>
  );
}

export default App;