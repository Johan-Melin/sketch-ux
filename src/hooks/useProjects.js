import { useState, useEffect } from 'react';

export default function useProjects() {
    const [projects, setProjects] = useState(() => {
        const savedProjects = localStorage.getItem('projects');
        return savedProjects ? JSON.parse(savedProjects) : [];
    });
    const [currentProjectId, setCurrentProjectId] = useState(null);
    const [currentScreenId, setCurrentScreenId] = useState(null);
    const [screenData, setScreenData] = useState([]);

    const updateScreenData = (projectId, screenId) => {
        setProjects(prevProjects =>
            prevProjects.map(project =>
                project.id === projectId ? {
                ...project,
                screens: project.screens.map(screen =>
                    screen.id === screenId ? { ...screen, rect: screenData } : screen
                )} : project
            )
        );
    }

    const loadScreenData = (projectId, screenId) => {
        const project = projects.find(project => project.id === projectId);
        const screen = project.screens.find(screen => screen.id === screenId);
        setScreenData(screen.rect);
      };

    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects));
    }, [projects]);

    return {
        projects,
        setProjects,
        currentProjectId,
        setCurrentProjectId,
        currentScreenId,
        setCurrentScreenId,
        screenData,
        setScreenData,
        loadScreenData,
        updateScreenData,
    };
}
