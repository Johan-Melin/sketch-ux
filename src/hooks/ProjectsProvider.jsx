import PropTypes from 'prop-types';
import useProjects from './useProjects';
import { createContext } from 'react';

export const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
    const projectsValue = useProjects();

    return (
        <ProjectsContext.Provider value={projectsValue}>
            {children}
        </ProjectsContext.Provider>
    );
}

ProjectsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

