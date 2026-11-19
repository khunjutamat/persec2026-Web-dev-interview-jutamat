import { describe, it, expect } from 'vitest';
import { isMatchBrackets } from '../src/question1';

describe('isMatchBrackets', () => {
    it('should return true when brackets match', () => {
        expect(isMatchBrackets('()')).toBe(true);
        expect(isMatchBrackets('([{}])')).toBe(true);
        expect(isMatchBrackets('()[]{}')).toBe(true);
    });

    it('should return false when brackets do not match', () => {
        expect(isMatchBrackets('()(')).toBe(false);
        expect(isMatchBrackets('([{)')).toBe(false);
        expect(isMatchBrackets('([[{}]]]')).toBe(false);
        expect(isMatchBrackets('(]}])')).toBe(false);
        expect(isMatchBrackets('([)]')).toBe(false);
        expect(isMatchBrackets('([]')).toBe(false);
        expect(isMatchBrackets('}')).toBe(false);
        expect(isMatchBrackets('')).toBe(false);
        expect(isMatchBrackets('abc')).toBe(false);
        expect(isMatchBrackets('-')).toBe(false);
        expect(isMatchBrackets('/')).toBe(false);
    });

});