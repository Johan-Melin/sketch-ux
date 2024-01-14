export default function useScreenActions(projects, setProjects, currentProjectId) {
    const uuid = crypto.randomUUID();
    const addScreen = () => {
        const currentProject = projects.find(project => project.id === currentProjectId);
        const screenName = "Screen " + (currentProject.screens.length + 1);
        setProjects(prevProjects => prevProjects.map(project =>
        project.id === currentProjectId
            ? { ...project, screens: [...project.screens, { id: uuid, name: screenName, rect: [] }] }
            : project
        ));
    };

    const editScreen = (screenId, event) => {
        event.stopPropagation();
        const newName = prompt('Enter new screen name');
        if (newName !== null && newName !== '') {
            setProjects(prevProjects =>
            prevProjects.map(project =>
                project.id === currentProjectId ? {
                ...project,
                screens: project.screens.map(screen =>
                    screen.id === screenId ? { ...screen, name: newName } : screen
                )
                } : project
            )
            );
        }
    };

    const deleteScreen = (id, event) => {
        event.stopPropagation();
        setProjects(projects => projects.map(project =>
            project.id === currentProjectId
            ? { ...project, screens: project.screens.filter(screen => screen.id !== id) }
            : project
        ));
    };

    return {
        addScreen,
        editScreen,
        deleteScreen,
    };
}