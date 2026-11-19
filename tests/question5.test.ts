import { describe, it, expect } from 'vitest';
import { sortNumber } from '../src/question5';

describe('sortNumber', () => {
    it('should sort digits in descending order', () => {
        expect(sortNumber(3008)).toBe(8300);
        expect(sortNumber(1989)).toBe(9981);
        expect(sortNumber(2679)).toBe(9762);
        expect(sortNumber(9163)).toBe(9631);
        expect(sortNumber(123)).toBe(321);
        expect(sortNumber(456)).toBe(654);
        expect(sortNumber(4)).toBe(4);
    });

    it('should throw an error for negative numbers', () => {
        expect(() => sortNumber(-1)).toThrow("Input must be a positive integer number");
        expect(() => sortNumber(-100)).toThrow("Input must be a positive integer number");
        expect(() => sortNumber(0)).toThrow("Input must be a positive integer number");
        expect(() => sortNumber(3.14)).toThrow("Input must be a positive integer number");
    });
});