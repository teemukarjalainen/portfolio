function getMonthName(date: Date, short = false): string {
    return date.toLocaleString('en-US', { month: short ? 'short' : 'long' });
}

export function yearOnly(dateStr: string = ''): string {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return ''; // Invalid date, fail silently
    return date.getFullYear().toString();
}

export function shortMonthAndYearOnly(dateStr: string = ''): string {
    if (dateStr.toLowerCase() === 'present') return dateStr;
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return ''; // Invalid date, fail silently
    return getMonthName(date, true) + ' ' + date.getFullYear();
}

export function getSortableDate(dateStr: string | undefined, fallbackStr?: string | undefined): number {
    if (!dateStr) {
        if (fallbackStr) {
            const fallbackTime = new Date(fallbackStr).getTime();
            return isNaN(fallbackTime) ? 0 : fallbackTime;
        }
        return 0;
    }
    if (dateStr.toLowerCase() === 'present') return Number.MAX_SAFE_INTEGER;
    const time = new Date(dateStr).getTime();
    return isNaN(time) ? 0 : time;
}
