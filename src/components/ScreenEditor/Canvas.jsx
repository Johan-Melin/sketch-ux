import { useState, useRef, useContext } from 'react';
import Square from './Square';
import TopBarContext from '../../context/TopBarContext';

import PropTypes from 'prop-types';

const Canvas = ({ squares, setSquares }) => {
    const { selectedTool } = useContext(TopBarContext);   
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
            style={{ position: 'relative', height: '680px', width: '400px', backgroundColor: 'lightgrey' }}
        >
            {squares.map((square, index) => (
                <Square key={index} square={square} />
            ))}
            {currentSquare && ( <Square square={currentSquare} /> )}
        </div>
    );
};

Canvas.propTypes = {
    squares: PropTypes.array.isRequired,
    setSquares: PropTypes.func.isRequired
};

export default Canvas;
