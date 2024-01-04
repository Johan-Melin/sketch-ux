import { useState } from 'react';
import TopBar from './ScreenEditor/TopBar';
import CanvasArea from './ScreenEditor/Canvas';

import PropTypes from 'prop-types';

const ScreenEditor = ({ onBackToProjects }) => {
    const [canvasText, setCanvasText] = useState('');

    return (
        <div>
            <TopBar setCanvasText={setCanvasText} onBackToProjects={onBackToProjects} />
            <CanvasArea canvasText={canvasText} />
        </div>
    );
};

ScreenEditor.propTypes = {
    onBackToProjects: PropTypes.func.isRequired,
};

export default ScreenEditor;
