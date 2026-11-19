export function getTribonacci(initialItem: number[], maxItem: number): number[]{
    if (
    !Array.isArray(initialItem) ||
    initialItem.length > 3 ||
    !initialItem.every(Number.isInteger)
    ) {
        throw new Error('Item must be an array of 0 to 3 integers');
    }

    if (!Number.isInteger(maxItem) || maxItem < 0) {
        throw new Error('Max item must be a non-negative integer');
    }

    if (maxItem === 0 || initialItem.length === 0) {
        return [];
    }

    const result = [...initialItem];

    while (result.length < maxItem) {
        const lastThreeItem = result.slice(-3);

        let nextValue = 0;
        for (const num of lastThreeItem) {
            nextValue += num;
        }
        result.push(nextValue);
    }

    return result.slice(0, maxItem);    
};