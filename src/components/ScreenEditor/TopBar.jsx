import PropTypes from 'prop-types';

function TopBar({ setSelectedTool, onBackToProjects }) {
    const handleButtonClick = (color) => {
        setSelectedTool(color);
    };

    return (
        <div>
            <button onClick={onBackToProjects}>Back</button>
            <button onClick={() => handleButtonClick('Red')}>Red</button>
            <button onClick={() => handleButtonClick('Green')}>Green</button>
            <button onClick={() => handleButtonClick('Blue')}>Blue</button>
        </div>
    );
}

TopBar.propTypes = {
    setSelectedTool: PropTypes.func.isRequired,
    onBackToProjects: PropTypes.func.isRequired,
};

export default TopBar;
