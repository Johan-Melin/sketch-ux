import TopBar from './ScreenEditor/TopBar';
import Canvas from './ScreenEditor/Canvas';
import TopBarContext from '../context/TopBarContext';
import { useState } from 'react';
import styles from './ScreenEditor.module.css';
import { useContext } from "react";
import { ProjectsContext } from "../context/ProjectsContext";
import useRectActions from "../hooks/useRectActions";

const ScreenEditor = () => {
    const {setCurrentScreenId } = useContext(ProjectsContext);
    const [selectedTool, setSelectedTool] = useState('image');
    const [isEditMode, setIsEditMode] = useState(false);

    const { undoRect, clearRect } = useRectActions();
    const handleAction = (action) => {
        if (action === 'undo') {
            undoRect();
        } else if (action === 'clear') {
            clearRect();
        }
    };

    return (
        <TopBarContext.Provider value={{ selectedTool, setSelectedTool, handleAction, isEditMode, setIsEditMode }}>
            <div>
                <TopBar onBackToProjects={() => setCurrentScreenId(null)} />
                <div className={styles.container} >
                    <Canvas />
                </div>
            </div>
        </TopBarContext.Provider>
    );
};

export default ScreenEditor;
