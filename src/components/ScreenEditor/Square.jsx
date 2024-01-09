import PropTypes from 'prop-types';
import styles from './Square.module.css';

const Square = ({ square, gridSize }) => {
    return (
        <div
        className={`${styles.rect} ${styles[square.tool]}`}
            style={{
                left: square.x * gridSize.x,
                top: square.y * gridSize.y,
                width: `${square.width * gridSize.x}px`,
                height: `${square.height * gridSize.y}px`,
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