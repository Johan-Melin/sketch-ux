import { useState, useCallback, useEffect } from 'react';

export default function useProjects() {
    const [projects, setProjects] = useState(() => {
        const savedProjects = localStorage.getItem('projects');
        return savedProjects ? JSON.parse(savedProjects) : [];
    });
    const [currentProjectId, setCurrentProjectId] = useState(null);
    const [screenData, setScreenData] = useState([]);
    const uuid = crypto.randomUUID();

    const addProject = () => {
        const projectName ="Project " + (projects.length + 1);
        setProjects(prevProjects => [...prevProjects, { id: uuid, name: projectName, screens: [] }]);
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

    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects));
    }, [projects]);

    return {
        projects,
        currentProjectId,
        currentProject,
        screenData,
        setScreenData,
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
