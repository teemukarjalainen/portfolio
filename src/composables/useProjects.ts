import { projects } from '../constants/Projects'; // Import your constant array

export const useProjects = () => {
    // Sort descending by endDate (newest first)
    const sortedProjects = [...projects].sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime());

    return { projects: sortedProjects };
};
