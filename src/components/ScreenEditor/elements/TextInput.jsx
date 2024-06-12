import PropTypes from 'prop-types';

const TextInput = ({square, gridSize}) => {
  return (
    <input style={{
        position: "absolute",
        left: square.x * gridSize.x,
        top: square.y * gridSize.y,
        width: "100px",
        height: "20px",
        backgroundColor: "white",
        color: "black",
    }}/>
  )
}

TextInput.propTypes = {
    square: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired, 
    }).isRequired,
    gridSize: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired
    }),
};

export default TextInput
