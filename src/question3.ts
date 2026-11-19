export function autocomplete(searchKey: string, searchItems: string[], maxResults: number): string[] {

    if(!searchKey || searchItems.length === 0 || typeof maxResults !== 'number' || maxResults <= 0) {
        throw new Error('Invalid input');
    };
    
    const keyword = searchKey.toLowerCase();
    const filteredItems = searchItems.filter(item => item.toLowerCase().includes(keyword));

    const sortedItems = filteredItems.sort((a, b) => {
        const rankDiff = getRank(a, keyword) - getRank(b, keyword);
        // const rankDiff = a.toLowerCase().indexOf(searchKey) - b.toLowerCase().indexOf(searchKey); // the problem of "with" and "worthy"

        if(rankDiff !== 0) {
            // sort by rank
            return rankDiff;
        }
        // 0 > sort by alphabetical 
        return a.localeCompare(b, 'en', { numeric: true });
    })

    return sortedItems.slice(0, maxResults);
};

function getRank(item: string, keyword: string): number {
    const lowerItem = item.toLowerCase();
    if (lowerItem.startsWith(keyword)) return 1; // start 
    if (lowerItem.endsWith(keyword)) return 3; // end
    return 2; // middle
};