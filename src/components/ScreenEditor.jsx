import { useState } from 'react';
import TopBar from './ScreenEditor/TopBar';
import Canvas from './ScreenEditor/Canvas';

import PropTypes from 'prop-types';

const ScreenEditor = ({ onBackToProjects }) => {
    const [selectedTool, setSelectedTool] = useState('Red');

    return (
        <div>
            <TopBar setSelectedTool={setSelectedTool} onBackToProjects={onBackToProjects} />
            <Canvas selectedTool={selectedTool} />
        </div>
    );
};

ScreenEditor.propTypes = {
    onBackToProjects: PropTypes.func.isRequired,
};

export default ScreenEditor;
