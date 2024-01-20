import PropTypes from 'prop-types';
import TopBarContext from '../../context/TopBarContext';
import { useContext } from 'react';
import styles from './TopBar.module.css';
import TopBarButton from './TopBarButton';
import { TOOLS, ACTIONS } from '../../constants/tools';
import { FaArrowLeft, FaFont, FaSquare, FaRegSquare, FaUndo, FaEdit, FaTrash, FaFile, FaPlay, FaCamera, FaIcons } from 'react-icons/fa'; 
import {ICONS} from '../../constants/icons';

function TopBar({ onBackToProjects }) {
    const { setSelectedTool, handleAction, isEditMode, setIsEditMode, isPlayMode, setIsPlayMode, setDisplayIconModal, selectedIconName } = useContext(TopBarContext);
    const { TEXT, IMAGE, INPUT, ICON } = TOOLS;
    const { UNDO, CLEAR, SCREENSHOT } = ACTIONS;

    const SelectedIcon = ICONS[selectedIconName] || FaIcons;
    
    const handleEditClick = () => {
        setIsEditMode(prev => !prev);
    };

    const handlePlayClick = () => {
        setIsPlayMode(prev => !prev);
    };

    const handleDisplayIconModalClick = () => {
        setSelectedTool(ICON);
        setDisplayIconModal(prev => !prev);
    };

    return (
            <div className={styles.topBar}>
                <div className={styles.row}>
                    <TopBarButton name="back" handleClick={onBackToProjects} Icon={FaArrowLeft} />
                    {isEditMode ? (<TopBarButton name="delete" handleClick={() => []} Icon={FaTrash} />) 
                    : (
                    <>
                      {!isPlayMode && (
                        <>
                            <TopBarButton name="text" handleClick={() => setSelectedTool(TEXT)} Icon={FaFont} />
                            <TopBarButton name="image" handleClick={() => setSelectedTool(IMAGE)} Icon={FaSquare} />
                            <TopBarButton name="input" handleClick={() => setSelectedTool(INPUT)} Icon={FaRegSquare} />
                            <TopBarButton name="icon" handleClick={handleDisplayIconModalClick} Icon={SelectedIcon} />
                        </>
                     )}
                    </>
                )}
                </div>
                <div className={styles.row}>
                    {isEditMode && <TopBarButton name="clear" handleClick={() => handleAction(CLEAR)} Icon={FaFile} />}
                    {isPlayMode ?
                        <TopBarButton name="screenshot" handleClick={() => handleAction(SCREENSHOT)} Icon={FaCamera} />
                        : (
                        <>              
                            <TopBarButton name="undo" handleClick={() => handleAction(UNDO)} Icon={FaUndo} />
                            <TopBarButton name="edit" handleClick={handleEditClick} Icon={FaEdit} isToggled={isEditMode} />
                        </>
                    )}
                    <TopBarButton name="edit" handleClick={handlePlayClick} Icon={FaPlay} isToggled={isPlayMode} />
                </div>
        </div>
    );
}

TopBar.propTypes = {
    onBackToProjects: PropTypes.func.isRequired,
};

export default TopBar;
