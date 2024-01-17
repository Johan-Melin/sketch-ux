import { useContext } from "react";
import { ProjectsContext } from "../context/ProjectsContext";

export default function useRectActions() {
    const { setProjects, currentProjectId, currentScreenId } = useContext(ProjectsContext);
    const addRect = (rect) => {
        setProjects(prevProjects => prevProjects.map(project =>
          project.id === currentProjectId
            ? {
                ...project,
                screens: project.screens.map(screen =>
                  screen.id === currentScreenId
                    ? { ...screen, rect: [...screen.rect, rect] }
                    : screen
                )
              }
            : project
        ));
    };

    return { 
        addRect 
    };
}
