import { useContext } from "react";
import { ProjectsContext } from "../context/ProjectsContext";

export default function useProjectActions() {
    const { projects, setProjects, currentProjectId, setCurrentProjectId } = useContext(ProjectsContext);
    const addProject = () => {
        const projectName ="Project " + (projects.length + 1);
        const uuid = crypto.randomUUID();
        setProjects(prevProjects => [{ id: uuid, name: projectName, screens: [] }, ...prevProjects]);
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