import TopBar from './ScreenEditor/TopBar';
import Canvas from './ScreenEditor/Canvas';
import TopBarContext from '../context/TopBarContext';
import { useState } from 'react';
import styles from './ScreenEditor.module.css';
import { useContext, useRef } from "react";
import { ProjectsContext } from "../context/ProjectsContext";
import useRectActions from "../hooks/useRectActions";
import html2canvas from 'html2canvas';

const ScreenEditor = () => {
    const {setCurrentScreenId} = useContext(ProjectsContext);
    const [selectedTool, setSelectedTool] = useState('image');
    const [isEditMode, setIsEditMode] = useState(false);
    const [isPlayMode, setIsPlayMode] = useState(false);
    const { undoRect, clearRect } = useRectActions();
    const canvasRef = useRef();

    const handleScreenshot = () => {
        const canvasElement = canvasRef.current;
    
        html2canvas(canvasElement).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            let link = document.createElement('a');
            link.href = imgData;
            link.download = 'screenshot.png';
            link.click();
        });
    };

    const handleAction = (action) => {
        if (action === 'undo') {
            undoRect();
        } else if (action === 'clear') {
            clearRect();
        } else if (action === 'screenshot') {
            handleScreenshot();
        }
    };

    return (
        <TopBarContext.Provider value={{ selectedTool, setSelectedTool, handleAction, isEditMode, setIsEditMode, isPlayMode, setIsPlayMode, canvasRef }}>
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
