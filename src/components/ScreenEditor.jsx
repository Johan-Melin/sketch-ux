import TopBar from './ScreenEditor/TopBar';
import Canvas from './ScreenEditor/Canvas';
import PropTypes from 'prop-types';
import TopBarContext from '../context/TopBarContext';
import { useState } from 'react';
import styles from './ScreenEditor.module.css';
import useProjects from '../hooks/useProjects';

const ScreenEditor = ({ onBackToProjects }) => {
    const [selectedTool, setSelectedTool] = useState('image');
    const {screenData, setScreenData} = useProjects();
    const handleAction = (action) => {
        if (action === 'undo') {
            setScreenData(prevSquares => prevSquares.slice(0, -1));
        } else if (action === 'clear') {
            setScreenData([]);
        }
    };

    return (
        <TopBarContext.Provider value={{ selectedTool, setSelectedTool, handleAction }}>
            <div>
                <TopBar onBackToProjects={onBackToProjects} />
                <div className={styles.container} >
                    <Canvas squares={screenData} setSquares={setScreenData} />
                </div>
            </div>
        </TopBarContext.Provider>
    );
};

ScreenEditor.propTypes = {
    onBackToProjects: PropTypes.func.isRequired,
};

export default ScreenEditor;
