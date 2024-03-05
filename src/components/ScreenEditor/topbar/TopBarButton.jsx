import PropTypes from 'prop-types';
import styles from './TopBarButton.module.css';
import TopBarContext from '../../../context/TopBarContext';
import { useContext } from 'react';

function TopBarButton({ name, handleClick, Icon, isToggled  }) {
    const { selectedTool } = useContext(TopBarContext);
    const active = selectedTool === name || isToggled;
    
    const buttonClassName = `${styles.topBarButton} ${active ? styles.active : ''}`;
    
    return (
        <div className={buttonClassName} onClick={handleClick}>
            <div className={styles.topBarIcon}>{Icon && <Icon />}</div>
            <div className={styles.topBarText}>{name}</div>
        </div>
    )
}

TopBarButton.propTypes = {
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    Icon: PropTypes.elementType,
    isToggled: PropTypes.bool,
};

export default TopBarButton