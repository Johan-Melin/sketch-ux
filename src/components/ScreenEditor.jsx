import TopBar from './ScreenEditor/TopBar';
import Canvas from './ScreenEditor/Canvas';
import PropTypes from 'prop-types';
import TopBarContext from '../context/TopBarContext';
import { useState } from 'react';
import styles from './ScreenEditor.module.css';

const ScreenEditor = ({ onBackToProjects }) => {
    const [selectedTool, setSelectedTool] = useState('image');
    const [squares, setSquares] = useState([]);
    const handleAction = (action) => {
        if (action === 'undo') {
            setSquares(prevSquares => prevSquares.slice(0, -1));
        } else if (action === 'clear') {
            setSquares([]);
        }
    };

    return (
        <TopBarContext.Provider value={{ selectedTool, setSelectedTool, handleAction }}>
            <div>
                <TopBar onBackToProjects={onBackToProjects} />
                <div className={styles.container} >
                    <Canvas squares={squares} setSquares={setSquares} />
                </div>
            </div>
        </TopBarContext.Provider>
    );
};

ScreenEditor.propTypes = {
    onBackToProjects: PropTypes.func.isRequired,
};

export default ScreenEditor;
