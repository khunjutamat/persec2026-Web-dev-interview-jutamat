import { describe, it, expect } from 'vitest';
import { getTribonacci } from '../src/question6';

describe('getTribonacci', () => {
    it('should return the correct Tribonacci sequence', () => {
        expect(getTribonacci([1, 3, 5], 5)).toEqual([1, 3, 5, 9, 17]);
        expect(getTribonacci([2, 2, 2], 3)).toEqual([2, 2, 2]);
        expect(getTribonacci([10, 10, 10], 4)).toEqual([10, 10, 10, 30]);
        expect(getTribonacci([0, 1, 1], 5)).toEqual([0, 1, 1, 2, 4]);
        expect(getTribonacci([1, 1, 1], 0)).toEqual([]);
        expect(getTribonacci([], 4)).toEqual([]);
        expect(getTribonacci([1], 5)).toEqual([1, 1, 2, 4, 7]);
        expect(getTribonacci([3, 4, 1], 6)).toEqual([3, 4, 1, 8, 13, 22]);
        expect(getTribonacci([1, 3, -5], 5)).toEqual([1, 3, -5, -1, -3]);
    });

    it('should throw an error', () => {
        expect(() => getTribonacci([1, 3.5, 5], 5)).toThrow('Item must be an array of 0 to 3 integers');
        expect(() => getTribonacci([3, 4, 1, 8], 6)).toThrow('Item must be an array of 0 to 3 integers');
        expect(() => getTribonacci([1, 3, -5], -5)).toThrow('Max item must be a non-negative integer');
        expect(() => getTribonacci(null as unknown as number[], -5)).toThrow('Item must be an array of 0 to 3 integers');
        expect(() => getTribonacci([3, 4, 1,], 6.5)).toThrow('Max item must be a non-negative integer');
    });
});