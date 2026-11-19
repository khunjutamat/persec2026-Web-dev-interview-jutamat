export function sortItems(items: string[]): string[] {
    if(!Array.isArray(items) || items.length === 0) {
        throw new Error('Invalid input');
    }

    const sorted  = items.sort((a,b) => a.localeCompare(b, 'en', { numeric: true }));    
    return sorted;
}