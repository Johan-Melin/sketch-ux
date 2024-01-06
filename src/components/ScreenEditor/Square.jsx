import PropTypes from 'prop-types';

const Square = ({ square }) => (
    <div
        style={{
            position: 'absolute',
            top: square.y,
            left: square.x,
            width: `${square.width}px`,
            height: `${square.height}px`,
            backgroundColor: square.color
        }}
    />
);

Square.propTypes = {
    square: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired
    }).isRequired
};

export default Square;