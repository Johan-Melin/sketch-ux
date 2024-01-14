import { useState, useCallback, useEffect } from 'react';

export default function useProjects() {
    const [projects, setProjects] = useState(() => {
        const savedProjects = localStorage.getItem('projects');
        return savedProjects ? JSON.parse(savedProjects) : [];
    });
    const [currentProjectId, setCurrentProjectId] = useState(null);
    const [screenData, setScreenData] = useState([]);

    const selectProject = useCallback((project) => {
        setCurrentProjectId(project.id);
    }, []);

    const previousPage = () => {
        setCurrentProjectId(null)
    };
  
    const currentProject = projects.find(project => project.id === currentProjectId);

    useEffect(() => {
        localStorage.setItem('projects', JSON.stringify(projects));
    }, [projects]);

    return {
        projects,
        setProjects,
        currentProjectId,
        setCurrentProjectId,
        currentProject,
        screenData,
        setScreenData,
        selectProject,
        previousPage,
    };
}
