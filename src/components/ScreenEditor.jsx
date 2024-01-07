import TopBar from './ScreenEditor/TopBar';
import Canvas from './ScreenEditor/Canvas';
import PropTypes from 'prop-types';
import TopBarContext from '../context/TopBarContext';
import { useState } from 'react';

const ScreenEditor = ({ onBackToProjects }) => {
    const [selectedTool, setSelectedTool] = useState('image');

    return (
        <TopBarContext.Provider value={{ selectedTool, setSelectedTool }}>
            <div>
                <TopBar onBackToProjects={onBackToProjects} />
                <Canvas />
            </div>
        </TopBarContext.Provider>
    );
};

ScreenEditor.propTypes = {
    onBackToProjects: PropTypes.func.isRequired,
};

export default ScreenEditor;
