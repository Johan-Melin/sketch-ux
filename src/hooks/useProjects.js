import { useState, useEffect } from 'react';

export default function useProjects() {
    const [projects, setProjects] = useState(() => {
        const savedProjects = localStorage.getItem('projects');
        return savedProjects ? JSON.parse(savedProjects) : [];
    });
    const [currentProjectId, setCurrentProjectId] = useState(null);
    const [currentScreenId, setCurrentScreenId] = useState(null);
    const [screenData, setScreenData] = useState([]);

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
    };
}
