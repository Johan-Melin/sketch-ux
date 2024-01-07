import PropTypes from 'prop-types';
import TopBarContext from '../../context/TopBarContext';
import { useContext } from 'react';
import styles from './TopBar.module.css';

function TopBar({ onBackToProjects }) {
    const { setSelectedTool, handleAction } = useContext(TopBarContext);
    return (
            <div className={styles.topBar}>
                <div>
                    <button onClick={onBackToProjects}>Back</button>
                    <button onClick={() => setSelectedTool('text')}>text</button>
                    <button onClick={() => setSelectedTool('image')}>image</button>
                    <button onClick={() => setSelectedTool('input')}>input</button>
                </div><div>
                    <button onClick={() => handleAction('undo')}>undo</button>
                    <button onClick={() => handleAction('clear')}>clear</button>
                </div>
        </div>
    );
}

TopBar.propTypes = {
    onBackToProjects: PropTypes.func.isRequired,
};

export default TopBar;
