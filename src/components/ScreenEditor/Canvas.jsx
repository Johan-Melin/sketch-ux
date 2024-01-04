import PropTypes from 'prop-types';

const CanvasArea = ({ canvasText }) => {
    return (
        <div>
            {canvasText}
        </div>
    );
};

CanvasArea.propTypes = {
    canvasText: PropTypes.string.isRequired,
};

export default CanvasArea;