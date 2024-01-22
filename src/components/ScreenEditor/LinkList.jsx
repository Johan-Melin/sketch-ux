import styles from './LinkList.module.css';
import { ProjectsContext } from "../../context/ProjectsContext";
import { useContext } from 'react';

function LinkList() {
    const { projects, currentProjectId } = useContext(ProjectsContext);
    const currentProject = projects.find(project => project.id === currentProjectId);    
  return (
    <div className={styles.container}>
        <p>Link to:</p>
        <div>New Screen</div>
        <div>Copy of current screen</div>
        {currentProject.screens.map((screen) => (
            <div key={screen.id}>{screen.name}</div>
        ))}
    </div>
  )
}

export default LinkList