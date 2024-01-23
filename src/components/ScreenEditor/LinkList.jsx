import styles from './LinkList.module.css';
import { ProjectsContext } from "../../context/ProjectsContext";
import { useContext } from 'react';
import useScreenActions from '../../hooks/useScreenActions';
import TopBarContext from '../../context/TopBarContext';

function LinkList() {
    const { projects, currentProjectId } = useContext(ProjectsContext);
    const currentProject = projects.find(project => project.id === currentProjectId);    
    const { addScreen, copyScreen, editScreen, addLink } = useScreenActions();
    const { selectedRect } = useContext(TopBarContext);   

    const handleAddScreen = () => {
        const id = addScreen();
        editScreen(id);
    }

    const handleCopyScreen = () => {
        const id = copyScreen();
        editScreen(id);
    }

    const handleAddLink = (screenId) => {
        if (!selectedRect) return;
        addLink(screenId, selectedRect.id);
    }

    return (
        <div className={styles.container}>
            <p>Link to: {selectedRect?.link}</p>
            <div className={styles.row}>
                <div className={styles.item} onClick={handleAddScreen}>New Screen</div>
                <div className={styles.item} onClick={handleCopyScreen}>Copy of current screen</div>
            </div>
            {currentProject.screens.map((screen) => {
                const isSelected = selectedRect && screen.id === selectedRect?.link;
                return (
                    <div key={screen.id} className={`${styles.item} ${isSelected ? styles.selected : ''}`} onClick={() => handleAddLink(screen.id)}>
                        {screen.name}
                    </div>
                )}
            )}
        </div>
    )
}

export default LinkList