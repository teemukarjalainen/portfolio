function getMonthName(date: Date, short = false): string {
    return date.toLocaleString('en-US', { month: short ? 'short' : 'long' });
}

export function yearOnly(dateStr: string = ''): string {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return ''; // Invalid date, fail silently
    return date.getFullYear().toString();
}

export function shortMonthAndYearOnly(dateStr: string = ''): string {
    if (dateStr === 'Present') return dateStr;
    const date = new Date(dateStr);
    console.log('DATE STR: ', date);
    if (isNaN(date.getTime())) return ''; // Invalid date, fail silently
    return getMonthName(date, true) + ' ' + date.getFullYear();
}
