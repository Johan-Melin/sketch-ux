import PropTypes from 'prop-types';

const Text = ({square, gridSize}) => {
  return (
    <div style={{
        position: "absolute",
        left: square.x * gridSize.x,
        top: square.y * gridSize.y,
        color: "black",
    }}>Text</div>
  )
}

Text.propTypes = {
    square: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired, 
    }).isRequired,
    gridSize: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }),
};

export default Text
