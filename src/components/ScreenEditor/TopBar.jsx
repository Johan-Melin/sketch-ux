import PropTypes from 'prop-types';

function TopBar({ setSelectedTool, onBackToProjects }) {
    const handleToolClick = (tool) => {
        setSelectedTool(tool);
    };

    return (
        <div>
            <button onClick={onBackToProjects}>Back</button>
            <button onClick={() => handleToolClick('text')}>text</button>
            <button onClick={() => handleToolClick('image')}>image</button>
            <button onClick={() => handleToolClick('input')}>input</button>
        </div>
    );
}

TopBar.propTypes = {
    setSelectedTool: PropTypes.func.isRequired,
    onBackToProjects: PropTypes.func.isRequired,
};

export default TopBar;
