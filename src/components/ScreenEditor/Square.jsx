import PropTypes from 'prop-types';
import styles from './Square.module.css';
import { ICONS } from '../../constants/icons';

const Square = ({ square, gridSize, onClick, isSelected }) => {
    const left = Math.min(square.x, square.x + square.width);
    const top = Math.min(square.y, square.y + square.height);
    const minWidth = 3;
    const minHeight = 3;
    const vertical = Math.abs(square.width) > Math.abs(square.height);
    const width = Math.max(Math.abs(square.width * gridSize.x), vertical ? gridSize.x : minWidth);
    const height = Math.max(Math.abs(square.height * gridSize.y), vertical ? minHeight : gridSize.y);
    const Icon = ICONS[square.iconName];

    return (
        <>
            {square.tool === 'icon' 
            ? <Icon 
                className={`${styles.rect} ${styles[square.tool]} ${isSelected ? styles.selected : ''}`}
                size={Math.max(width, height)}
                style={{
                    left: left * gridSize.x,
                    top: top * gridSize.y,
                }}
                onClick={onClick}
            />
            : <div
            className={`${styles.rect} ${styles[square.tool]} ${isSelected ? styles.selected : ''}`}
                style={{
                    left: left * gridSize.x,
                    top: top * gridSize.y,
                    width: `${width}px`,
                    height: `${height}px`,
                }}
                onClick={onClick}
            />
        }
        </>
    );
};

Square.propTypes = {
    square: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        tool: PropTypes.string.isRequired,
        iconName: PropTypes.string,
    }).isRequired,
    gridSize: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }),
    onClick: PropTypes.func,
    isSelected: PropTypes.bool,
};

export default Square;