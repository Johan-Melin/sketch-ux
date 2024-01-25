import PropTypes from 'prop-types';
import TopBarContext from '../../context/TopBarContext';
import { useContext, useState, useRef, useEffect } from 'react';
import styles from './TopBar.module.css';
import TopBarButton from './TopBarButton';
import { TOOLS, ACTIONS } from '../../constants/tools';
import { FaArrowLeft, FaFont, FaSquare, FaRegSquare, FaUndo, FaEdit, FaTrash, FaLink, FaTimesCircle, FaPlay, FaCamera, FaIcons } from 'react-icons/fa'; 
import {ICONS} from '../../constants/icons';
import useRectActions from '../../hooks/useRectActions';
import { IoColorPalette } from "react-icons/io5";

function TopBar({ onBackToProjects }) {
    const { setSelectedTool, handleAction, mode, setMode, setDisplayModal, selectedIconName, selectedRect, setSelectedRect } = useContext(TopBarContext);
    const { TEXT, IMAGE, INPUT, ICON } = TOOLS;
    const { UNDO, CLEAR, SCREENSHOT } = ACTIONS;
    const { deleteRect, changeColor } = useRectActions();
    const SelectedIcon = ICONS[selectedIconName] || FaIcons;
    const [color, setColor] = useState("#ffffff");
    const inputRef = useRef();

    useEffect(() => {
        if (selectedRect) {
            changeColor(color, selectedRect.id);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [color]);

    const handleEditClick = () => {
        setMode(prev => prev === 'edit' ? 'create' : 'edit');
    };

    const handlePlayClick = () => {
        setMode(prev => prev === 'play' ? 'create' : 'play');
    };

    const handleDisplayIconModal = () => {
        setSelectedTool(ICON);
        setDisplayModal(prev => prev === 'icon' ? null : 'icon');
    };

    const handleDisplayLinkModalClick = () => {
        setDisplayModal(prev => prev === 'link' ? null : 'link');
    };

    const handleDeleteClick = () => {
        deleteRect(selectedRect.id);
        setSelectedRect(null);
    }

    return (
        <div className={styles.topBar}>
            <input type="color" ref={inputRef} style={{ display: 'none' }} value={color} onChange={(event) => setColor(event.target.value)} />
            <div className={styles.row}>
                <TopBarButton name="back" handleClick={onBackToProjects} Icon={FaArrowLeft} />
                {mode === "edit" && selectedRect && (
                    <>
                        <TopBarButton name="delete" handleClick={handleDeleteClick} Icon={FaTrash} />
                        <TopBarButton name="link" handleClick={handleDisplayLinkModalClick} Icon={FaLink} />
                        <TopBarButton name="color" handleClick={() => inputRef.current.click()} Icon={IoColorPalette} />
                    </>
                )}
                {mode === "create" && (
                    <>
                        <TopBarButton name="text" handleClick={() => setSelectedTool(TEXT)} Icon={FaFont} />
                        <TopBarButton name="image" handleClick={() => setSelectedTool(IMAGE)} Icon={FaSquare} />
                        <TopBarButton name="input" handleClick={() => setSelectedTool(INPUT)} Icon={FaRegSquare} />
                        <TopBarButton name="icon" handleClick={handleDisplayIconModal} Icon={SelectedIcon} />
                    </>
                )}
            </div>
            <div className={styles.row}>
                {mode === "edit" && <TopBarButton name="clear" handleClick={() => handleAction(CLEAR)} Icon={FaTimesCircle} />}
                {mode === "play" && <TopBarButton name="screenshot" handleClick={() => handleAction(SCREENSHOT)} Icon={FaCamera} />}
                {mode === "create" && <TopBarButton name="undo" handleClick={() => handleAction(UNDO)} Icon={FaUndo} />}
                <TopBarButton name="edit" handleClick={handleEditClick} Icon={FaEdit} isToggled={mode === "edit"} />
                <TopBarButton name="edit" handleClick={handlePlayClick} Icon={FaPlay} isToggled={mode === "play"} />
            </div>
        </div>
    );
}

TopBar.propTypes = {
    onBackToProjects: PropTypes.func.isRequired,
};

export default TopBar;
