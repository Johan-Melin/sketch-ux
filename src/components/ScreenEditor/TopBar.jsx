import PropTypes from 'prop-types';
import TopBarContext from '../../context/TopBarContext';
import { useContext } from 'react';
import styles from './TopBar.module.css';
import TopBarButton from './TopBarButton';
import { TOOLS, ACTIONS } from '../../constants/tools';
import { FaArrowLeft, FaFont, FaSquare, FaRegSquare, FaUndo, FaEdit, FaTrash, FaFile } from 'react-icons/fa'; 
function TopBar({ onBackToProjects }) {
    const { setSelectedTool, handleAction, isEditMode, setIsEditMode } = useContext(TopBarContext);
    const { TEXT, IMAGE, INPUT } = TOOLS;
    const { UNDO, CLEAR } = ACTIONS;
    
    const handleEditClick = () => {
        setIsEditMode(!isEditMode);
    };

    return (
            <div className={styles.topBar}>
                <div className={styles.row}>
                    <TopBarButton name="back" handleClick={onBackToProjects} Icon={FaArrowLeft} />
                    {isEditMode ? (
                        <>
                            <TopBarButton name="delete" handleClick={() => []} Icon={FaTrash} />
                        </>
                    ) : (
                    <>
                        <TopBarButton name="text" handleClick={() => setSelectedTool(TEXT)} Icon={FaFont} />
                        <TopBarButton name="image" handleClick={() => setSelectedTool(IMAGE)} Icon={FaSquare} />
                        <TopBarButton name="input" handleClick={() => setSelectedTool(INPUT)} Icon={FaRegSquare} />
                    </>
                )}
                </div>
                <div className={styles.row}>
                    {isEditMode && <TopBarButton name="clear" handleClick={() => handleAction(CLEAR)} Icon={FaFile} />}
                    <TopBarButton name="undo" handleClick={() => handleAction(UNDO)} Icon={FaUndo} />
                    <TopBarButton name="edit" handleClick={handleEditClick} Icon={FaEdit} isToggled={isEditMode} />
                </div>
        </div>
    );
}

TopBar.propTypes = {
    onBackToProjects: PropTypes.func.isRequired,
};

export default TopBar;
