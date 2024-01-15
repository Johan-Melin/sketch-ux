import TopBar from './ScreenEditor/TopBar';
import Canvas from './ScreenEditor/Canvas';
import PropTypes from 'prop-types';
import TopBarContext from '../context/TopBarContext';
import { useState } from 'react';
import styles from './ScreenEditor.module.css';
import useProjects from '../hooks/useProjects';

const ScreenEditor = ({ onBackToProjects, currentScreenId, currentProjectId }) => {
    const [selectedTool, setSelectedTool] = useState('image');
    const {screenData, setScreenData, loadScreenData, updateScreenData} = useProjects();
    const handleAction = (action) => {
        if (action === 'undo') {
            setScreenData(prevSquares => prevSquares.slice(0, -1));
        } else if (action === 'clear') {
            setScreenData([]);
        }
    };

    const storeScreenData = () => {
        updateScreenData(currentProjectId, currentScreenId);
    }

    const loadData = () => {
        loadScreenData(currentProjectId, currentScreenId);
    }

    return (
        <TopBarContext.Provider value={{ selectedTool, setSelectedTool, handleAction }}>
            <div>
                <TopBar onBackToProjects={() => onBackToProjects(null)} />
                <div className={styles.container} >
                    <Canvas squares={screenData} setSquares={setScreenData} loadData={loadData} storeScreenData={storeScreenData} />
                </div>
            </div>
        </TopBarContext.Provider>
    );
};

ScreenEditor.propTypes = {
    onBackToProjects: PropTypes.func.isRequired,
    currentScreenId: PropTypes.string.isRequired,
    currentProjectId: PropTypes.string.isRequired,
};

export default ScreenEditor;
