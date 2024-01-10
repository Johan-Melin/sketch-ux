import PropTypes from 'prop-types';
import styles from './TopBarButton.module.css';
import TopBarContext from '../../context/TopBarContext';
import { useContext } from 'react';

function TopBarButton({ name, handleClick, Icon }) {
    const { selectedTool } = useContext(TopBarContext);
    const active = selectedTool === name;
    
    const buttonClassName = `${styles.topBarButton} ${active ? styles.active : ''}`;
    
    return (
        <div className={buttonClassName} onClick={handleClick}>{Icon && <Icon /> || name}</div>
    )
}

TopBarButton.propTypes = {
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    Icon: PropTypes.elementType,
};

export default TopBarButton