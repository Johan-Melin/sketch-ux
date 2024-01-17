import styles from './ProjectMenu.module.css';
import useProjectActions from '../hooks/useProjectActions';
import useScreenActions from '../hooks/useScreenActions';
import { FaPen, FaTrash } from 'react-icons/fa'; 
import { useContext } from "react";
import { ProjectsContext } from "../context/ProjectsContext";

const ProjectMenu = () => {
  const { projects, setCurrentScreenId, currentProjectId } = useContext(ProjectsContext);
  const { addProject, deleteProject, editProject, selectProject, previousPage } = useProjectActions();
  const { addScreen, deleteScreen, editScreen } = useScreenActions();
  const currentProject = projects.find(project => project.id === currentProjectId);

  return (
    <div className={styles.projectMenu}>
      {currentProjectId === null ? (
        <>
          <h2>Projects</h2>
          {projects.map((project) => (
            <div className={styles.project} key={project.id} onClick={() => selectProject(project)}>
              <span>{project.name}</span>
              <div>
                <FaPen className={styles.icon} onClick={(event) => editProject(project.id, event)} />
                <FaTrash className={styles.icon} onClick={(event) => deleteProject(project.id, event)} />
              </div>
            </div>
          ))}
          <button onClick={addProject}>Add Project</button>
        </>
      ) : (
        <>
          <h2>{currentProject.name}</h2>
          {currentProject.screens.map((screen) => (
            <div className={styles.project} key={screen.id} onClick={() => setCurrentScreenId(screen.id)}>
              <span>{screen.name}</span>
              <div>
                <FaPen className={styles.icon} onClick={(event) => editScreen(screen.id, event)} />
                <FaTrash className={styles.icon} onClick={(event) => deleteScreen(screen.id, event)} />
              </div>
            </div>
          ))}
          <button onClick={addScreen}>Add Screen</button>
          <button onClick={previousPage}>Back to Projects</button>
        </>
      )}
    </div>
  );
};

export default ProjectMenu;
