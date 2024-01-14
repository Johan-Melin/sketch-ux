export default function useProjectActions(projects, setProjects, currentProjectId, setCurrentProjectId) {
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
    
    const deleteProject = (id, event) => {
        event.stopPropagation();
        setProjects(projects => projects.filter((project) => project.id !== id));
        if (currentProjectId === id) {
            setCurrentProjectId(null);
        }
    };
    
    const selectProject = (project) => {
        setCurrentProjectId(project.id);
    };

    const previousPage = () => {
        setCurrentProjectId(null)
    };

    return { 
        addProject,
        editProject,
        deleteProject,
        selectProject,
        previousPage
    };
}