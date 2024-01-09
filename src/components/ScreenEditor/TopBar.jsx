import PropTypes from 'prop-types';
import TopBarContext from '../../context/TopBarContext';
import { useContext } from 'react';
import styles from './TopBar.module.css';
import TopBarButton from './TopBarButton';
import { TOOLS, ACTIONS } from '../../constants/tools';
function TopBar({ onBackToProjects }) {
    const { setSelectedTool, handleAction } = useContext(TopBarContext);
    const { TEXT, IMAGE, INPUT } = TOOLS;
    const { UNDO, CLEAR } = ACTIONS;

    return (
            <div className={styles.topBar}>
                <div className={styles.row}>
                    <TopBarButton name="back" handleClick={onBackToProjects}/>
                    <TopBarButton name="text" handleClick={() => setSelectedTool(TEXT)} />
                    <TopBarButton name="image" handleClick={() => setSelectedTool(IMAGE)} />
                    <TopBarButton name="input" handleClick={() => setSelectedTool(INPUT)} />
                </div>
                <div className={styles.row}>
                    <TopBarButton name="undo" handleClick={() => handleAction(UNDO)} />
                    <TopBarButton name="clear" handleClick={() => handleAction(CLEAR)} />
                </div>
        </div>
    );
}

TopBar.propTypes = {
    onBackToProjects: PropTypes.func.isRequired,
};

export default TopBar;
