import styles from './ProjectMenu.module.css';
import useProjectManager from '../hooks/useProjectManager';
import PropTypes from 'prop-types';

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
  } = useProjectManager();

  return (
    <div className={styles.menu}>
      {currentProjectId === null ? (
        <>
          <h2>Projects</h2>
          <ol className={styles.listItem}>
            {projects.map((project) => (
              <li key={project.id} onClick={() => selectProject(project)}>
                <>
                  {project.name}
                </>
                <>
                  <button onClick={(event) => editProject(project.id, event)}>Edit</button>
                  <button onClick={(event) => deleteProject(project.id, event)}>Delete</button>
                </>
              </li>
            ))}
          </ol>
          <button onClick={addProject} className={styles.glowBtn}>Add Project</button>
        </>
      ) : (
        <>
          <h2>{currentProject.name}</h2>
          <ol className={styles.listItem}>
            {currentProject.screens.map((screen) => (
              <li key={screen.id} onClick={() => onScreenSelect(screen)}>
                <>
                  {screen.name}
                </>
                <>
                  <button onClick={(event) => editScreen(screen.id, event)}>Edit</button>
                  <button onClick={(event) => deleteScreen(screen.id, event)}>Delete</button>
                </>
              </li>
            ))}
          </ol>
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
