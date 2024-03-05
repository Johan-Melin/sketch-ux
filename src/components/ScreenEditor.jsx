import TopBar from './ScreenEditor/topbar/TopBar';
import Canvas from './ScreenEditor/Canvas';
import TopBarContext from '../context/TopBarContext';
import { useEffect, useState } from 'react';
import { useContext, useRef } from "react";
import { ProjectsContext } from "../context/ProjectsContext";
import useRectActions from "../hooks/useRectActions";
import html2canvas from 'html2canvas';

const ScreenEditor = () => {
    const {setCurrentScreenId} = useContext(ProjectsContext);
    const [selectedTool, setSelectedTool] = useState('image');
    const [mode, setMode] = useState("create");
    const [displayModal, setDisplayModal] = useState(null);
    const [selectedIconName, setSelectedIconName] = useState('FaIcons');
    const [selectedRect, setSelectedRect] = useState(null);
    const { undoRect, clearRect } = useRectActions();
    const canvasRef = useRef();

    useEffect(() => {
        if (mode !== "edit") {
          setSelectedRect(null);
        }
        if (mode !== "create") {
            setDisplayModal(null);
        }
    }, [mode]);

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
        <TopBarContext.Provider value={{ selectedTool, setSelectedTool, handleAction, mode, setMode, canvasRef, displayModal, setDisplayModal, selectedIconName, setSelectedIconName, selectedRect, setSelectedRect }}>
            <div>
                <TopBar onBackToProjects={() => setCurrentScreenId(null)} />
                <Canvas />
            </div>
        </TopBarContext.Provider>
    );
};

export default ScreenEditor;
