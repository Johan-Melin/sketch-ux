import { useState, useEffect } from 'react';

export default function useProjects() {
    const [projects, setProjects] = useState(() => {
        const savedProjects = localStorage.getItem('projects');
        return savedProjects ? JSON.parse(savedProjects) : [];
    });
    const [currentProjectId, setCurrentProjectId] = useState(null);
    const [currentScreenId, setCurrentScreenId] = useState(null);
    const currentProject = currentProjectId && projects.find(project => project.id === currentProjectId);
    const currentScreen = currentScreenId && currentProject && currentProject.screens.find(screen => screen.id === currentScreenId);

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
        currentScreen,
    };
}
