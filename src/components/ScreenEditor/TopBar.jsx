import PropTypes from 'prop-types';

function TopBar({ setSelectedColor, onBackToProjects }) {
    const handleButtonClick = (color) => {
        setSelectedColor(color);
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
    setSelectedColor: PropTypes.func.isRequired,
    onBackToProjects: PropTypes.func.isRequired,
};

export default TopBar;
