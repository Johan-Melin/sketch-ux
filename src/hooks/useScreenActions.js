import { useContext } from "react";
import { ProjectsContext } from "../context/ProjectsContext";

export default function useScreenActions() {
    const { projects, setProjects, currentProjectId, currentScreenId } = useContext(ProjectsContext);

    const modifyScreen = (callback) => {
        setProjects(prevProjects => prevProjects.map(project =>
            project.id === currentProjectId
                ? { ...project, screens: callback(project.screens) }
                : project
        ));
    };

    const addScreen = () => {
        const currentProject = projects.find(project => project.id === currentProjectId);
        const screenName = "Screen " + (currentProject.screens.length + 1);
        const uuid = crypto.randomUUID();
        modifyScreen(screens => [{ id: uuid, name: screenName, rect: [] }, ...screens]);
        return uuid;
    };

    const editScreen = (screenId, event) => {
        event && event.stopPropagation();
        const newName = prompt('Enter new screen name');
        if (newName !== null && newName !== '') {
            modifyScreen(screens => screens.map(screen =>
                screen.id === screenId ? { ...screen, name: newName } : screen
            ));
        }
    };

    const deleteScreen = (id, event) => {
        event.stopPropagation();
        modifyScreen(screens => screens.filter(screen => screen.id !== id));
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
        const currentProject = projects.find(project => project.id === currentProjectId);
        modifyScreen(screens => {
            const currentScreen = screens.find(screen => screen.id === currentScreenId);
            return [{...currentScreen, id: uuid, name: checkName(currentScreen.name, currentProject)}, ...screens];
        });
        return uuid;
    };

    return {
        addScreen,
        editScreen,
        deleteScreen,
        copyScreen,
    };
}