import { useState, useCallback } from 'react'

function useScreens() {
    const [currentScreen, setCurrentScreen] = useState(null);

    const selectScreen = (screen) => {
        setCurrentScreen(screen.id);
    };

    const handleBackToProjects = useCallback(() => {
        setCurrentScreen(null);
    }, []);
    
    return {
        currentScreen,
        selectScreen,
        handleBackToProjects
    }
}

export default useScreens