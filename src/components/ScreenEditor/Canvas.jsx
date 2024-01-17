import { useState, useRef, useContext, useEffect } from 'react';
import Square from './Square';
import TopBarContext from '../../context/TopBarContext';
import styles from './Canvas.module.css';
import useRectActions from "../../hooks/useRectActions";
import { ProjectsContext } from "../../context/ProjectsContext";

const Canvas = () => {
    const { selectedTool } = useContext(TopBarContext);   
    const [currentSquare, setCurrentSquare] = useState(null);
    const [gridSize, setGridSize] = useState({x: 20, y: 40});
    const canvasRef = useRef();
    const { addRect } = useRectActions();
    const { currentScreen } = useContext(ProjectsContext);

    const updateGridSize = () => {
        if (canvasRef.current) {
            const rect = canvasRef.current.getBoundingClientRect();
            // index.css grid-size = 5% x 2.5%
            setGridSize({x: rect.width / 20, y: rect.height / 40})
        }
    }

    useEffect(() => {
        updateGridSize();
        window.addEventListener('resize', updateGridSize);

        return () => window.removeEventListener('resize', updateGridSize);
    }, [canvasRef]); 

    const drawElement = (event) => {
        const rect = canvasRef.current.getBoundingClientRect(); 
        // index.css grid-size = 5% x 2.5%
        setGridSize({x: rect.width / 20, y: rect.height / 40})
        const isTouchEvent = event.type.startsWith('touch');
        const x = isTouchEvent ? event.touches[0].clientX - rect.left : event.clientX - rect.left;
        const y = isTouchEvent ? event.touches[0].clientY - rect.top : event.clientY - rect.top;    
        const snappedX = currentSquare ? Math.ceil(x / gridSize.x) : Math.floor(x / gridSize.x);
        const snappedY = currentSquare ? Math.ceil(y / gridSize.y) : Math.floor(y / gridSize.y);
        return { x: snappedX, y: snappedY };
    }

    const handleMouseDown = (event) => {
        const { x, y } = drawElement(event);
        setCurrentSquare({ x, y, width: 0, height: 0, tool: selectedTool });
    };

    const handleMouseMove = (event) => {
        if (currentSquare) {
            const { x, y } = drawElement(event);
            setCurrentSquare({
                ...currentSquare,
                width: x - currentSquare.x,
                height: y - currentSquare.y
            });
        }
    };

    const handleMouseUp = () => {
        if (currentSquare) {
            addRect(currentSquare);
            setCurrentSquare(null);
        }
    };

    return (
        <div
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleMouseDown} 
            onTouchMove={handleMouseMove} 
            onTouchEnd={handleMouseUp}
            className={`${styles.canvas} ${styles.grid}`}
        >
            {currentScreen.rect.map((square, index) => (
                <Square key={index} square={square} gridSize={gridSize} />
            ))}
            {currentSquare && ( <Square square={currentSquare} gridSize={gridSize} /> )}
        </div>
    );
};


export default Canvas;
