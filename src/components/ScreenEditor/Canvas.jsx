import { useState } from 'react';
import PropTypes from 'prop-types';

const Canvas = ({ selectedColor }) => {
    const [squares, setSquares] = useState([]);
    const [currentSquare, setCurrentSquare] = useState(null);

    const handleMouseDown = (event) => {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setCurrentSquare({ x, y, width: 0, height: 0, color: selectedColor });
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

    return (
        <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            style={{ position: 'relative', height: '500px', width: '500px', backgroundColor: 'lightgrey' }}
        >
            {squares.map((square, index) => (
                <Square key={index} square={square} />
            ))}
            {currentSquare && ( <Square square={currentSquare} /> )}
        </div>
    );
};

Canvas.propTypes = {
    selectedColor: PropTypes.string.isRequired,
};

export default Canvas;
