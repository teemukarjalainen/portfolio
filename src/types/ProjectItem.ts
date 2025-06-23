export interface ProjectItem {
    title: string;
    description: string;
    startDate?: string;
    endDate: string; // ISO date string yyyy-mm-dd
    link?: string;
    company?: string;
    academia?: boolean;
}
