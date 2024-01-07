import PropTypes from 'prop-types';
import TopBarContext from '../../context/TopBarContext';
import { useContext } from 'react';
import styles from './TopBar.module.css';
import TopBarButton from './TopBarButton';

function TopBar({ onBackToProjects }) {
    const { setSelectedTool, handleAction } = useContext(TopBarContext);
    return (
            <div className={styles.topBar}>
                <div>
                    <TopBarButton name="back" handleClick={onBackToProjects}/>
                    <TopBarButton name="text" handleClick={() => setSelectedTool('text')} />
                    <TopBarButton name="image" handleClick={() => setSelectedTool('image')} />
                    <TopBarButton name="input" handleClick={() => setSelectedTool('input')} />
                </div><div>
                    <TopBarButton name="undo" handleClick={() => handleAction('undo')} />
                    <TopBarButton name="clear" handleClick={() => handleAction('clear')} />
                </div>
        </div>
    );
}

TopBar.propTypes = {
    onBackToProjects: PropTypes.func.isRequired,
};

export default TopBar;
