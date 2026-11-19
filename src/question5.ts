export function sortNumber(numberInput: number): number {
    if(numberInput <= 0 || !Number.isInteger(numberInput)) {
        throw new Error("Input must be a positive integer number");
    }
    const convertedToArray = numberInput.toString().split('');
    const sortedArray = convertedToArray.sort((a, b) => Number(b) - Number(a));
    const sortedNumber = Number(sortedArray.join(''));
    return sortedNumber;
};