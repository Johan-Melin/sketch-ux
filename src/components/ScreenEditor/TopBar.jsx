import PropTypes from 'prop-types';

function TopBar({ setCanvasText }) {
        const handleButtonClick = (text) => {
            setCanvasText(text);
        };
    
        return (
            <div>
                <button onClick={() => handleButtonClick('Text from Button 1')}>Button 1</button>
                <button onClick={() => handleButtonClick('Text from Button 2')}>Button 2</button>
                <button onClick={() => handleButtonClick('Text from Button 3')}>Button 3</button>
            </div>
        );
    }

TopBar.propTypes = {
    setCanvasText: PropTypes.func.isRequired,
};

export default TopBar;
