import { projects } from '../constants/Projects'; // Import your constant array
import { getSortableDate } from '../utils/DateUtils';

export const useProjects = () => {
    // Sort descending by endDate (newest first)
    const sortedProjects = [...projects].sort((b, a) => {
        const dateA = getSortableDate(a.endDate, a.startDate);
        const dateB = getSortableDate(b.endDate, b.startDate);
        return dateA - dateB;
    });

    return { projects: sortedProjects };
};
