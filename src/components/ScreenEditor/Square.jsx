import PropTypes from 'prop-types';
import styles from './Square.module.css';

const Square = ({ square, gridSize }) => {
    const left = Math.min(square.x, square.x + square.width);
    const top = Math.min(square.y, square.y + square.height);
    const minWidth = 3;
    const minHeight = 3;
    const width = Math.max(Math.abs(square.width * gridSize.x), minWidth);
    const height = Math.max(Math.abs(square.height * gridSize.y), minHeight);

    return (
        <div
        className={`${styles.rect} ${styles[square.tool]}`}
            style={{
                left: left * gridSize.x,
                top: top * gridSize.y,
                width: `${width}px`,
                height: `${height}px`,
            }}
        />
    );
};

Square.propTypes = {
    square: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        tool: PropTypes.string.isRequired
    }).isRequired,
    gridSize: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    })
};

export default Square;