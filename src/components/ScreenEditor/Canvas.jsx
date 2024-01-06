import { useState } from 'react';
import PropTypes from 'prop-types';

const CanvasArea = ({ selectedColor }) => {
    const [squares, setSquares] = useState([]);
    const [currentSquare, setCurrentSquare] = useState(null);

    const handleMouseDown = (event) => {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setCurrentSquare({ x, y, width: 0, height: 0 });
    };

    const handleMouseMove = (event) => {
        if (currentSquare) {
            const rect = event.target.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            setCurrentSquare({
                ...currentSquare,
                width: x - currentSquare.x,
                height: y - currentSquare.y
            });
        }
    };

    const handleMouseUp = () => {
        if (currentSquare) {
            setSquares(prevSquares => [...prevSquares, currentSquare]);
            setCurrentSquare(null);
        }
    };

    return (
        <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            style={{ position: 'relative', height: '500px', width: '500px' }}
        >
            {selectedColor}
            {squares.map((square, index) => (
                <div
                    key={index}
                    style={{
                        position: 'absolute',
                        top: square.y,
                        left: square.x,
                        width: `${square.width}px`,
                        height: `${square.height}px`,
                        backgroundColor: selectedColor
                    }}
                />
            ))}
            {currentSquare && (
                <div
                    style={{
                        position: 'absolute',
                        top: currentSquare.y,
                        left: currentSquare.x,
                        width: `${currentSquare.width}px`,
                        height: `${currentSquare.height}px`,
                        backgroundColor: selectedColor
                    }}
                />
            )}
        </div>
    );
};

CanvasArea.propTypes = {
    selectedColor: PropTypes.string.isRequired,
};

export default CanvasArea;