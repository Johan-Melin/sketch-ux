import PropTypes from 'prop-types';
import styles from './Square.module.css';

const Square = ({ square }) => (
    <div
    className={`${styles.rect} ${styles[square.tool]}`}
        style={{
            top: square.y,
            left: square.x,
            width: `${square.width}px`,
            height: `${square.height}px`,
        }}
    />
);

Square.propTypes = {
    square: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        tool: PropTypes.string.isRequired
    }).isRequired
};

export default Square;