import { useState } from 'react';
import TopBar from './ScreenEditor/TopBar';
import CanvasArea from './ScreenEditor/Canvas';

import PropTypes from 'prop-types';

const ScreenEditor = ({ onBackToProjects }) => {
    const [selectedColor, setSelectedColor] = useState('Red');

    return (
        <div>
            <TopBar setSelectedColor={setSelectedColor} onBackToProjects={onBackToProjects} />
            <CanvasArea selectedColor={selectedColor} />
        </div>
    );
};

ScreenEditor.propTypes = {
    onBackToProjects: PropTypes.func.isRequired,
};

export default ScreenEditor;
