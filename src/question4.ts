interface RomanNumerals {
    value: number;
    symbol: string;
};

export function convertToRoman(numberInput: number): string {
    if (numberInput < 1 || numberInput > 3999) {
        throw new Error("Input must be a number between 1 and 3999");
    }

    // Roman numerals (7) + Subtractive combinations (6) ex: 4, 9, 40, 90, 400, 900
    const romanMap: RomanNumerals[] = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let result = '';
    let remainingNumber = numberInput;

    for(const { value, symbol } of romanMap) {
        while (remainingNumber >= value) {
            result += symbol;
            remainingNumber -= value;
        }
    }

    return result;
};

export function convertToNumber(romanString: string): number {
    // not a string or empty string
    if (typeof romanString !== 'string' || romanString.trim().length === 0) {
        throw new Error('Input must be a valid string');
    }

    const romanValue: Record<string, number> = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    let result = 0;
    let romanStringUpperCase = romanString.trim().toUpperCase();

    for(let i = 0; i < romanStringUpperCase.length; i++) {
        const currentRomanValue =  romanValue[romanStringUpperCase[i]];
        const nextRomanValue = romanValue[romanStringUpperCase[i + 1]] ?? 0;

        // case: "/" or "-" or any invalid character
        if (currentRomanValue === undefined) {
            throw new Error('Invalid Roman numeral format');
        }

        if(currentRomanValue < nextRomanValue) {
            result = result - currentRomanValue;
        } else {
            result = result + currentRomanValue;
        }
    }

    // check if the result is a valid Roman numeral format
    const validRomanNumeral = convertToRoman(result);
    if (validRomanNumeral !== romanStringUpperCase) {
        throw new Error("Invalid Roman numeral format");
    }

    return result;
};