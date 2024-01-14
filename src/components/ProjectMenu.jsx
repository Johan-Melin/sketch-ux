import styles from './ProjectMenu.module.css';
import { useProjectsValue } from '../hooks/useProjects';
import PropTypes from 'prop-types';
import { FaEdit, FaTrash } from 'react-icons/fa'; 

const ProjectMenu = ({ onScreenSelect }) => {
  const {
    projects,
    currentProjectId,
    addProject,
    deleteProject,
    editProject,
    selectProject,
    addScreen,
    deleteScreen,
    editScreen,
    previousPage,
    currentProject,
  } = useProjectsValue();

  return (
    <div className={styles.projectMenu}>
      {currentProjectId === null ? (
        <>
          <h2>Projects</h2>
          {projects.map((project) => (
            <div className={styles.project} key={project.id} onClick={() => selectProject(project)}>
              <span>{project.name}</span>
              <div>
                <FaEdit className={styles.icon} onClick={(event) => editProject(project.id, event)} />
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
            <div className={styles.project} key={screen.id} onClick={() => onScreenSelect(screen)}>
              <span>{screen.name}</span>
              <div>
                <FaEdit className={styles.icon} onClick={(event) => editScreen(screen.id, event)} />
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

ProjectMenu.propTypes = {
  onScreenSelect: PropTypes.func.isRequired,
};

export default ProjectMenu;
