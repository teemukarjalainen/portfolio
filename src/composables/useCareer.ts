import { careers } from '../constants/Career';

export const useCareer = () => {
    // Sort ascending by date (oldest first)
    const career = [...careers].sort((a, b) => new Date(a.endDate).getTime() - new Date(b.endDate).getTime());

    return { career };
};
