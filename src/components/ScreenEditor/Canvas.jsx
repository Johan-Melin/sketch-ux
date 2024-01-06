import { useState } from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import Square
 from './Square';
const Canvas = ({ selectedTool }) => {
    const [squares, setSquares] = useState([]);
    const [currentSquare, setCurrentSquare] = useState(null);

    const canvasRef = useRef();
    const handleMouseDown = (event) => {
        const rect = canvasRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setCurrentSquare({ x, y, width: 0, height: 0, tool: selectedTool });
    };

    const handleMouseMove = (event) => {
        if (currentSquare) {
            const rect = canvasRef.current.getBoundingClientRect();
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
            ref={canvasRef}
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
    selectedTool: PropTypes.string.isRequired,
};

export default Canvas;
