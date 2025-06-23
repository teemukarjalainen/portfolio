import { careers } from '../constants/Career';
import { getSortableDate } from '../utils/DateUtils';

export const useCareer = () => {
    // Sort ascending by endDate, fallback to startDate, treat "Present" as newest
    const career = [...careers].sort((a, b) => {
        const dateA = getSortableDate(a.endDate, a.startDate);
        const dateB = getSortableDate(b.endDate, b.startDate);
        return dateA - dateB;
    });

    return { career };
};
