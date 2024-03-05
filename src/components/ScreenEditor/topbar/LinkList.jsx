import styles from './LinkList.module.css';
import { ProjectsContext } from "../../../context/ProjectsContext";
import { useContext } from 'react';
import useScreenActions from '../../../hooks/useScreenActions';
import useRectActions from '../../../hooks/useRectActions';
import TopBarContext from '../../../context/TopBarContext';
import { FaArrowRight } from 'react-icons/fa';

function LinkList() {
    const { projects, currentProjectId, currentScreenId, setCurrentScreenId } = useContext(ProjectsContext);
    const currentProject = projects.find(project => project.id === currentProjectId);    
    const { addScreen, copyScreen, editScreen } = useScreenActions();
    const { addLink } = useRectActions();
    const { selectedRect, setSelectedRect, setDisplayModal } = useContext(TopBarContext);   

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
        if (selectedRect?.link === screenId) {
            setSelectedRect(prevRect => ({...prevRect, link: null}));
            addLink(null, selectedRect.id);
        } else {
            setSelectedRect(prevRect => ({...prevRect, link: screenId}));
            addLink(screenId, selectedRect.id);
        }
    }

    const handleGoToScreen = () => {
        setDisplayModal(null);
        setCurrentScreenId(selectedRect.link);
    }

    return (
        <div className={styles.container}>
            <p>Link to:</p>
            <div className={styles.row}>
                <div className={styles.item} onClick={handleAddScreen}>New Screen</div>
                <div className={styles.item} onClick={handleCopyScreen}>Copy of current screen</div>
            </div>
            {currentProject.screens
            .filter(screen => screen.id !== currentScreenId)
            .map((screen) => {
                const isSelected = selectedRect && screen.id === selectedRect?.link;
                return (
                    <div key={screen.id} className={`${styles.item} ${isSelected ? styles.selected : ''}`} onClick={() => handleAddLink(screen.id)}>
                        {screen.name} {isSelected && <FaArrowRight onClick={handleGoToScreen}/>}
                    </div>
                )}
            )}
        </div>
    )
}

export default LinkList