import { FaArrowLeft, FaArrowRight, FaArrowUp, FaArrowDown, FaPlus, FaMinus, FaBars, FaUser, 
    FaShoppingCart, FaSearch, FaHome, FaCog, FaStar, FaStarHalfAlt, FaRegStar, FaThumbsUp, FaThumbsDown,
    FaCheck, FaTimesCircle, FaTrash, FaInfo, FaQuestion, FaEnvelope, FaPhone } from 'react-icons/fa'; 
import styles from './Icons.module.css';
import PropTypes from 'prop-types';

function Icons() {
    const IconComponent = ({ Icon }) => {
        const chooseIcon = (Icon) => {
            return Icon;
        }

        return <Icon className={styles.icon} onClick={() => chooseIcon(Icon)} />;
    }

    IconComponent.propTypes = {
        Icon: PropTypes.elementType.isRequired,
    };

    return (
        <div className={styles.iconsContainer}>
            <IconComponent Icon={FaArrowLeft} />
            <IconComponent Icon={FaArrowRight} />
            <IconComponent Icon={FaArrowUp} />
            <IconComponent Icon={FaArrowDown} />
            <IconComponent Icon={FaPlus} />
            <IconComponent Icon={FaMinus} />
            <IconComponent Icon={FaBars} />
            <IconComponent Icon={FaUser} />
            <IconComponent Icon={FaShoppingCart} />
            <IconComponent Icon={FaSearch} />
            <IconComponent Icon={FaHome} />
            <IconComponent Icon={FaCog} />
            <IconComponent Icon={FaStar} />
            <IconComponent Icon={FaStarHalfAlt} />
            <IconComponent Icon={FaRegStar} />
            <IconComponent Icon={FaThumbsUp} />
            <IconComponent Icon={FaThumbsDown} />
            <IconComponent Icon={FaCheck} />
            <IconComponent Icon={FaTimesCircle} />
            <IconComponent Icon={FaTrash} />
            <IconComponent Icon={FaInfo} />
            <IconComponent Icon={FaQuestion} />
            <IconComponent Icon={FaEnvelope} />
            <IconComponent Icon={FaPhone} />
        </div>
    )
}

export default Icons