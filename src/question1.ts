export function isMatchBrackets(stringInput: string): boolean {
    if(stringInput.length === 0) return false;

    const bracketPairs: Record<string, string> = {
        '(': ')',
        '[': ']',
        '{': '}',
    };

    const openingBracketStack: string[] = []; // for 'Opening brackets'

    for(const char of stringInput) {
        if(char in bracketPairs) {
            openingBracketStack.push(char);
        } else {
            // a closing bracket
            const lastOpeningBracket = openingBracketStack.pop();
            // compare with the last one in stack
            if(!lastOpeningBracket || bracketPairs[lastOpeningBracket] !== char) {
                return false;
            }
        }
    }
    return openingBracketStack.length === 0;
}