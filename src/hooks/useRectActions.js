export default function useRectActions(setProjects, currentProjectId, currentScreenId) {
    const addRect = (screenData) => {
        setProjects(prevProjects =>
            prevProjects.map(project =>
                project.id === currentProjectId ? {
                ...project,
                screens: project.screens.map(screen =>
                    screen.id === currentScreenId ? { ...screen, rect: [...screen.rect, screenData] } : screen
                )} : project
            )
        );
    };

    return {
        addRect,
    };
}