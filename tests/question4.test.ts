import { describe, it, expect } from 'vitest';
import { convertToRoman, convertToNumber } from '../src/question4';

describe('convertToRoman', () => {
    it('should convert numbers to Roman numerals correctly', () => {
        expect(convertToRoman(1989)).toEqual("MCMLXXXIX");
        expect(convertToRoman(2000)).toEqual("MM");
        expect(convertToRoman(68)).toEqual("LXVIII");
        expect(convertToRoman(109)).toEqual("CIX");
        expect(convertToRoman(1)).toEqual("I");
        expect(convertToRoman(499)).toEqual("CDXCIX");
        expect(convertToRoman(549)).toEqual("DXLIX");
        expect(convertToRoman(999)).toEqual("CMXCIX");
        expect(convertToRoman(141)).toEqual("CXLI");
        expect(convertToRoman(163)).toEqual("CLXIII");
        expect(convertToRoman(1024)).toEqual("MXXIV");
        expect(convertToRoman(3999)).toEqual("MMMCMXCIX");
        expect(convertToRoman(402)).toEqual("CDII");
        expect(convertToRoman(575)).toEqual("DLXXV");
        expect(convertToRoman(911)).toEqual("CMXI");
    });

    it('should return an error message', () => {
        expect(() => convertToRoman(0)).toThrow("Input must be a number between 1 and 3999");
        expect(() => convertToRoman(4000)).toThrow("Input must be a number between 1 and 3999");
        expect(() => convertToRoman(-5)).toThrow("Input must be a number between 1 and 3999");
    });
});

describe('convertToNumber', () => {
    it('should convert Roman numerals to numbers correctly', () => {
        expect(convertToNumber("MCMLXXXIX")).toEqual(1989);
        expect(convertToNumber("MM")).toEqual(2000);
        expect(convertToNumber("LXVIII")).toEqual(68);
        expect(convertToNumber("CIX")).toEqual(109);
        expect(convertToNumber("I")).toEqual(1);
        expect(convertToNumber("CDXCIX")).toEqual(499);
        expect(convertToNumber("DXLIX")).toEqual(549);
        expect(convertToNumber("CMXCIX")).toEqual(999);
        expect(convertToNumber("X")).toEqual(10);
        expect(convertToNumber("CXLI")).toEqual(141);
        expect(convertToNumber("CLXIII")).toEqual(163);
        expect(convertToNumber("MXXIV")).toEqual(1024);
        expect(convertToNumber("MMMCMXCIX")).toEqual(3999);
        expect(convertToNumber("CDII")).toEqual(402);
        expect(convertToNumber("DLXXV")).toEqual(575);
        expect(convertToNumber("CMXI")).toEqual(911);
        expect(convertToNumber("lxviii")).toEqual(68);
        expect(convertToNumber("cMxcIx")).toEqual(999);
        expect(convertToNumber(" MXXIV ")).toEqual(1024);
    });

    it('should return an error message', () => {
        expect(() => convertToNumber("xxxx")).toThrow("Invalid Roman numeral format");
        expect(() => convertToNumber("CXLIIIII")).toThrow("Invalid Roman numeral format");
        expect(() => convertToNumber("cMMMMI")).toThrow("Invalid Roman numeral format");
        expect(() => convertToNumber(" CM xI ")).toThrow("Invalid Roman numeral format");
        expect(() => convertToNumber("hello world")).toThrow("Invalid Roman numeral format");
        expect(() => convertToNumber("")).toThrow("Input must be a valid string");
        expect(() => convertToNumber(null as unknown as string)).toThrow("Input must be a valid string");
        expect(() => convertToNumber(undefined as unknown as string)).toThrow("Input must be a valid string");
        expect(() => convertToNumber("-")).toThrow("Invalid Roman numeral format");
        expect(() => convertToNumber("]")).toThrow("Invalid Roman numeral format");
    });
});