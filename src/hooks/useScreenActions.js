import { useContext } from "react";
import { ProjectsContext } from "../context/ProjectsContext";

export default function useScreenActions() {
    const { projects, setProjects, currentProjectId, currentScreenId } = useContext(ProjectsContext);
    const addScreen = () => {
        const currentProject = projects.find(project => project.id === currentProjectId);
        const screenName = "Screen " + (currentProject.screens.length + 1);
        const uuid = crypto.randomUUID();
        setProjects(prevProjects => prevProjects.map(project =>
        project.id === currentProjectId
            ? { ...project, screens: [{ id: uuid, name: screenName, rect: [] }, ...project.screens] }
            : project
        ));
        return uuid;
    };

    const editScreen = (screenId, event) => {
        event && event.stopPropagation();
        const newName = prompt('Enter new screen name');
        if (newName !== null && newName !== '') {
            setProjects(prevProjects =>
                prevProjects.map(project =>
                    project.id === currentProjectId ? {
                    ...project,
                    screens: project.screens.map(screen =>
                        screen.id === screenId ? { ...screen, name: newName } : screen
                    )} : project
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

    const checkName = (name, project) => {
        const similarNames = project.screens.filter(screen => screen.name.startsWith(name)).map(screen => screen.name);
        let counter = 1;
        let newName;
        do {
            newName = `${name} Copy (${counter})`;
            counter++;
        } while (similarNames.includes(newName));
        return newName;
    };

    const copyScreen = () => {
        const uuid = crypto.randomUUID();
        setProjects(projects => projects.map(project => {
            if (project.id === currentProjectId) {
                const currentScreen = project.screens.find(screen => screen.id === currentScreenId);
                return { 
                    ...project, 
                    screens: [{...currentScreen, 
                               id: uuid,
                               name: checkName(currentScreen.name, project)},
                               ...project.screens] 
                };
            } else {
                return project;
            }
        }));
        return uuid;
    };

    return {
        addScreen,
        editScreen,
        deleteScreen,
        copyScreen,
    };
}