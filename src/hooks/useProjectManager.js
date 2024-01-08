import { useState, useCallback } from 'react';

export default function useProjectManager() {
    const [projects, setProjects] = useState([]);
    const [currentProjectId, setCurrentProjectId] = useState(null);
    const uuid = crypto.randomUUID();

    const promptForName = (type, items) => {
    let name = prompt(`Enter ${type} name`);
    if (name !== null && name.trim() === "") {
        name = `${type} ${items.length + 1}`;
    }
        return name;
    };

    const addProject = () => {
        const projectName = promptForName("project", projects);
        if (projectName !== null) {
            setProjects(prevProjects => [...prevProjects, { id: uuid, name: projectName, screens: [] }]);
        }
    };

    const editProject = (projectId, event) => {
        event.stopPropagation();
        const newName = prompt('Enter new project name');
        if (newName !== null && newName !== '') {
            setProjects(prevProjects =>
                prevProjects.map(project =>
                    project.id === projectId ? { ...project, name: newName } : project
                )
            );
        }
    };

    const selectProject = useCallback((project) => {
        setCurrentProjectId(project.id);
    }, []);

    const deleteProject = useCallback((id, event) => {
        event.stopPropagation();
        setProjects(projects => projects.filter((project) => project.id !== id));
        if (currentProjectId === id) {
            setCurrentProjectId(null);
        }
    }, [currentProjectId]);

    const addScreen = () => {
        const currentProject = projects.find(project => project.id === currentProjectId);
        const screenName = promptForName("screen", currentProject.screens);
        if (screenName !== null) {
            setProjects(prevProjects => prevProjects.map(project =>
            project.id === currentProjectId
                ? { ...project, screens: [...project.screens, { id: Date.now(), name: screenName }] }
                : project
            ));
        }
    };

    const editScreen = (screenId, event) => {
        event.stopPropagation();
        const newName = prompt('Enter new screen name');
        console.log("a");
        if (newName !== null && newName !== '') {
            console.log("b");
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

    const deleteScreen = useCallback((id, event) => {
        event.stopPropagation();
        setProjects(projects => projects.map(project =>
            project.id === currentProjectId
            ? { ...project, screens: project.screens.filter(screen => screen.id !== id) }
            : project
        ));
    }, [currentProjectId]);

    const previousPage = () => {
        setCurrentProjectId(null)
    };

    const currentProject = projects.find(project => project.id === currentProjectId);

    return {
        projects,
        currentProjectId,
        currentProject,
        addProject,
        deleteProject,
        editProject,
        selectProject,
        addScreen,
        deleteScreen,
        editScreen,
        previousPage,
    };
}
