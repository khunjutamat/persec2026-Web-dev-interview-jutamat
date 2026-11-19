import { describe, it, expect } from 'vitest';
import { sortItems } from '../src/question2';

describe('sortItems', () => {
    it('should sort items correctly', () => {
        expect(sortItems(["TH19", "SG20" , "TH2"])).toEqual(["SG20" , "TH2", "TH19"]);
        expect(sortItems(["TH10", "TH3Netflix" , "TH1", "TH7"])).toEqual(["TH1", "TH3Netflix" , "TH7", "TH10"]);
    });

    it('should throw an error for invalid input', () => {
        expect(() => sortItems([])).toThrow("Invalid input");
        expect(() => sortItems(null as unknown as string[])).toThrow("Invalid input");
        expect(() => sortItems(undefined as unknown as string[])).toThrow("Invalid input");
    });
});