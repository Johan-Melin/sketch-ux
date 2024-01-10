import PropTypes from 'prop-types';
import TopBarContext from '../../context/TopBarContext';
import { useContext } from 'react';
import styles from './TopBar.module.css';
import TopBarButton from './TopBarButton';
import { TOOLS, ACTIONS } from '../../constants/tools';
import { FaArrowLeft, FaFont, FaSquare, FaRegSquare, FaUndo, FaTrash } from 'react-icons/fa'; 
function TopBar({ onBackToProjects }) {
    const { setSelectedTool, handleAction } = useContext(TopBarContext);
    const { TEXT, IMAGE, INPUT } = TOOLS;
    const { UNDO, CLEAR } = ACTIONS;

    return (
            <div className={styles.topBar}>
                <div className={styles.row}>
                    <TopBarButton name="back" handleClick={onBackToProjects} Icon={FaArrowLeft} />
                    <TopBarButton name="text" handleClick={() => setSelectedTool(TEXT)} Icon={FaFont} />
                    <TopBarButton name="image" handleClick={() => setSelectedTool(IMAGE)} Icon={FaSquare} />
                    <TopBarButton name="input" handleClick={() => setSelectedTool(INPUT)} Icon={FaRegSquare} />
                </div>
                <div className={styles.row}>
                    <TopBarButton name="undo" handleClick={() => handleAction(UNDO)} Icon={FaUndo} />
                    <TopBarButton name="clear" handleClick={() => handleAction(CLEAR)} Icon={FaTrash} />
                </div>
        </div>
    );
}

TopBar.propTypes = {
    onBackToProjects: PropTypes.func.isRequired,
};

export default TopBar;
