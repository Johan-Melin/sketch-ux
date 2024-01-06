import PropTypes from 'prop-types';

function TopBar({ setSelectedTool, onBackToProjects }) {
    const handleButtonClick = (tool) => {
        setSelectedTool(tool);
    };

    return (
        <div>
            <button onClick={onBackToProjects}>Back</button>
            <button onClick={() => handleButtonClick('text')}>text</button>
            <button onClick={() => handleButtonClick('image')}>image</button>
            <button onClick={() => handleButtonClick('input')}>input</button>
        </div>
    );
}

TopBar.propTypes = {
    setSelectedTool: PropTypes.func.isRequired,
    onBackToProjects: PropTypes.func.isRequired,
};

export default TopBar;
