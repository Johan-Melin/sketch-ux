import { useContext } from "react";
import { ProjectsContext } from "../context/ProjectsContext";

export default function useRectActions() {
    const { setProjects, currentProjectId, currentScreenId } = useContext(ProjectsContext);
    const modifyRect = (modifier) => {
        setProjects(prevProjects =>
            prevProjects.map(project =>
                project.id === currentProjectId ? {
                    ...project,
                    screens: project.screens.map(screen =>
                        screen.id === currentScreenId ? { ...screen, rect: modifier(screen.rect) } : screen
                    )
                } : project
            )
        );
    };
    
    const addRect = (rect) => {
        rect.id = crypto.randomUUID();
        modifyRect(prevRect => [...prevRect, rect]);
    };

    const clearRect = () => {
        modifyRect(() => []);
    };

    const undoRect = () => {
        modifyRect(prevRect => prevRect.slice(0, -1));
    };

    const deleteRect = (id) => {
        modifyRect(prevRect => prevRect.filter(rect => rect.id !== id));
    };

    const addValueToRect = (id, value) => {
        modifyRect(prevRect => prevRect.map(rect => 
            rect.id === id 
                ? { ...rect, ...value } 
                : rect
        ));
    };
    
    const addLink = (screenId, rectId) => {
        addValueToRect(rectId, {link: screenId});
    }

    const changeColor = (color, rectId) => {
        addValueToRect(rectId, {color: color});
    }

    return { 
        addRect,
        clearRect, 
        undoRect,
        deleteRect,
        addLink,
        changeColor,
    };
}
