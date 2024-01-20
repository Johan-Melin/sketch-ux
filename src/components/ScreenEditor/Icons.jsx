import {ICONS} from '../../constants/icons';
import styles from './Icons.module.css';
import PropTypes from 'prop-types';
import TopBarContext from '../../context/TopBarContext';
import { useContext } from 'react';

function Icons() {
    const { setDisplayIconModal, setSelectedIconName } = useContext(TopBarContext);
    const IconComponent = ({ Icon, name }) => {
        const chooseIcon = (name) => {
            setDisplayIconModal(false);
            setSelectedIconName(name);
        }

        return <Icon className={styles.icon} onClick={() => chooseIcon(name)} />;
    }

    IconComponent.propTypes = {
        Icon: PropTypes.elementType.isRequired,
        name: PropTypes.string.isRequired, 
    };

    return (
        <div className={styles.iconsContainer}>
            {Object.entries(ICONS).map(([name, Icon]) => {
                return <IconComponent Icon={Icon} name={name} key={name} />
            })}
        </div>
    )
}

export default Icons